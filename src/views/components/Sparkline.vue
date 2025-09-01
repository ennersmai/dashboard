<template>
  <div class="sparkline-page">
    <div class="page-header">
      <h1>Sparkline Charts</h1>
      <p>Compact inline charts perfect for dashboards, tables, and data summaries.</p>
    </div>

    <!-- Basic Sparklines -->
    <div class="showcase-section">
      <h2>Basic Sparklines</h2>
      <div class="sparkline-grid">
        <div class="sparkline-demo">
          <h3>Line Sparklines</h3>
          <div class="sparkline-examples">
            <div class="sparkline-item">
              <span class="sparkline-label">Sales Trend</span>
              <canvas ref="spark1" class="sparkline" width="100" height="30"></canvas>
              <span class="sparkline-value">$12,450</span>
              <span class="sparkline-change positive">+5.2%</span>
            </div>
            <div class="sparkline-item">
              <span class="sparkline-label">Revenue</span>
              <canvas ref="spark2" class="sparkline" width="100" height="30"></canvas>
              <span class="sparkline-value">$8,900</span>
              <span class="sparkline-change negative">-2.1%</span>
            </div>
            <div class="sparkline-item">
              <span class="sparkline-label">Profit</span>
              <canvas ref="spark3" class="sparkline" width="100" height="30"></canvas>
              <span class="sparkline-value">$4,250</span>
              <span class="sparkline-change positive">+12.8%</span>
            </div>
          </div>
        </div>

        <div class="sparkline-demo">
          <h3>Bar Sparklines</h3>
          <div class="sparkline-examples">
            <div class="sparkline-item">
              <span class="sparkline-label">Daily Users</span>
              <canvas ref="sparkBar1" class="sparkline" width="100" height="30"></canvas>
              <span class="sparkline-value">2,840</span>
              <span class="sparkline-change positive">+8.1%</span>
            </div>
            <div class="sparkline-item">
              <span class="sparkline-label">Page Views</span>
              <canvas ref="sparkBar2" class="sparkline" width="100" height="30"></canvas>
              <span class="sparkline-value">15,620</span>
              <span class="sparkline-change positive">+3.4%</span>
            </div>
            <div class="sparkline-item">
              <span class="sparkline-label">Sessions</span>
              <canvas ref="sparkBar3" class="sparkline" width="100" height="30"></canvas>
              <span class="sparkline-value">4,180</span>
              <span class="sparkline-change negative">-1.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Win/Loss Sparklines -->
    <div class="showcase-section">
      <h2>Win/Loss Sparklines</h2>
      <div class="sparkline-demo">
        <div class="sparkline-examples">
          <div class="sparkline-item">
            <span class="sparkline-label">Q1 Performance</span>
            <canvas ref="winLoss1" class="sparkline" width="120" height="30"></canvas>
            <span class="sparkline-value">75% Win Rate</span>
          </div>
          <div class="sparkline-item">
            <span class="sparkline-label">Monthly Goals</span>
            <canvas ref="winLoss2" class="sparkline" width="120" height="30"></canvas>
            <span class="sparkline-value">8/12 Achieved</span>
          </div>
          <div class="sparkline-item">
            <span class="sparkline-label">Project Status</span>
            <canvas ref="winLoss3" class="sparkline" width="120" height="30"></canvas>
            <span class="sparkline-value">6/10 Complete</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pie Sparklines -->
    <div class="showcase-section">
      <h2>Pie Sparklines</h2>
      <div class="sparkline-demo">
        <div class="sparkline-examples">
          <div class="sparkline-item">
            <span class="sparkline-label">Storage Used</span>
            <canvas ref="pie1" class="sparkline-pie" width="40" height="40"></canvas>
            <span class="sparkline-value">68%</span>
            <span class="sparkline-subtitle">of 1TB</span>
          </div>
          <div class="sparkline-item">
            <span class="sparkline-label">CPU Usage</span>
            <canvas ref="pie2" class="sparkline-pie" width="40" height="40"></canvas>
            <span class="sparkline-value">45%</span>
            <span class="sparkline-subtitle">Average</span>
          </div>
          <div class="sparkline-item">
            <span class="sparkline-label">Memory</span>
            <canvas ref="pie3" class="sparkline-pie" width="40" height="40"></canvas>
            <span class="sparkline-value">82%</span>
            <span class="sparkline-subtitle">of 16GB</span>
          </div>
          <div class="sparkline-item">
            <span class="sparkline-label">Bandwidth</span>
            <canvas ref="pie4" class="sparkline-pie" width="40" height="40"></canvas>
            <span class="sparkline-value">34%</span>
            <span class="sparkline-subtitle">Monthly</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Table with Sparklines -->
    <div class="showcase-section">
      <h2>Sparklines in Tables</h2>
      <div class="table-demo">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales Trend</th>
                <th>Monthly Revenue</th>
                <th>Performance</th>
                <th>Growth</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in tableData" :key="product.id">
                <td>{{ product.name }}</td>
                <td>
                  <canvas 
                    :ref="el => setTableSparkRef(`tableSpark${index}`, el)"
                    class="sparkline-table" 
                    width="80" 
                    height="25"
                  ></canvas>
                </td>
                <td>
                  <canvas 
                    :ref="el => setTableSparkRef(`tableBar${index}`, el)"
                    class="sparkline-table" 
                    width="60" 
                    height="25"
                  ></canvas>
                </td>
                <td>
                  <canvas 
                    :ref="el => setTableSparkRef(`tableWinLoss${index}`, el)"
                    class="sparkline-table" 
                    width="70" 
                    height="20"
                  ></canvas>
                </td>
                <td>
                  <span :class="['sparkline-change', product.growth >= 0 ? 'positive' : 'negative']">
                    {{ product.growth >= 0 ? '+' : '' }}{{ product.growth }}%
                  </span>
                </td>
                <td>
                  <span :class="['badge', `badge-${product.status.type}`]">
                    {{ product.status.label }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Real-time Sparklines -->
    <div class="showcase-section">
      <h2>Real-time Sparklines</h2>
      <div class="sparkline-demo">
        <div class="realtime-controls">
          <button 
            :class="['btn', 'btn-sm', isRealTimeRunning ? 'btn-warning' : 'btn-success']"
            @click="toggleRealTime"
          >
            {{ isRealTimeRunning ? 'Stop' : 'Start' }} Real-time Updates
          </button>
          <div class="speed-control">
            <label>Update Speed:</label>
            <input 
              v-model="realtimeSpeed" 
              type="range" 
              min="500" 
              max="3000" 
              step="250"
              class="form-range"
            >
            <span>{{ realtimeSpeed }}ms</span>
          </div>
        </div>
        
        <div class="realtime-sparklines">
          <div class="sparkline-item sparkline-item--large">
            <span class="sparkline-label">Server Load</span>
            <canvas ref="realtimeSpark1" class="sparkline-realtime" width="200" height="50"></canvas>
            <span class="sparkline-value">{{ realtimeValues.serverLoad }}%</span>
          </div>
          <div class="sparkline-item sparkline-item--large">
            <span class="sparkline-label">Network Traffic</span>
            <canvas ref="realtimeSpark2" class="sparkline-realtime" width="200" height="50"></canvas>
            <span class="sparkline-value">{{ realtimeValues.networkTraffic }} MB/s</span>
          </div>
          <div class="sparkline-item sparkline-item--large">
            <span class="sparkline-label">Active Users</span>
            <canvas ref="realtimeSpark3" class="sparkline-realtime" width="200" height="50"></canvas>
            <span class="sparkline-value">{{ realtimeValues.activeUsers }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Sparklines -->
    <div class="showcase-section">
      <h2>Custom Sparklines</h2>
      <div class="sparkline-demo">
        <div class="custom-controls">
          <div class="control-group">
            <label>Chart Type:</label>
            <select v-model="customConfig.type" @change="updateCustomSparkline" class="form-control form-control-sm">
              <option value="line">Line</option>
              <option value="bar">Bar</option>
              <option value="area">Area</option>
            </select>
          </div>
          <div class="control-group">
            <label>Color:</label>
            <input 
              v-model="customConfig.color" 
              type="color" 
              @change="updateCustomSparkline"
              class="form-control form-control-color"
            >
          </div>
          <div class="control-group">
            <label>Points:</label>
            <input 
              v-model="customConfig.points" 
              type="range" 
              min="5" 
              max="20" 
              @input="updateCustomSparkline"
              class="form-range"
            >
            <span>{{ customConfig.points }}</span>
          </div>
          <div class="control-group">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateCustomData">
              New Data
            </button>
          </div>
        </div>
        
        <div class="custom-sparkline-container">
          <canvas ref="customSparkline" class="sparkline-custom" width="300" height="80"></canvas>
        </div>
      </div>
    </div>

    <!-- Sparkline Gallery -->
    <div class="showcase-section">
      <h2>Sparkline Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index">
          <div class="gallery-header">
            <h4>{{ item.title }}</h4>
            <span class="gallery-value">{{ item.value }}</span>
          </div>
          <canvas 
            :ref="el => setGallerySparkRef(`gallery${index}`, el)"
            class="gallery-sparkline" 
            width="120" 
            height="40"
          ></canvas>
          <div class="gallery-footer">
            <span :class="['gallery-change', item.change >= 0 ? 'positive' : 'negative']">
              {{ item.change >= 0 ? '+' : '' }}{{ item.change }}%
            </span>
            <span class="gallery-period">{{ item.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Types
interface TableProduct {
  id: number
  name: string
  growth: number
  status: {
    type: string
    label: string
  }
}

interface GalleryItem {
  title: string
  value: string
  change: number
  period: string
}

// State
const isRealTimeRunning = ref(false)
const realtimeSpeed = ref(1000)
const realtimeInterval = ref<number | null>(null)
const sparklineRefs = ref<{ [key: string]: HTMLCanvasElement }>({})

const realtimeValues = ref({
  serverLoad: 45,
  networkTraffic: 8.2,
  activeUsers: 1284
})

const realtimeData = ref({
  serverLoad: [] as number[],
  networkTraffic: [] as number[],
  activeUsers: [] as number[]
})

const customConfig = ref({
  type: 'line',
  color: '#4F46E5',
  points: 10
})

// Chart references
const spark1 = ref<HTMLCanvasElement>()
const spark2 = ref<HTMLCanvasElement>()
const spark3 = ref<HTMLCanvasElement>()
const sparkBar1 = ref<HTMLCanvasElement>()
const sparkBar2 = ref<HTMLCanvasElement>()
const sparkBar3 = ref<HTMLCanvasElement>()
const winLoss1 = ref<HTMLCanvasElement>()
const winLoss2 = ref<HTMLCanvasElement>()
const winLoss3 = ref<HTMLCanvasElement>()
const pie1 = ref<HTMLCanvasElement>()
const pie2 = ref<HTMLCanvasElement>()
const pie3 = ref<HTMLCanvasElement>()
const pie4 = ref<HTMLCanvasElement>()
const realtimeSpark1 = ref<HTMLCanvasElement>()
const realtimeSpark2 = ref<HTMLCanvasElement>()
const realtimeSpark3 = ref<HTMLCanvasElement>()
const customSparkline = ref<HTMLCanvasElement>()

// Table data
const tableData = ref<TableProduct[]>([
  { id: 1, name: 'MacBook Pro', growth: 12.5, status: { type: 'success', label: 'Excellent' } },
  { id: 2, name: 'iPhone 14', growth: -2.1, status: { type: 'warning', label: 'Good' } },
  { id: 3, name: 'iPad Air', growth: 8.7, status: { type: 'success', label: 'Excellent' } },
  { id: 4, name: 'Apple Watch', growth: 5.3, status: { type: 'info', label: 'Average' } },
  { id: 5, name: 'AirPods Pro', growth: -4.2, status: { type: 'error', label: 'Poor' } }
])

// Gallery data
const galleryItems = ref<GalleryItem[]>([
  { title: 'Website Traffic', value: '45.2K', change: 12.5, period: 'Last 7 days' },
  { title: 'Conversion Rate', value: '3.2%', change: -0.8, period: 'Last 30 days' },
  { title: 'Revenue', value: '$28.4K', change: 18.3, period: 'This month' },
  { title: 'New Users', value: '2.1K', change: 5.7, period: 'This week' },
  { title: 'Bounce Rate', value: '42%', change: -3.2, period: 'Last 7 days' },
  { title: 'Page Views', value: '156K', change: 22.1, period: 'This month' }
])

// Initialize sparklines on mount
onMounted(() => {
  initializeSparklines()
  initializeRealtimeData()
})

onUnmounted(() => {
  if (realtimeInterval.value) {
    clearInterval(realtimeInterval.value)
  }
})

// Helper functions for dynamic refs
const setTableSparkRef = (key: string, el: HTMLCanvasElement | null) => {
  if (el) {
    sparklineRefs.value[key] = el
  }
}

const setGallerySparkRef = (key: string, el: HTMLCanvasElement | null) => {
  if (el) {
    sparklineRefs.value[key] = el
  }
}

// Sparkline initialization
const initializeSparklines = () => {
  // Basic line sparklines
  if (spark1.value) drawLineSparkline(spark1.value, generateRandomData(15), '#4F46E5')
  if (spark2.value) drawLineSparkline(spark2.value, generateRandomData(15), '#EF4444')
  if (spark3.value) drawLineSparkline(spark3.value, generateRandomData(15), '#10B981')

  // Bar sparklines
  if (sparkBar1.value) drawBarSparkline(sparkBar1.value, generateRandomData(12), '#F59E0B')
  if (sparkBar2.value) drawBarSparkline(sparkBar2.value, generateRandomData(12), '#8B5CF6')
  if (sparkBar3.value) drawBarSparkline(sparkBar3.value, generateRandomData(12), '#06B6D4')

  // Win/Loss sparklines
  if (winLoss1.value) drawWinLossSparkline(winLoss1.value, generateWinLossData(12))
  if (winLoss2.value) drawWinLossSparkline(winLoss2.value, generateWinLossData(12))
  if (winLoss3.value) drawWinLossSparkline(winLoss3.value, generateWinLossData(10))

  // Pie sparklines
  if (pie1.value) drawPieSparkline(pie1.value, 68, '#4F46E5')
  if (pie2.value) drawPieSparkline(pie2.value, 45, '#F59E0B')
  if (pie3.value) drawPieSparkline(pie3.value, 82, '#EF4444')
  if (pie4.value) drawPieSparkline(pie4.value, 34, '#10B981')

  // Table sparklines
  tableData.value.forEach((_, index) => {
    const lineCanvas = sparklineRefs.value[`tableSpark${index}`]
    const barCanvas = sparklineRefs.value[`tableBar${index}`]
    const winLossCanvas = sparklineRefs.value[`tableWinLoss${index}`]

    if (lineCanvas) drawLineSparkline(lineCanvas, generateRandomData(10), '#4F46E5')
    if (barCanvas) drawBarSparkline(barCanvas, generateRandomData(8), '#10B981')
    if (winLossCanvas) drawWinLossSparkline(winLossCanvas, generateWinLossData(8))
  })

  // Gallery sparklines
  galleryItems.value.forEach((_, index) => {
    const canvas = sparklineRefs.value[`gallery${index}`]
    if (canvas) {
      const type = index % 3 === 0 ? 'line' : index % 3 === 1 ? 'bar' : 'area'
      const color = getColor(index)
      
      if (type === 'line') {
        drawLineSparkline(canvas, generateRandomData(20), color)
      } else if (type === 'bar') {
        drawBarSparkline(canvas, generateRandomData(15), color)
      } else {
        drawAreaSparkline(canvas, generateRandomData(18), color)
      }
    }
  })

  // Custom sparkline
  updateCustomSparkline()
}

const initializeRealtimeData = () => {
  // Initialize with some data points
  realtimeData.value.serverLoad = generateRandomData(20)
  realtimeData.value.networkTraffic = generateRandomData(20)
  realtimeData.value.activeUsers = generateRandomData(20)
}

// Drawing functions
const drawLineSparkline = (canvas: HTMLCanvasElement, data: number[], color = '#4F46E5') => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height
  const padding = 2

  ctx.clearRect(0, 0, width, height)
  
  if (data.length === 0) return

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  ctx.strokeStyle = color
  ctx.lineWidth = 1.5
  ctx.beginPath()

  data.forEach((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2)
    const y = padding + height - padding * 2 - ((value - min) / range) * (height - padding * 2)
    
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })

  ctx.stroke()
}

const drawBarSparkline = (canvas: HTMLCanvasElement, data: number[], color = '#4F46E5') => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height
  const padding = 1

  ctx.clearRect(0, 0, width, height)
  
  if (data.length === 0) return

  const max = Math.max(...data)
  const barWidth = (width - padding * 2) / data.length

  ctx.fillStyle = color

  data.forEach((value, index) => {
    const barHeight = (value / max) * (height - padding * 2)
    const x = padding + index * barWidth
    const y = height - padding - barHeight

    ctx.fillRect(x, y, barWidth - 1, barHeight)
  })
}

const drawAreaSparkline = (canvas: HTMLCanvasElement, data: number[], color = '#4F46E5') => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height
  const padding = 2

  ctx.clearRect(0, 0, width, height)
  
  if (data.length === 0) return

  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, color + '80')
  gradient.addColorStop(1, color + '20')

  ctx.fillStyle = gradient
  ctx.strokeStyle = color
  ctx.lineWidth = 1.5

  ctx.beginPath()
  
  // Start from bottom left
  ctx.moveTo(padding, height - padding)

  data.forEach((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2)
    const y = padding + ((max - value) / range) * (height - padding * 2)
    ctx.lineTo(x, y)
  })

  // Close path to bottom right
  ctx.lineTo(width - padding, height - padding)
  ctx.closePath()
  ctx.fill()

  // Draw line on top
  ctx.beginPath()
  data.forEach((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2)
    const y = padding + ((max - value) / range) * (height - padding * 2)
    
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })
  ctx.stroke()
}

