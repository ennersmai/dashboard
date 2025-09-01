<template>
  <div class="buttons-page">
    <div class="page-header">
      <h1>Buttons</h1>
      <p>Comprehensive showcase of button styles, sizes, states, and variations.</p>
    </div>

    <!-- Basic Buttons -->
    <div class="showcase-section">
      <h2>Basic Button Styles</h2>
      <div class="demo-row">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-light">Light</button>
        <button class="btn btn-dark">Dark</button>
      </div>
    </div>

    <!-- Outline Buttons -->
    <div class="showcase-section">
      <h2>Outline Buttons</h2>
      <div class="demo-row">
        <button class="btn btn-outline-primary">Primary</button>
        <button class="btn btn-outline-secondary">Secondary</button>
        <button class="btn btn-outline-success">Success</button>
        <button class="btn btn-outline-warning">Warning</button>
        <button class="btn btn-outline-error">Error</button>
        <button class="btn btn-outline-info">Info</button>
      </div>
    </div>

    <!-- Button Sizes -->
    <div class="showcase-section">
      <h2>Button Sizes</h2>
      <div class="demo-row items-center">
        <button class="btn btn-primary btn-xs">Extra Small</button>
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary">Default</button>
        <button class="btn btn-primary btn-lg">Large</button>
        <button class="btn btn-primary btn-xl">Extra Large</button>
      </div>
    </div>

    <!-- Button States -->
    <div class="showcase-section">
      <h2>Button States</h2>
      <div class="demo-row">
        <button class="btn btn-primary">Normal</button>
        <button class="btn btn-primary" disabled>Disabled</button>
        <button class="btn btn-primary btn-loading">
          <span class="loading-spinner"></span>
          Loading
        </button>
        <button class="btn btn-primary btn-active">Active</button>
      </div>
    </div>

    <!-- Buttons with Icons -->
    <div class="showcase-section">
      <h2>Buttons with Icons</h2>
      <div class="demo-row">
        <button class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Add Item
        </button>
        <button class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M15.5,12L10.5,7.5L9,9L12,12L9,15L10.5,16.5L15.5,12Z"/>
          </svg>
          Play Video
        </button>
        <button class="btn btn-success">
          Download
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
          </svg>
        </button>
        <button class="btn btn-icon btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,7V13L16.25,10.5L11,7Z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Button Groups -->
    <div class="showcase-section">
      <h2>Button Groups</h2>
      <div class="demo-column">
        <div class="btn-group">
          <button class="btn btn-primary">Left</button>
          <button class="btn btn-primary">Middle</button>
          <button class="btn btn-primary">Right</button>
        </div>
        
        <div class="btn-group btn-group-vertical">
          <button class="btn btn-secondary">Top</button>
          <button class="btn btn-secondary">Middle</button>
          <button class="btn btn-secondary">Bottom</button>
        </div>
        
        <div class="btn-toolbar">
          <div class="btn-group">
            <button class="btn btn-outline-primary">1</button>
            <button class="btn btn-outline-primary">2</button>
            <button class="btn btn-outline-primary">3</button>
          </div>
          <div class="btn-group">
            <button class="btn btn-outline-primary">4</button>
            <button class="btn btn-outline-primary">5</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Dropdown Buttons -->
    <div class="showcase-section">
      <h2>Dropdown Buttons</h2>
      <div class="demo-row">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" @click="toggleDropdown('dropdown1')">
            Dropdown Button
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7,10L12,15L17,10H7Z"/>
            </svg>
          </button>
          <div v-if="dropdowns.dropdown1" class="dropdown-menu">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">Separated link</a>
          </div>
        </div>
        
        <div class="btn-group">
          <button class="btn btn-success">Split Button</button>
          <button class="btn btn-success dropdown-toggle" @click="toggleDropdown('dropdown2')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7,10L12,15L17,10H7Z"/>
            </svg>
          </button>
          <div v-if="dropdowns.dropdown2" class="dropdown-menu">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Another action</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Badge Buttons -->
    <div class="showcase-section">
      <h2>Buttons with Badges</h2>
      <div class="demo-row">
        <button class="btn btn-primary">
          Messages
          <span class="badge badge-light">4</span>
        </button>
        <button class="btn btn-secondary">
          Notifications
          <span class="badge badge-error">12</span>
        </button>
        <button class="btn btn-success">
          Orders
          <span class="badge badge-warning">New</span>
        </button>
      </div>
    </div>

    <!-- Block Buttons -->
    <div class="showcase-section">
      <h2>Block Buttons</h2>
      <div class="demo-column">
        <button class="btn btn-primary btn-block">Full Width Primary Button</button>
        <button class="btn btn-outline-secondary btn-block">Full Width Outline Button</button>
      </div>
    </div>

    <!-- Navigation Pills -->
    <div class="showcase-section">
      <h2>Navigation Pills</h2>
      <div class="nav-pills">
        <button class="nav-pill nav-pill--active">Home</button>
        <button class="nav-pill">Profile</button>
        <button class="nav-pill">Messages</button>
        <button class="nav-pill">Settings</button>
      </div>
    </div>

    <!-- Pagination -->
    <div class="showcase-section">
      <h2>Pagination</h2>
      <div class="demo-column">
        <nav class="pagination">
          <button class="page-btn page-btn--prev" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
            Previous
          </button>
          <button class="page-btn">1</button>
          <button class="page-btn page-btn--active">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">4</button>
          <button class="page-btn">5</button>
          <span class="page-ellipsis">...</span>
          <button class="page-btn">10</button>
          <button class="page-btn page-btn--next">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </button>
        </nav>
        
        <nav class="pagination pagination--sm">
          <button class="page-btn page-btn--prev">‹</button>
          <button class="page-btn">1</button>
          <button class="page-btn page-btn--active">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn page-btn--next">›</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Dropdown state management
