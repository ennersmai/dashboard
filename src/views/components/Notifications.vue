<template>
  <div class="notifications-page">
    <div class="page-header">
      <h1>Notifications</h1>
      <p>Toast notifications, alerts, and growl-style messages for user feedback.</p>
    </div>

    <!-- Toast Notification Triggers -->
    <div class="showcase-section">
      <h2>Toast Notifications</h2>
      <div class="demo-grid">
        <div class="demo-group">
          <h3>Basic Toasts</h3>
          <div class="button-grid">
            <button class="btn btn-primary" @click="showToast('info', 'Info', 'This is an informational message.')">
              Info Toast
            </button>
            <button class="btn btn-success" @click="showToast('success', 'Success!', 'Operation completed successfully.')">
              Success Toast
            </button>
            <button class="btn btn-warning" @click="showToast('warning', 'Warning!', 'Please review this action carefully.')">
              Warning Toast
            </button>
            <button class="btn btn-error" @click="showToast('error', 'Error!', 'Something went wrong. Please try again.')">
              Error Toast
            </button>
          </div>
        </div>

        <div class="demo-group">
          <h3>Advanced Toasts</h3>
          <div class="button-grid">
            <button class="btn btn-outline-primary" @click="showPersistentToast">
              Persistent Toast
            </button>
            <button class="btn btn-outline-secondary" @click="showToastWithAction">
              Toast with Action
            </button>
            <button class="btn btn-outline-info" @click="showToastWithProgress">
              Toast with Progress
            </button>
            <button class="btn btn-outline-warning" @click="showMultipleToasts">
              Multiple Toasts
            </button>
          </div>
        </div>

        <div class="demo-group">
          <h3>Position Options</h3>
          <div class="button-grid">
            <button class="btn btn-secondary" @click="showPositionedToast('top-left')">
              Top Left
            </button>
            <button class="btn btn-secondary" @click="showPositionedToast('top-right')">
              Top Right
            </button>
            <button class="btn btn-secondary" @click="showPositionedToast('bottom-left')">
              Bottom Left
            </button>
            <button class="btn btn-secondary" @click="showPositionedToast('bottom-right')">
              Bottom Right
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Inline Alerts -->
    <div class="showcase-section">
      <h2>Inline Alerts</h2>
      <div class="alert-grid">
        <div class="alert alert--info">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <div class="alert-content">
            <strong>Info:</strong> This is an informational alert that provides helpful context to the user.
          </div>
        </div>

        <div class="alert alert--success">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
          </svg>
          <div class="alert-content">
            <strong>Success:</strong> Your action has been completed successfully!
          </div>
        </div>

        <div class="alert alert--warning">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
          </svg>
          <div class="alert-content">
            <strong>Warning:</strong> Please be careful with this action as it may have unintended consequences.
          </div>
        </div>

        <div class="alert alert--error">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17A1.5,1.5 0 0,0 13.5,15.5A1.5,1.5 0 0,0 12,14A1.5,1.5 0 0,0 10.5,15.5A1.5,1.5 0 0,0 12,17M12,10.5A1.5,1.5 0 0,0 13.5,9A1.5,1.5 0 0,0 12,7.5A1.5,1.5 0 0,0 10.5,9A1.5,1.5 0 0,0 12,10.5Z" />
          </svg>
          <div class="alert-content">
            <strong>Error:</strong> An error occurred while processing your request. Please try again.
          </div>
        </div>
      </div>
    </div>

    <!-- Dismissible Alerts -->
    <div class="showcase-section">
      <h2>Dismissible Alerts</h2>
      <div class="alert-grid">
        <div v-if="!dismissedAlerts.alert1" class="alert alert--info alert--dismissible">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <div class="alert-content">
            <strong>New Feature:</strong> Check out our latest update with improved performance and new tools.
          </div>
          <button class="alert-dismiss" @click="dismissAlert('alert1')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>

        <div v-if="!dismissedAlerts.alert2" class="alert alert--warning alert--dismissible">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
          </svg>
          <div class="alert-content">
            <strong>Maintenance:</strong> Scheduled maintenance will occur on Sunday from 2:00 AM to 4:00 AM EST.
          </div>
          <button class="alert-dismiss" @click="dismissAlert('alert2')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-4">
        <button class="btn btn-outline-secondary" @click="resetAlerts">
          Reset Dismissed Alerts
        </button>
      </div>
    </div>

    <!-- Alert with Actions -->
    <div class="showcase-section">
      <h2>Alerts with Actions</h2>
      <div class="alert-grid">
        <div class="alert alert--info alert--with-actions">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <div class="alert-content">
            <div class="alert-title">Update Available</div>
            <div class="alert-message">A new version of the application is available. Would you like to update now?</div>
            <div class="alert-actions">
              <button class="btn btn-primary btn-sm">Update Now</button>
              <button class="btn btn-outline-secondary btn-sm">Later</button>
            </div>
          </div>
        </div>

        <div class="alert alert--warning alert--with-actions">
          <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
          </svg>
          <div class="alert-content">
            <div class="alert-title">Storage Almost Full</div>
            <div class="alert-message">You're using 85% of your storage quota. Consider upgrading your plan or cleaning up files.</div>
            <div class="alert-actions">
              <button class="btn btn-primary btn-sm">Upgrade Plan</button>
              <button class="btn btn-outline-secondary btn-sm">Manage Files</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Notifications -->
    <div class="showcase-section">
      <h2>Progress Notifications</h2>
      <div class="demo-group">
        <div class="button-grid">
          <button class="btn btn-primary" @click="simulateUpload">
            Simulate File Upload
          </button>
          <button class="btn btn-secondary" @click="simulateDownload">
            Simulate Download
          </button>
          <button class="btn btn-info" @click="simulateProcess">
            Simulate Processing
          </button>
        </div>

        <div v-if="progressNotification.show" class="progress-notification">
          <div class="progress-header">
            <span class="progress-title">{{ progressNotification.title }}</span>
            <span class="progress-percentage">{{ progressNotification.progress }}%</span>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-fill"
              :style="{ width: progressNotification.progress + '%' }"
            ></div>
          </div>
          <div class="progress-message">{{ progressNotification.message }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Container -->
  <div class="toast-container" :class="`toast-container--${toastPosition}`">
    <TransitionGroup name="toast" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast', `toast--${toast.type}`]"
      >
        <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path :d="getToastIcon(toast.type)" />
        </svg>
        <div class="toast-content">
          <div class="toast-title">{{ toast.title }}</div>
          <div class="toast-message">{{ toast.message }}</div>
          <div v-if="toast.showProgress" class="toast-progress">
            <div class="toast-progress-bar" :style="{ width: toast.progress + '%' }"></div>
          </div>
          <div v-if="toast.action" class="toast-actions">
            <button class="toast-action-btn" @click="toast.action.handler">
              {{ toast.action.label }}
            </button>
          </div>
        </div>
        <button v-if="!toast.persistent" class="toast-close" @click="removeToast(toast.id)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Types
interface Toast {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  persistent?: boolean
  showProgress?: boolean
  progress?: number
  action?: {
    label: string
    handler: () => void
  }
}

interface ProgressNotification {
  show: boolean
  title: string
  message: string
  progress: number
}

// State
const toasts = ref<Toast[]>([])
const toastPosition = ref<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>('top-right')
const toastIdCounter = ref(0)

const dismissedAlerts = ref({
  alert1: false,
  alert2: false
})

const progressNotification = ref<ProgressNotification>({
  show: false,
  title: '',
  message: '',
  progress: 0
})

// Methods
const generateToastId = (): string => {
  return `toast-${++toastIdCounter.value}-${Date.now()}`
}

const showToast = (type: Toast['type'], title: string, message: string, options: Partial<Toast> = {}) => {
  const toast: Toast = {
    id: generateToastId(),
    type,
    title,
    message,
    ...options
  }

  toasts.value.push(toast)

  // Auto remove after 5 seconds unless persistent
  if (!toast.persistent) {
    setTimeout(() => {
      removeToast(toast.id)
    }, 5000)
  }
}

const removeToast = (id: string) => {
  const index = toasts.value.findIndex(toast => toast.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

const showPersistentToast = () => {
  showToast('info', 'Persistent Toast', 'This toast will stay until manually dismissed.', {
    persistent: true
  })
}

const showToastWithAction = () => {
  showToast('warning', 'Action Required', 'Please confirm this action to proceed.', {
    action: {
      label: 'Confirm',
      handler: () => {
        showToast('success', 'Confirmed!', 'Action has been confirmed.')
      }
    }
  })
}

const showToastWithProgress = () => {
  const toastId = generateToastId()
  const toast: Toast = {
    id: toastId,
    type: 'info',
    title: 'Processing...',
    message: 'Please wait while we process your request.',
    showProgress: true,
    progress: 0,
    persistent: true
  }

  toasts.value.push(toast)

  // Simulate progress
  const interval = setInterval(() => {
    const toastIndex = toasts.value.findIndex(t => t.id === toastId)
    if (toastIndex === -1) {
      clearInterval(interval)
      return
    }

    const currentToast = toasts.value[toastIndex]
    if (currentToast.progress! < 100) {
      currentToast.progress = currentToast.progress! + 10
    } else {
      clearInterval(interval)
      currentToast.type = 'success'
      currentToast.title = 'Complete!'
      currentToast.message = 'Processing completed successfully.'
      currentToast.showProgress = false
      setTimeout(() => removeToast(toastId), 2000)
    }
  }, 300)
}

const showMultipleToasts = () => {
  showToast('info', 'First Toast', 'This is the first toast notification.')
  setTimeout(() => {
    showToast('warning', 'Second Toast', 'This is the second toast notification.')
  }, 500)
  setTimeout(() => {
    showToast('success', 'Third Toast', 'This is the third toast notification.')
  }, 1000)
}

const showPositionedToast = (position: typeof toastPosition.value) => {
  toastPosition.value = position
  showToast('info', 'Positioned Toast', `This toast appears in the ${position.replace('-', ' ')} corner.`)
}

const dismissAlert = (alertId: keyof typeof dismissedAlerts.value) => {
  dismissedAlerts.value[alertId] = true
}

const resetAlerts = () => {
  dismissedAlerts.value = {
    alert1: false,
    alert2: false
  }
}

const simulateUpload = () => {
  progressNotification.value = {
    show: true,
    title: 'Uploading File',
    message: 'Uploading document.pdf...',
    progress: 0
  }

  const interval = setInterval(() => {
    if (progressNotification.value.progress < 100) {
      progressNotification.value.progress += 10
    } else {
      clearInterval(interval)
      progressNotification.value.message = 'Upload completed successfully!'
      setTimeout(() => {
        progressNotification.value.show = false
      }, 2000)
    }
  }, 400)
}

const simulateDownload = () => {
  progressNotification.value = {
    show: true,
    title: 'Downloading File',
    message: 'Downloading report.xlsx...',
    progress: 0
  }

  const interval = setInterval(() => {
    if (progressNotification.value.progress < 100) {
      progressNotification.value.progress += 15
    } else {
      clearInterval(interval)
      progressNotification.value.message = 'Download completed!'
      setTimeout(() => {
        progressNotification.value.show = false
      }, 2000)
    }
  }, 300)
}

const simulateProcess = () => {
  progressNotification.value = {
    show: true,
    title: 'Processing Data',
    message: 'Analyzing and processing your data...',
    progress: 0
  }

  const interval = setInterval(() => {
    if (progressNotification.value.progress < 100) {
      progressNotification.value.progress += 12
    } else {
      clearInterval(interval)
      progressNotification.value.message = 'Processing completed!'
      setTimeout(() => {
        progressNotification.value.show = false
      }, 2000)
    }
  }, 500)
}

const getToastIcon = (type: Toast['type']): string => {
  const icons = {
    info: 'M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
    success: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
    warning: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
    error: 'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17A1.5,1.5 0 0,0 13.5,15.5A1.5,1.5 0 0,0 12,14A1.5,1.5 0 0,0 10.5,15.5A1.5,1.5 0 0,0 12,17M12,10.5A1.5,1.5 0 0,0 13.5,9A1.5,1.5 0 0,0 12,7.5A1.5,1.5 0 0,0 10.5,9A1.5,1.5 0 0,0 12,10.5Z'
  }
  return icons[type]
}
</script>

<style scoped>
.notifications-page {
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

.demo-grid {
  display: grid;
  gap: var(--spacing-xl);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.demo-group {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
}

.demo-group h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.button-grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

.alert-grid {
  display: grid;
  gap: var(--spacing-lg);
}

/* Alerts */
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  border: 1px solid;
  background: var(--surface-primary);
}

.alert--info {
  border-color: var(--info-color);
  background: var(--info-light);
  color: var(--info-color);
}

.alert--success {
  border-color: var(--success-color);
  background: var(--success-light);
  color: var(--success-color);
}

.alert--warning {
  border-color: var(--warning-color);
  background: var(--warning-light);
  color: var(--warning-color);
}

.alert--error {
  border-color: var(--error-color);
  background: var(--error-light);
  color: var(--error-color);
}

.alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-content {
  flex: 1;
  min-width: 0;
}

.alert--dismissible {
  position: relative;
  padding-right: 3rem;
}

.alert-dismiss {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.alert-dismiss:hover {
  opacity: 1;
}

.alert--with-actions {
  align-items: flex-start;
}

.alert-title {
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.alert-message {
  margin-bottom: var(--spacing-md);
}

.alert-actions {
  display: flex;
  gap: var(--spacing-sm);
}

/* Progress Notifications */
.progress-notification {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.progress-title {
  font-weight: 600;
  color: var(--text-primary);
}

.progress-percentage {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.progress-bar {
  height: 8px;
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.progress-fill {
  height: 100%;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.progress-message {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Toast Container */
.toast-container {
  position: fixed;
  z-index: 9999;
  max-width: 400px;
  pointer-events: none;
}

.toast-container--top-right {
  top: var(--spacing-lg);
  right: var(--spacing-lg);
}

.toast-container--top-left {
  top: var(--spacing-lg);
  left: var(--spacing-lg);
}

.toast-container--bottom-right {
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
}

.toast-container--bottom-left {
  bottom: var(--spacing-lg);
  left: var(--spacing-lg);
}

/* Toast */
.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  background: var(--surface-primary);
  border: 1px solid;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  min-width: 300px;
}

.toast--info {
  border-color: var(--info-color);
  color: var(--info-color);
}

.toast--success {
  border-color: var(--success-color);
  color: var(--success-color);
}

.toast--warning {
  border-color: var(--warning-color);
  color: var(--warning-color);
}

.toast--error {
  border-color: var(--error-color);
  color: var(--error-color);
}

.toast-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
}

.toast-message {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.4;
}

.toast-progress {
  margin-top: var(--spacing-sm);
  height: 4px;
  background: var(--surface-secondary);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
}

.toast-progress-bar {
  height: 100%;
  background: currentColor;
  transition: width 0.3s ease;
}

.toast-actions {
  margin-top: var(--spacing-sm);
}

.toast-action-btn {
  background: none;
  border: 1px solid currentColor;
  color: inherit;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toast-action-btn:hover {
  background: currentColor;
  color: var(--surface-primary);
}

.toast-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: var(--spacing-xs);
  margin: -4px;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease;
}

.toast-close:hover {
  background: var(--surface-hover);
  color: var(--text-primary);
}

/* Toast Animations */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
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

.btn-secondary {
  background: var(--text-secondary);
  color: var(--surface-primary);
  border-color: var(--text-secondary);
}

.btn-secondary:hover {
  opacity: 0.9;
}

.btn-success {
  background: var(--success-color);
  color: var(--text-on-primary);
  border-color: var(--success-color);
}

.btn-success:hover {
  opacity: 0.9;
}

.btn-warning {
  background: var(--warning-color);
  color: var(--text-on-primary);
  border-color: var(--warning-color);
}

.btn-warning:hover {
  opacity: 0.9;
}

.btn-error {
  background: var(--error-color);
  color: var(--text-on-primary);
  border-color: var(--error-color);
}

.btn-error:hover {
  opacity: 0.9;
}

.btn-info {
  background: var(--info-color);
  color: var(--text-on-primary);
  border-color: var(--info-color);
}

.btn-info:hover {
  opacity: 0.9;
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

.btn-outline-info {
  background: transparent;
  color: var(--info-color);
  border-color: var(--info-color);
}

.btn-outline-info:hover {
  background: var(--info-color);
  color: var(--text-on-primary);
}

.btn-outline-warning {
  background: transparent;
  color: var(--warning-color);
  border-color: var(--warning-color);
}

.btn-outline-warning:hover {
  background: var(--warning-color);
  color: var(--text-on-primary);
}

/* Utility Classes */
.mt-4 {
  margin-top: var(--spacing-lg);
}
</style>