const drawWinLossSparkline = (canvas: HTMLCanvasElement, data: number[]) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height
  const padding = 1

  ctx.clearRect(0, 0, width, height)
  
  if (data.length === 0) return

  const barWidth = (width - padding * 2) / data.length
  const centerY = height / 2

  data.forEach((value, index) => {
    const x = padding + index * barWidth
    const color = value > 0 ? '#10B981' : value < 0 ? '#EF4444' : '#9CA3AF'
    
    ctx.fillStyle = color
    
    if (value > 0) {
      ctx.fillRect(x, centerY, barWidth - 1, centerY - padding)
    } else if (value < 0) {
      ctx.fillRect(x, centerY, barWidth - 1, centerY - padding)
    } else {
      ctx.fillRect(x, centerY - 1, barWidth - 1, 2)
    }
  })
}

const drawPieSparkline = (canvas: HTMLCanvasElement, percentage: number, color = '#4F46E5') => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 2 - 2

  ctx.clearRect(0, 0, width, height)

  // Background circle
  ctx.strokeStyle = '#E5E7EB'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.stroke()

  // Progress arc
  ctx.strokeStyle = color
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  ctx.beginPath()
  const startAngle = -Math.PI / 2
  const endAngle = startAngle + (percentage / 100) * 2 * Math.PI
  ctx.arc(centerX, centerY, radius, startAngle, endAngle)
  ctx.stroke()
}

