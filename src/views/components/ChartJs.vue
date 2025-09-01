<template>
  <div class="charts-page">
    <div class="page-header">
      <h1>Chart.js Charts</h1>
      <p>Interactive data visualization with Chart.js - line charts, bar charts, pie charts, and more.</p>
    </div>

    <!-- Line Charts -->
    <div class="showcase-section">
      <h2>Line Charts</h2>
      <div class="chart-grid">
        <div class="chart-demo">
          <h3>Basic Line Chart</h3>
          <div class="chart-container">
            <canvas ref="basicLineChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('basicLine')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="toggleAnimation('basicLine')">Toggle Animation</button>
          </div>
        </div>

        <div class="chart-demo">
          <h3>Multi-line Chart</h3>
          <div class="chart-container">
            <canvas ref="multiLineChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('multiLine')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="addDataset('multiLine')">Add Dataset</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bar Charts -->
    <div class="showcase-section">
      <h2>Bar Charts</h2>
      <div class="chart-grid">
        <div class="chart-demo">
          <h3>Vertical Bar Chart</h3>
          <div class="chart-container">
            <canvas ref="barChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('bar')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="changeBarColors('bar')">Change Colors</button>
          </div>
        </div>

        <div class="chart-demo">
          <h3>Horizontal Bar Chart</h3>
          <div class="chart-container">
            <canvas ref="horizontalBarChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('horizontalBar')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="sortData('horizontalBar')">Sort Data</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pie and Doughnut Charts -->
    <div class="showcase-section">
      <h2>Pie & Doughnut Charts</h2>
      <div class="chart-grid">
        <div class="chart-demo">
          <h3>Pie Chart</h3>
          <div class="chart-container">
            <canvas ref="pieChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('pie')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="addSlice('pie')">Add Slice</button>
          </div>
        </div>

        <div class="chart-demo">
          <h3>Doughnut Chart</h3>
          <div class="chart-container">
            <canvas ref="doughnutChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('doughnut')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="toggleLabels('doughnut')">Toggle Labels</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Area and Radar Charts -->
    <div class="showcase-section">
      <h2>Area & Radar Charts</h2>
      <div class="chart-grid">
        <div class="chart-demo">
          <h3>Area Chart</h3>
          <div class="chart-container">
            <canvas ref="areaChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('area')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="toggleFill('area')">Toggle Fill</button>
          </div>
        </div>

        <div class="chart-demo">
          <h3>Radar Chart</h3>
          <div class="chart-container">
            <canvas ref="radarChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('radar')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="addPlayer('radar')">Add Player</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mixed and Scatter Charts -->
    <div class="showcase-section">
      <h2>Mixed & Scatter Charts</h2>
      <div class="chart-grid">
        <div class="chart-demo">
          <h3>Mixed Chart</h3>
          <div class="chart-container">
            <canvas ref="mixedChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('mixed')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="switchChartType('mixed')">Switch Type</button>
          </div>
        </div>

        <div class="chart-demo">
          <h3>Scatter Plot</h3>
          <div class="chart-container">
            <canvas ref="scatterChart"></canvas>
          </div>
          <div class="chart-controls">
            <button class="btn btn-sm btn-outline-primary" @click="regenerateData('scatter')">Regenerate Data</button>
            <button class="btn btn-sm btn-outline-secondary" @click="addPoints('scatter')">Add Points</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Real-time Chart -->
    <div class="showcase-section">
      <h2>Real-time Chart</h2>
      <div class="chart-demo chart-demo--full">
        <h3>Live Data Stream</h3>
        <div class="chart-container chart-container--large">
          <canvas ref="realtimeChart"></canvas>
        </div>
        <div class="chart-controls">
          <button 
            :class="['btn', 'btn-sm', isRealTimeRunning ? 'btn-warning' : 'btn-success']"
            @click="toggleRealTime"
          >
            {{ isRealTimeRunning ? 'Stop' : 'Start' }} Real-time
          </button>
          <button class="btn btn-sm btn-outline-secondary" @click="clearRealTimeData">Clear Data</button>
          <div class="realtime-controls">
            <label>Speed:</label>
            <input 
              v-model="realtimeSpeed" 
              type="range" 
              min="100" 
              max="2000" 
              step="100"
              class="form-range"
            >
            <span>{{ realtimeSpeed }}ms</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Chart Configuration -->
    <div class="showcase-section">
      <h2>Chart Configuration</h2>
      <div class="chart-demo chart-demo--full">
        <h3>Configurable Chart</h3>
        <div class="config-controls">
          <div class="config-group">
            <label>Chart Type:</label>
            <select v-model="configChart.type" @change="updateConfigChart" class="form-control form-control-sm">
              <option value="line">Line</option>
              <option value="bar">Bar</option>
              <option value="pie">Pie</option>
              <option value="doughnut">Doughnut</option>
              <option value="radar">Radar</option>
            </select>
          </div>
          <div class="config-group">
            <label>Theme:</label>
            <select v-model="configChart.theme" @change="updateConfigChart" class="form-control form-control-sm">
              <option value="default">Default</option>
              <option value="dark">Dark</option>
              <option value="colorful">Colorful</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
          <div class="config-group">
            <label>Animation:</label>
            <select v-model="configChart.animation" @change="updateConfigChart" class="form-control form-control-sm">
              <option value="easeInOutQuart">Ease In Out</option>
              <option value="easeOutBounce">Bounce</option>
              <option value="linear">Linear</option>
              <option value="easeInOutElastic">Elastic</option>
            </select>
          </div>
          <div class="config-group">
            <label>Grid:</label>
            <input 
              v-model="configChart.showGrid" 
              type="checkbox" 
              @change="updateConfigChart"
              class="form-check-input"
            >
          </div>
          <div class="config-group">
            <label>Legend:</label>
            <input 
              v-model="configChart.showLegend" 
              type="checkbox" 
              @change="updateConfigChart"
              class="form-check-input"
            >
          </div>
        </div>
        <div class="chart-container chart-container--large">
          <canvas ref="configChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Chart.js types and utilities