const dropdowns = reactive({
  dropdown1: false,
  dropdown2: false
})

const toggleDropdown = (dropdownId: string) => {
  // Close all dropdowns first
  Object.keys(dropdowns).forEach(key => {
    dropdowns[key as keyof typeof dropdowns] = false
  })
  // Open the selected dropdown
  dropdowns[dropdownId as keyof typeof dropdowns] = !dropdowns[dropdownId as keyof typeof dropdowns]
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (!target.closest('.dropdown')) {
    Object.keys(dropdowns).forEach(key => {
      dropdowns[key as keyof typeof dropdowns] = false
    })
  }
})
</script>

<style scoped>
.buttons-page {
  padding: var(--spacing-lg);
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
}

.showcase-section {
  margin-bottom: var(--spacing-2xl);
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
}

.showcase-section h2 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-light);
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.demo-row.items-center {
  align-items: center;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* Extended Button Styles */
.btn-success {
  background-color: var(--success-color);
  color: white;
  border-color: var(--success-color);
}

.btn-success:hover:not(:disabled) {
  background-color: #059669;
  border-color: #059669;
}

.btn-warning {
  background-color: var(--warning-color);
  color: white;
  border-color: var(--warning-color);
}

.btn-warning:hover:not(:disabled) {
  background-color: #d97706;
  border-color: #d97706;
}

.btn-error {
  background-color: var(--error-color);
  color: white;
  border-color: var(--error-color);
}

.btn-error:hover:not(:disabled) {
  background-color: #dc2626;
  border-color: #dc2626;
}

.btn-info {
  background-color: var(--info-color);
  color: white;
  border-color: var(--info-color);
}

.btn-info:hover:not(:disabled) {
  background-color: #2563eb;
  border-color: #2563eb;
}

.btn-light {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border-color: var(--border-light);
}

.btn-light:hover:not(:disabled) {
  background-color: var(--border-light);
}

.btn-dark {
  background-color: var(--bg-dark);
  color: white;
  border-color: var(--bg-dark);
}

.btn-dark:hover:not(:disabled) {
  background-color: #0f172a;
  border-color: #0f172a;
}

/* Outline Button Styles */
.btn-outline-primary {
  background-color: transparent;
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-primary:hover:not(:disabled) {
  background-color: var(--primary-color);
  color: white;
}

.btn-outline-secondary {
  background-color: transparent;
  color: var(--text-secondary);
  border-color: var(--border-medium);
}

.btn-outline-secondary:hover:not(:disabled) {
  background-color: var(--text-secondary);
  color: white;
}

.btn-outline-success {
  background-color: transparent;
  color: var(--success-color);
  border-color: var(--success-color);
}

.btn-outline-success:hover:not(:disabled) {
  background-color: var(--success-color);
  color: white;
}

.btn-outline-warning {
  background-color: transparent;
  color: var(--warning-color);
  border-color: var(--warning-color);
}

.btn-outline-warning:hover:not(:disabled) {
  background-color: var(--warning-color);
  color: white;
}

.btn-outline-error {
  background-color: transparent;
  color: var(--error-color);
  border-color: var(--error-color);
}

.btn-outline-error:hover:not(:disabled) {
  background-color: var(--error-color);
  color: white;
}

.btn-outline-info {
  background-color: transparent;
  color: var(--info-color);
  border-color: var(--info-color);
}

.btn-outline-info:hover:not(:disabled) {
  background-color: var(--info-color);
  color: white;
}

/* Button Sizes */
.btn-xs {
  padding: calc(var(--spacing-xs) / 2) var(--spacing-xs);
  font-size: var(--font-size-xs);
  line-height: 1.4;
}

.btn-sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

.btn-lg {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-lg);
  line-height: 1.4;
}

.btn-xl {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--font-size-xl);
  line-height: 1.4;
}

