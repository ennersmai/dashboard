<template>
  <div class="sidebar-layouts-page">
    <div class="page-header">
      <h1>Sidebar Layouts</h1>
      <p>Different sidebar styles and layouts with live preview and interactive controls.</p>
    </div>

    <!-- Current Sidebar Style Controls -->
    <div class="showcase-section">
      <h2>Live Sidebar Controls</h2>
      <div class="controls-panel">
        <div class="control-group">
          <label class="control-label">Sidebar Style:</label>
          <div class="style-switcher">
            <button
              class="style-btn"
              :class="{ 'style-btn--active': currentStyle === 'default' }"
              @click="setSidebarStyle('default')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
              </svg>
              Default Style
            </button>
            
            <button
              class="style-btn"
              :class="{ 'style-btn--active': currentStyle === 'style2' }"
              @click="setSidebarStyle('style2')"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
              Button Style (Style 2)
            </button>
          </div>
        </div>
        
        <div class="control-group">
          <label class="control-label">Sidebar State:</label>
          <div class="state-switcher">
            <button
              class="state-btn"
              :class="{ 'state-btn--active': !isCollapsed }"
              @click="setSidebarState(false)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
              </svg>
              Expanded
            </button>
            
            <button
              class="state-btn"
              :class="{ 'state-btn--active': isCollapsed }"
              @click="setSidebarState(true)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,6H9V8H3V6M3,11H9V13H3V11M3,16H9V18H3V16Z"/>
              </svg>
              Icon Menu (Collapsed)
            </button>
          </div>
        </div>
      </div>
      
      <div class="current-status">
        <div class="status-item">
          <span class="status-label">Current Style:</span>
          <span class="status-value">{{ currentStyleName }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Current State:</span>
          <span class="status-value">{{ isCollapsed ? 'Icon Menu (Collapsed)' : 'Expanded' }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Flyout Menu:</span>
          <span class="status-value">{{ showFlyout ? 'Visible' : 'Hidden' }}</span>
        </div>
      </div>
    </div>

    <!-- Sidebar Style Demonstrations -->
    <div class="showcase-section">
      <h2>Sidebar Style 1: Default Style</h2>
      <div class="style-demo">
        <div class="demo-description">
          <h3>Features:</h3>
          <ul>
            <li>Clean, minimalist design with traditional navigation</li>
            <li>Dark background with light text</li>
            <li>Smooth hover effects and active states</li>
            <li>Multi-level accordion-style dropdown menus</li>
            <li>Badge support for notifications</li>
            <li>Icon + text layout for clear navigation</li>
          </ul>
          
          <h3>Use Cases:</h3>
          <ul>
            <li>Professional admin dashboards</li>
            <li>Corporate applications</li>
            <li>Content management systems</li>
            <li>Traditional web applications</li>
          </ul>
        </div>
        
        <div class="demo-preview">
          <div class="sidebar-preview sidebar-preview--default">
            <div class="preview-header">
              <h4>Dashboard</h4>
            </div>
            <div class="preview-nav">
              <div class="preview-item preview-item--active">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"/>
                </svg>
                <span>Dashboard</span>
              </div>
              <div class="preview-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
                <span>Components</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="arrow">
                  <path d="M7,10L12,15L17,10H7Z"/>
                </svg>
              </div>
              <div class="preview-submenu">
                <div class="preview-subitem">
                  <span>Avatars</span>
                </div>
                <div class="preview-subitem">
                  <span>Buttons</span>
                </div>
              </div>
              <div class="preview-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,21L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"/>
                </svg>
                <span>Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="showcase-section">
      <h2>Sidebar Style 2: Button Style</h2>
      <div class="style-demo">
        <div class="demo-description">
          <h3>Features:</h3>
          <ul>
            <li>Modern button-based navigation design</li>
            <li>Light background with rounded button elements</li>
            <li>Clear visual separation between menu items</li>
            <li>Enhanced hover effects with button styling</li>
            <li>Better suited for modern, card-based layouts</li>
            <li>More touch-friendly on mobile devices</li>
          </ul>
          
          <h3>Use Cases:</h3>
          <ul>
            <li>Modern web applications</li>
            <li>Mobile-first dashboards</li>
            <li>Creative and design-focused apps</li>
            <li>Consumer-facing applications</li>
          </ul>
        </div>
        
        <div class="demo-preview">
          <div class="sidebar-preview sidebar-preview--style2">
            <div class="preview-header">
              <h4>Dashboard</h4>
            </div>
            <div class="preview-nav">
              <div class="preview-item preview-item--active preview-item--button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"/>
                </svg>
                <span>Dashboard</span>
              </div>
              <div class="preview-item preview-item--button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
                <span>Components</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" class="arrow">
                  <path d="M7,10L12,15L17,10H7Z"/>
                </svg>
              </div>
              <div class="preview-submenu preview-submenu--button">
                <div class="preview-subitem preview-subitem--button">
                  <span>Avatars</span>
                </div>
                <div class="preview-subitem preview-subitem--button">
                  <span>Buttons</span>
                </div>
              </div>
              <div class="preview-item preview-item--button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,21L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"/>
                </svg>
                <span>Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="showcase-section">
      <h2>Icon Menu (Collapsed State)</h2>
      <div class="style-demo">
        <div class="demo-description">
          <h3>Features:</h3>
          <ul>
            <li>Space-saving collapsed sidebar showing only icons</li>
            <li>Hover to reveal flyout menu with full navigation</li>
            <li>Smooth animations and transitions</li>
            <li>Maintains functionality while maximizing content space</li>
            <li>Auto-collapse on mobile devices</li>
            <li>Smart flyout positioning</li>
          </ul>
          
          <h3>Behavior:</h3>
          <ul>
            <li>Hover over the collapsed sidebar to see the flyout menu</li>
            <li>Flyout appears to the right of the icon sidebar</li>
            <li>Mouse leave hides the flyout menu</li>
            <li>Responsive: auto-collapse on smaller screens</li>
          </ul>
        </div>
        
        <div class="demo-preview">
          <div class="sidebar-preview sidebar-preview--collapsed">
            <div class="preview-header-collapsed">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
              </svg>
            </div>
            <div class="preview-nav-collapsed">
              <div class="preview-icon preview-icon--active">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"/>
                </svg>
              </div>
              <div class="preview-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
              </div>
              <div class="preview-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,21L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"/>
                </svg>
              </div>
              <div class="preview-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z"/>
                </svg>
              </div>
            </div>
            
            <!-- Flyout Preview -->
            <div class="flyout-preview">
              <div class="flyout-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"/>
                </svg>
                <span>Dashboard</span>
              </div>
              <div class="flyout-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
                <span>Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Implementation Guide -->
    <div class="showcase-section">
      <h2>Implementation Guide</h2>
      <div class="implementation-guide">
        <div class="guide-section">
          <h3>Switching Sidebar Styles</h3>
          <div class="code-example">
            <pre><code>// Using the sidebar composable
import { useSidebar } from '@/composables/useSidebar'

const { setSidebarStyle } = useSidebar()

// Switch to button style
setSidebarStyle('style2')

// Switch to default style  
setSidebarStyle('default')</code></pre>
          </div>
        </div>
        
        <div class="guide-section">
          <h3>Controlling Sidebar State</h3>
          <div class="code-example">
            <pre><code>// Toggle sidebar collapse
const { toggleSidebar, isCollapsed } = useSidebar()

// Collapse sidebar
toggleSidebar()

// Check current state
console.log(isCollapsed.value) // true/false</code></pre>
          </div>
        </div>
        
        <div class="guide-section">
          <h3>Responsive Behavior</h3>
          <div class="code-example">
            <pre><code>// Automatic responsive handling
const { handleResize } = useSidebar()

// Called automatically on window resize
// Collapses sidebar on mobile (≤768px)
window.addEventListener('resize', handleResize)</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSidebar } from '@/composables/useSidebar'

// Use the sidebar composable
const {
  isCollapsed,
  sidebarStyle,
  showFlyout,
  setSidebarStyle,
  toggleSidebar
} = useSidebar()

// Computed properties for display
const currentStyle = computed(() => sidebarStyle.value)

const currentStyleName = computed(() => {
  switch (sidebarStyle.value) {
    case 'style2':
      return 'Button Style (Style 2)'
    case 'default':
    default:
      return 'Default Style'
  }
})

// Helper function to set sidebar state
const setSidebarState = (collapsed: boolean) => {
  if (isCollapsed.value !== collapsed) {
    toggleSidebar()
  }
}
</script>

<style scoped>
.sidebar-layouts-page {
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

/* Controls Panel */
.controls-panel {
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.control-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.control-group:last-child {
  margin-bottom: 0;
}

.control-label {
  font-weight: 600;
  color: var(--text-primary);
  min-width: 120px;
}

.style-switcher,
.state-switcher {
  display: flex;
  gap: var(--spacing-sm);
}

.style-btn,
.state-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.style-btn:hover,
.state-btn:hover {
  color: var(--text-primary);
  border-color: var(--border-medium);
  background-color: var(--bg-secondary);
}

.style-btn--active,
.state-btn--active {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background-color: var(--primary-light);
}

/* Current Status */
.current-status {
  display: flex;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
}

.status-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.status-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.status-value {
  font-size: var(--font-size-base);
  color: var(--text-primary);
  font-weight: 600;
}

/* Style Demo */
.style-demo {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--spacing-xl);
  align-items: start;
}

.demo-description h3 {
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.demo-description h3:first-child {
  margin-top: 0;
}

.demo-description ul {
  color: var(--text-secondary);
  padding-left: var(--spacing-lg);
}

.demo-description li {
  margin-bottom: var(--spacing-xs);
  line-height: 1.5;
}

/* Sidebar Previews */
.demo-preview {
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  border: 1px solid var(--border-light);
}

.sidebar-preview {
  width: 260px;
  background-color: var(--sidebar-bg);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.sidebar-preview--default {
  background-color: var(--sidebar-bg);
}

.sidebar-preview--style2 {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-light);
}

.sidebar-preview--collapsed {
  width: 70px;
  position: relative;
}

.preview-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--sidebar-border);
}

.preview-header h4 {
  color: var(--sidebar-text-hover);
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.preview-header-collapsed {
  padding: var(--spacing-md);
  text-align: center;
  border-bottom: 1px solid var(--sidebar-border);
  color: var(--sidebar-text);
}

.preview-nav {
  padding: var(--spacing-md) 0;
}

.preview-nav-collapsed {
  padding: var(--spacing-md) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.preview-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-lg);
  color: var(--sidebar-text);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.preview-item:hover {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.05);
}

.preview-item--active {
  color: var(--sidebar-active-text);
  background-color: var(--sidebar-active-bg);
}

.preview-item--button {
  margin: 0 var(--spacing-md);
  border-radius: var(--border-radius);
  color: var(--text-secondary);
  background-color: transparent;
  border: 1px solid transparent;
}

.preview-item--button:hover {
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  border-color: var(--border-light);
}

.preview-item--button.preview-item--active {
  color: var(--primary-color);
  background-color: var(--primary-light);
  border-color: var(--primary-color);
}

.preview-submenu {
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-xs) 0;
}