interface ChartInstance {
  destroy: () => void
  update: () => void
  data: any
  options: any
}

// State
const charts = ref<{ [key: string]: ChartInstance }>({})
const isRealTimeRunning = ref(false)
const realtimeSpeed = ref(1000)
const realtimeInterval = ref<number | null>(null)

const configChart = ref({
  type: 'line',
  theme: 'default',
  animation: 'easeInOutQuart',
  showGrid: true,
  showLegend: true
})

// Chart references
const basicLineChart = ref<HTMLCanvasElement>()
const multiLineChart = ref<HTMLCanvasElement>()
const barChart = ref<HTMLCanvasElement>()
const horizontalBarChart = ref<HTMLCanvasElement>()
const pieChart = ref<HTMLCanvasElement>()
const doughnutChart = ref<HTMLCanvasElement>()
const areaChart = ref<HTMLCanvasElement>()
const radarChart = ref<HTMLCanvasElement>()
const mixedChart = ref<HTMLCanvasElement>()
const scatterChart = ref<HTMLCanvasElement>()
const realtimeChart = ref<HTMLCanvasElement>()
const configChartRef = ref<HTMLCanvasElement>()

// Initialize charts on component mount
onMounted(() => {
  // Simulate Chart.js without actual import
  initializeCharts()
})

onUnmounted(() => {
  // Cleanup charts
  Object.values(charts.value).forEach(chart => {
    chart.destroy()
  })
  if (realtimeInterval.value) {
    clearInterval(realtimeInterval.value)
  }
})

// Chart initialization (simulated)
const initializeCharts = () => {
  // Basic Line Chart
  if (basicLineChart.value) {
    charts.value.basicLine = createMockChart(basicLineChart.value, 'line', generateLineData())
  }

  // Multi-line Chart
  if (multiLineChart.value) {
    charts.value.multiLine = createMockChart(multiLineChart.value, 'line', generateMultiLineData())
  }

  // Bar Chart
  if (barChart.value) {
    charts.value.bar = createMockChart(barChart.value, 'bar', generateBarData())
  }

  // Horizontal Bar Chart
  if (horizontalBarChart.value) {
    charts.value.horizontalBar = createMockChart(horizontalBarChart.value, 'horizontalBar', generateBarData())
  }

  // Pie Chart
  if (pieChart.value) {
    charts.value.pie = createMockChart(pieChart.value, 'pie', generatePieData())
  }

  // Doughnut Chart
  if (doughnutChart.value) {
    charts.value.doughnut = createMockChart(doughnutChart.value, 'doughnut', generatePieData())
  }

  // Area Chart
  if (areaChart.value) {
    charts.value.area = createMockChart(areaChart.value, 'area', generateAreaData())
  }

  // Radar Chart
  if (radarChart.value) {
    charts.value.radar = createMockChart(radarChart.value, 'radar', generateRadarData())
  }

  // Mixed Chart
  if (mixedChart.value) {
    charts.value.mixed = createMockChart(mixedChart.value, 'mixed', generateMixedData())
  }

  // Scatter Chart
  if (scatterChart.value) {
    charts.value.scatter = createMockChart(scatterChart.value, 'scatter', generateScatterData())
  }

  // Real-time Chart
  if (realtimeChart.value) {
    charts.value.realtime = createMockChart(realtimeChart.value, 'line', generateRealtimeData())
  }

  // Config Chart
  if (configChartRef.value) {
    charts.value.config = createMockChart(configChartRef.value, 'line', generateLineData())
  }
}

