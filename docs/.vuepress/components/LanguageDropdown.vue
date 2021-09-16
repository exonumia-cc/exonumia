<template>
  <!-- user links -->
  <div class="nav-links">
    <div
      class="navbar-links-item lang-item"
      v-for="item in navbarLinks"
      :key="item.text"
    >
      <DropdownLink v-if="item.children" :item="item" />
    </div>
  </div>
  <!-- <nav v-if="navbarLinks.length" class="navbar-links">
    <div v-for="item in navbarLinks" :key="item.text" class="navbar-links-item">
      <DropdownLink v-if="item.children" :item="item" />

      <NavLink v-else :item="item" />
    </div>
  </nav> -->
</template>

<style lang="sass">
  .lang-item .dropdown-wrapper .nav-dropdown {
    list-style: none;
    top: auto;
    right: auto;
  }
</style>

<script setup lang="ts">
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client'
import { isString } from '@vuepress/shared'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useRouter } from 'vue-router'
import type { NavbarItem, NavbarGroup, ResolvedNavbarItem } from '@vuepress/theme-default/lib/shared'
import { useNavLink, useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
import DropdownLink from '@vuepress/theme-default/lib/client/components/DropdownLink.vue'


/**
 * Get navbar config of select language dropdown
 */
const useNavbarSelectLanguage = (): ComputedRef<ResolvedNavbarItem[]> => {
  const router = useRouter()
  const routeLocale = useRouteLocale()
  const siteLocale = useSiteLocaleData()
  const themeLocale = useThemeLocaleData()

  return computed<ResolvedNavbarItem[]>(() => {
    const localePaths = Object.keys(siteLocale.value.locales)
    // do not display language selection dropdown if there is only one language
    if (localePaths.length < 2) {
      return []
    }
    const currentPath = router.currentRoute.value.path
    const currentFullPath = router.currentRoute.value.fullPath

    const languageDropdown: ResolvedNavbarItem = {
      text: themeLocale.value.selectLanguageText ?? 'unkown language',
      ariaLabel: themeLocale.value.selectLanguageAriaLabel ?? 'unkown language',
      children: localePaths.map((targetLocalePath) => {
        // target locale config of this langauge link
        const targetSiteLocale =
          siteLocale.value.locales?.[targetLocalePath] ?? {}
        const targetThemeLocale =
          themeLocale.value.locales?.[targetLocalePath] ?? {}
        const targetLang = `${targetSiteLocale.lang}`

        const text = targetThemeLocale.selectLanguageName ?? targetLang
        let link

        if (targetLang === siteLocale.value.lang) {
          // if the target language is current language
          // stay at current link
          link = currentFullPath
        } else {
          // if the target language is not current language
          // try to link to the corresponding page of current page
          // or fallback to homepage
          const targetLocalePage = currentPath.replace(
            routeLocale.value,
            targetLocalePath
          )
          if (
            router.getRoutes().some((item) => item.path === targetLocalePage)
          ) {
            link = targetLocalePage
          } else {
            link = targetThemeLocale.home ?? targetLocalePath
          }
        }

        return {
          text,
          link,
        }
      }),
    }

    return [languageDropdown]
  })
}

const resolveNavbarItem = (
  item: NavbarItem | NavbarGroup | string
): ResolvedNavbarItem => {
  if (isString(item)) {
    return useNavLink(item)
  }
  if ((item as NavbarGroup).children) {
    return {
      ...item,
      children: (item as NavbarGroup).children.map(resolveNavbarItem),
    }
  }
  return item as ResolvedNavbarItem
}

const navbarSelectLanguage = useNavbarSelectLanguage()
const navbarLinks = computed(() => [
  ...navbarSelectLanguage.value,
])
</script>
