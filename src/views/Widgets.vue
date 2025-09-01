<template>
  <div class="page-content">
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-content">
        <h1>Widgets</h1>
        <p class="page-description">Reusable dashboard widgets and components showcase</p>
      </div>
      <div class="page-breadcrumb">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">Widgets</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Widgets Grid -->
    <div class="grid-container">
      <!-- Stats Cards Row -->
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-header">
            <h3>Statistics Cards</h3>
            <p>Key performance indicator widgets</p>
          </div>
          <div class="card-body">
            <div class="stats-grid">
              <div class="stat-card primary">
                <div class="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14Z" />
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-number">2,847</div>
                  <div class="stat-label">Total Users</div>
                  <div class="stat-change positive">+12.5%</div>
                </div>
              </div>

              <div class="stat-card success">
                <div class="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-number">$89,426</div>
                  <div class="stat-label">Total Revenue</div>
                  <div class="stat-change positive">+8.2%</div>
                </div>
              </div>

              <div class="stat-card warning">
                <div class="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-number">1,254</div>
                  <div class="stat-label">Orders</div>
                  <div class="stat-change negative">-3.1%</div>
                </div>
              </div>

              <div class="stat-card info">
                <div class="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-number">94.7%</div>
                  <div class="stat-label">Conversion Rate</div>
                  <div class="stat-change positive">+1.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Widgets -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Progress Widgets</h3>
          </div>
          <div class="card-body">
            <div class="progress-widgets">
              <div class="progress-item">
                <div class="progress-header">
                  <span class="progress-label">Server Load</span>
                  <span class="progress-value">78%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 78%" data-color="primary"></div>
                </div>
              </div>

              <div class="progress-item">
                <div class="progress-header">
                  <span class="progress-label">Memory Usage</span>
                  <span class="progress-value">56%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 56%" data-color="success"></div>
                </div>
              </div>

              <div class="progress-item">
                <div class="progress-header">
                  <span class="progress-label">Storage</span>
                  <span class="progress-value">92%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 92%" data-color="danger"></div>
                </div>
              </div>

              <div class="progress-item">
                <div class="progress-header">
                  <span class="progress-label">Bandwidth</span>
                  <span class="progress-value">34%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 34%" data-color="info"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart Widget -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Mini Chart Widget</h3>
          </div>
          <div class="card-body">
            <div class="mini-chart">
              <canvas ref="miniChartCanvas" width="400" height="200"></canvas>
              <div class="chart-stats">
                <div class="chart-stat">
                  <span class="stat-dot primary"></span>
                  <span class="stat-text">Sales: $12,450</span>
                </div>
                <div class="chart-stat">
                  <span class="stat-dot success"></span>
                  <span class="stat-text">Profit: $3,670</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Feed -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Activity Feed</h3>
          </div>
          <div class="card-body">
            <div class="activity-feed">
              <div class="activity-item">
                <div class="activity-avatar primary">JD</div>
                <div class="activity-content">
                  <div class="activity-text">John Doe created a new project</div>
                  <div class="activity-time">5 minutes ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="activity-avatar success">SM</div>
                <div class="activity-content">
                  <div class="activity-text">Sarah Miller uploaded 3 files</div>
                  <div class="activity-time">12 minutes ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="activity-avatar warning">RJ</div>
                <div class="activity-content">
                  <div class="activity-text">Robert Johnson updated user permissions</div>
                  <div class="activity-time">1 hour ago</div>
                </div>
              </div>

              <div class="activity-item">
                <div class="activity-avatar info">AL</div>
                <div class="activity-content">
                  <div class="activity-text">Anna Lee completed the analysis</div>
                  <div class="activity-time">2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Task Widget -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Tasks Widget</h3>
          </div>
          <div class="card-body">
            <div class="tasks-widget">
              <div class="task-item">
                <label class="task-checkbox">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                </label>
                <div class="task-content completed">
                  <div class="task-text">Complete project documentation</div>
                  <div class="task-meta">Due: Today</div>
                </div>
              </div>

              <div class="task-item">
                <label class="task-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <div class="task-content">
                  <div class="task-text">Review user feedback</div>
                  <div class="task-meta">Due: Tomorrow</div>
                </div>
              </div>

              <div class="task-item">
                <label class="task-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <div class="task-content">
                  <div class="task-text">Update server configurations</div>
                  <div class="task-meta">Due: Dec 15</div>
                </div>
              </div>

              <div class="task-item">
                <label class="task-checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
                <div class="task-content">
                  <div class="task-text">Prepare monthly report</div>
                  <div class="task-meta">Due: Dec 20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weather Widget -->
      <div class="grid-item third-width">
        <div class="card weather-widget">
          <div class="card-body">
            <div class="weather-header">
              <div class="weather-location">New York</div>
              <div class="weather-date">{{ currentDate }}</div>
            </div>
            <div class="weather-main">
              <div class="weather-icon">☀️</div>
              <div class="weather-temp">24°C</div>
            </div>
            <div class="weather-desc">Sunny</div>
            <div class="weather-details">
              <div class="weather-detail">
                <span class="detail-label">Humidity</span>
                <span class="detail-value">65%</span>
              </div>
              <div class="weather-detail">
                <span class="detail-label">Wind</span>
                <span class="detail-value">12 km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar Widget -->
      <div class="grid-item third-width">
        <div class="card">
          <div class="card-header">
            <h3>Calendar</h3>
          </div>
          <div class="card-body">
            <div class="mini-calendar">
              <div class="calendar-header">
                <button class="calendar-nav">&lt;</button>
                <span class="calendar-title">December 2024</span>
                <button class="calendar-nav">&gt;</button>
              </div>
              <div class="calendar-grid">
                <div class="calendar-day-header">Sun</div>
                <div class="calendar-day-header">Mon</div>
                <div class="calendar-day-header">Tue</div>
                <div class="calendar-day-header">Wed</div>
                <div class="calendar-day-header">Thu</div>
                <div class="calendar-day-header">Fri</div>
                <div class="calendar-day-header">Sat</div>
                
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day"></div>
                <div class="calendar-day">1</div>
                <div class="calendar-day">2</div>
                <div class="calendar-day">3</div>
                <div class="calendar-day">4</div>
                <div class="calendar-day">5</div>
                <div class="calendar-day">6</div>
                <div class="calendar-day">7</div>
                <div class="calendar-day">8</div>
                <div class="calendar-day active">9</div>
                <div class="calendar-day">10</div>
                <div class="calendar-day">11</div>
                <div class="calendar-day">12</div>
                <div class="calendar-day">13</div>
                <div class="calendar-day">14</div>
                <div class="calendar-day">15</div>
                <div class="calendar-day">16</div>
                <div class="calendar-day">17</div>
                <div class="calendar-day">18</div>
                <div class="calendar-day">19</div>
                <div class="calendar-day">20</div>
                <div class="calendar-day">21</div>
                <div class="calendar-day">22</div>
                <div class="calendar-day">23</div>
                <div class="calendar-day">24</div>
                <div class="calendar-day">25</div>
                <div class="calendar-day">26</div>
                <div class="calendar-day">27</div>
                <div class="calendar-day">28</div>
                <div class="calendar-day">29</div>
                <div class="calendar-day">30</div>
                <div class="calendar-day">31</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Stats Widget -->
      <div class="grid-item third-width">
        <div class="card">
          <div class="card-header">
            <h3>Social Media</h3>
          </div>
          <div class="card-body">
            <div class="social-stats">
              <div class="social-item facebook">
                <div class="social-icon">📘</div>
                <div class="social-content">
                  <div class="social-count">12.5K</div>
                  <div class="social-label">Facebook</div>
                </div>
              </div>

              <div class="social-item twitter">
                <div class="social-icon">🐦</div>
                <div class="social-content">
                  <div class="social-count">8.2K</div>
                  <div class="social-label">Twitter</div>
                </div>
              </div>

              <div class="social-item instagram">
                <div class="social-icon">📷</div>
                <div class="social-content">
                  <div class="social-count">15.8K</div>
                  <div class="social-label">Instagram</div>
                </div>
              </div>

              <div class="social-item linkedin">
                <div class="social-icon">💼</div>
                <div class="social-content">
                  <div class="social-count">6.4K</div>
                  <div class="social-label">LinkedIn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const miniChartCanvas = ref<HTMLCanvasElement>()
