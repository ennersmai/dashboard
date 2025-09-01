<template>
  <div class="panels-page">
    <div class="page-header">
      <h1>Panels</h1>
      <p>Comprehensive showcase of tabs, accordions, collapsible panels, and content containers.</p>
    </div>

    <!-- Basic Tabs -->
    <div class="showcase-section">
      <h2>Basic Tabs</h2>
      <div class="panel">
        <div class="tabs">
          <button 
            v-for="tab in basicTabs" 
            :key="tab.id"
            :class="['tab', { 'tab--active': activeBasicTab === tab.id }]"
            @click="activeBasicTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="tab-content">
          <div v-if="activeBasicTab === 'home'" class="tab-pane">
            <h3>Home Content</h3>
            <p>This is the home tab content. You can put any content here including forms, lists, or other components.</p>
          </div>
          <div v-if="activeBasicTab === 'profile'" class="tab-pane">
            <h3>Profile Content</h3>
            <p>This is the profile tab content. It could contain user information, settings, or profile management tools.</p>
          </div>
          <div v-if="activeBasicTab === 'messages'" class="tab-pane">
            <h3>Messages Content</h3>
            <p>This is the messages tab content. Perfect for displaying communications, notifications, or chat interfaces.</p>
          </div>
          <div v-if="activeBasicTab === 'settings'" class="tab-pane">
            <h3>Settings Content</h3>
            <p>This is the settings tab content. Ideal for configuration options, preferences, and system controls.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pill Tabs -->
    <div class="showcase-section">
      <h2>Pill Tabs</h2>
      <div class="panel">
        <div class="tabs tabs--pills">
          <button 
            v-for="tab in pillTabs" 
            :key="tab.id"
            :class="['tab tab--pill', { 'tab--active': activePillTab === tab.id }]"
            @click="activePillTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="tab-content">
          <div v-if="activePillTab === 'overview'" class="tab-pane">
            <h3>Overview</h3>
            <p>Dashboard overview with key metrics and quick access to important information.</p>
          </div>
          <div v-if="activePillTab === 'analytics'" class="tab-pane">
            <h3>Analytics</h3>
            <p>Detailed analytics and reporting with charts, graphs, and statistical data.</p>
          </div>
          <div v-if="activePillTab === 'reports'" class="tab-pane">
            <h3>Reports</h3>
            <p>Generate and view various reports with filtering and export capabilities.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vertical Tabs -->
    <div class="showcase-section">
      <h2>Vertical Tabs</h2>
      <div class="panel">
        <div class="tabs-vertical">
          <div class="tabs tabs--vertical">
            <button 
              v-for="tab in verticalTabs" 
              :key="tab.id"
              :class="['tab', { 'tab--active': activeVerticalTab === tab.id }]"
              @click="activeVerticalTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
          <div class="tab-content tab-content--vertical">
            <div v-if="activeVerticalTab === 'account'" class="tab-pane">
              <h3>Account Management</h3>
              <p>Manage your account settings, personal information, and security preferences.</p>
              <ul>
                <li>Update personal information</li>
                <li>Change password</li>
                <li>Security settings</li>
                <li>Privacy preferences</li>
              </ul>
            </div>
            <div v-if="activeVerticalTab === 'billing'" class="tab-pane">
              <h3>Billing & Payments</h3>
              <p>View billing history, manage payment methods, and update subscription details.</p>
              <ul>
                <li>Payment history</li>
                <li>Payment methods</li>
                <li>Subscription plans</li>
                <li>Invoices</li>
              </ul>
            </div>
            <div v-if="activeVerticalTab === 'notifications'" class="tab-pane">
              <h3>Notification Settings</h3>
              <p>Configure how and when you receive notifications from the system.</p>
              <ul>
                <li>Email notifications</li>
                <li>Push notifications</li>
                <li>SMS alerts</li>
                <li>In-app notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Accordion Panels -->
    <div class="showcase-section">
      <h2>Accordion Panels</h2>
      <div class="accordion">
        <div 
          v-for="item in accordionItems" 
          :key="item.id"
          class="accordion-item"
        >
          <button 
            :class="['accordion-header', { 'accordion-header--active': expandedAccordion === item.id }]"
            @click="toggleAccordion(item.id)"
          >
            <span>{{ item.title }}</span>
            <svg 
              :class="['accordion-arrow', { 'accordion-arrow--rotated': expandedAccordion === item.id }]"
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </button>
          <div 
            :class="['accordion-content', { 'accordion-content--expanded': expandedAccordion === item.id }]"
          >
            <div class="accordion-body">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Collapsible Panels -->
    <div class="showcase-section">
      <h2>Collapsible Panels</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="panel panel--collapsible">
          <div class="panel-header">
            <h3>Panel with Header Actions</h3>
            <div class="panel-actions">
              <button class="btn btn-sm btn-outline-secondary">Edit</button>
              <button 
                class="btn btn-sm btn-outline-secondary"
                @click="togglePanel('panel1')"
              >
                {{ collapsedPanels.panel1 ? 'Expand' : 'Collapse' }}
              </button>
            </div>
          </div>
          <div :class="['panel-body', { 'panel-body--collapsed': collapsedPanels.panel1 }]">
            <p>This is a collapsible panel with header actions. You can add buttons, dropdowns, or other interactive elements in the header.</p>
            <div class="mt-4">
              <h4>Features:</h4>
              <ul>
                <li>Collapsible content area</li>
                <li>Header with actions</li>
                <li>Smooth transitions</li>
                <li>Customizable styling</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="panel panel--collapsible">
          <div class="panel-header">
            <h3>Statistics Panel</h3>
            <div class="panel-actions">
              <span class="badge badge-success">Active</span>
              <button 
                class="btn btn-sm btn-outline-secondary"
                @click="togglePanel('panel2')"
              >
                {{ collapsedPanels.panel2 ? 'Show' : 'Hide' }}
              </button>
            </div>
          </div>
          <div :class="['panel-body', { 'panel-body--collapsed': collapsedPanels.panel2 }]">
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">1,247</div>
                <div class="stat-label">Total Users</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">89%</div>
                <div class="stat-label">Success Rate</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">$12.5K</div>
                <div class="stat-label">Revenue</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">24/7</div>
                <div class="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card Panels -->
    <div class="showcase-section">
      <h2>Card Panels</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
          <div class="card-header">
            <h3>Basic Card</h3>
          </div>
          <div class="card-body">
            <p>This is a basic card panel with header and body sections. Perfect for displaying related content in organized blocks.</p>
            <div class="card-actions">
              <button class="btn btn-primary btn-sm">Action</button>
              <button class="btn btn-outline-secondary btn-sm">Cancel</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://via.placeholder.com/300x200" alt="Card Image">
          </div>
          <div class="card-body">
            <h3>Card with Image</h3>
            <p>This card includes an image header along with content and actions in the body section.</p>
            <div class="card-actions">
              <button class="btn btn-primary btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
              </svg>
            </div>
            <h3>Icon Card</h3>
            <p>This card features an icon at the top, followed by content. Great for feature highlights or service showcases.</p>
            <div class="card-actions">
              <button class="btn btn-outline-primary btn-sm">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel Variations -->
    <div class="showcase-section">
      <h2>Panel Variations</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Success Panel -->
        <div class="panel panel--success">
          <div class="panel-header">
            <h3>Success Panel</h3>
          </div>
          <div class="panel-body">
            <p>This is a success-themed panel. Perfect for displaying positive messages, completed tasks, or success indicators.</p>
          </div>
        </div>

        <!-- Warning Panel -->
        <div class="panel panel--warning">
          <div class="panel-header">
            <h3>Warning Panel</h3>
          </div>
          <div class="panel-body">
            <p>This is a warning-themed panel. Ideal for displaying alerts, important notices, or cautionary information.</p>
          </div>
        </div>

        <!-- Error Panel -->
        <div class="panel panel--error">
          <div class="panel-header">
            <h3>Error Panel</h3>
          </div>
          <div class="panel-body">
            <p>This is an error-themed panel. Use for error messages, failed operations, or critical alerts.</p>
          </div>
        </div>

        <!-- Info Panel -->
        <div class="panel panel--info">
          <div class="panel-header">
            <h3>Info Panel</h3>
          </div>
          <div class="panel-body">
            <p>This is an info-themed panel. Great for informational content, tips, or general notifications.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Tab states
