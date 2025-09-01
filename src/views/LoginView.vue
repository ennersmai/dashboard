<template>
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
          <label class="checkbox-label">
            <input type="checkbox" v-model="form.rememberMe">
            <span class="checkmark"></span>
            Remember me
          </label>
        </div>
        
        <button type="submit" class="btn btn-primary btn-login" :disabled="isLoading">
          <span v-if="isLoading">Signing in...</span>
          <span v-else>Sign In</span>
        </button>
      </form>
      
      <div class="login-divider">
        <span>OR</span>
      </div>
      
      <div class="qr-section">
        <h3>Mobile Login</h3>
        <div class="qr-container">
          <div class="qr-code">
            <canvas ref="qrCanvas" width="150" height="150"></canvas>
          </div>
          <div class="qr-info">
            <p><strong>Scan QR Code</strong></p>
            <small>Use your mobile app to scan this QR code for quick login</small>
            <div class="qr-status">
              <span class="status-indicator active"></span>
              <span class="status-text">Ready to scan</span>
            </div>
          </div>
        </div>
        <div class="mobile-features">
          <div class="feature-item">
            <span class="feature-icon">📱</span>
            <span>Mobile App</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔒</span>
            <span>Secure Login</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>Instant Access</span>
          </div>
        </div>
      </div>
      
      <div class="login-footer">
        <a href="#" class="forgot-password">Forgot your password?</a>
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

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

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
  const size = 150
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
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
  padding: var(--spacing-lg);
}

.login-card {
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-2xl);
  width: 100%;
  max-width: 480px;
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
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
  margin-bottom: var(--spacing-xl);
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

.btn-login {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

.login-divider {
  text-align: center;
  margin: var(--spacing-xl) 0;
  position: relative;
}

.login-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--border-light);
}

.login-divider span {
  background-color: var(--bg-primary);
  color: var(--text-muted);
  padding: 0 var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.qr-section {
  margin-bottom: var(--spacing-xl);
}

.qr-section h3 {
  color: var(--text-color);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-weight: 600;
}

.qr-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--bg-color-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-lg);
}

.qr-code {
  flex-shrink: 0;
  padding: var(--spacing-sm);
  background: white;
  border-radius: var(--border-radius-sm);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.qr-info {
  flex: 1;
  text-align: left;
}

.qr-info p {
  color: var(--text-color);
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
}

.qr-info small {
  color: var(--text-color-secondary);
  font-size: 0.875rem;
  display: block;
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
}

.qr-status {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse 2s infinite;
}

.status-text {
  font-size: 0.875rem;
  color: var(--text-color-secondary);
  font-weight: 500;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.mobile-features {
  display: flex;
  justify-content: space-around;
  gap: var(--spacing-md);
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
  background: var(--bg-color-secondary);
  border-radius: var(--border-radius);
  flex: 1;
  text-align: center;
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-item span:last-child {
  font-size: 0.75rem;
  color: var(--text-color-secondary);
  font-weight: 500;
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

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    padding: var(--spacing-md);
  }
  
  .login-card {
    padding: var(--spacing-xl);
  }
  
  .login-header h1 {
    font-size: var(--font-size-2xl);
  }
  
  .qr-container {
    flex-direction: column;
    text-align: center;
  }
  
  .qr-info {
    text-align: center;
  }
  
  .mobile-features {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
