<template>
  <header class="topbar" :style="{ left: topbarLeftPosition }">
    <div class="topbar-content">
      <!-- Left section - Search -->
      <div class="topbar-left">
        <!-- Search placeholder -->
        <div class="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            class="search-input"
          >
        </div>
      </div>
      
      <!-- Right section - User profile and notifications -->
      <div class="topbar-right">
        <!-- Notifications (placeholder) -->
        <button class="notification-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29C10 4.19 10 4.1 10 4C10 2.9 10.9 2 12 2S14 2.9 14 4C14 4.1 14 4.19 14 4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM7 17H17V11C17 8.24 14.76 6 12 6S7 8.24 7 11V17Z"/>
          </svg>
          <span class="notification-badge">3</span>
        </button>
        
        <!-- User Profile Dropdown -->
        <div class="user-profile">
          <button class="profile-btn" @click="toggleProfileDropdown">
            <img 
              src="https://via.placeholder.com/32" 
              alt="User Avatar" 
              class="user-avatar"
            >
            <span class="user-name">John Doe</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10L12 15L17 10H7Z"/>
            </svg>
          </button>
          
          <!-- Dropdown Menu -->
          <div v-if="showProfileDropdown" class="profile-dropdown">
            <a href="#" class="dropdown-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
              </svg>
              Profile
            </a>
            <a href="#" class="dropdown-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14,12.94C19.18,12.64 19.2,12.33 19.2,12C19.2,11.68 19.18,11.36 19.13,11.06L21.16,9.48L19.84,7.15L17.42,8.21C16.96,7.86 16.45,7.58 15.9,7.35L15.5,4.82L12.5,4.82L12.1,7.35C11.55,7.58 11.04,7.86 10.58,8.21L8.16,7.15L6.84,9.48L8.87,11.06C8.82,11.36 8.8,11.69 8.8,12C8.8,12.31 8.82,12.64 8.87,12.94L6.84,14.52L8.16,16.85L10.58,15.79C11.04,16.14 11.55,16.42 12.1,16.65L12.5,19.18L15.5,19.18L15.9,16.65C16.45,16.42 16.96,16.14 17.42,15.79L19.84,16.85L21.16,14.52L19.14,12.94ZM12,15.6C10.02,15.6 8.4,13.98 8.4,12C8.4,10.02 10.02,8.4 12,8.4C13.98,8.4 15.6,10.02 15.6,12C15.6,13.98 13.98,15.6 12,15.6Z"/>
              </svg>
              Settings
            </a>
            <hr class="dropdown-divider">
            <RouterLink to="/login" class="dropdown-item text-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"/>
              </svg>
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useSidebar } from '@/composables/useSidebar'

const showProfileDropdown = ref(false)
const windowWidth = ref(window.innerWidth)

// Use sidebar state to adjust header position
const { isCollapsed } = useSidebar()

// Update window width on resize
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

// Computed style for dynamic left positioning
const topbarLeftPosition = computed(() => {
  // On mobile, topbar should be full width
  if (windowWidth.value <= 768) return '0'
  
  return isCollapsed.value ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)'
})

// Lifecycle hooks for resize listener
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value
}

// Close dropdown when clicking outside
const closeDropdown = () => {
  showProfileDropdown.value = false
}

// Add click outside listener
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (!target.closest('.user-profile')) {
    closeDropdown()
  }
})
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  right: 0;
  height: var(--topbar-height);
  background-color: var(--topbar-bg);
  border-bottom: 1px solid var(--topbar-border);
  z-index: 1000;
  box-shadow: var(--shadow-sm);
  transition: left var(--transition-normal);
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--spacing-lg);
}

.topbar-left {
  display: flex;
  align-items: center;
}

.search-container {
  position: relative;
}

.search-input {
  width: 300px;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  background-color: var(--bg-secondary);
  transition: border-color var(--transition-fast);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.notification-btn {
  position: relative;
  background: none;
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  cursor: pointer;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.notification-btn:hover {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--error-color);
  color: white;
  font-size: var(--font-size-xs);
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

.user-profile {
  position: relative;
}

.profile-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: none;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.profile-btn:hover {
  background-color: var(--bg-secondary);
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 500;
  color: var(--text-primary);
}

.profile-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 200px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-sm) 0;
  z-index: 1001;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-primary);
  text-decoration: none;
  transition: background-color var(--transition-fast);
}

.dropdown-item:hover {
  background-color: var(--bg-secondary);
}

.dropdown-item.text-danger {
  color: var(--error-color);
}

.dropdown-item.text-primary {
  color: var(--primary-color);
}

.dropdown-divider {
  margin: var(--spacing-sm) 0;
  border: none;
  border-top: 1px solid var(--border-light);
}

/* Responsive */
@media (max-width: 768px) {
  .search-container {
    display: none;
  }
  
  .user-name {
    display: none;
  }
  
  .topbar-content {
    padding: 0 var(--spacing-md);
  }
}
</style>
