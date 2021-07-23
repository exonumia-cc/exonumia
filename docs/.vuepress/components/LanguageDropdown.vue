<template>

  <!-- user links -->
  <div class="nav-links">
    <div
      class="nav-lang"
      v-for="item in userLinks"
      :key="item.link"
    >
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '@parent-theme/util'

export default {
  name: 'LanguageDropdown',

  components: {
    DropdownLink
  },

  computed: {
    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}

        const langauges = Object.keys(locales)
          .filter(path => path != "/")
          .map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            const group = locale.group

            return { text, link, group }
          })
        let groupedLangauges = {}
        let ungroupedLangauges = []

        langauges.forEach(langauge => {
          if (langauge.group) {            
            if (groupedLangauges[langauge.group] == null) {
              groupedLangauges[langauge.group] = {
                text: langauge.group,
                items: []
              }
            }
            groupedLangauges[langauge.group].items.push(langauge)
          } else {
            ungroupedLangauges.push(langauge)
          }
        })

        const languageDropdown = {
          text: (this.$page.path.includes("/books/") ?  this.$themeLocaleConfig.freelyAvailableTranslationsText : this.$themeLocaleConfig.selectText) || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.values(groupedLangauges).concat(ungroupedLangauges)
        }
        return [languageDropdown]
      }
      return []
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    }
  }
}
</script>

<style lang="stylus">
.nav-dropdown
  top: auto !important
  right auto !important
.nav-links
  display inline-block
  a
    line-height 1.4rem
    color inherit
    &:hover, &.router-link-active
      color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $textColor
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>
