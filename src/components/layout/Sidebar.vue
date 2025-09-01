<template>
  <aside 
    class="sidebar" 
    :class="[sidebarClasses, { 'sidebar--hover-expanded': isCollapsed && showFlyout }]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="sidebar-content">
      <!-- Sidebar Header -->
      <div class="sidebar-header">
        <div class="sidebar-brand">
          <div v-if="!isCollapsed || showFlyout" class="brand-expanded">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="brand-icon">
              <path d="M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17L12,12L2,17Z"/>
            </svg>
            <span class="brand-text">Dashboard</span>
          </div>
          <div v-else class="brand-collapsed">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="brand-icon">
              <path d="M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17L12,12L2,17Z"/>
            </svg>
          </div>
        </div>
        <button class="sidebar-toggle" @click="toggleSidebar">
          <!-- Hamburger menu when expanded -->
          <svg v-if="!isCollapsed" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="toggle-icon">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
          <!-- Three dots when collapsed -->
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="toggle-icon">
            <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
          </svg>
        </button>
      </div>
      
      <!-- Navigation Menu -->
      <nav class="sidebar-nav">
        <SidebarItem
          v-for="item in menuItems"
          :key="item.id"
          :item="item"
          :collapsed="isCollapsed && !showFlyout"
          :style-mode="sidebarStyle"
        />
      </nav>
    </div>
    

  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { menuData } from '@/data/menuData'
import { useSidebar } from '@/composables/useSidebar'

// Use sidebar composable
const {
  isCollapsed,
  sidebarStyle,
  showFlyout,
  sidebarClasses,
  toggleSidebar,
  setSidebarStyle,
  showSidebarFlyout,
  hideSidebarFlyout,
  handleResize
} = useSidebar()

// Menu items from data
const menuItems = ref(menuData)

// Handle mouse events for flyout
const handleMouseEnter = () => {
  showSidebarFlyout()
}

const handleMouseLeave = () => {
  hideSidebarFlyout()
}

// Style switching is now handled by the style switcher buttons

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background-color: var(--sidebar-bg);
  border-right: 1px solid var(--sidebar-border);
  transition: width var(--transition-normal);
  z-index: 1100;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.sidebar--collapsed {
  width: var(--sidebar-collapsed-width);
}

.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, var(--primary-color), #6366f1, #8b5cf6);
  border-bottom: 1px solid var(--sidebar-border);
  margin-top: 0;
}

.sidebar-brand {
  padding: var(--spacing-xs);
  flex: 1;
}

.brand-expanded {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.brand-collapsed {
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-icon {
  color: white;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.brand-text {
  color: white;
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.sidebar-toggle {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-fast);
}

.sidebar-toggle:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.15);
}

.toggle-icon {
  transition: all var(--transition-fast);
}

.sidebar-nav {
  flex: 1;
  padding: var(--spacing-md) 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: var(--sidebar-border);
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: var(--sidebar-text);
}

/* Style 2 specific navigation padding */
.sidebar--style2 .sidebar-nav {
  padding: var(--spacing-md) var(--spacing-sm);
}

/* Hover Expansion - Expand collapsed sidebar horizontally to show text */
.sidebar--hover-expanded {
  width: var(--sidebar-width) !important; /* Expand to full sidebar width */
  transition: width 0.2s ease-out;
  z-index: 1000; /* Ensure it appears above content */
}

/* When hover-expanded, override collapsed state to show text */
.sidebar--collapsed.sidebar--hover-expanded .menu-text,
.sidebar--collapsed.sidebar--hover-expanded .menu-badge,
.sidebar--collapsed.sidebar--hover-expanded .menu-arrow {
  display: block !important;
}

.sidebar--collapsed.sidebar--hover-expanded .section-header {
  display: block !important;
}

/* Hide section headers when collapsed and not hovered */
.sidebar--collapsed:not(.sidebar--hover-expanded) .section-header {
  display: none !important;
}

.sidebar--collapsed.sidebar--hover-expanded .menu-link,
.sidebar--collapsed.sidebar--hover-expanded .menu-button {
  justify-content: flex-start !important;
  padding: var(--spacing-sm) var(--spacing-lg) !important;
}

.sidebar--collapsed.sidebar--hover-expanded .menu-icon {
  margin-right: var(--spacing-md) !important;
}

/* Show sidebar brand when hover-expanded */
.sidebar--collapsed.sidebar--hover-expanded .sidebar-brand {
  display: block !important;
}

@keyframes slideInRight {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Style 2 - Button style (keeps dark background, button-like menu items) */
.sidebar--style2 {
  background-color: var(--sidebar-bg);
  border-right-color: var(--sidebar-border);
}

.sidebar--style2 .sidebar-header {
  border-bottom-color: var(--sidebar-border);
}

.sidebar--style2 .sidebar-brand h3 {
  color: var(--sidebar-text-hover);
}

.sidebar--style2 .sidebar-toggle {
  color: var(--sidebar-text);
}

.sidebar--style2 .sidebar-toggle:hover {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }
  
  .sidebar:not(.sidebar--collapsed) {
    transform: translateX(0);
  }
  
  .sidebar-flyout {
    display: none;
  }
}

/* Hide scrollbar for collapsed sidebar */
.sidebar--collapsed .sidebar-nav {
  overflow-x: visible;
}

/* Collapsed state: Remove borders and center icons */
.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-link,
.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-button {
  justify-content: center !important;
  padding: var(--spacing-md) !important;
  border: none !important;
  background-color: transparent !important;
  margin: 0 !important;
}

.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-icon {
  margin-right: 0 !important;
}
</style>
