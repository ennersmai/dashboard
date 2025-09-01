<template>
  <div class="page-content">
    <div class="page-header">
      <div class="page-header-content">
        <h1>Admin Role</h1>
        <p class="page-description">Level 5 Deep Menu - Admin Role Management</p>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-body">
            <div class="success-message">
              <div class="success-icon">⚙️</div>
              <h4>Admin Role Configuration</h4>
              <p>Level 5: Admin → Users → Management → Roles → Admin Role</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.success-message { text-align: center; padding: var(--spacing-xl); background: linear-gradient(135deg, #d4edda, #c3e6cb); border: 1px solid #c3e6cb; border-radius: var(--border-radius); }
.success-icon { font-size: 3rem; margin-bottom: var(--spacing-md); }
.success-message h4 { color: #155724; margin: 0 0 var(--spacing-sm) 0; }
.success-message p { color: #155724; margin: 0; }
</style>
