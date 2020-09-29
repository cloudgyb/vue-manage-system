<template>
  <header>
    <div>
      <el-button @click="collapseMenu" type="primary" size="mini" class="el-icon-menu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><span @click="clickBreadcrumb('/')">首页</span></el-breadcrumb-item>
        <el-breadcrumb-item v-if="currentMenuItem">
          <span @click="clickBreadcrumb(currentMenuItem.path)">{{ currentMenuItem.label }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">消息</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">个人设置</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">意见反馈</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  methods: {
    collapseMenu() {
      this.$store.commit('switchCollapseState')
    },
    clickBreadcrumb(p) {
      if (this.$route.path !== p) {
        this.$router.push({ path: p })
      }
    }
  },
  computed: {
    ...mapState({
      currentMenuItem: state => state.tab.currentMenu
    })
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
}
.el-breadcrumb {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
</style>
<style>
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
  cursor: pointer;
}
.el-breadcrumb__item:hover .el-breadcrumb__inner {
  color: #fff;
  cursor: pointer;
}
.el-breadcrumb__inner {
  cursor: pointer !important;
}
</style>
