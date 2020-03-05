<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="page-nav">
        <!-- get this from internationalized content -->
        <h3>{{ continueReadingText }}</h3>
        <ContentList />
      </div>
      
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import ContentList from './ContentList.vue'

export default {
  name: 'ContentLayout',

  computed: {
    continueReadingText () {
      return "Continue Reading"
    }
  },

  components: {
    ParentLayout,
    ContentList
  }
}
</script>