// Data generation
const generateRandomData = (count: number): number[] => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1)
}

const generateWinLossData = (count: number): number[] => {
  return Array.from({ length: count }, () => {
    const rand = Math.random()
    if (rand < 0.4) return 1  // Win
    if (rand < 0.8) return -1 // Loss
    return 0 // Draw
  })
}

const getColor = (index: number): string => {
  const colors = [
    '#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
    '#06B6D4', '#F97316', '#84CC16', '#EC4899', '#6B7280'
  ]
  return colors[index % colors.length]
}

// Real-time functionality
const toggleRealTime = () => {
  if (isRealTimeRunning.value) {
    stopRealTime()
  } else {
    startRealTime()
  }
}

const startRealTime = () => {
  isRealTimeRunning.value = true
  realtimeInterval.value = setInterval(() => {
    // Add new data points
    realtimeData.value.serverLoad.push(Math.floor(Math.random() * 100))
    realtimeData.value.networkTraffic.push(Math.floor(Math.random() * 100))
    realtimeData.value.activeUsers.push(Math.floor(Math.random() * 100))

    // Keep only last 20 points
    if (realtimeData.value.serverLoad.length > 20) {
      realtimeData.value.serverLoad.shift()
      realtimeData.value.networkTraffic.shift()
      realtimeData.value.activeUsers.shift()
    }

    // Update values
    realtimeValues.value.serverLoad = realtimeData.value.serverLoad[realtimeData.value.serverLoad.length - 1]
    realtimeValues.value.networkTraffic = (realtimeData.value.networkTraffic[realtimeData.value.networkTraffic.length - 1] / 10).toFixed(1)
    realtimeValues.value.activeUsers = realtimeData.value.activeUsers[realtimeData.value.activeUsers.length - 1] * 15 + 1200

    // Redraw charts
    if (realtimeSpark1.value) drawLineSparkline(realtimeSpark1.value, realtimeData.value.serverLoad, '#EF4444')
    if (realtimeSpark2.value) drawLineSparkline(realtimeSpark2.value, realtimeData.value.networkTraffic, '#10B981')
    if (realtimeSpark3.value) drawLineSparkline(realtimeSpark3.value, realtimeData.value.activeUsers, '#F59E0B')
  }, realtimeSpeed.value)
}