const activeBasicTab = ref('home')
const activePillTab = ref('overview')
const activeVerticalTab = ref('account')

// Accordion state
const expandedAccordion = ref<string | null>(null)

// Panel collapse states
const collapsedPanels = ref({
  panel1: false,
  panel2: false
})

// Tab data
const basicTabs = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'messages', label: 'Messages' },
  { id: 'settings', label: 'Settings' }
]

const pillTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'reports', label: 'Reports' }
]

const verticalTabs = [
  { id: 'account', label: 'Account' },
  { id: 'billing', label: 'Billing' },
  { id: 'notifications', label: 'Notifications' }
]

// Accordion data
const accordionItems = [
  {
    id: 'item1',
    title: 'Getting Started',
    content: 'Learn the basics of using our platform with this comprehensive guide. We\'ll walk you through the essential features and help you get up and running quickly.'
  },
  {
    id: 'item2',
    title: 'Advanced Features',
    content: 'Discover powerful advanced features that can help you get more done. From automation tools to custom integrations, unlock the full potential of the platform.'
  },
  {
    id: 'item3',
    title: 'Troubleshooting',
    content: 'Find solutions to common issues and learn how to resolve problems quickly. Our troubleshooting guide covers the most frequently encountered scenarios.'
  },
  {
    id: 'item4',
    title: 'API Documentation',
    content: 'Complete reference for our REST API, including authentication, endpoints, parameters, and example requests and responses for all available operations.'
  }
]

