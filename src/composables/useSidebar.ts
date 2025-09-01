import { ref, computed } from 'vue'

export type SidebarStyle = 'style1' | 'style2'

// Global sidebar state
const isCollapsed = ref(false)
const sidebarStyle = ref<SidebarStyle>('style1')
const showFlyout = ref(false)

export function useSidebar() {
  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
    if (isCollapsed.value) {
      showFlyout.value = false
    }
  }

  // Change sidebar style
  const setSidebarStyle = (style: SidebarStyle) => {
    sidebarStyle.value = style
  }

  // Handle flyout for collapsed sidebar
  const showSidebarFlyout = () => {
    if (isCollapsed.value) {
      showFlyout.value = true
    }
  }

  const hideSidebarFlyout = () => {
    showFlyout.value = false
  }

  // Computed sidebar classes
  const sidebarClasses = computed(() => ({
    'sidebar--collapsed': isCollapsed.value,
    'sidebar--style1': sidebarStyle.value === 'style1',
    'sidebar--style2': sidebarStyle.value === 'style2'
  }))

  // Handle responsive behavior
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      isCollapsed.value = true
    } else if (window.innerWidth > 1024) {
      isCollapsed.value = false
    }
  }

  return {
    // State
    isCollapsed,
    sidebarStyle,
    showFlyout,
    
    // Computed
    sidebarClasses,
    
    // Methods
    toggleSidebar,
    setSidebarStyle,
    showSidebarFlyout,
    hideSidebarFlyout,
    handleResize
  }
}
