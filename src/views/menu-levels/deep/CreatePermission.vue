<template>
  <div class="page-content">
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-content">
        <h1>Create Permission</h1>
        <p class="page-description">Level 5 Deep Menu - Permission Creation Interface</p>
      </div>
      <div class="page-breadcrumb">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li class="breadcrumb-item">Menu Levels</li>
            <li class="breadcrumb-item">Admin</li>
            <li class="breadcrumb-item">Users</li>
            <li class="breadcrumb-item">Management</li>
            <li class="breadcrumb-item">Permissions</li>
            <li class="breadcrumb-item active" aria-current="page">Create Permission</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Content -->
    <div class="grid-container">
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-header">
            <h3>Level 5 Deep Menu Example</h3>
            <p>This demonstrates 5 levels of nested menu navigation</p>
          </div>
          <div class="card-body">
            <div class="menu-depth-visualization">
              <div class="depth-level">
                <span class="level-indicator">Level 1</span>
                <span class="level-name">Admin</span>
              </div>
              <div class="depth-arrow">→</div>
              <div class="depth-level">
                <span class="level-indicator">Level 2</span>
                <span class="level-name">Users</span>
              </div>
              <div class="depth-arrow">→</div>
              <div class="depth-level">
                <span class="level-indicator">Level 3</span>
                <span class="level-name">Management</span>
              </div>
              <div class="depth-arrow">→</div>
              <div class="depth-level">
                <span class="level-indicator">Level 4</span>
                <span class="level-name">Permissions</span>
              </div>
              <div class="depth-arrow">→</div>
              <div class="depth-level active">
                <span class="level-indicator">Level 5</span>
                <span class="level-name">Create Permission</span>
              </div>
            </div>
            
            <div class="success-message">
              <div class="success-icon">✅</div>
              <h4>Menu Depth Test Successful!</h4>
              <p>The recursive sidebar component successfully handled 5 levels of menu nesting.</p>
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
.menu-depth-visualization {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-lg);
  background: var(--bg-color-secondary);
  border-radius: var(--border-radius);
  overflow-x: auto;
}

.depth-level {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  padding: var(--spacing-md);
  background: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.depth-level.active {
  border-color: var(--primary-color);
  background: rgba(var(--primary-color-rgb), 0.1);
}

.level-indicator {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-color-secondary);
  margin-bottom: var(--spacing-xs);
}

.level-name {
  font-weight: 500;
  color: var(--text-color);
  text-align: center;
}

.depth-arrow {
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: bold;
}

.success-message {
  text-align: center;
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, #d4edda, #c3e6cb);
  border: 1px solid #c3e6cb;
  border-radius: var(--border-radius);
  margin-top: var(--spacing-xl);
}

.success-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.success-message h4 {
  color: #155724;
  margin: 0 0 var(--spacing-sm) 0;
}

.success-message p {
  color: #155724;
  margin: 0;
}

@media (max-width: 768px) {
  .menu-depth-visualization {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .depth-arrow {
    transform: rotate(90deg);
  }
}
</style>
