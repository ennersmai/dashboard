<template>
  <div class="sweetalert-page">
    <div class="page-header">
      <h1>Sweet Alerts</h1>
      <p>Beautiful, responsive, customizable modal dialogs and confirmation alerts.</p>
    </div>

    <!-- Basic Alerts -->
    <div class="showcase-section">
      <h2>Basic Alert Types</h2>
      <div class="button-grid">
        <button class="btn btn-primary" @click="showBasicAlert('info')">
          Info Alert
        </button>
        <button class="btn btn-success" @click="showBasicAlert('success')">
          Success Alert
        </button>
        <button class="btn btn-warning" @click="showBasicAlert('warning')">
          Warning Alert
        </button>
        <button class="btn btn-error" @click="showBasicAlert('error')">
          Error Alert
        </button>
      </div>
    </div>

    <!-- Confirmation Dialogs -->
    <div class="showcase-section">
      <h2>Confirmation Dialogs</h2>
      <div class="button-grid">
        <button class="btn btn-outline-primary" @click="showConfirmDialog">
          Confirm Action
        </button>
        <button class="btn btn-outline-warning" @click="showDeleteConfirm">
          Delete Confirmation
        </button>
        <button class="btn btn-outline-secondary" @click="showCustomConfirm">
          Custom Buttons
        </button>
        <button class="btn btn-outline-info" @click="showAsyncConfirm">
          Async Operation
        </button>
      </div>
    </div>

    <!-- Input Dialogs -->
    <div class="showcase-section">
      <h2>Input Dialogs</h2>
      <div class="button-grid">
        <button class="btn btn-secondary" @click="showTextInput">
          Text Input
        </button>
        <button class="btn btn-secondary" @click="showEmailInput">
          Email Input
        </button>
        <button class="btn btn-secondary" @click="showPasswordInput">
          Password Input
        </button>
        <button class="btn btn-secondary" @click="showSelectInput">
          Select Input
        </button>
      </div>
    </div>

    <!-- Advanced Features -->
    <div class="showcase-section">
      <h2>Advanced Features</h2>
      <div class="button-grid">
        <button class="btn btn-info" @click="showTimerAlert">
          Auto Close Timer
        </button>
        <button class="btn btn-info" @click="showProgressAlert">
          Progress Dialog
        </button>
        <button class="btn btn-info" @click="showImageAlert">
          Image Alert
        </button>
        <button class="btn btn-info" @click="showHTMLAlert">
          HTML Content
        </button>
      </div>
    </div>

    <!-- Custom Styling -->
    <div class="showcase-section">
      <h2>Custom Styling</h2>
      <div class="button-grid">
        <button class="btn btn-outline-success" @click="showCustomStyleAlert">
          Custom Colors
        </button>
        <button class="btn btn-outline-warning" @click="showPositionAlert">
          Top Position
        </button>
        <button class="btn btn-outline-error" @click="showAnimationAlert">
          Custom Animation
        </button>
        <button class="btn btn-outline-info" @click="showFullWidthAlert">
          Full Width
        </button>
      </div>
    </div>
  </div>

  <!-- Modal Component -->
  <Teleport to="body">
    <div 
      v-if="modalState.show" 
      class="modal-overlay"
      :class="modalState.classes"
      @click="handleOverlayClick"
    >
      <div 
        :class="['modal', `modal--${modalState.type}`, modalState.size && `modal--${modalState.size}`, modalState.position && `modal--${modalState.position}`, modalState.animation && `modal--${modalState.animation}`]"
        @click.stop
      >
        <!-- Icon -->
        <div v-if="modalState.icon" class="modal-icon">
          <svg v-if="modalState.type === 'info'" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <svg v-if="modalState.type === 'success'" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
          </svg>
          <svg v-if="modalState.type === 'warning'" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
          </svg>
          <svg v-if="modalState.type === 'error'" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17A1.5,1.5 0 0,0 13.5,15.5A1.5,1.5 0 0,0 12,14A1.5,1.5 0 0,0 10.5,15.5A1.5,1.5 0 0,0 12,17M12,10.5A1.5,1.5 0 0,0 13.5,9A1.5,1.5 0 0,0 12,7.5A1.5,1.5 0 0,0 10.5,9A1.5,1.5 0 0,0 12,10.5Z" />
          </svg>
        </div>

        <!-- Image -->
        <div v-if="modalState.image" class="modal-image">
          <img :src="modalState.image" alt="Modal Image">
        </div>

        <!-- Content -->
        <div class="modal-content">
          <h2 v-if="modalState.title" class="modal-title">{{ modalState.title }}</h2>
          <div v-if="modalState.html" class="modal-text" v-html="modalState.html"></div>
          <div v-else-if="modalState.text" class="modal-text">{{ modalState.text }}</div>
          
          <!-- Input -->
          <div v-if="modalState.input" class="modal-input-group">
            <label v-if="modalState.inputLabel" class="modal-input-label">{{ modalState.inputLabel }}</label>
            <input 
              v-if="modalState.input === 'text' || modalState.input === 'email' || modalState.input === 'password'"
              v-model="inputValue"
              :type="modalState.input"
              :placeholder="modalState.inputPlaceholder"
              class="modal-input"
              @keyup.enter="handleConfirm"
              ref="modalInput"
            >
            <select 
              v-if="modalState.input === 'select'"
              v-model="inputValue"
              class="modal-input"
              ref="modalInput"
            >
              <option value="">{{ modalState.inputPlaceholder || 'Select an option' }}</option>
              <option v-for="option in modalState.inputOptions" :key="option.value" :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>

          <!-- Progress -->
          <div v-if="modalState.showProgress" class="modal-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progressValue + '%' }"></div>
            </div>
            <div class="progress-text">{{ progressValue }}%</div>
          </div>

          <!-- Timer -->
          <div v-if="modalState.timer" class="modal-timer">
            Auto close in {{ timerValue }}s
            <div class="timer-bar">
              <div class="timer-fill" :style="{ width: ((modalState.timer - timerValue) / modalState.timer * 100) + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div v-if="modalState.buttons.length" class="modal-actions">
          <button 
            v-for="button in modalState.buttons"
            :key="button.text"
            :class="['modal-btn', `modal-btn--${button.type}`]"
            :disabled="button.loading"
            @click="handleButtonClick(button)"
          >
            <span v-if="button.loading" class="btn-spinner"></span>
            {{ button.text }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

// Types
interface ModalButton {
  text: string
  type: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  action: 'confirm' | 'cancel' | 'dismiss' | (() => void)
  loading?: boolean
}

interface ModalState {
  show: boolean
  type: 'info' | 'success' | 'warning' | 'error'
  title?: string
  text?: string
  html?: string
  icon?: boolean
  image?: string
  input?: 'text' | 'email' | 'password' | 'select'
  inputLabel?: string
  inputPlaceholder?: string
  inputOptions?: { value: string; text: string }[]
  buttons: ModalButton[]
  timer?: number
  showProgress?: boolean
  allowOutsideClick?: boolean
  size?: 'sm' | 'lg' | 'xl'
  position?: 'top' | 'center'
  animation?: 'fade' | 'zoom' | 'slide'
  classes?: string
}

// State
const modalState = ref<ModalState>({
  show: false,
  type: 'info',
  buttons: [],
  allowOutsideClick: true
})

const inputValue = ref('')
const progressValue = ref(0)
const timerValue = ref(0)
const modalInput = ref<HTMLInputElement>()

let timerInterval: number | null = null
let progressInterval: number | null = null

// Methods
const showModal = async (config: Partial<ModalState>): Promise<any> => {
  // Reset state
  inputValue.value = ''
  progressValue.value = 0
  timerValue.value = config.timer || 0
  
  // Clear existing intervals
  if (timerInterval) clearInterval(timerInterval)
  if (progressInterval) clearInterval(progressInterval)

  // Update modal state
  modalState.value = {
    ...modalState.value,
    ...config,
    show: true
  }

  // Focus input if present
  if (config.input) {
    await nextTick()
    modalInput.value?.focus()
  }

  // Start timer if present
  if (config.timer) {
    timerInterval = setInterval(() => {
      timerValue.value -= 1
      if (timerValue.value <= 0) {
        hideModal()
        if (timerInterval) clearInterval(timerInterval)
      }
    }, 1000)
  }

  return new Promise((resolve) => {
    modalState.value.resolve = resolve
  })
}

const hideModal = () => {
  modalState.value.show = false
  if (timerInterval) clearInterval(timerInterval)
  if (progressInterval) clearInterval(progressInterval)
}

const handleOverlayClick = () => {
  if (modalState.value.allowOutsideClick) {
    hideModal()
    modalState.value.resolve?.(false)
  }
}

const handleConfirm = () => {
  const result = modalState.value.input ? inputValue.value : true
  hideModal()
  modalState.value.resolve?.(result)
}

const handleCancel = () => {
  hideModal()
  modalState.value.resolve?.(false)
}

const handleButtonClick = async (button: ModalButton) => {
  if (typeof button.action === 'function') {
    button.loading = true
    try {
      await button.action()
    } finally {
      button.loading = false
    }
  } else if (button.action === 'confirm') {
    handleConfirm()
  } else if (button.action === 'cancel' || button.action === 'dismiss') {
    handleCancel()
  }
}

// Alert Functions
const showBasicAlert = (type: ModalState['type']) => {
  const config = {
    info: { title: 'Information', text: 'This is an informational message.' },
    success: { title: 'Success!', text: 'Your action was completed successfully.' },
    warning: { title: 'Warning!', text: 'Please be careful with this action.' },
    error: { title: 'Error!', text: 'Something went wrong. Please try again.' }
  }

  showModal({
    type,
    icon: true,
    ...config[type],
    buttons: [{ text: 'OK', type: 'primary', action: 'confirm' }]
  })
}

const showConfirmDialog = async () => {
  const result = await showModal({
    type: 'info',
    icon: true,
    title: 'Are you sure?',
    text: 'Do you want to proceed with this action?',
    buttons: [
      { text: 'Yes, proceed', type: 'primary', action: 'confirm' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ]
  })

  if (result) {
    showModal({
      type: 'success',
      icon: true,
      title: 'Done!',
      text: 'Your action has been processed.',
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showDeleteConfirm = async () => {
  const result = await showModal({
    type: 'warning',
    icon: true,
    title: 'Delete Item',
    text: 'This action cannot be undone. Are you sure you want to delete this item?',
    buttons: [
      { text: 'Yes, delete it', type: 'error', action: 'confirm' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ],
    allowOutsideClick: false
  })

  if (result) {
    showModal({
      type: 'success',
      icon: true,
      title: 'Deleted!',
      text: 'The item has been successfully deleted.',
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showCustomConfirm = async () => {
  const result = await showModal({
    type: 'info',
    icon: true,
    title: 'Custom Options',
    text: 'Choose your preferred action:',
    buttons: [
      { text: 'Save', type: 'success', action: 'confirm' },
      { text: 'Save & Continue', type: 'primary', action: 'confirm' },
      { text: 'Discard', type: 'warning', action: 'cancel' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ]
  })

  if (result) {
    showModal({
      type: 'success',
      icon: true,
      title: 'Action Completed',
      text: 'Your choice has been processed.',
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showAsyncConfirm = async () => {
  const result = await showModal({
    type: 'warning',
    icon: true,
    title: 'Process Data',
    text: 'This will process a large amount of data. Continue?',
    buttons: [
      { 
        text: 'Process Now', 
        type: 'primary', 
        action: async () => {
          // Simulate async operation
          await new Promise(resolve => setTimeout(resolve, 2000))
          hideModal()
          showModal({
            type: 'success',
            icon: true,
            title: 'Processing Complete',
            text: 'Data has been processed successfully.',
            buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
          })
        }
      },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ]
  })
}

const showTextInput = async () => {
  const result = await showModal({
    type: 'info',
    icon: true,
    title: 'Enter your name',
    input: 'text',
    inputPlaceholder: 'Enter your full name',
    buttons: [
      { text: 'Submit', type: 'primary', action: 'confirm' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ]
  })

  if (result) {
    showModal({
      type: 'success',
      icon: true,
      title: 'Hello!',
      text: `Nice to meet you, ${result}!`,
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showEmailInput = async () => {
  const result = await showModal({
    type: 'info',
    icon: true,
    title: 'Email Subscription',
    text: 'Enter your email to subscribe to our newsletter:',
    input: 'email',
    inputPlaceholder: 'Enter your email address',
    buttons: [
      { text: 'Subscribe', type: 'primary', action: 'confirm' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ]
  })

  if (result) {
    showModal({
      type: 'success',
      icon: true,
      title: 'Subscribed!',
      text: `You've been subscribed with ${result}`,
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showPasswordInput = async () => {
  const result = await showModal({
    type: 'warning',
    icon: true,
    title: 'Security Check',
    text: 'Please enter your password to continue:',
    input: 'password',
    inputPlaceholder: 'Enter your password',
    buttons: [
      { text: 'Verify', type: 'primary', action: 'confirm' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ],
    allowOutsideClick: false
  })

  if (result) {
    showModal({
      type: 'success',
      icon: true,
      title: 'Verified!',
      text: 'Password verification successful.',
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showSelectInput = async () => {
  const result = await showModal({
    type: 'info',
    icon: true,
    title: 'Choose your country',
    input: 'select',
    inputPlaceholder: 'Select your country',
    inputOptions: [
      { value: 'us', text: 'United States' },
      { value: 'ca', text: 'Canada' },
      { value: 'uk', text: 'United Kingdom' },
      { value: 'de', text: 'Germany' },
      { value: 'fr', text: 'France' },
      { value: 'jp', text: 'Japan' }
    ],
    buttons: [
      { text: 'Select', type: 'primary', action: 'confirm' },
      { text: 'Cancel', type: 'secondary', action: 'cancel' }
    ]
  })

  if (result) {
    const country = modalState.value.inputOptions?.find(opt => opt.value === result)
    showModal({
      type: 'success',
      icon: true,
      title: 'Country Selected',
      text: `You selected: ${country?.text}`,
      buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
    })
  }
}

const showTimerAlert = () => {
  showModal({
    type: 'info',
    icon: true,
    title: 'Auto Close',
    text: 'This alert will automatically close in 5 seconds.',
    timer: 5,
    buttons: [{ text: 'OK', type: 'primary', action: 'confirm' }]
  })
}

const showProgressAlert = () => {
  progressValue.value = 0
  
  showModal({
    type: 'info',
    icon: true,
    title: 'Processing...',
    text: 'Please wait while we process your request.',
    showProgress: true,
    buttons: [],
    allowOutsideClick: false
  })

  progressInterval = setInterval(() => {
    progressValue.value += 10
    if (progressValue.value >= 100) {
      if (progressInterval) clearInterval(progressInterval)
      hideModal()
      showModal({
        type: 'success',
        icon: true,
        title: 'Complete!',
        text: 'Processing has been completed successfully.',
        buttons: [{ text: 'OK', type: 'success', action: 'confirm' }]
      })
    }
  }, 300)
}

const showImageAlert = () => {
  showModal({
    type: 'info',
    title: 'Image Alert',
    text: 'This alert includes a custom image.',
    image: 'https://via.placeholder.com/300x200/4F46E5/ffffff?text=Custom+Image',
    buttons: [{ text: 'Nice!', type: 'primary', action: 'confirm' }]
  })
}

const showHTMLAlert = () => {
  showModal({
    type: 'info',
    title: 'HTML Content',
    html: `
      <p>This alert supports <strong>HTML content</strong>!</p>
      <ul>
        <li>Rich text formatting</li>
        <li><em>Italic</em> and <strong>bold</strong> text</li>
        <li><a href="#" style="color: var(--primary-color);">Links</a></li>
        <li>Lists and other elements</li>
      </ul>
      <p style="color: var(--success-color);">Perfect for complex content!</p>
    `,
    buttons: [{ text: 'Awesome!', type: 'primary', action: 'confirm' }]
  })
}

const showCustomStyleAlert = () => {
  showModal({
    type: 'success',
    icon: true,
    title: 'Custom Styling',
    text: 'This alert uses custom colors and styling.',
    buttons: [{ text: 'Great!', type: 'success', action: 'confirm' }],
    classes: 'modal-overlay--custom'
  })
}

const showPositionAlert = () => {
  showModal({
    type: 'warning',
    icon: true,
    title: 'Top Position',
    text: 'This alert appears at the top of the screen.',
    position: 'top',
    buttons: [{ text: 'OK', type: 'warning', action: 'confirm' }]
  })
}

const showAnimationAlert = () => {
  showModal({
    type: 'error',
    icon: true,
    title: 'Custom Animation',
    text: 'This alert uses a custom slide animation.',
    animation: 'slide',
    buttons: [{ text: 'Cool!', type: 'error', action: 'confirm' }]
  })
}

const showFullWidthAlert = () => {
  showModal({
    type: 'info',
    icon: true,
    title: 'Full Width Alert',
    text: 'This alert takes up more screen space for complex content.',
    size: 'xl',
    buttons: [{ text: 'Got it!', type: 'primary', action: 'confirm' }]
  })
}
</script>

<style scoped>
.sweetalert-page {
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

.button-grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: var(--spacing-lg);
  animation: fadeIn 0.3s ease;
}

.modal-overlay--custom {
  background: rgba(16, 185, 129, 0.2);
}

/* Modal */
.modal {
  background: var(--surface-primary);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 400px;
  width: 100%;
  text-align: center;
  animation: modalZoom 0.3s ease;
  border: 1px solid var(--border-light);
}

.modal--sm {
  max-width: 300px;
}

.modal--lg {
  max-width: 600px;
}

.modal--xl {
  max-width: 800px;
}

.modal--top {
  align-self: flex-start;
  margin-top: 10vh;
}

.modal--slide {
  animation: modalSlide 0.3s ease;
}

/* Modal Icon */
.modal-icon {
  padding: var(--spacing-xl) var(--spacing-xl) 0;
}

.modal--info .modal-icon {
  color: var(--info-color);
}

.modal--success .modal-icon {
  color: var(--success-color);
}

.modal--warning .modal-icon {
  color: var(--warning-color);
}

.modal--error .modal-icon {
  color: var(--error-color);
}

/* Modal Image */
.modal-image {
  padding: var(--spacing-xl) var(--spacing-xl) 0;
}

.modal-image img {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
}

/* Modal Content */
.modal-content {
  padding: var(--spacing-lg) var(--spacing-xl);
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.modal-text {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

/* Modal Input */
.modal-input-group {
  margin: var(--spacing-lg) 0;
  text-align: left;
}

.modal-input-label {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.modal-input {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background: var(--surface-primary);
  color: var(--text-primary);
  transition: border-color 0.2s ease;
}

.modal-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

/* Modal Progress */
.modal-progress {
  margin: var(--spacing-lg) 0;
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

.progress-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Modal Timer */
.modal-timer {
  margin: var(--spacing-lg) 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.timer-bar {
  height: 4px;
  background: var(--surface-secondary);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  margin-top: var(--spacing-sm);
}

.timer-fill {
  height: 100%;
  background: var(--warning-color);
  transition: width 1s linear;
}

/* Modal Actions */
.modal-actions {
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.modal-btn {
  padding: var(--spacing-md) var(--spacing-lg);
  border: 1px solid transparent;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 100px;
  justify-content: center;
}

.modal-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.modal-btn--primary {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-color: var(--primary-color);
}

.modal-btn--primary:hover:not(:disabled) {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.modal-btn--secondary {
  background: transparent;
  color: var(--text-secondary);
  border-color: var(--border-light);
}

.modal-btn--secondary:hover:not(:disabled) {
  background: var(--surface-hover);
  color: var(--text-primary);
}

.modal-btn--success {
  background: var(--success-color);
  color: var(--text-on-primary);
  border-color: var(--success-color);
}

.modal-btn--success:hover:not(:disabled) {
  opacity: 0.9;
}

.modal-btn--warning {
  background: var(--warning-color);
  color: var(--text-on-primary);
  border-color: var(--warning-color);
}

.modal-btn--warning:hover:not(:disabled) {
  opacity: 0.9;
}

.modal-btn--error {
  background: var(--error-color);
  color: var(--text-on-primary);
  border-color: var(--error-color);
}

.modal-btn--error:hover:not(:disabled) {
  opacity: 0.9;
}

/* Button Spinner */
.btn-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalZoom {
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes modalSlide {
  from { 
    opacity: 0;
    transform: translateY(-50px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
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

.btn-outline-success {
  background: transparent;
  color: var(--success-color);
  border-color: var(--success-color);
}

.btn-outline-success:hover {
  background: var(--success-color);
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

.btn-outline-error {
  background: transparent;
  color: var(--error-color);
  border-color: var(--error-color);
}

.btn-outline-error:hover {
  background: var(--error-color);
  color: var(--text-on-primary);
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

/* Responsive */
@media (max-width: 768px) {
  .modal {
    max-width: 95vw;
    margin: var(--spacing-md);
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .modal-btn {
    width: 100%;
  }
}
</style>
