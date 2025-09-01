<template>
  <div class="page-content">
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-content">
        <h1>Documentation</h1>
        <p class="page-description">Complete guide to using this admin dashboard</p>
      </div>
      <div class="page-breadcrumb">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">Documentation</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Documentation Content -->
    <div class="grid-container">
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-header">
            <h3>📚 Getting Started</h3>
            <p>Everything you need to know to use this dashboard effectively</p>
          </div>
          <div class="card-body">
            <div class="docs-content">
              <div class="docs-section">
                <h4>🚀 Quick Start</h4>
                <p>This admin dashboard is built with Vue 3, TypeScript, and modern CSS. It provides a comprehensive set of components and layouts for building administrative interfaces.</p>
                
                <div class="code-block">
                  <code>npm install && npm run dev</code>
                </div>
              </div>

              <div class="docs-section">
                <h4>🧭 Navigation</h4>
                <ul>
                  <li><strong>Sidebar:</strong> Main navigation with 3 different styles (Default, Style 2, Icon Menu)</li>
                  <li><strong>Breadcrumbs:</strong> Track your current location in the app hierarchy</li>
                  <li><strong>Multi-level Menus:</strong> Supports up to 5 levels of nested navigation</li>
                </ul>
              </div>

              <div class="docs-section">
                <h4>🎨 Components Available</h4>
                <div class="component-grid">
                  <div class="component-card">
                    <h5>Base Components</h5>
                    <ul>
                      <li>Avatars (8 variations)</li>
                      <li>Buttons (12+ styles)</li>
                      <li>Grid System</li>
                      <li>Panels & Cards</li>
                      <li>Notifications</li>
                      <li>Typography</li>
                    </ul>
                  </div>

                  <div class="component-card">
                    <h5>Form Elements</h5>
                    <ul>
                      <li>Input Fields</li>
                      <li>Dropdowns</li>
                      <li>Checkboxes & Radios</li>
                      <li>File Uploads</li>
                      <li>Date Pickers</li>
                      <li>Validation States</li>
                    </ul>
                  </div>

                  <div class="component-card">
                    <h5>Data Display</h5>
                    <ul>
                      <li>Basic Tables</li>
                      <li>Data Tables</li>
                      <li>Charts (Chart.js)</li>
                      <li>Sparklines</li>
                      <li>Progress Bars</li>
                      <li>Statistics Cards</li>
                    </ul>
                  </div>

                  <div class="component-card">
                    <h5>Advanced</h5>
                    <ul>
                      <li>Maps (Google, Vector)</li>
                      <li>Widgets</li>
                      <li>Sweet Alerts</li>
                      <li>Icon Libraries</li>
                      <li>Calendar</li>
                      <li>Activity Feeds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="docs-section">
                <h4>⚙️ Customization</h4>
                <p>The dashboard uses CSS custom properties for easy theming:</p>
                
                <div class="code-block">
<pre>:root {
  --primary-color: #6366f1;
  --sidebar-bg: #1f2937;
  --text-color: #374151;
  --spacing-md: 1rem;
  /* ... more variables */
}</pre>
                </div>
              </div>

              <div class="docs-section">
                <h4>📱 Responsive Design</h4>
                <p>The dashboard is fully responsive and works across all device sizes:</p>
                <ul>
                  <li><strong>Desktop:</strong> Full sidebar and expanded layout</li>
                  <li><strong>Tablet:</strong> Collapsible sidebar with overlay</li>
                  <li><strong>Mobile:</strong> Hidden sidebar with toggle button</li>
                </ul>
              </div>

              <div class="docs-section">
                <h4>🔧 Browser Support</h4>
                <div class="browser-support">
                  <div class="browser-item">
                    <span class="browser-icon">🌐</span>
                    <span class="browser-name">Chrome 90+</span>
                  </div>
                  <div class="browser-item">
                    <span class="browser-icon">🦊</span>
                    <span class="browser-name">Firefox 88+</span>
                  </div>
                  <div class="browser-item">
                    <span class="browser-icon">🌍</span>
                    <span class="browser-name">Edge 90+</span>
                  </div>
                  <div class="browser-item">
                    <span class="browser-icon">🧭</span>
                    <span class="browser-name">Safari 14+</span>
                  </div>
                </div>
              </div>

              <div class="docs-section">
                <h4>🤝 Support</h4>
                <p>Need help? Here are your options:</p>
                <div class="support-options">
                  <div class="support-option">
                    <div class="support-icon">📧</div>
                    <div class="support-content">
                      <h5>Email Support</h5>
                      <p>Contact us at support@example.com</p>
                    </div>
                  </div>
                  <div class="support-option">
                    <div class="support-icon">💬</div>
                    <div class="support-content">
                      <h5>Live Chat</h5>
                      <p>Available 9 AM - 5 PM EST</p>
                    </div>
                  </div>
                  <div class="support-option">
                    <div class="support-icon">📖</div>
                    <div class="support-content">
                      <h5>Knowledge Base</h5>
                      <p>Comprehensive guides and tutorials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.docs-content {
  max-width: none;
}

.docs-section {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--border-color);
}

.docs-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.docs-section h4 {
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
  font-size: 1.25rem;
}

.docs-section p {
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.docs-section ul {
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-left: var(--spacing-lg);
}

.docs-section li {
  margin-bottom: var(--spacing-xs);
}

.code-block {
  background: var(--bg-color-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
}

.code-block code {
  color: var(--primary-color);
  font-weight: 500;
}

.code-block pre {
  margin: 0;
  color: var(--text-color);
  line-height: 1.5;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.component-card {
  background: var(--bg-color-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.component-card h5 {
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
}

.component-card ul {
  margin-left: var(--spacing-md);
}

.component-card li {
  color: var(--text-color-secondary);
  font-size: 0.875rem;
}

.browser-support {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
}

.browser-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--bg-color-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.browser-icon {
  font-size: 1.5rem;
}

.browser-name {
  color: var(--text-color);
  font-weight: 500;
}

.support-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.support-option {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--bg-color-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.support-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.support-content h5 {
  color: var(--text-color);
  margin-bottom: var(--spacing-xs);
  font-size: 1rem;
}

.support-content p {
  color: var(--text-color-secondary);
  font-size: 0.875rem;
  margin: 0;
}
</style>