// Methods
const toggleAccordion = (itemId: string) => {
  expandedAccordion.value = expandedAccordion.value === itemId ? null : itemId
}

const togglePanel = (panelId: 'panel1' | 'panel2') => {
  collapsedPanels.value[panelId] = !collapsedPanels.value[panelId]
}
</script>

<style scoped>
.panels-page {
  padding: var(--spacing-lg);
}

.page-header {
  margin-bottom: var(--spacing-xl);
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.showcase-section {
  margin-bottom: var(--spacing-2xl);
}

.showcase-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--border-light);
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--spacing-lg);
}

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

/* Panel Base */
.panel {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

/* Tabs */
.tabs {
  display: flex;
  border-bottom: 1px solid var(--border-light);
  background: var(--surface-secondary);
}

.tabs--pills {
  border-bottom: none;
  padding: var(--spacing-md);
  gap: var(--spacing-sm);
}

.tabs--vertical {
  flex-direction: column;
  border-bottom: none;
  border-right: 1px solid var(--border-light);
  width: 200px;
  min-height: 300px;
}

.tab {
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.tab--pill {
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-sm) var(--spacing-md);
}

.tabs--vertical .tab {
  text-align: left;
  justify-content: flex-start;
  border-bottom: 1px solid var(--border-light);
}

.tab:hover {
  color: var(--primary-color);
  background: var(--surface-hover);
}

.tab--active {
  color: var(--primary-color);
  background: var(--surface-primary);
  border-bottom: 2px solid var(--primary-color);
}

.tab--pill.tab--active {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-bottom: none;
}

.tabs--vertical .tab--active {
  background: var(--primary-light);
  border-bottom: 1px solid var(--border-light);
  border-right: 2px solid var(--primary-color);
}

/* Tab Content */
.tab-content {
  padding: var(--spacing-lg);
}

.tabs-vertical {
  display: flex;
}

.tab-content--vertical {
  flex: 1;
}

.tab-pane h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.tab-pane p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.tab-pane ul {
  list-style: disc;
  margin-left: var(--spacing-lg);
  color: var(--text-secondary);
}

.tab-pane li {
  margin-bottom: var(--spacing-xs);
}

/* Accordion */
.accordion {
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid var(--border-light);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: var(--spacing-lg);
  border: none;
  background: var(--surface-secondary);
  text-align: left;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.accordion-header:hover {
  background: var(--surface-hover);
}

.accordion-header--active {
  background: var(--primary-light);
  color: var(--primary-color);
}

.accordion-arrow {
  transition: transform 0.2s ease;
  color: var(--text-secondary);
}

.accordion-arrow--rotated {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content--expanded {
  max-height: 500px;
}

.accordion-body {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  color: var(--text-secondary);
}

/* Collapsible Panels */
.panel--collapsible .panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  background: var(--surface-secondary);
  border-bottom: 1px solid var(--border-light);
}

.panel--collapsible .panel-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.panel-actions {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.panel-body {
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
}

.panel-body--collapsed {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Cards */
.card {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: var(--spacing-lg);
  background: var(--surface-secondary);
  border-bottom: 1px solid var(--border-light);
}

.card-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: var(--spacing-lg);
}

.card-body h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.card-body p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.card-icon {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
}

.card-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

/* Panel Variations */
.panel--success {
  border-color: var(--success-color);
}

.panel--success .panel-header {
  background: var(--success-light);
  color: var(--success-color);
}

.panel--warning {
  border-color: var(--warning-color);
}

.panel--warning .panel-header {
  background: var(--warning-light);
  color: var(--warning-color);
}

.panel--error {
  border-color: var(--error-color);
}

.panel--error .panel-header {
  background: var(--error-light);
  color: var(--error-color);
}

.panel--info {
  border-color: var(--info-color);
}

.panel--info .panel-header {
  background: var(--info-light);
  color: var(--info-color);
}

/* Utility Classes */
.mt-4 {
  margin-top: var(--spacing-lg);
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid transparent;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.btn-sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.8125rem;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-color: var(--primary-color);
}

.btn-primary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.btn-outline-primary {
  background: transparent;
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-primary:hover {
  background: var(--primary-color);
  color: var(--text-on-primary);
}

.btn-outline-secondary {
  background: transparent;
  color: var(--text-secondary);
  border-color: var(--border-light);
}

.btn-outline-secondary:hover {
  background: var(--surface-hover);
  color: var(--text-primary);
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-success {
  background: var(--success-light);
  color: var(--success-color);
}
</style>
