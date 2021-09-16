<template>
    <div class="content-links">
        <SidebarChild
            v-for="item in sidebarItems"
            :key="item.link || item.text"
            :item="item"
            />
    </div>
</template>

<script setup lang="ts">
import { useSidebarItems } from '@vuepress/theme-default/lib/client/composables'
import { SidebarChild } from '@vuepress/theme-default/lib/client/components/SidebarChild'
const sidebarItems = useSidebarItems().value.filter(sidebarItem => sidebarItem.link?.includes("/translations/") == true)
</script>

<style lang="sass">
.content-links ul {
  list-style: none
}
</style>