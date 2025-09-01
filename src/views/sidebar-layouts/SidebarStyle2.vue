<template>
  <!-- This component just triggers the style change and redirects -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSidebar } from '@/composables/useSidebar'

const router = useRouter()
const { setSidebarStyle, toggleSidebar, isCollapsed } = useSidebar()

onMounted(() => {
  // Set to style 2
  setSidebarStyle('style2')
  
  // Expand the sidebar if it's currently collapsed (from icon menu)
  if (isCollapsed.value) {
    toggleSidebar()
  }
  
  // Redirect to avatars component (or any default base component)
  router.push('/components/avatars')
})
</script>