const currentDate = ref('')

onMounted(() => {
  // Set current date
  const now = new Date()
  currentDate.value = now.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  // Draw mini chart
  if (miniChartCanvas.value) {
    drawMiniChart()
  }
})

const drawMiniChart = () => {
  const canvas = miniChartCanvas.value!
  const ctx = canvas.getContext('2d')!
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // Sample data
  const salesData = [30, 45, 35, 50, 60, 55, 70, 65, 80, 85, 90, 95]
  const profitData = [15, 25, 20, 30, 35, 30, 40, 38, 45, 50, 55, 60]
  
  const maxValue = Math.max(...salesData, ...profitData)
  const width = canvas.width - 40
  const height = canvas.height - 40
  const stepX = width / (salesData.length - 1)
  
  // Draw sales line (primary color)
  ctx.strokeStyle = '#6366f1'
  ctx.lineWidth = 3
  ctx.beginPath()
  salesData.forEach((value, index) => {
    const x = 20 + index * stepX
    const y = 20 + (height - (value / maxValue) * height)
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })
  ctx.stroke()
  
  // Draw profit line (success color)
  ctx.strokeStyle = '#10b981'
  ctx.lineWidth = 3
  ctx.beginPath()
  profitData.forEach((value, index) => {
    const x = 20 + index * stepX
    const y = 20 + (height - (value / maxValue) * height)
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })
  ctx.stroke()
}
</script>