.preview-submenu--button {
  background-color: transparent;
  margin: 0 var(--spacing-md);
  border-radius: var(--border-radius-sm);
}

.preview-subitem {
  padding: var(--spacing-xs) var(--spacing-xl);
  color: var(--sidebar-text);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: color var(--transition-fast);
}

.preview-subitem:hover {
  color: var(--sidebar-text-hover);
}

.preview-subitem--button {
  margin: var(--spacing-xs) var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-sm);
  background-color: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
}

.preview-subitem--button:hover {
  color: var(--text-primary);
  background-color: var(--bg-secondary);
}

.arrow {
  margin-left: auto;
}

/* Collapsed Sidebar Icons */
.preview-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sidebar-text);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.preview-icon:hover {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.05);
}

.preview-icon--active {
  color: var(--sidebar-active-text);
  background-color: var(--sidebar-active-bg);
}

/* Flyout Preview */
.flyout-preview {
  position: absolute;
  top: 0;
  left: 100%;
  width: 200px;
  background-color: var(--sidebar-bg);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-md) 0;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--transition-fast);
  pointer-events: none;
}

.sidebar-preview--collapsed:hover .flyout-preview {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.flyout-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-lg);
  color: var(--sidebar-text);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.flyout-item:hover {
  color: var(--sidebar-text-hover);
  background-color: rgba(255, 255, 255, 0.05);
}

/* Implementation Guide */
.implementation-guide {
  display: grid;
  gap: var(--spacing-xl);
}

.guide-section h3 {
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.code-example {
  background-color: var(--bg-dark);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  color: #e2e8f0;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.code-example code {
  color: #e2e8f0;
}

/* Responsive */
@media (max-width: 1024px) {
  .style-demo {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .demo-preview {
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .sidebar-layouts-page {
    padding: var(--spacing-md);
  }
  
  .control-group {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
  }
  
  .control-label {
    min-width: auto;
  }
  
  .current-status {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .showcase-section {
    padding: var(--spacing-lg);
  }
}
</style>