// Mock Chart.js implementation for demonstration
const createMockChart = (canvas: HTMLCanvasElement, type: string, data: any) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return { destroy: () => {}, update: () => {}, data: {}, options: {} }

  // Draw simple chart visualization
  drawMockChart(ctx, type, data)

  return {
    destroy: () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    },
    update: () => {
      drawMockChart(ctx, type, data)
    },
    data,
    options: {}
  }
}

const drawMockChart = (ctx: CanvasRenderingContext2D, type: string, data: any) => {
  const canvas = ctx.canvas
  const width = canvas.width = canvas.offsetWidth * window.devicePixelRatio
  const height = canvas.height = canvas.offsetHeight * window.devicePixelRatio
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

  const drawWidth = canvas.offsetWidth
  const drawHeight = canvas.offsetHeight

  // Clear canvas
  ctx.clearRect(0, 0, drawWidth, drawHeight)

  // Set styles
  ctx.fillStyle = '#4F46E5'
  ctx.strokeStyle = '#4F46E5'
  ctx.lineWidth = 2

  switch (type) {
    case 'line':
    case 'area':
      drawLineChart(ctx, drawWidth, drawHeight, data, type === 'area')
      break
    case 'bar':
      drawBarChart(ctx, drawWidth, drawHeight, data)
      break
    case 'horizontalBar':
      drawHorizontalBarChart(ctx, drawWidth, drawHeight, data)
      break
    case 'pie':
    case 'doughnut':
      drawPieChart(ctx, drawWidth, drawHeight, data, type === 'doughnut')
      break
    case 'radar':
      drawRadarChart(ctx, drawWidth, drawHeight, data)
      break
    case 'scatter':
      drawScatterChart(ctx, drawWidth, drawHeight, data)
      break
    case 'mixed':
      drawMixedChart(ctx, drawWidth, drawHeight, data)
      break
  }
}

const drawLineChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any, filled = false) => {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  if (data.datasets && data.datasets.length > 0) {
    data.datasets.forEach((dataset: any, index: number) => {
      const color = getColor(index)
      ctx.strokeStyle = color
      ctx.fillStyle = filled ? color + '40' : color

      ctx.beginPath()
      dataset.data.forEach((value: number, i: number) => {
        const x = padding + (i / (dataset.data.length - 1)) * chartWidth
        const y = padding + chartHeight - (value / 100) * chartHeight
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      
      if (filled) {
        ctx.lineTo(padding + chartWidth, padding + chartHeight)
        ctx.lineTo(padding, padding + chartHeight)
        ctx.closePath()
        ctx.fill()
      }
      
      ctx.stroke()
    })
  }
}

const drawBarChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any) => {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  if (data.datasets && data.datasets[0]) {
    const values = data.datasets[0].data
    const barWidth = chartWidth / values.length * 0.8
    const barSpacing = chartWidth / values.length * 0.2

    values.forEach((value: number, i: number) => {
      const x = padding + i * (chartWidth / values.length) + barSpacing / 2
      const barHeight = (value / 100) * chartHeight
      const y = padding + chartHeight - barHeight

      ctx.fillStyle = getColor(i)
      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }
}

const drawHorizontalBarChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any) => {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  if (data.datasets && data.datasets[0]) {
    const values = data.datasets[0].data
    const barHeight = chartHeight / values.length * 0.8
    const barSpacing = chartHeight / values.length * 0.2

    values.forEach((value: number, i: number) => {
      const y = padding + i * (chartHeight / values.length) + barSpacing / 2
      const barWidth = (value / 100) * chartWidth
      const x = padding

      ctx.fillStyle = getColor(i)
      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }
}

const drawPieChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any, isDoughnut = false) => {
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 2 - 40
  const innerRadius = isDoughnut ? radius * 0.5 : 0

  if (data.datasets && data.datasets[0]) {
    const values = data.datasets[0].data
    const total = values.reduce((sum: number, val: number) => sum + val, 0)
    let currentAngle = -Math.PI / 2

    values.forEach((value: number, i: number) => {
      const sliceAngle = (value / total) * 2 * Math.PI
      
      ctx.fillStyle = getColor(i)
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
      
      if (isDoughnut) {
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true)
      } else {
        ctx.lineTo(centerX, centerY)
      }
      
      ctx.closePath()
      ctx.fill()
      
      currentAngle += sliceAngle
    })
  }
}

const drawRadarChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any) => {
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 2 - 40

  // Draw radar grid
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 1
  
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath()
    ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI)
    ctx.stroke()
  }

  // Draw axes
  const axes = data.labels ? data.labels.length : 5
  for (let i = 0; i < axes; i++) {
    const angle = (i / axes) * 2 * Math.PI - Math.PI / 2
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius)
    ctx.stroke()
  }

  // Draw data
  if (data.datasets) {
    data.datasets.forEach((dataset: any, index: number) => {
      ctx.strokeStyle = getColor(index)
      ctx.fillStyle = getColor(index) + '40'
      ctx.lineWidth = 2

      ctx.beginPath()
      dataset.data.forEach((value: number, i: number) => {
        const angle = (i / dataset.data.length) * 2 * Math.PI - Math.PI / 2
        const distance = (value / 100) * radius
        const x = centerX + Math.cos(angle) * distance
        const y = centerY + Math.sin(angle) * distance
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.closePath()
      ctx.fill()
      ctx.stroke()
    })
  }
}

const drawScatterChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any) => {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  if (data.datasets) {
    data.datasets.forEach((dataset: any, index: number) => {
      ctx.fillStyle = getColor(index)
      
      dataset.data.forEach((point: any) => {
        const x = padding + (point.x / 100) * chartWidth
        const y = padding + chartHeight - (point.y / 100) * chartHeight
        
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fill()
      })
    })
  }
}

