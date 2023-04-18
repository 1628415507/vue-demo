<!--
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-23 14:17:49
 * @LastEditors: Hongzf
 * @LastEditTime: 2023-02-09 09:41:27
-->
<template>
  <div class="map-wrap">
    <div class="map">
      <div
        id="sector"
        ref="chart"
        style="width:800px;height:800px" />
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import chinaJson from './china.json' //中国地图数据
import { flyVal, flyGeo } from './config-data.js'
export default {
  data() {
    // 所需数据要包含：起点、终点的名称和经纬度、终点的值
    return {
      flyVal,
      flyGeo
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    //组装路径飞线数据，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
    convertFlyData(arr) {
      let res = []
      const cityGeo = this.flyGeo // 所需城市的经纬度
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const fromName = item[1].name //起点名称
        const toName = item[0].name //终点名称
        const fromCoord = cityGeo[fromName] //起点的经纬度
        const toCoord = cityGeo[toName] //终点的经纬度
        if (fromCoord && toCoord) {
          res.push({
            fromName, // 起点名称
            toName, // 终点名称
            coords: [fromCoord, toCoord] // 起点、终点的经纬度
          })
        }
      }
      return res
    },
    // 组装散点、涟漪特效数据，
    // 转换后格式：[{ name:城市名称,value:  [城市经度，城市纬度，城市值]},{},..]
    convertScatterData(arr) {
      let res = []
      const cityGeo = this.flyGeo // 所需城市的经纬度
      arr.map(item => {
        const city = item[1]
        res.push({
          name: city.name, // 城市名称
          value: cityGeo[city.name].concat([city.value]) // [城市经度，城市纬度，城市值]
        })
      })
      return res
    },
    initCharts() {
      echarts.registerMap('china', { geoJSON: chinaJson }) // 使用 registerMap 注册的地图名称。加载中国地图数据
      let myChart = echarts.init(document.getElementById('sector'))
      //城市经纬度
      const originName = '洛阳'
      //报表配置
      const flySeries = []
      const flyData = [
        {
          name: originName,
          flyVal: this.flyVal
        }
        // {
        //   name: '乌鲁木齐',
        //   flyVal: this.flyVal
        // }
      ]
      // 飞线数据
      flyData.forEach((item, i) => {
        // console.log('【 item 】-58', item)
        flySeries.push(
          // 路径图（所需数据:起点终点的名称和经纬度）https://echarts.apache.org/zh/option.html#series-lines.type
          {
            name: item.name,
            type: 'lines', //路径图：用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化。
            data: this.convertFlyData(item.flyVal),
            zlevel: 3,
            symbol: ['none', 'none'], //起点和终点的图标
            symbolSize: 0,
            //特效线配置
            effect: {
              show: true,
              period: 5, //特效动画时间，单位s
              trailLength: 0.1, //特效尾迹的长度，从0到1,，数值越大尾迹越长
              symbol: 'arrow', //尾迹图标:箭头
              symbolSize: 5,
              color: 'blue' //特效标记的颜色，默认取 lineStyle.color。
            },
            // 显示标签
            label: {
              show: true,
              position: 'middle',
              color: '#cc5d5c',
              fontSize: 7,
              // formatter: '{b}'
              formatter: function(params) {
                // console.log('【 params 】-144', params)
                const fromName = params.data.fromName
                const toName = params.data.toName
                if (fromName === toName) {
                  return ''
                } else {
                  return `${fromName}->${toName}`
                }
              }
            },
            lineStyle: {
              color: '#cc5d5c', //飞线颜色
              width: 1,
              opacity: 0.6,
              curveness: 0.2 //线的弯曲度
            }
          },
          // 散点效果:https://echarts.apache.org/zh/option.html#series-scatter.type
          {
            name: item.name,
            type: 'scatter',
            // 数据格式同涟漪特效的数据格式
            data: this.convertScatterData(item.flyVal),
            coordinateSystem: 'geo', //该系列使用的坐标系:使用地理坐标系
            zlevel: 3,
            symbol: 'circle', //标记的图形
            symbolSize: function(val) {
              //标记的大小
              return val[2] / 15 //根据某项数据值设置符号大小
            },
            label: {
              show: true,
              position: 'right',
              color: 'black',
              fontSize: 9,
              formatter: function(params) {
                // console.log('【 params 】-144', params)
                return params.value[2] //Math.trunc(params.data.value[2]) //去除数字的小数部分,保留整数部分
              }
            },
            itemStyle: {
              color: 'black' //圆点颜色
            }
          },
          // 带有涟漪特效动画的散点（气泡）图：https://echarts.apache.org/zh/option.html#series-effectScatter.type
          {
            //与上层的点叠加
            name: item.name,
            type: 'effectScatter', //特效散点
            // 数据格式：[{ name:城市名称,value:  [城市经度，城市纬度，城市值]},{},..]
            data: this.convertScatterData(item.flyVal),
            coordinateSystem: 'geo',
            zlevel: 2,
            // 涟漪特效相关配置
            rippleEffect: {
              period: 5, //动画的周期，秒数
              scale: 3, //波纹的最大缩放比例
              brushType: 'stroke' //波纹的绘制方式：stroke | fill
            },
            label: {
              show: false
              // position: 'right',
              // formatter: '{b}'
            },
            symbol: 'circle',
            symbolSize: function(val) {
              //根据某项数据值设置符号大小
              return val[2] / 10
            },
            itemStyle: {
              color: '#333'
            }
          }
        )
      })

      //图表配置项
      const flyMapOpt = {
        // 图表标题
        title: {
          show: true,
          text: '地图3D',
          x: 'center',
          textStyle: {
            color: '#333'
          }
        },
        // 悬浮提示
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            // console.log('【 params 】-171', params)
            if (params.value) {
              return params.name + ' : ' + params.value[2]
            } else {
              return params.name
            }
          }
        },
        // 地图配置
        geo: {
          map: 'china',
          roam: false, //开启鼠标缩放和漫游
          zoom: 1, //地图缩放级别
          selectedMode: false, //选中模式：single | multiple
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          layoutCenter: ['50%', '50%'], //设置后left/right/top/bottom等属性无效
          layoutSize: '100%', //保持地图宽高比
          label: {},
          itemStyle: {
            // areaColor: 'rgba(35, 81, 147, 0.6)', //地图区域颜色
            // borderWidth: 1.1,
            // borderColor: '#fff' ,//地图区域分解线的颜色
            // // 阴影
            // // shadowColor: 'red',
            // shadowOffsetY: 0,
            // shadowBlur: 10,
            normal: {
              borderColor: 'rgba(192,245,249,.8)',
              borderWidth: 2,
              // shadowColor: '#2C99F6',
              shadowColor: 'rgba(35, 81, 147, 0.6)',
              shadowOffsetY:20,//阴影下移范围
              shadowBlur: 5,
              areaColor: 'rgba(35, 81, 147, 0.6)',
            },

          },
          // 高亮状态下的多边形和标签样式。
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: 'rgba(43, 96, 163,0.3)' //地图区域高亮颜色
            }
          }
        },
        // series: flySeries
      }
      // 绘制图表
      myChart.setOption(flyMapOpt)
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      // window.addEventListener('resize', function() {
      //   myChart.resize()
      // })
    }
  }
}
</script>
<style >
.map-wrap{
  /* background: rgb(24, 38, 61); */
  background: url("./bg.svg");
  perspective: 100px;

}
 .map{
    /* transform: skew(10deg, 10deg); */
    /* transform:rotateX(3deg); */
  }
</style>