const stopRealTime = () => {
  isRealTimeRunning.value = false
  if (realtimeInterval.value) {
    clearInterval(realtimeInterval.value)
    realtimeInterval.value = null
  }
}

// Custom sparkline
const updateCustomSparkline = () => {
  if (!customSparkline.value) return

  const data = generateRandomData(parseInt(customConfig.value.points))
  
  switch (customConfig.value.type) {
    case 'line':
      drawLineSparkline(customSparkline.value, data, customConfig.value.color)
      break
    case 'bar':
      drawBarSparkline(customSparkline.value, data, customConfig.value.color)
      break
    case 'area':
      drawAreaSparkline(customSparkline.value, data, customConfig.value.color)
      break
  }
}

const regenerateCustomData = () => {
  updateCustomSparkline()
}
</script>

<style scoped>
.sparkline-page {
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

.sparkline-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
}

.sparkline-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
}

.sparkline-demo h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.sparkline-examples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.sparkline-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  background: var(--surface-secondary);
}

.sparkline-item--large {
  padding: var(--spacing-md);
}

.sparkline-label {
  min-width: 100px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.sparkline {
  flex-shrink: 0;
}

.sparkline-pie {
  flex-shrink: 0;
  margin: 0 var(--spacing-sm);
}

.sparkline-value {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
}

.sparkline-change {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px var(--spacing-xs);
  border-radius: var(--border-radius-sm);
}

.sparkline-change.positive {
  color: var(--success-color);
  background: var(--success-light);
}

.sparkline-change.negative {
  color: var(--error-color);
  background: var(--error-light);
}

.sparkline-subtitle {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-left: var(--spacing-xs);
}

/* Table Demo */
.table-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-primary);
}

