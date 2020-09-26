export default {
  state: {
    menus: [],
    currentMenu: null,
    tabList: [{ path: '/', label: '首页', icon: 'el-icon-s-home' }]
  },
  mutations: {
    selectMenu(state, item) {
      // state.currentMenu = item.path === '/' ? null : item
      if (item.path === '/') {
        state.currentMenu = null
      } else {
        let itemIndex = state.tabList.findIndex(e => {
          return e.path === item.path
        })
        if (itemIndex === -1) {
          state.tabList.push(item)
        }
        state.currentMenu = item
      }
    },
    closeTab(state, tab) {
      let itemIndex = state.tabList.findIndex(e => {
        return e.path === tab.path
      })
      if (itemIndex !== -1) {
        state.tabList.splice(itemIndex, 1)
      }
    }
  },
  actions: {}
}
