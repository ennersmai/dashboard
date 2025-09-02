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
          <!-- Dynamic hamburger menu with animated bars -->
          <div class="hamburger-icon" :class="{ 'hamburger-icon--collapsed': isCollapsed }">
            <span class="hamburger-bar hamburger-bar--top"></span>
            <span class="hamburger-bar hamburger-bar--middle"></span>
            <span class="hamburger-bar hamburger-bar--bottom"></span>
          </div>
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

/* Hamburger Icon Styles */
.hamburger-icon {
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-left: 6px; /* Move sandwich 6px to the right */
}

.hamburger-bar {
  height: 2px;
  background-color: currentColor;
  border-radius: 1px;
  transition: all 0.2s ease-in-out;
  transform-origin: center;
}

/* When expanded - equal lengths */
.hamburger-bar--top,
.hamburger-bar--middle,
.hamburger-bar--bottom {
  width: 100%; /* All bars same length when expanded */
}

/* When collapsed - different lengths */
.hamburger-icon--collapsed .hamburger-bar--top {
  width: 70%; /* Shorter top bar */
}

.hamburger-icon--collapsed .hamburger-bar--middle {
  width: 100%; /* Full length middle bar */
}

.hamburger-icon--collapsed .hamburger-bar--bottom {
  width: 85%; /* Medium length bottom bar */
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

.sidebar--collapsed.sidebar--hover-expanded :deep(.section-header) {
  display: block !important;
}

/* Hide text, badges, arrows when collapsed and not hovered */
.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-text,
.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-badge,
.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-arrow {
  display: none !important;
}

.sidebar--collapsed:not(.sidebar--hover-expanded) .submenu {
  display: none !important;
}

/* Show section headers when collapsed with smaller text */
.sidebar--collapsed:not(.sidebar--hover-expanded) :deep(.section-header) {
  display: block !important;
  padding: var(--spacing-xs) var(--spacing-sm) !important;
}

.sidebar--collapsed:not(.sidebar--hover-expanded) :deep(.section-title) {
  font-size: calc(var(--font-size-xs) * 0.6) !important;
  letter-spacing: 0.01em !important;
  text-align: center !important;
  transform: translateX(0) !important;
  transition: all 0.2s ease-in-out !important;
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
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

/* Make section titles bigger and transition left in icon menu hover state */
.sidebar--collapsed.sidebar--hover-expanded :deep(.section-title) {
  font-size: var(--font-size-xs) !important;
  letter-spacing: 0.03em !important;
  max-width: 120px;
  transform: translateX(-8px) !important;
  transition: all 0.2s ease-in-out !important;
}

/* Also ensure section headers are positioned correctly */
.sidebar--collapsed.sidebar--hover-expanded :deep(.section-header) {
  padding: var(--spacing-sm) var(--spacing-md) var(--spacing-xs) !important;
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
  padding: var(--spacing-sm) var(--spacing-sm) !important;
  border: none !important;
  background-color: transparent !important;
  margin: 2px var(--spacing-xs) !important;
  display: flex !important;
  align-items: center !important;
  min-height: 44px !important;
}

.sidebar--collapsed:not(.sidebar--hover-expanded) .menu-icon {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>
