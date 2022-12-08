<!--
 * @Description:
 * @Author: Hongzf
 * @Date: 2022-11-23 14:17:49
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-12-07 16:02:46
-->
<template>
  <div>
    <div
      id="sector"
      ref="chart"
      style="width:500px;height:500px" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
import chinaJson from './china.json' //中国地图数据
import { flyVal, flyGeo } from './config-data.js'
export default {
  data() {
    return {
      flyVal,
      flyGeo
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    //数据转换，转换后格式：[{fromName:'cityName', toName:'cityName', coords:[[lng, lat], [lng, lat]]}, {...}]
    convertFlyData(data) {
      let res = []
      const flyGeo = this.flyGeo
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i]
        let toCoord = flyGeo[dataItem[0].name]
        let fromCoord = flyGeo[dataItem[1].name]
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[1].name,
            toName: dataItem[0].name,
            coords: [fromCoord, toCoord]
          })
        }
      }
      return res
    },
    initCharts() {
      echarts.registerMap('china', { geoJSON: chinaJson })// 加载中国地图数据
      const flyGeo = this.flyGeo
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
      ]
      flyData.forEach((item, i) => {
        // console.log('【 item 】-58', item)
        flySeries.push(
          {
            name: item.name,
            type: 'lines',
            zlevel: 1,
            symbol: ['none', 'none'],
            symbolSize: 0,
            effect: {
              //特效线配置
              show: true,
              period: 5, //特效动画时间，单位s
              trailLength: 0.1, //特效尾迹的长度，从0到1
              symbol: 'arrow',
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                color: '#f19000',
                width: 1,
                opacity: 0.6,
                curveness: 0.2 //线的平滑度
              }
            },
            data: item.flyVal ? this.convertFlyData(item.flyVal) : []
          },
          {
            name: item.name,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 5, //特效动画时长
              scale: 4, //波纹的最大缩放比例
              brushType: 'stroke' //波纹的绘制方式：stroke | fill
            },
            label: {
              normal: {
                show: false,
                position: 'right',
                formatter: '{b}'
              }
            },
            symbol: 'circle',
            symbolSize: function(val) {
              //根据某项数据值设置符号大小
              return val[2] / 10
            },
            itemStyle: {
              normal: {
                color: '#f19000'
              }
            },
            data: item.flyVal
              ? item.flyVal.map(dataItem => {
                return {
                  name: dataItem[1].name,
                  value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
                }
              })
              : []
          },
          {
            //与上层的点叠加
            name: item.name,
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: function(val) {
              //根据某项数据值设置符号大小
              return val[2] / 15
            },
            itemStyle: {
              normal: {
                color: '#f00'
              }
            },
            data: item.flyVal.map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: flyGeo[dataItem[1].name].concat([dataItem[1].value])
              }
            })
          }
        )
      })

      //报表配置项
      const flyMapOpt = {
        title: {
          show: false,
          text: '地图飞线',
          x: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            if (params.value) {
              return params.name + ' : ' + params.value[2]
            } else {
              return params.name
            }
          }
        },
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
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#101f32',
              borderWidth: 1.1,
              borderColor: '#43d0d6'
            },
            emphasis: {
              areaColor: '#069'
            }
          }
        },
        series: flySeries
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
