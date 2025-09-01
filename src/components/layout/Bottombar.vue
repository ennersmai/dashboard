<template>
  <footer class="bottombar">
    <div class="bottombar-content">
      <div class="bottombar-left">
        <p>&copy; 2025 Admin Dashboard. All rights reserved.</p>
      </div>
      <div class="bottombar-right">
        <a href="#" class="footer-link">Privacy Policy</a>
        <span class="separator">|</span>
        <a href="#" class="footer-link">Terms of Service</a>
        <span class="separator">|</span>
        <a href="#" class="footer-link">Support</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No script logic needed for basic footer
</script>

<style scoped>
.bottombar {
  background-color: var(--bg-primary);
  border-top: 1px solid var(--border-light);
  padding: var(--spacing-md) 0;
  margin-top: auto;
  position: relative;
  z-index: 1;
}

.bottombar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.bottombar-left p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.bottombar-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.footer-link {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--primary-color);
}

.separator {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
}

/* Responsive */
@media (max-width: 768px) {
  .bottombar-content {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
    padding: 0 var(--spacing-md);
  }
  
  .bottombar-right {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
