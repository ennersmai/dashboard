<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Dashboard</h1>
      <p>Welcome back! Here's what's happening with your admin panel today.</p>
    </div>
    
    <!-- KPI Cards -->
    <div class="kpi-section">
      <div class="row">
        <div class="col-3" v-for="kpi in kpiCards" :key="kpi.id">
          <div class="kpi-card" :class="kpi.colorClass">
            <div class="kpi-icon">
              <span v-html="kpi.icon"></span>
            </div>
            <div class="kpi-content">
              <h3>{{ kpi.value }}</h3>
              <p>{{ kpi.title }}</p>
              <div class="kpi-trend" :class="kpi.trend.direction">
                <span v-html="kpi.trend.icon"></span>
                <span>{{ kpi.trend.value }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Charts Section -->
    <div class="charts-section">
      <div class="row">
        <div class="col-8">
          <div class="card">
            <div class="card-header">
              <h3>User Statistics</h3>
              <div class="chart-filters">
                <button class="btn btn-secondary btn-sm">Last 7 days</button>
                <button class="btn btn-secondary btn-sm">Last 30 days</button>
                <button class="btn btn-primary btn-sm">Last 3 months</button>
              </div>
            </div>
            <div class="card-body">
              <div class="chart-placeholder">
                <svg width="100%" height="300" viewBox="0 0 800 300">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:var(--primary-color);stop-opacity:0.8" />
                      <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:0.1" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="50,250 150,200 250,180 350,160 450,140 550,120 650,100 750,80"
                    fill="none"
                    stroke="var(--primary-color)"
                    stroke-width="3"
                  />
                  <polygon
                    points="50,250 150,200 250,180 350,160 450,140 550,120 650,100 750,80 750,300 50,300"
                    fill="url(#chartGradient)"
                  />
                </svg>
                <div class="chart-label">User Statistics Chart Placeholder</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <h3>Daily Sales</h3>
            </div>
            <div class="card-body">
              <div class="chart-placeholder small">
                <svg width="100%" height="200" viewBox="0 0 300 200">
                  <circle cx="150" cy="100" r="80" fill="none" stroke="var(--border-light)" stroke-width="20"/>
                  <circle cx="150" cy="100" r="80" fill="none" stroke="var(--primary-color)" stroke-width="20" 
                          stroke-dasharray="251" stroke-dashoffset="75" stroke-linecap="round"/>
                  <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" 
                        class="chart-text">75%</text>
                  <text x="150" y="125" text-anchor="middle" dominant-baseline="middle" 
                        class="chart-subtext">$24,500</text>
                </svg>
                <div class="chart-label">Sales Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Maps and Tables Section -->
    <div class="content-section">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-header">
              <h3>Users Geolocation</h3>
            </div>
            <div class="card-body">
              <div class="map-placeholder">
                <svg width="100%" height="250" viewBox="0 0 400 250">
                  <rect width="400" height="250" fill="var(--bg-secondary)" stroke="var(--border-light)"/>
                  <circle cx="120" cy="80" r="8" fill="var(--primary-color)"/>
                  <circle cx="280" cy="120" r="6" fill="var(--accent-color)"/>
                  <circle cx="200" cy="160" r="10" fill="var(--warning-color)"/>
                  <circle cx="350" cy="90" r="7" fill="var(--error-color)"/>
                  <text x="200" y="125" text-anchor="middle" class="map-text">World Map Placeholder</text>
                  <text x="200" y="145" text-anchor="middle" class="map-subtext">User locations will be displayed here</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-6">
          <div class="card">
            <div class="card-header">
              <h3>New Customers</h3>
              <button class="btn btn-primary btn-sm">View All</button>
            </div>
            <div class="card-body">
              <div class="customer-list">
                <div v-for="customer in newCustomers" :key="customer.id" class="customer-item">
                  <div class="customer-avatar">
                    <img :src="customer.avatar" :alt="customer.name">
                  </div>
                  <div class="customer-info">
                    <h4>{{ customer.name }}</h4>
                    <p>{{ customer.email }}</p>
                  </div>
                  <div class="customer-status">
                    <span class="status-badge" :class="customer.status">{{ customer.status }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Transaction History -->
    <div class="transactions-section">
      <div class="card">
        <div class="card-header">
          <h3>Recent Transactions</h3>
          <div class="header-actions">
            <button class="btn btn-secondary btn-sm">Export</button>
            <button class="btn btn-primary btn-sm">New Transaction</button>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaction in transactions" :key="transaction.id">
                  <td class="font-medium">#{{ transaction.id }}</td>
                  <td>{{ transaction.customer }}</td>
                  <td class="font-semibold">${{ transaction.amount }}</td>
                  <td>
                    <span class="status-badge" :class="transaction.status">
                      {{ transaction.status }}
                    </span>
                  </td>
                  <td>{{ transaction.date }}</td>
                  <td>
                    <button class="btn btn-secondary btn-sm">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// KPI Cards Data
const kpiCards = ref([
  {
    id: 'visitors',
    title: 'Visitors',
    value: '10.3K',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 14C20.4 14 24 15.8 24 18V20H8V18C8 15.8 11.6 14 16 14M12.5 11.5C13.3 11.5 14 10.8 14 10S13.3 8.5 12.5 8.5 11 9.2 11 10 11.7 11.5 12.5 11.5M12.5 13C8.1 13 4.5 14.8 4.5 17V19H0V17C0 14.8 3.6 13 8 13H9C10.1 13 11.1 13.3 12.5 13Z"/></svg>',
    colorClass: 'kpi-card--primary',
    trend: {
      direction: 'up',
      value: '12.5',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"/></svg>'
    }
  },
  {
    id: 'subscribers',
    title: 'Subscribers',
    value: '2.4K',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>',
    colorClass: 'kpi-card--success',
    trend: {
      direction: 'up',
      value: '8.2',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"/></svg>'
    }
  },
  {
    id: 'sales',
    title: 'Sales',
    value: '$24.5K',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/></svg>',
    colorClass: 'kpi-card--warning',
    trend: {
      direction: 'down',
      value: '3.1',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"/></svg>'
    }
  },
  {
    id: 'orders',
    title: 'Orders',
    value: '1.2K',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19,7H18V6A2,2 0 0,0 16,4H8A2,2 0 0,0 6,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M8,6H16V7H8V6M18,19A1,1 0 0,1 17,20H7A1,1 0 0,1 6,19V9H8V10A1,1 0 0,0 9,11A1,1 0 0,0 10,10V9H14V10A1,1 0 0,0 15,11A1,1 0 0,0 16,10V9H18V19Z"/></svg>',
    colorClass: 'kpi-card--info',
    trend: {
      direction: 'up',
      value: '15.3',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z"/></svg>'
    }
  }
])

// New Customers Data
const newCustomers = ref([
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: 'https://via.placeholder.com/40',
    status: 'active'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    avatar: 'https://via.placeholder.com/40',
    status: 'pending'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@example.com',
    avatar: 'https://via.placeholder.com/40',
    status: 'active'
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://via.placeholder.com/40',
    status: 'inactive'
  }
])

// Transactions Data
const transactions = ref([
  {
    id: '12345',
    customer: 'John Doe',
    amount: '1,250.00',
    status: 'completed',
    date: '2024-01-15'
  },
  {
    id: '12346',
    customer: 'Jane Smith',
    amount: '750.00',
    status: 'pending',
    date: '2024-01-15'
  },
  {
    id: '12347',
    customer: 'Mike Johnson',
    amount: '2,100.00',
    status: 'completed',
    date: '2024-01-14'
  },
  {
    id: '12348',
    customer: 'Sarah Wilson',
    amount: '450.00',
    status: 'failed',
    date: '2024-01-14'
  },
  {
    id: '12349',
    customer: 'Tom Brown',
    amount: '1,800.00',
    status: 'completed',
    date: '2024-01-13'
  }
])
</script>

<style scoped>
.dashboard {
  padding: var(--spacing-lg);
}

.dashboard-header {
  margin-bottom: var(--spacing-2xl);
}

.dashboard-header h1 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.dashboard-header p {
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
}

/* KPI Cards */
.kpi-section {
  margin-bottom: var(--spacing-2xl);
}

.kpi-card {
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.kpi-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.kpi-card--primary .kpi-icon { background-color: var(--primary-color); }
.kpi-card--success .kpi-icon { background-color: var(--success-color); }
.kpi-card--warning .kpi-icon { background-color: var(--warning-color); }
.kpi-card--info .kpi-icon { background-color: var(--info-color); }

.kpi-content h3 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xs) 0;
}

