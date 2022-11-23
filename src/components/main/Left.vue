<template>
  <div>
    <el-menu
      :unique-opened="true"
      :default-active="$route.path"
      router>
      <!-- 第一层菜单 -->
      <template v-for="(item) in $store.state.menus">
        <div
          v-if="item.path == '/'+$route.path.split('/')[1]"
          :key="item.path">
          <!-- 第二层菜单 -->
          <div
            v-if="item.children && item.children.length > 0">
            <template v-for="(itemChild) in item.children">
              <el-submenu
                v-if="(item.children && item.children.length > 0)&&itemChild.children && itemChild.children.length > 0"
                :key="itemChild.path"
                :index="itemChild.path">
                <template slot="title">
                  {{ itemChild.name }}
                </template>
                <!-- 第三层菜单 -->
                <el-menu-item
                  v-for="(itemChild1 , index2) in itemChild.children"
                  :key="index2"
                  :index="itemChild1.path">
                  <span>{{ itemChild1.name }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-else
                :key="itemChild.path"
                :index="itemChild.path">
                {{ itemChild.name }}
              </el-menu-item>
            </template>
          </div>
          <el-menu-item
            v-else
            :key="item.path"
            :index="item.path">
            {{ item.name }}
          </el-menu-item>
        </div>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Left',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
