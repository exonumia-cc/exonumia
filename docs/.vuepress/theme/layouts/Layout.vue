<template>
  <Layout>
    <template #page-bottom v-if="supporters||translators">
      <div class="center-text" v-if="translators">
        <strong>{{translatorsText}}</strong>
        <br>
        <div v-for="translator in translators" :key="translator.name">
          <a v-if="translator.href" :href=translator.href  target="_blank">{{translator.name}}</a>
          <a v-else-if="translator.email" :href="'mailto:'+translator.email">{{translator.name}}</a>
          <span v-else>{{translator.name}}</span>
        </div>
      </div>
      <br v-if="supporters&&translators">
      <div class="center-text" v-if="supporters">
        <strong>{{supportersText}}</strong>
        <br>
        <div v-for="supporter in supporters" :key="supporter.name">
          <a v-if="supporter.href" :href=supporter.href  target="_blank">{{supporter.name}}</a>
          <a v-else-if="supporter.email" :href="'mailto:'+supporter.email">{{supporter.name}}</a>
          <span v-else>{{supporter.name}}</span>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { usePageData } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'

export default {
  computed: {
    supportersText () {
      return useThemeLocaleData().value.supportersText ?? "Supporters"
    },
    supporters() {
      const frontmatter = usePageData().value.frontmatter
      return frontmatter.supporters
    },
    translatorsText () {
      return useThemeLocaleData().value.translatorsText ?? "Translators"
    },
    translators() {
      const frontmatter = usePageData().value.frontmatter
      return frontmatter.translators
    },
  },
  components: {
    Layout,
  },
}
</script>

<style lang="css">
.center-text {
  text-align: center;
}
</style>