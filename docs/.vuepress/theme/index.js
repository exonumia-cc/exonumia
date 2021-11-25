const { path } = require('@vuepress/utils')

module.exports = {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    RTLLayout: path.resolve(__dirname, 'layouts/RTLLayout.vue'),
  },
}