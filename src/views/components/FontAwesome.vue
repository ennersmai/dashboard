<template>
  <div class="icons-page">
    <div class="page-header">
      <h1>Font Awesome Icons</h1>
      <p>Complete FontAwesome free collection with 350+ icons in 4-column layout.</p>
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
              <i :class="`fas fa-${icon.name}`"></i>
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

// Complete FontAwesome Free Icons Collection
const iconNames = [
  'address-book', 'address-card', 'adjust', 'air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right',
  'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left',
  'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'angry', 'apple-alt',
  'archive', 'archway', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up',
  'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right',
  'arrow-up', 'arrows-alt', 'arrows-alt-h', 'arrows-alt-v', 'assistive-listening-systems', 'asterisk', 'at', 'atlas',
  'atom', 'audio-description', 'award', 'backspace', 'backward', 'balance-scale', 'ban', 'band-aid', 'barcode', 'bars',
  'baseball-ball', 'basketball-ball', 'bath', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter',
  'battery-three-quarters', 'bed', 'beer', 'bell', 'bell-slash', 'bezier-curve', 'bicycle', 'binoculars', 'birthday-cake',
  'blender', 'blind', 'bold', 'bolt', 'bomb', 'bone', 'bong', 'book', 'book-open', 'book-reader', 'bookmark', 'bowling-ball',
  'box', 'box-open', 'boxes', 'braille', 'brain', 'briefcase', 'briefcase-medical', 'broadcast-tower', 'broom', 'brush',
  'bug', 'building', 'bullhorn', 'bullseye', 'burn', 'bus', 'bus-alt', 'calculator', 'calendar', 'calendar-alt',
  'calendar-check', 'calendar-minus', 'calendar-plus', 'calendar-times', 'camera', 'camera-retro', 'cannabis', 'capsules',
  'car', 'car-alt', 'car-battery', 'car-crash', 'car-side', 'caret-down', 'caret-left', 'caret-right', 'caret-square-down',
  'caret-square-left', 'caret-square-right', 'caret-square-up', 'caret-up', 'cart-arrow-down', 'cart-plus', 'certificate',
  'chalkboard', 'chalkboard-teacher', 'charging-station', 'chart-area', 'chart-bar', 'chart-line', 'chart-pie', 'check',
  'check-circle', 'check-double', 'check-square', 'chess', 'chess-bishop', 'chess-board', 'chess-king', 'chess-knight',
  'chess-pawn', 'chess-queen', 'chess-rook', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right',
  'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child', 'church', 'circle',
  'circle-notch', 'clipboard', 'clipboard-check', 'clipboard-list', 'clock', 'clone', 'closed-captioning', 'cloud',
  'cloud-download-alt', 'cloud-upload-alt', 'cocktail', 'code', 'code-branch', 'coffee', 'cog', 'cogs', 'coins', 'columns',
  'comment', 'comment-alt', 'comment-dots', 'comment-slash', 'comments', 'compact-disc', 'compass', 'compress',
  'concierge-bell', 'cookie', 'cookie-bite', 'copy', 'copyright', 'couch', 'credit-card', 'crop', 'crop-alt', 'crosshairs',
  'crow', 'crown', 'cube', 'cubes', 'cut', 'database', 'deaf', 'desktop', 'diagnoses', 'dice', 'dice-five', 'dice-four',
  'dice-one', 'dice-six', 'dice-three', 'dice-two', 'digital-tachograph', 'directions', 'divide', 'dizzy', 'dna',
  'dollar-sign', 'dolly', 'dolly-flatbed', 'donate', 'door-closed', 'door-open', 'dot-circle', 'dove', 'download',
  'drafting-compass', 'draw-polygon', 'drum', 'drum-steelpan', 'dumbbell', 'edit', 'eject', 'ellipsis-h', 'ellipsis-v',
  'envelope', 'envelope-open', 'envelope-square', 'equals', 'eraser', 'euro-sign', 'exchange-alt', 'exclamation',
  'exclamation-circle', 'exclamation-triangle', 'expand', 'expand-arrows-alt', 'external-link-alt', 'external-link-square-alt',
  'eye', 'eye-dropper', 'eye-slash', 'fast-backward', 'fast-forward', 'fax', 'feather', 'feather-alt', 'female', 'fighter-jet',
  'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-contract', 'file-download', 'file-excel', 'file-export',
  'file-image', 'file-import', 'file-invoice', 'file-invoice-dollar', 'file-medical', 'file-medical-alt', 'file-pdf',
  'file-powerpoint', 'file-prescription', 'file-signature', 'file-upload', 'file-video', 'file-word', 'fill', 'fill-drip',
  'film', 'filter', 'fingerprint', 'fire', 'fire-extinguisher', 'first-aid', 'fish', 'flag', 'flag-checkered', 'flask',
  'flushed', 'folder', 'folder-open', 'font', 'football-ball', 'forward', 'frog', 'frown', 'frown-open', 'futbol', 'gamepad',
  'gas-pump', 'gavel', 'gem', 'genderless', 'gift', 'glass-martini', 'glass-martini-alt', 'glasses', 'globe', 'globe-africa',
  'globe-americas', 'globe-asia', 'golf-ball', 'graduation-cap', 'greater-than', 'greater-than-equal', 'grimace', 'grin',
  'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears',
  'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'grip-horizontal', 'grip-vertical', 'h-square',
  'hand-holding', 'hand-holding-heart', 'hand-holding-usd', 'hand-lizard', 'hand-paper', 'hand-peace', 'hand-point-down',
  'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-spock',
  'hands', 'hands-helping', 'handshake', 'hashtag', 'hdd', 'heading', 'headphones', 'headphones-alt', 'headset', 'heart',
  'heartbeat', 'helicopter', 'highlighter', 'history', 'hockey-puck', 'home', 'hospital', 'hospital-alt', 'hospital-symbol',
  'hot-tub', 'hotel', 'hourglass', 'hourglass-end', 'hourglass-half', 'hourglass-start', 'i-cursor', 'id-badge', 'id-card',
  'id-card-alt', 'image', 'images', 'inbox', 'indent', 'industry', 'infinity', 'info', 'info-circle', 'italic', 'joint',
  'key', 'keyboard', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'kiwi-bird', 'language', 'laptop', 'laptop-code', 'laugh',
  'laugh-beam', 'laugh-squint', 'laugh-wink', 'layer-group', 'leaf', 'lemon', 'less-than', 'less-than-equal',
  'level-down-alt', 'level-up-alt', 'life-ring', 'lightbulb', 'link', 'lira-sign', 'list', 'list-alt', 'list-ol', 'list-ul',
  'location-arrow', 'lock', 'lock-open', 'long-arrow-alt-down', 'long-arrow-alt-left', 'long-arrow-alt-right',
  'long-arrow-alt-up', 'low-vision', 'luggage-cart', 'magic', 'magnet', 'male', 'map', 'map-marked', 'map-marked-alt',
  'map-marker', 'map-marker-alt', 'map-pin', 'map-signs', 'marker', 'mars', 'mars-double', 'mars-stroke', 'mars-stroke-h',
  'mars-stroke-v', 'medal', 'medkit', 'meh', 'meh-blank', 'meh-rolling-eyes', 'memory', 'mercury', 'microchip', 'microphone',
  'microphone-alt', 'microphone-alt-slash', 'microphone-slash', 'microscope', 'minus', 'minus-circle', 'minus-square',
  'mobile', 'mobile-alt', 'money-bill', 'money-bill-alt', 'money-bill-wave', 'money-bill-wave-alt', 'money-check',
  'money-check-alt', 'monument', 'moon', 'mortar-pestle', 'motorcycle', 'mouse-pointer', 'music', 'neuter', 'newspaper',
  'not-equal', 'notes-medical', 'object-group', 'object-ungroup', 'oil-can', 'outdent', 'paint-brush', 'paint-roller',
  'palette', 'pallet', 'paper-plane', 'paperclip', 'parachute-box', 'paragraph', 'parking', 'passport', 'paste', 'pause',
  'pause-circle', 'paw', 'pen', 'pen-alt', 'pen-fancy', 'pen-nib', 'pen-square', 'pencil-alt', 'pencil-ruler',
  'people-carry', 'percent', 'percentage', 'phone', 'phone-slash', 'phone-square', 'phone-volume', 'piggy-bank', 'pills',
  'plane', 'plane-arrival', 'plane-departure', 'play', 'play-circle', 'plug', 'plus', 'plus-circle', 'plus-square',
  'podcast', 'poo', 'poop', 'portrait', 'pound-sign', 'power-off', 'prescription', 'prescription-bottle',
  'prescription-bottle-alt', 'print', 'procedures', 'project-diagram', 'puzzle-piece', 'qrcode', 'question',
  'question-circle', 'quidditch', 'quote-left', 'quote-right', 'random', 'receipt', 'recycle', 'redo', 'redo-alt',
  'registered', 'reply', 'reply-all', 'retweet', 'ribbon', 'road', 'robot', 'rocket', 'route', 'rss', 'rss-square',
  'ruble-sign', 'ruler', 'ruler-combined', 'ruler-horizontal', 'ruler-vertical', 'rupee-sign', 'sad-cry', 'sad-tear',
  'save', 'school', 'screwdriver', 'search', 'search-minus', 'search-plus', 'seedling', 'server', 'shapes', 'share',
  'share-alt', 'share-alt-square', 'share-square', 'shekel-sign', 'shield-alt', 'ship', 'shipping-fast', 'shoe-prints',
  'shopping-bag', 'shopping-basket', 'shopping-cart', 'shower', 'shuttle-van', 'sign', 'sign-in-alt', 'sign-language',
  'sign-out-alt', 'signal', 'signature', 'sitemap', 'skull', 'sliders-h', 'smile', 'smile-beam', 'smile-wink', 'smoking',
  'smoking-ban', 'snowflake', 'solar-panel', 'sort', 'sort-alpha-down', 'sort-alpha-up', 'sort-amount-down',
  'sort-amount-up', 'sort-down', 'sort-numeric-down', 'sort-numeric-up', 'sort-up', 'spa', 'space-shuttle', 'spinner',
  'splotch', 'spray-can', 'square', 'square-full', 'stamp', 'star', 'star-half', 'star-half-alt', 'star-of-life',
  'step-backward', 'step-forward', 'stethoscope', 'sticky-note', 'stop', 'stop-circle', 'stopwatch', 'store', 'store-alt',
  'stream', 'street-view', 'strikethrough', 'stroopwafel', 'subscript', 'subway', 'suitcase', 'suitcase-rolling', 'sun',
  'superscript', 'surprise', 'swatchbook', 'swimmer', 'swimming-pool', 'sync', 'sync-alt', 'syringe', 'table',
  'table-tennis', 'tablet', 'tablet-alt', 'tablets', 'tachometer-alt', 'tag', 'tags', 'tape', 'tasks', 'taxi', 'teeth',
  'teeth-open', 'terminal', 'text-height', 'text-width', 'th', 'th-large', 'th-list', 'theater-masks', 'thermometer',
  'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters',
  'thumbs-down', 'thumbs-up', 'thumbtack', 'ticket-alt', 'times', 'times-circle', 'tint', 'tint-slash', 'tired',
  'toggle-off', 'toggle-on', 'toolbox', 'tooth', 'trademark', 'traffic-light', 'train', 'transgender', 'transgender-alt',
  'trash', 'trash-alt', 'tree', 'trophy', 'truck', 'truck-loading', 'truck-monster', 'truck-moving', 'truck-pickup',
  'tshirt', 'tty', 'tv', 'umbrella', 'umbrella-beach', 'underline', 'undo', 'undo-alt', 'universal-access', 'university',
  'unlink', 'unlock', 'unlock-alt', 'upload', 'user', 'user-alt', 'user-alt-slash', 'user-astronaut', 'user-check',
  'user-circle', 'user-clock', 'user-cog', 'user-edit', 'user-friends', 'user-graduate', 'user-lock', 'user-md',
  'user-minus', 'user-ninja', 'user-plus', 'user-secret', 'user-shield', 'user-slash', 'user-tag', 'user-tie',
  'user-times', 'users', 'users-cog', 'utensil-spoon', 'utensils', 'vector-square', 'venus', 'venus-double', 'venus-mars',
  'vial', 'vials', 'video', 'video-slash', 'volleyball-ball', 'volume-down', 'volume-off', 'volume-up', 'walking',
  'wallet', 'warehouse', 'weight', 'weight-hanging', 'wheelchair', 'wifi', 'window-close', 'window-maximize',
  'window-minimize', 'window-restore', 'wine-glass', 'wine-glass-alt', 'won-sign', 'wrench', 'x-ray', 'yen-sign'
]

const allIcons = ref(
  iconNames.map(name => ({
    name: name,
    class: `fas fa-${name}`
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