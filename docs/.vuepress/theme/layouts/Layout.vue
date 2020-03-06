<template>
  <ParentLayout>
    <template 
      v-if="continueReading"
      #page-bottom>
      <div class="page-nav">
        <!-- get this from internationalized content -->
        <h3>{{ continueReadingText }}</h3>
        <ContentList  />
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ContentList from '@theme/components/ContentList.vue'
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'ContentLayout',

  computed: {
    continueReadingText () {
      return (
        this.$themeLocaleConfig.continueReadingText
        || this.$site.themeConfig.continueReadingText
        || `Continue Reading`
      )
    },

    continueReading () {
      return (
        this.$themeLocaleConfig.continueReading
        || this.$site.themeConfig.continueReading
        || false
      )
    }
  },

  components: {
    ParentLayout,
    ContentList
  }
}
</script>