.table th,
.table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border-light);
  vertical-align: middle;
}

.table th {
  font-weight: 600;
  color: var(--text-primary);
  background: var(--surface-secondary);
}

.table-striped tbody tr:nth-child(even) {
  background: var(--surface-secondary);
}

.table-responsive {
  overflow-x: auto;
}

.sparkline-table {
  vertical-align: middle;
}

/* Real-time Section */
.realtime-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
  flex-wrap: wrap;
}

.speed-control {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-left: auto;
}

.speed-control label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.realtime-sparklines {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.sparkline-realtime {
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background: var(--surface-primary);
}

/* Custom Controls */
.custom-controls {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
  flex-wrap: wrap;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  align-items: center;
}

.control-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.custom-sparkline-container {
  display: flex;
  justify-content: center;
  padding: var(--spacing-lg);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  background: var(--surface-secondary);
}

.sparkline-custom {
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background: var(--surface-primary);
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.gallery-item {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.gallery-header h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.gallery-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
}

.gallery-sparkline {
  width: 100%;
  margin: var(--spacing-md) 0;
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background: var(--surface-secondary);
}

.gallery-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.gallery-change {
  font-weight: 600;
  padding: 2px var(--spacing-xs);
  border-radius: var(--border-radius-sm);
}

.gallery-change.positive {
  color: var(--success-color);
  background: var(--success-light);
}

.gallery-change.negative {
  color: var(--error-color);
  background: var(--error-light);
}

.gallery-period {
  color: var(--text-muted);
}

/* Form Controls */
.form-control {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.875rem;
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background: var(--surface-primary);
  color: var(--text-primary);
}

.form-control-sm {
  padding: 2px var(--spacing-xs);
  font-size: 0.8125rem;
}

.form-control-color {
  width: 40px;
  height: 30px;
  padding: 0;
  border: none;
  cursor: pointer;
}

.form-range {
  width: 80px;
  height: 4px;
  background: var(--surface-secondary);
  border-radius: var(--border-radius-sm);
  outline: none;
  cursor: pointer;
  appearance: none;
}

.form-range::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
}

.form-range::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.btn-sm {
  padding: 2px var(--spacing-xs);
  font-size: 0.8125rem;
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

.btn-outline-primary {
  background: transparent;
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-outline-primary:hover {
  background: var(--primary-color);
  color: var(--text-on-primary);
}

/* Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;
}

.badge-success {
  background: var(--success-light);
  color: var(--success-color);
}

.badge-warning {
  background: var(--warning-light);
  color: var(--warning-color);
}

.badge-error {
  background: var(--error-light);
  color: var(--error-color);
}

.badge-info {
  background: var(--info-light);
  color: var(--info-color);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .sparkline-grid {
    grid-template-columns: 1fr;
  }
  
  .realtime-sparklines {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sparkline-item {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .sparkline-label {
    min-width: auto;
  }
  
  .custom-controls {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .realtime-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .speed-control {
    margin-left: 0;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .table th,
  .table td {
    padding: var(--spacing-sm);
  }
}
</style>
