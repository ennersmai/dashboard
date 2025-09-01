<template>
  <div class="sidebar-item">
    <!-- Section Header -->
    <div v-if="item.isSection" class="section-header">
      <span class="section-title">{{ item.title }}</span>
    </div>
    
    <!-- Menu Item -->
    <div 
      v-else
      class="menu-item"
      :class="menuItemClasses"
      @click="handleClick"
    >
      <RouterLink
        v-if="!item.children && item.path"
        :to="item.path"
        class="menu-link"
        :class="{ 'menu-link--active': isActive }"
      >
        <span class="menu-icon" v-html="item.icon"></span>
        <span v-if="!collapsed" class="menu-text">{{ item.title }}</span>
        <span v-if="item.badge && !collapsed" class="menu-badge">{{ item.badge }}</span>
      </RouterLink>
      
      <button
        v-else
        class="menu-button"
        :class="{ 'menu-button--expanded': isExpanded }"
      >
        <span class="menu-icon" v-html="item.icon"></span>
        <span v-if="!collapsed" class="menu-text">{{ item.title }}</span>
        <span v-if="item.badge && !collapsed" class="menu-badge">{{ item.badge }}</span>
        <svg 
          v-if="!collapsed"
          class="menu-arrow"
          :class="{ 'menu-arrow--rotated': isExpanded }"
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
        </svg>
      </button>
    </div>
    
    <!-- Submenu -->
    <div 
      v-if="item.children && !collapsed"
      class="submenu"
      :class="{ 'submenu--expanded': isExpanded }"
    >
      <SidebarItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :collapsed="false"
        :style-mode="styleMode"
        :level="(level ?? 0) + 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem } from '@/types/menu'

interface Props {
  item: MenuItem
  collapsed: boolean
  styleMode: 'style1' | 'style2'
  level?: number
}

const props = withDefaults(defineProps<Props>(), {
  level: 0
})

const route = useRoute()
const isExpanded = ref(false)

// Check if current menu item is active
const isActive = computed(() => {
  if (!props.item.path) return false
  return route.path === props.item.path
})

// Check if any child is active
const hasActiveChild = computed(() => {
  if (!props.item.children) return false
  return props.item.children.some(child => 
    checkActiveRecursive(child, route.path)
  )
})

const checkActiveRecursive = (item: MenuItem, currentPath: string): boolean => {
  if (item.path === currentPath) return true
  if (item.children) {
    return item.children.some(child => checkActiveRecursive(child, currentPath))
  }
  return false
}

// Computed classes for menu item
const menuItemClasses = computed(() => ({
  'menu-item--active': isActive.value,
  'menu-item--has-active-child': hasActiveChild.value,
  'menu-item--style1': props.styleMode === 'style1',
  'menu-item--style2': props.styleMode === 'style2',
  [`menu-item--level-${props.level ?? 0}`]: (props.level ?? 0) > 0
}))

// Handle click
const handleClick = () => {
  if (props.item.children) {
    isExpanded.value = !isExpanded.value
  }
}

// Auto-expand if has active child
if (hasActiveChild.value) {
  isExpanded.value = true
}
</script>

<style scoped>
.sidebar-item {
  margin-bottom: 2px;
}

/* Section Headers */
.section-header {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.section-header:first-child {
  margin-top: 0;
}

.section-title {
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: var(--sidebar-text);
  opacity: 0.7;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.2s ease-in-out;
  transform: translateX(0);
}

.menu-item {
  position: relative;
}

.menu-link,
.menu-button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-lg);
  color: var(--sidebar-text);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  min-height: 44px;
}

.menu-link:hover,
.menu-button:hover {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.05);
}

.menu-link--active {
  color: var(--sidebar-active-text);
  background-color: var(--sidebar-active-bg);
  position: relative;
}

.menu-link--active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--primary-color);
  border-radius: 0 2px 2px 0;
}

.menu-item--has-active-child > .menu-button {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.05);
  position: relative;
}

.menu-item--has-active-child > .menu-button::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: rgba(59, 130, 246, 0.6);
  border-radius: 0 2px 2px 0;
}

.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: var(--spacing-md);
  flex-shrink: 0;
}

.menu-text {
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow flex item to shrink */
  max-width: 160px; /* Set explicit max-width for ellipsis */
}

.menu-badge {
  background-color: var(--error-color);
  color: white;
  font-size: var(--font-size-xs);
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: var(--spacing-sm);
  min-width: 18px;
  text-align: center;
}

.menu-arrow {
  margin-left: var(--spacing-sm);
  transition: transform var(--transition-fast);
  flex-shrink: 0;
}

.menu-arrow--rotated {
  transform: rotate(180deg);
}

/* Submenu */
.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.1);
}

.submenu--expanded {
  max-height: 500px; /* Adjust based on max possible submenu height */
}

/* Level indentation */
.menu-item--level-1 .menu-link,
.menu-item--level-1 .menu-button {
  padding-left: calc(var(--spacing-lg) + 20px + var(--spacing-md));
}

.menu-item--level-2 .menu-link,
.menu-item--level-2 .menu-button {
  padding-left: calc(var(--spacing-lg) + 40px + var(--spacing-md));
}

.menu-item--level-3 .menu-link,
.menu-item--level-3 .menu-button {
  padding-left: calc(var(--spacing-lg) + 60px + var(--spacing-md));
}

.menu-item--level-4 .menu-link,
.menu-item--level-4 .menu-button {
  padding-left: calc(var(--spacing-lg) + 80px + var(--spacing-md));
}

/* Style 2 - Button style (dark theme with button appearance) */
.menu-item--style2 .menu-link,
.menu-item--style2 .menu-button {
  margin: 0 0 var(--spacing-xs) 0;
  border-radius: var(--border-radius);
  color: var(--sidebar-text);
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-fast);
}

.menu-item--style2 .menu-link:hover,
.menu-item--style2 .menu-button:hover {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-item--style2 .menu-link--active {
  color: var(--sidebar-active-text);
  background-color: var(--sidebar-active-bg);
  border-color: var(--primary-color);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  position: relative;
}

.menu-item--style2 .menu-link--active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: var(--primary-color);
  border-radius: 0 2px 2px 0;
}

.menu-item--style2 .menu-item--has-active-child > .menu-button {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  position: relative;
}

.menu-item--style2 .menu-item--has-active-child > .menu-button::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: rgba(59, 130, 246, 0.6);
  border-radius: 0 2px 2px 0;
}

/* Style 2 submenu styling */
.menu-item--style2 .submenu {
  background-color: rgba(0, 0, 0, 0.2);
  margin: var(--spacing-xs) 0 0 0;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-xs);
}

.menu-item--style2 .menu-item--level-1 .menu-link,
.menu-item--style2 .menu-item--level-1 .menu-button {
  margin: 0 0 var(--spacing-xs) 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.menu-item--style2 .menu-item--level-1 .menu-link:hover,
.menu-item--style2 .menu-item--level-1 .menu-button:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

/* Note: All collapsed state styling is now handled in Sidebar.vue */

/* Tooltip for collapsed state */
.sidebar--collapsed .menu-item {
  position: relative;
}

.sidebar--collapsed .menu-item:hover::after {
  content: attr(data-title);
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--bg-dark);
  color: var(--text-white);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  z-index: 1000;
  margin-left: var(--spacing-sm);
  box-shadow: var(--shadow-md);
}
</style>
