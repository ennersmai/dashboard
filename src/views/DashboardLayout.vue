<template>
  <div class="dashboard-layout">
    <!-- Topbar -->
    <Topbar />
    
    <!-- Main Content Area -->
    <div class="main-content">
      <!-- Sidebar -->
      <Sidebar />
      
      <!-- Page Content -->
      <main class="content-area">
        <RouterView />
      </main>
    </div>
    
    <!-- Bottom Bar (Optional) -->
    <Bottombar v-if="showBottombar" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import Topbar from '@/components/layout/Topbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Bottombar from '@/components/layout/Bottombar.vue'
import { useSidebar } from '@/composables/useSidebar'

// Configuration for showing/hiding bottombar
const showBottombar = ref(true)

// Use sidebar state for responsive layout
const { isCollapsed } = useSidebar()

// Computed margin for content area
const contentMargin = computed(() => {
  if (window.innerWidth <= 768) return '0'
  return isCollapsed.value ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)'
})
</script>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex: 1;
  margin-top: var(--topbar-height);
}

.content-area {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: var(--spacing-lg);
  background-color: var(--bg-secondary);
  min-height: calc(100vh - var(--topbar-height));
  transition: margin-left var(--transition-normal);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-area {
    margin-left: 0;
    padding: var(--spacing-md);
  }
}
</style>
