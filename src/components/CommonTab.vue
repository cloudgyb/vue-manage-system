<template>
  <div>
    <el-tag v-for="tag in tags" size="mini" :key="tag.path" :closable="tag.path !== '/'" @click="handleClick(tag)" @close="handleClose(tag)">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTab',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations({
      closeTab: 'closeTab'
    }),
    handleClose(tag) {
      this.closeTab(tag)
      let nextRoute = this.tags[this.tags.length - 1]
      if (this.$route.path !== nextRoute.path) {
        this.$router.push({ path: nextRoute.path })
      }
    },
    handleClick(tag) {
      if (this.$route.path !== tag.path) {
        this.$router.push({ path: tag.path })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag {
  margin-right: 10px;
  cursor: pointer;
}
</style>
