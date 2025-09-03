<template>
  <div class="login-page">
    <!-- Top Bar -->
    <div class="login-topbar">
      <div class="topbar-content">
        <div class="company-info">
          <span class="company-name">Admin Dashboard</span>
          <span class="version">v2.0.1</span>
        </div>
        <div class="system-info">
          <span class="status-indicator"></span>
          <span>System Online</span>
        </div>
      </div>
    </div>

    <div class="login-container">
      <div class="login-card">
      <div class="login-header">
        <h1>Admin Dashboard</h1>
        <p>Sign in to your account</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="form-control"
            placeholder="Enter your email"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="form-control"
            placeholder="Enter your password"
            required
          >
        </div>
        
        <div class="form-group">
          <div class="remember-row">
            <label class="checkbox-label">
              <input type="checkbox" v-model="form.rememberMe">
              <span class="checkmark"></span>
              Remember me
            </label>
            <button 
              type="button" 
              class="qr-toggle-btn" 
              @click="toggleQRPanel"
              title="Show QR Code for Mobile Login"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm15 0h3v3h-3v-3zm0 5h3v3h-3v-3zm-5-5h3v3h-3v-3zm0 5h3v3h-3v-3z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary btn-login" :disabled="isLoading">
          <span v-if="isLoading">Signing in...</span>
          <span v-else>Sign In</span>
        </button>
      </form>
      
      <div class="login-footer">
        <a href="#" class="forgot-password">Forgot your password?</a>
      </div>
    </div>
    </div>

    <!-- QR Code Side Panel -->
    <div class="qr-panel" :class="{ 'qr-panel--open': showQRPanel }">
      <div class="qr-panel-header">
        <h3>Mobile Login</h3>
        <button class="close-btn" @click="toggleQRPanel">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      
      <div class="qr-content">
        <div class="qr-code">
          <canvas ref="qrCanvas" width="180" height="180"></canvas>
        </div>
        <div class="qr-info">
          <p><strong>Scan to Login</strong></p>
          <small>Use your mobile app to scan this QR code for instant access</small>
          <div class="qr-status">
            <span class="status-dot active"></span>
            <span class="status-text">Ready to scan</span>
          </div>
        </div>
        
        <div class="mobile-features">
          <div class="feature-item">
            <span class="feature-icon">📱</span>
            <span>Mobile App</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔒</span>
            <span>Secure</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>Instant</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="login-bottombar">
      <div class="bottombar-content">
        <div class="company-details">
          <span>&copy; 2025 Admin Dashboard Inc.</span>
          <span class="separator">•</span>
          <span>All rights reserved</span>
        </div>
        <div class="build-info">
          <span>Build: 2024.01.15</span>
          <span class="separator">•</span>
          <span>Environment: Production</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const qrCanvas = ref<HTMLCanvasElement>()
const showQRPanel = ref(false)

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const toggleQRPanel = () => {
  showQRPanel.value = !showQRPanel.value
}

const handleLogin = async () => {
  isLoading.value = true
  
  // Simulate login process
  setTimeout(() => {
    isLoading.value = false
    // Redirect to dashboard after successful login
    router.push('/dashboard')
  }, 1500)
}

const generateQRCode = () => {
  if (!qrCanvas.value) return
  
  const canvas = qrCanvas.value
  const ctx = canvas.getContext('2d')!
  const size = 180
  const cellSize = size / 21 // 21x21 QR code grid
  
  // Clear canvas
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, size, size)
  
  // Simple QR code pattern (placeholder)
  ctx.fillStyle = '#000000'
  
  // QR code pattern data (simplified)
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1],
    [0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0],
    [1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1],
    [0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
    [1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0],
    [1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1],
    [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1],
    [1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1]
  ]
  
  // Draw QR code pattern
  for (let row = 0; row < pattern.length; row++) {
    for (let col = 0; col < pattern[row].length; col++) {
      if (pattern[row][col] === 1) {
        ctx.fillRect(col * cellSize + 10, row * cellSize + 10, cellSize, cellSize)
      }
    }
  }
}

onMounted(() => {
  generateQRCode()
})
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  position: relative;
  overflow: hidden;
}

/* Top Bar Styles */
.login-topbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--spacing-sm) 0;
  position: relative;
  z-index: 100;
}

.topbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.company-name {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--primary-color);
}

.version {
  background: var(--primary-color);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: var(--font-size-xs);
  font-weight: 500;
}

.system-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.status-indicator {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Main Container */
.login-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  position: relative;
}

.login-card {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: var(--spacing-2xl);
  width: 100%;
  max-width: 420px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 10;
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.login-header h1 {
  color: var(--primary-color);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.login-header p {
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
  margin: 0;
}

.login-form {
  margin-bottom: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.form-control {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  border: 2px solid var(--border-light);
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
  background-color: var(--bg-secondary);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: var(--bg-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Remember Me Row */
.remember-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: var(--text-secondary);
}

.checkbox-label input[type="checkbox"] {
  margin-right: var(--spacing-sm);
}

.qr-toggle-btn {
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-toggle-btn:hover {
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary-hover);
}

.btn-login {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

/* QR Code Side Panel - Hidden behind login card, slides to right */
.qr-panel {
  position: absolute;
  top: 50%;
  left: 37.5%;
  width: 100%;
  max-width: 420px;
  transform: translateY(-50%); /* Start exactly behind login card */
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.4s ease-in-out;
  z-index: 5; /* Behind login card initially */
  /* Exact same padding as login card */
  padding: var(--spacing-2xl);
  translate: 0 2px;
}

.qr-panel--open {
  transform: translateY(-50%) translateX(calc(100% + var(--spacing-lg) - 23px)); /* Slide to right with 10px less */
  z-index: 15; /* In front when open */
}

/* Mobile: compact styles for QR content */
@media (max-width: 768px) {
  .qr-panel .qr-panel-header { margin-bottom: var(--spacing-xs); }
  .qr-panel .qr-panel-header h3 { font-size: var(--font-size-md); }
  .qr-panel .qr-code { margin-bottom: var(--spacing-xs); padding: var(--spacing-xs); }
  .qr-panel .qr-code canvas { width: 100px !important; height: 100px !important; }
  .qr-panel .qr-info p { font-size: var(--font-size-sm); margin-bottom: 4px; font-weight: 500; }
  .qr-panel .qr-info small { font-size: var(--font-size-xs); line-height: 1.2; }
}

.qr-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.qr-panel-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-fast);
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.qr-content {
  text-align: center;
}

.qr-code {
  display: inline-block;
  padding: var(--spacing-sm);
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: var(--spacing-md);
}

.qr-info p {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.qr-info small {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  display: block;
  margin-bottom: var(--spacing-sm);
  line-height: 2;
}

.qr-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse 2s infinite;
}

.status-text {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.mobile-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: 7px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: rgba(59, 130, 246, 0.05);
  border-radius: var(--border-radius);
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-item span:last-child {
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  font-weight: 500;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.login-footer {
  text-align: center;
}

.forgot-password {
  color: var(--primary-color);
  font-size: var(--font-size-sm);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.forgot-password:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

/* Bottom Bar Styles */
.login-bottombar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: var(--spacing-sm) 0;
  position: relative;
  z-index: 100;
}

.bottombar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.company-details,
.build-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.separator {
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    padding: var(--spacing-md);
  }
  
  .login-card {
    padding: var(--spacing-xl);
    max-width: 100%;
  }
  
  .login-header h1 {
    font-size: var(--font-size-2xl);
  }
  
  .topbar-content,
  .bottombar-content {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
  
  .company-details,
  .build-info {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .qr-panel {
    position: static; /* in-flow below login */
    left: auto;
    right: auto;
    top: auto;
    width: auto;
    max-width: none;
    transform: none;
    overflow: hidden;
    max-height: 0; /* collapsed */
    opacity: 0;
    box-sizing: border-box;
    transition: max-height 0.5s ease, opacity 0.35s ease, padding 0.35s ease; /* smoother, visible */
    margin: 0 15px 10px; /* symmetric sides, bottom 15px less */
    padding: 0 var(--spacing-sm); /* collapsed vertical padding */
  }
  
  .qr-panel--open {
    max-height: 600px; /* enough for content */
    opacity: 1;
    padding: var(--spacing-sm); /* restore padding to show content */
  }
  
  .mobile-features {
    grid-template-columns: 1fr;
  }
  
  .remember-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
}
</style>