.kpi-content p {
  color: var(--text-secondary);
  margin: 0 0 var(--spacing-sm) 0;
  font-weight: 500;
}

.kpi-trend {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.kpi-trend.up { color: var(--success-color); }
.kpi-trend.down { color: var(--error-color); }

/* Charts */
.charts-section {
  margin-bottom: var(--spacing-2xl);
}

.chart-placeholder {
  position: relative;
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  text-align: center;
}

.chart-placeholder.small {
  padding: var(--spacing-md);
}

.chart-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-muted);
  font-weight: 500;
  pointer-events: none;
}

.chart-text {
  font-size: 24px;
  font-weight: 700;
  fill: var(--text-primary);
}

.chart-subtext {
  font-size: 14px;
  fill: var(--text-secondary);
}

.chart-filters {
  display: flex;
  gap: var(--spacing-sm);
}

/* Map */
.map-placeholder {
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  text-align: center;
}

.map-text {
  font-size: 16px;
  fill: var(--text-secondary);
  font-weight: 500;
}

.map-subtext {
  font-size: 12px;
  fill: var(--text-muted);
}

/* Customer List */
.customer-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.customer-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-light);
  transition: background-color var(--transition-fast);
}

.customer-item:hover {
  background-color: var(--bg-secondary);
}

.customer-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.customer-info {
  flex: 1;
}

.customer-info h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 var(--spacing-xs) 0;
}

.customer-info p {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin: 0;
}

/* Status Badges */
.status-badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.active { background-color: var(--success-color); color: white; }
.status-badge.pending { background-color: var(--warning-color); color: white; }
.status-badge.inactive { background-color: var(--text-muted); color: white; }
.status-badge.completed { background-color: var(--success-color); color: white; }
.status-badge.failed { background-color: var(--error-color); color: white; }

/* Tables */
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border-light);
}

.table th {
  font-weight: 600;
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-light);
}

.table tbody tr:hover {
  background-color: var(--bg-secondary);
}

/* Card Headers */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.header-actions {
  display: flex;
  gap: var(--spacing-sm);
}

/* Sections */
.content-section,
.transactions-section {
  margin-bottom: var(--spacing-2xl);
}

/* Responsive */
@media (max-width: 1200px) {
  .col-3 { flex: 0 0 50%; max-width: 50%; }
  .col-8 { flex: 0 0 100%; max-width: 100%; }
  .col-4 { flex: 0 0 100%; max-width: 100%; }
}

@media (max-width: 768px) {
  .dashboard {
    padding: var(--spacing-md);
  }
  
  .col-3,
  .col-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .kpi-card {
    padding: var(--spacing-lg);
  }
  
  .chart-filters {
    flex-wrap: wrap;
  }
  
  .header-actions {
    flex-wrap: wrap;
  }
}
</style>