const drawMixedChart = (ctx: CanvasRenderingContext2D, width: number, height: number, data: any) => {
  // Draw both line and bar elements
  drawBarChart(ctx, width, height, { datasets: [data.datasets[0]] })
  drawLineChart(ctx, width, height, { datasets: [data.datasets[1]] })
}

const getColor = (index: number) => {
  const colors = [
    '#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
    '#06B6D4', '#F97316', '#84CC16', '#EC4899', '#6B7280'
  ]
  return colors[index % colors.length]
}

// Data generation functions
const generateLineData = () => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Sales',
    data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 80) + 20)
  }]
})

const generateMultiLineData = () => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 80) + 20)
    },
    {
      label: 'Profit',
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 60) + 10)
    }
  ]
})

const generateBarData = () => ({
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Revenue',
    data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 80) + 20)
  }]
})

const generatePieData = () => ({
  labels: ['Desktop', 'Mobile', 'Tablet', 'Others'],
  datasets: [{
    data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 10)
  }]
})

const generateAreaData = () => ({
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Users',
    data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 80) + 20)
  }]
})

const generateRadarData = () => ({
  labels: ['Speed', 'Strength', 'Agility', 'Defense', 'Accuracy'],
  datasets: [{
    label: 'Player 1',
    data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 80) + 20)
  }]
})

const generateMixedData = () => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      type: 'bar',
      label: 'Sales',
      data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 60) + 20)
    },
    {
      type: 'line',
      label: 'Growth',
      data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 40) + 30)
    }
  ]
})

const generateScatterData = () => ({
  datasets: [{
    label: 'Dataset 1',
    data: Array.from({ length: 20 }, () => ({
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    }))
  }]
})

const generateRealtimeData = () => ({
  labels: Array.from({ length: 10 }, (_, i) => `${i}s`),
  datasets: [{
    label: 'Live Data',
    data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 80) + 20)
  }]
})

// Chart interaction methods
const regenerateData = (chartKey: string) => {
  const chart = charts.value[chartKey]
  if (!chart) return

  let newData
  switch (chartKey) {
    case 'basicLine':
      newData = generateLineData()
      break
    case 'multiLine':
      newData = generateMultiLineData()
      break
    case 'bar':
    case 'horizontalBar':
      newData = generateBarData()
      break
    case 'pie':
    case 'doughnut':
      newData = generatePieData()
      break
    case 'area':
      newData = generateAreaData()
      break
    case 'radar':
      newData = generateRadarData()
      break
    case 'mixed':
      newData = generateMixedData()
      break
    case 'scatter':
      newData = generateScatterData()
      break
    default:
      return
  }

  chart.data = newData
  chart.update()
}

const toggleAnimation = (chartKey: string) => {
  console.log(`Toggle animation for ${chartKey}`)
}

const addDataset = (chartKey: string) => {
  const chart = charts.value[chartKey]
  if (!chart) return

  const newDataset = {
    label: `Dataset ${chart.data.datasets.length + 1}`,
    data: Array.from({ length: chart.data.labels.length }, () => Math.floor(Math.random() * 80) + 20)
  }

  chart.data.datasets.push(newDataset)
  chart.update()
}

