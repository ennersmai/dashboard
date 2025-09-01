<template>
  <div class="sidebar-style-switcher">
    <div class="switcher-label">Sidebar Style:</div>
    <div class="style-options">
      <button
        class="style-btn"
        :class="{ 'style-btn--active': sidebarStyle === 'default' }"
        @click="setSidebarStyle('default')"
        title="Default Style"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
        </svg>
        Default
      </button>
      
      <button
        class="style-btn"
        :class="{ 'style-btn--active': sidebarStyle === 'style2' }"
        @click="setSidebarStyle('style2')"
        title="Button Style"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
        </svg>
        Buttons
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'

const { sidebarStyle, setSidebarStyle } = useSidebar()
</script>

<style scoped>
.sidebar-style-switcher {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.switcher-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.style-options {
  display: flex;
  gap: var(--spacing-xs);
  background-color: var(--bg-secondary);
  padding: var(--spacing-xs);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-light);
}

.style-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border: none;
  background: none;
  color: var(--text-secondary);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.style-btn:hover {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

.style-btn--active {
  color: var(--primary-color);
  background-color: var(--bg-primary);
  box-shadow: var(--shadow-sm);
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar-style-switcher {
    display: none;
  }
}
</style>
