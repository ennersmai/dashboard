<template>
  <div class="icons-page">
    <div class="page-header">
      <h1>Simple Line Icons</h1>
      <p>Complete Simple Line Icons collection with 180+ minimal line icons in 4-column layout.</p>
    </div>

    <!-- Search and Filter -->
    <div class="showcase-section">
      <div class="icon-controls">
        <div class="search-box">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search icons..." 
            class="form-control"
          >
        </div>
        <div class="icon-count">
          {{ filteredIcons.length }} icons
        </div>
      </div>
      
      <div class="icon-demo">
        <div class="icon-list">
          <div class="icon-row" v-for="icon in filteredIcons" :key="icon.name">
            <div class="icon-display">
              <i :class="`icon-${icon.name}`"></i>
            </div>
            <div class="icon-name">{{ icon.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')

// Complete Simple Line Icons Collection
const iconNames = [
  'user', 'people', 'user-female', 'user-follow', 'user-following', 'user-unfollow',
  'login', 'logout', 'emotsmile', 'phone', 'call-end', 'call-in', 'call-out',
  'map', 'location-pin', 'direction', 'directions', 'compass', 'layers',
  'menu', 'list', 'options-vertical', 'options', 'arrow-down', 'arrow-left',
  'arrow-right', 'arrow-up', 'arrow-up-circle', 'arrow-left-circle', 'arrow-right-circle',
  'arrow-down-circle', 'check', 'clock', 'plus', 'close', 'trophy', 'screen-smartphone',
  'screen-desktop', 'plane', 'notebook', 'mustache', 'mouse', 'magnet', 'energy',
  'disc', 'cursor', 'cursor-move', 'crop', 'chemistry', 'speedometer', 'shield',
  'screen-tablet', 'magic-wand', 'hourglass', 'graduation', 'ghost', 'game-controller',
  'fire', 'eyeglass', 'envelope-open', 'envelope-letter', 'bell', 'badge', 'anchor',
  'wallet', 'vector', 'speech', 'puzzle', 'printer', 'present', 'playlist', 'pin',
  'picture', 'handbag', 'globe-alt', 'globe', 'folder-alt', 'folder', 'film',
  'feed', 'drop', 'drawer', 'docs', 'doc', 'diamond', 'cup', 'calculator',
  'bubbles', 'briefcase', 'book-open', 'basket-loaded', 'basket', 'bag', 'action-undo',
  'action-redo', 'wrench', 'umbrella', 'trash', 'tag', 'support', 'frame',
  'size-fullscreen', 'size-actual', 'shuffle', 'share-alt', 'share', 'rocket',
  'question', 'pie-chart', 'pencil', 'note', 'loop', 'home', 'grid', 'graph',
  'microphone', 'music-tone-alt', 'music-tone', 'earphones-alt', 'earphones',
  'equalizer', 'like', 'dislike', 'control-start', 'control-rewind', 'control-play',
  'control-pause', 'control-forward', 'control-end', 'volume-1', 'volume-2',
  'volume-off', 'calendar', 'bulb', 'chart', 'ban', 'bubble', 'camrecorder',
  'camera', 'cloud-download', 'cloud-upload', 'envelope', 'eye', 'flag', 'heart',
  'information', 'key', 'link', 'lock', 'lock-open', 'magnifier', 'magnifier-add',
  'magnifier-remove', 'paper-clip', 'paper-plane', 'power', 'refresh', 'reload',
  'settings', 'star', 'symbol-female', 'symbol-male', 'target', 'credit-card',
  'paypal', 'social-tumblr', 'social-twitter', 'social-facebook', 'social-instagram',
  'social-linkedin', 'social-pinterest', 'social-github', 'social-gplus', 'social-reddit',
  'social-skype', 'social-dribbble', 'social-behance', 'social-foursqare', 'social-soundcloud',
  'social-spotify', 'social-stumbleupon', 'social-youtube', 'social-dropbox'
]

const allIcons = ref(
  iconNames.map(name => ({
    name: name,
    class: `icon-${name}`
  }))
)

const filteredIcons = computed(() => {
  if (!searchQuery.value) {
    return allIcons.value
  }
  
  return allIcons.value.filter(icon => 
    icon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>
.icons-page {
  padding: var(--spacing-lg);
  max-width: 1400px;
  margin: 0 auto;
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

.icon-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
}

.search-box {
  flex: 1;
  max-width: 300px;
}

.form-control {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  font-size: 0.875rem;
  background: var(--surface-primary);
  color: var(--text-primary);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.icon-count {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.icon-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
}

.icon-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
}

.icon-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  background: var(--surface-secondary);
  transition: all 0.2s ease;
  cursor: pointer;
}

.icon-row:hover {
  background: var(--surface-hover);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon-display {
  width: 20px;
  height: 20px;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-display i {
  font-size: 18px;
}

.icon-name {
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 500;
  word-break: break-word;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .icon-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .icon-list {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .icon-controls {
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: stretch;
  }
  
  .search-box {
    max-width: none;
  }
}

@media (max-width: 480px) {
  .icon-list {
    grid-template-columns: 1fr;
  }
}
</style>