/* Button States */
.btn-loading {
  position: relative;
  pointer-events: none;
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: var(--spacing-sm);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

/* Icon Only Button */
.btn-icon {
  padding: var(--spacing-sm);
  width: auto;
  height: auto;
  aspect-ratio: 1;
}

/* Block Buttons */
.btn-block {
  width: 100%;
  display: block;
}

/* Button Groups */
.btn-group {
  display: inline-flex;
  position: relative;
}

.btn-group .btn {
  border-radius: 0;
  margin-left: -1px;
}

.btn-group .btn:first-child {
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  margin-left: 0;
}

.btn-group .btn:last-child {
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}

.btn-group-vertical {
  flex-direction: column;
}

.btn-group-vertical .btn {
  margin-left: 0;
  margin-top: -1px;
}

.btn-group-vertical .btn:first-child {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  margin-top: 0;
}

.btn-group-vertical .btn:last-child {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.btn-toolbar {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 160px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-sm) 0;
  margin-top: var(--spacing-xs);
}

.dropdown-item {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-primary);
  text-decoration: none;
  transition: background-color var(--transition-fast);
}

.dropdown-item:hover {
  background-color: var(--bg-secondary);
}

.dropdown-divider {
  margin: var(--spacing-sm) 0;
  border: none;
  border-top: 1px solid var(--border-light);
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  font-weight: 600;
  border-radius: var(--border-radius-sm);
  margin-left: var(--spacing-sm);
  min-width: 20px;
  line-height: 1;
}

.badge-light {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
}

.badge-error {
  background-color: var(--error-color);
  color: white;
}

.badge-warning {
  background-color: var(--warning-color);
  color: white;
}

/* Navigation Pills */
.nav-pills {
  display: flex;
  gap: var(--spacing-xs);
  background-color: var(--bg-secondary);
  padding: var(--spacing-xs);
  border-radius: var(--border-radius);
}

.nav-pill {
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  background: none;
  color: var(--text-secondary);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: 500;
}

.nav-pill:hover {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

.nav-pill--active {
  color: var(--primary-color);
  background-color: var(--bg-primary);
  box-shadow: var(--shadow-sm);
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.pagination--sm .page-btn {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.page-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: 500;
  min-width: 40px;
  justify-content: center;
}

.page-btn:hover:not(:disabled) {
  background-color: var(--bg-secondary);
  border-color: var(--border-medium);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn--active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.page-ellipsis {
  padding: var(--spacing-sm);
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .buttons-page {
    padding: var(--spacing-md);
  }
  
  .demo-row {
    gap: var(--spacing-sm);
  }
  
  .btn-toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  
  .pagination {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
