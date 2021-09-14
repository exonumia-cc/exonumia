<template>
    <ul class="sidebar-links">
        <SidebarChild
            v-for="item in sidebarItems"
            :key="item.link || item.text"
            :item="item"
            />
    </ul>
</template>

<script setup lang="ts">
import { useSidebarItems } from '@vuepress/theme-default/lib/client/composables'
import { SidebarChild } from '@vuepress/theme-default/lib/client/components/SidebarChild'
const sidebarItems = useSidebarItems().value.filter(sidebarItem => sidebarItem.link?.includes("/books/") == true)
</script>