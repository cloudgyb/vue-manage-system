<template>
  <el-menu :router="true" :collapse="iscollapse" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item v-for="item in noSubMenu" :index="item.path" :key="item.path" @click="selectMenu(item)">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :show-timeout="300" v-for="(item, index) in hasSubMenu" :index="index + ''" :key="index">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item @click="selectMenu(subItem)" v-for="(subItem, subIndex) in item.subMenu" :index="subItem.path" :key="index + '-' + subIndex">
        {{ subItem.label }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonAside',
  data() {
    return {
      menuData: [
        {
          path: '/',
          label: '首页',
          icon: 'el-icon-s-home'
        },
        {
          path: '/video',
          label: '视频管理',
          icon: 'el-icon-video-camera-solid'
        },
        {
          path: '/user',
          label: '用户管理',
          icon: 'el-icon-user-solid',
          subMenu: [
            {
              path: '/user/manage',
              label: '用户管理'
            },
            {
              path: '/user/statistic',
              label: '用户统计'
            }
          ]
        },
        {
          path: '/setting',
          label: '设置',
          icon: 'el-icon-setting'
        }
      ]
    }
  },
  props: {},
  methods: {
    selectMenu(item) {
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    ...mapState({
      iscollapse: state => state.menuCollapseState.isCollapse
    }),
    hasSubMenu() {
      return this.menuData.filter(item => {
        return item.subMenu !== undefined
      })
    },
    noSubMenu() {
      return this.menuData.filter(item => {
        return item.subMenu === undefined
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border-right: 0;
  i {
    color: #fff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
