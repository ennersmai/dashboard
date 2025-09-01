<template>
  <div class="avatars-page">
    <div class="page-header">
      <h1>Avatars</h1>
      <p>Showcase of different avatar styles, sizes, shapes, and status indicators.</p>
    </div>

    <!-- Avatar Sizes -->
    <div class="showcase-section">
      <h2>Avatar Sizes</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <div class="avatar avatar--xs">
            <img src="https://via.placeholder.com/24" alt="Extra Small Avatar">
          </div>
          <span class="demo-label">Extra Small (24px)</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--sm">
            <img src="https://via.placeholder.com/32" alt="Small Avatar">
          </div>
          <span class="demo-label">Small (32px)</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--md">
            <img src="https://via.placeholder.com/40" alt="Medium Avatar">
          </div>
          <span class="demo-label">Medium (40px)</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg">
            <img src="https://via.placeholder.com/56" alt="Large Avatar">
          </div>
          <span class="demo-label">Large (56px)</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--xl">
            <img src="https://via.placeholder.com/80" alt="Extra Large Avatar">
          </div>
          <span class="demo-label">Extra Large (80px)</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--2xl">
            <img src="https://via.placeholder.com/120" alt="2X Large Avatar">
          </div>
          <span class="demo-label">2X Large (120px)</span>
        </div>
      </div>
    </div>

    <!-- Avatar Shapes -->
    <div class="showcase-section">
      <h2>Avatar Shapes</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <div class="avatar avatar--lg">
            <img src="https://via.placeholder.com/56" alt="Round Avatar">
          </div>
          <span class="demo-label">Round (default)</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--rounded">
            <img src="https://via.placeholder.com/56" alt="Rounded Avatar">
          </div>
          <span class="demo-label">Rounded</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--square">
            <img src="https://via.placeholder.com/56" alt="Square Avatar">
          </div>
          <span class="demo-label">Square</span>
        </div>
      </div>
    </div>

    <!-- Status Indicators -->
    <div class="showcase-section">
      <h2>Status Indicators</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <div class="avatar avatar--lg">
            <img src="https://via.placeholder.com/56" alt="Online Avatar">
            <div class="avatar-status avatar-status--online"></div>
          </div>
          <span class="demo-label">Online</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg">
            <img src="https://via.placeholder.com/56" alt="Away Avatar">
            <div class="avatar-status avatar-status--away"></div>
          </div>
          <span class="demo-label">Away</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg">
            <img src="https://via.placeholder.com/56" alt="Busy Avatar">
            <div class="avatar-status avatar-status--busy"></div>
          </div>
          <span class="demo-label">Busy</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg">
            <img src="https://via.placeholder.com/56" alt="Offline Avatar">
            <div class="avatar-status avatar-status--offline"></div>
          </div>
          <span class="demo-label">Offline</span>
        </div>
      </div>
    </div>

    <!-- Initial Avatars -->
    <div class="showcase-section">
      <h2>Initial Avatars</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--initial" style="background-color: var(--primary-color);">
            <span>JD</span>
          </div>
          <span class="demo-label">John Doe</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--initial" style="background-color: var(--success-color);">
            <span>AS</span>
          </div>
          <span class="demo-label">Alice Smith</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--initial" style="background-color: var(--warning-color);">
            <span>BW</span>
          </div>
          <span class="demo-label">Bob Wilson</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--initial" style="background-color: var(--error-color);">
            <span>CD</span>
          </div>
          <span class="demo-label">Carol Davis</span>
        </div>
      </div>
    </div>

    <!-- Avatar Groups -->
    <div class="showcase-section">
      <h2>Avatar Groups</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <div class="avatar-group">
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 1">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 2">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 3">
            </div>
          </div>
          <span class="demo-label">Basic Group</span>
        </div>
        <div class="demo-item">
          <div class="avatar-group avatar-group--stacked">
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 1">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 2">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 3">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 4">
            </div>
          </div>
          <span class="demo-label">Stacked Group</span>
        </div>
        <div class="demo-item">
          <div class="avatar-group avatar-group--stacked">
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 1">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 2">
            </div>
            <div class="avatar avatar--md">
              <img src="https://via.placeholder.com/40" alt="User 3">
            </div>
            <div class="avatar avatar--md avatar--initial" style="background-color: var(--text-muted);">
              <span>+5</span>
            </div>
          </div>
          <span class="demo-label">With Counter</span>
        </div>
      </div>
    </div>

    <!-- Interactive Avatars -->
    <div class="showcase-section">
      <h2>Interactive Avatars</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <button class="avatar avatar--lg avatar--clickable">
            <img src="https://via.placeholder.com/56" alt="Clickable Avatar">
          </button>
          <span class="demo-label">Clickable</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--hoverable">
            <img src="https://via.placeholder.com/56" alt="Hoverable Avatar">
          </div>
          <span class="demo-label">Hoverable</span>
        </div>
        <div class="demo-item">
          <div class="avatar avatar--lg avatar--bordered">
            <img src="https://via.placeholder.com/56" alt="Bordered Avatar">
          </div>
          <span class="demo-label">Bordered</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for static showcase
</script>

<style scoped>
.avatars-page {
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

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-xl);
  align-items: start;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  text-align: center;
}

.demo-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

/* Avatar Base Styles */
.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--bg-secondary);
  flex-shrink: 0;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Avatar Sizes */
.avatar--xs { width: 24px; height: 24px; }
.avatar--sm { width: 32px; height: 32px; }
.avatar--md { width: 40px; height: 40px; }
.avatar--lg { width: 56px; height: 56px; }
.avatar--xl { width: 80px; height: 80px; }
.avatar--2xl { width: 120px; height: 120px; }

/* Avatar Shapes */
.avatar--rounded { border-radius: var(--border-radius); }
.avatar--square { border-radius: 0; }

/* Initial Avatars */
.avatar--initial {
  color: white;
  font-weight: 600;
  font-size: calc(var(--font-size-base) * 0.75);
}

.avatar--lg.avatar--initial { font-size: var(--font-size-lg); }
.avatar--xl.avatar--initial { font-size: var(--font-size-xl); }
.avatar--2xl.avatar--initial { font-size: var(--font-size-2xl); }

/* Status Indicators */
.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  border: 2px solid var(--bg-primary);
}

.avatar-status--online { background-color: var(--success-color); }
.avatar-status--away { background-color: var(--warning-color); }
.avatar-status--busy { background-color: var(--error-color); }
.avatar-status--offline { background-color: var(--text-muted); }

/* Interactive States */
.avatar--clickable {
  border: none;
  background: none;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.avatar--clickable:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.avatar--hoverable {
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
  cursor: pointer;
}

.avatar--hoverable:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.avatar--bordered {
  border: 2px solid var(--primary-color);
}

/* Avatar Groups */
.avatar-group {
  display: flex;
  align-items: center;
}

.avatar-group .avatar {
  margin-right: var(--spacing-sm);
}

.avatar-group .avatar:last-child {
  margin-right: 0;
}

.avatar-group--stacked .avatar {
  margin-right: calc(-1 * var(--spacing-sm));
  border: 2px solid var(--bg-primary);
  position: relative;
  z-index: 1;
}

.avatar-group--stacked .avatar:hover {
  z-index: 2;
  transform: scale(1.1);
}

.avatar-group--stacked .avatar:last-child {
  margin-right: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .avatars-page {
    padding: var(--spacing-md);
  }
  
  .demo-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-lg);
  }
  
  .showcase-section {
    padding: var(--spacing-lg);
  }
}
</style>
