<template>
  <Layout>
    <template #page-bottom v-if="supporters">
      <div class="center-text">
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

const frontmatter = usePageData().value.frontmatter

export default {
  computed: {
    supportersText () {
      return "Supporters"
    },
    supporters() {
      return frontmatter.supporters
    }
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