const changeBarColors = (chartKey: string) => {
  console.log(`Change colors for ${chartKey}`)
}

const sortData = (chartKey: string) => {
  const chart = charts.value[chartKey]
  if (!chart) return

  const sortedIndices = chart.data.datasets[0].data
    .map((value: number, index: number) => ({ value, index }))
    .sort((a: any, b: any) => b.value - a.value)
    .map((item: any) => item.index)

  chart.data.labels = sortedIndices.map((i: number) => chart.data.labels[i])
  chart.data.datasets[0].data = sortedIndices.map((i: number) => chart.data.datasets[0].data[i])
  chart.update()
}

const addSlice = (chartKey: string) => {
  const chart = charts.value[chartKey]
  if (!chart) return

  chart.data.labels.push(`Slice ${chart.data.labels.length + 1}`)
  chart.data.datasets[0].data.push(Math.floor(Math.random() * 30) + 10)
  chart.update()
}

const toggleLabels = (chartKey: string) => {
  console.log(`Toggle labels for ${chartKey}`)
}

const toggleFill = (chartKey: string) => {
  console.log(`Toggle fill for ${chartKey}`)
}

const addPlayer = (chartKey: string) => {
  const chart = charts.value[chartKey]
  if (!chart) return

  const newPlayer = {
    label: `Player ${chart.data.datasets.length + 1}`,
    data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 80) + 20)
  }

  chart.data.datasets.push(newPlayer)
  chart.update()
}

const switchChartType = (chartKey: string) => {
  console.log(`Switch chart type for ${chartKey}`)
}

const addPoints = (chartKey: string) => {
  const chart = charts.value[chartKey]
  if (!chart) return

  const newPoints = Array.from({ length: 5 }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100)
  }))

  chart.data.datasets[0].data.push(...newPoints)
  chart.update()
}

// Real-time chart methods
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
    const chart = charts.value.realtime
    if (!chart) return

    // Add new data point
    const newValue = Math.floor(Math.random() * 80) + 20
    chart.data.datasets[0].data.push(newValue)
    chart.data.labels.push(`${chart.data.labels.length}s`)

    // Keep only last 20 points
    if (chart.data.datasets[0].data.length > 20) {
      chart.data.datasets[0].data.shift()
      chart.data.labels.shift()
    }

    chart.update()
  }, realtimeSpeed.value)
}

const stopRealTime = () => {
  isRealTimeRunning.value = false
  if (realtimeInterval.value) {
    clearInterval(realtimeInterval.value)
    realtimeInterval.value = null
  }
}

const clearRealTimeData = () => {
  const chart = charts.value.realtime
  if (!chart) return

  chart.data.datasets[0].data = []
  chart.data.labels = []
  chart.update()
}

const updateConfigChart = () => {
  // Update configurable chart based on settings
  console.log('Update config chart:', configChart.value)
}
</script>

<style scoped>
.charts-page {
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

.chart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl);
}

.chart-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  overflow: hidden;
}

.chart-demo--full {
  grid-column: 1 / -1;
}

.chart-demo h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.chart-container {
  position: relative;
  height: 300px;
  margin-bottom: var(--spacing-md);
}

.chart-container--large {
  height: 400px;
}

.chart-container canvas {
  width: 100% !important;
  height: 100% !important;
  border-radius: var(--border-radius-md);
}

.chart-controls {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-light);
}

.realtime-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-left: auto;
}

.realtime-controls label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.realtime-controls span {
  font-size: 0.8125rem;
  color: var(--text-secondary);
  min-width: 50px;
}

.config-controls {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
  flex-wrap: wrap;
}

.config-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 120px;
}

.config-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* Form Controls */
.form-control {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-primary);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  transition: all 0.2s ease;
}

.form-control-sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.875rem;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-range {
  width: 100px;
  height: 6px;
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
  outline: none;
  cursor: pointer;
  appearance: none;
}

.form-range::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
}

.form-range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.form-check-input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* Buttons */
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
  font-size: 0.75rem;
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

.btn-outline-secondary {
  background: transparent;
  color: var(--text-secondary);
  border-color: var(--border-light);
}

.btn-outline-secondary:hover {
  background: var(--surface-hover);
  color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .chart-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .chart-container {
    height: 250px;
  }
  
  .chart-container--large {
    height: 300px;
  }
  
  .chart-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .realtime-controls {
    margin-left: 0;
    justify-content: center;
  }
  
  .config-controls {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .config-group {
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .chart-container {
    height: 200px;
  }
  
  .chart-container--large {
    height: 250px;
  }
}
</style>