<style scoped>
/* Stats Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  color: white;
  position: relative;
  overflow: hidden;
}

.stat-card.primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.stat-card.success { background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%); }
.stat-card.warning { background: linear-gradient(135deg, #ff9a56 0%, #ffad56 100%); }
.stat-card.info { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }

.stat-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: var(--spacing-xs);
}

.stat-change {
  font-size: 0.75rem;
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
}

.stat-change.positive {
  background: rgba(255, 255, 255, 0.2);
}

.stat-change.negative {
  background: rgba(255, 0, 0, 0.2);
}

/* Progress Widgets */
.progress-widgets {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-label {
  font-weight: 500;
  color: var(--text-color);
}

.progress-value {
  font-weight: 600;
  color: var(--text-color-secondary);
}

.progress-bar {
  height: 8px;
  background: var(--bg-color-secondary);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-fill[data-color="primary"] { background: var(--primary-color); }
.progress-fill[data-color="success"] { background: #10b981; }
.progress-fill[data-color="danger"] { background: #ef4444; }
.progress-fill[data-color="info"] { background: #06b6d4; }

/* Mini Chart */
.mini-chart {
  text-align: center;
}

.chart-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
}

.chart-stat {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.stat-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.stat-dot.primary { background: #6366f1; }
.stat-dot.success { background: #10b981; }

.stat-text {
  font-size: 0.875rem;
  color: var(--text-color-secondary);
}

/* Activity Feed */
.activity-feed {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.activity-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.activity-avatar.primary { background: var(--primary-color); }
.activity-avatar.success { background: #10b981; }
.activity-avatar.warning { background: #f59e0b; }
.activity-avatar.info { background: #06b6d4; }

.activity-content {
  flex: 1;
}

.activity-text {
  color: var(--text-color);
  margin-bottom: var(--spacing-xs);
}

.activity-time {
  font-size: 0.75rem;
  color: var(--text-color-secondary);
}

/* Tasks Widget */
.tasks-widget {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.task-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.task-checkbox {
  position: relative;
  cursor: pointer;
  margin-top: 2px;
}

.task-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  width: 20px;
  height: 20px;
  background: var(--bg-color-secondary);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  display: block;
  transition: all 0.2s ease;
}

.task-checkbox input:checked ~ .checkmark {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.task-checkbox input:checked ~ .checkmark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
}

.task-content {
  flex: 1;
}

.task-content.completed {
  opacity: 0.6;
}

.task-content.completed .task-text {
  text-decoration: line-through;
}

.task-text {
  color: var(--text-color);
  margin-bottom: var(--spacing-xs);
}

.task-meta {
  font-size: 0.75rem;
  color: var(--text-color-secondary);
}

/* Weather Widget */
.weather-widget {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.weather-header {
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.weather-location {
  font-size: 1.125rem;
  font-weight: 600;
}

.weather-date {
  font-size: 0.875rem;
  opacity: 0.8;
}

.weather-main {
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.weather-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.weather-temp {
  font-size: 2rem;
  font-weight: 700;
}

.weather-desc {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.weather-details {
  display: flex;
  justify-content: space-between;
}

.weather-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.detail-label {
  font-size: 0.75rem;
  opacity: 0.8;
  margin-bottom: var(--spacing-xs);
}

.detail-value {
  font-weight: 600;
}

/* Calendar Widget */
.mini-calendar {
  width: 100%;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.calendar-nav {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  font-weight: 600;
  padding: var(--spacing-xs);
}

.calendar-title {
  font-weight: 600;
  color: var(--text-color);
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendar-day-header {
  padding: var(--spacing-sm);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-color-secondary);
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease;
}

.calendar-day:hover {
  background: var(--bg-color-secondary);
}

.calendar-day.active {
  background: var(--primary-color);
  color: white;
}

/* Social Stats */
.social-stats {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.social-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--bg-color-secondary);
  border-radius: var(--border-radius);
  transition: transform 0.2s ease;
}

.social-item:hover {
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.5rem;
}

.social-content {
  flex: 1;
}

.social-count {
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: var(--spacing-xs);
}

.social-label {
  font-size: 0.875rem;
  color: var(--text-color-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .chart-stats {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
