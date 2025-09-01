<template>
  <div class="datatables-page">
    <div class="page-header">
      <h1>Data Tables</h1>
      <p>Interactive tables with sorting, filtering, pagination, and search functionality.</p>
    </div>

    <!-- Basic Interactive Table -->
    <div class="showcase-section">
      <h2>Interactive Data Table</h2>
      <div class="table-demo">
        <!-- Table Controls -->
        <div class="table-controls">
          <div class="table-controls-left">
            <div class="entries-selector">
              <label>Show</label>
              <select v-model="pageSize" @change="updatePagination" class="form-control form-control-sm">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <label>entries</label>
            </div>
          </div>
          <div class="table-controls-right">
            <div class="search-box">
              <label>Search:</label>
              <input 
                v-model="searchQuery" 
                type="text" 
                class="form-control form-control-sm"
                placeholder="Search..."
                @input="handleSearch"
              >
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th 
                  v-for="column in columns" 
                  :key="column.key"
                  :class="{ 'sortable': column.sortable }"
                  @click="column.sortable && sort(column.key)"
                >
                  {{ column.label }}
                  <span v-if="column.sortable" class="sort-indicator">
                    <svg 
                      v-if="sortColumn === column.key" 
                      :class="{ 'rotated': sortDirection === 'desc' }"
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M7,10L12,15L17,10H7Z" />
                    </svg>
                    <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                      <path d="M7,10L12,15L17,10H7Z" />
                    </svg>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in paginatedData" :key="row.id">
                <td>{{ row.id }}</td>
                <td>
                  <div class="user-info">
                    <div class="avatar avatar-sm">
                      <img :src="row.avatar" :alt="row.name">
                    </div>
                    <span>{{ row.name }}</span>
                  </div>
                </td>
                <td>{{ row.position }}</td>
                <td>{{ row.office }}</td>
                <td>{{ row.age }}</td>
                <td>{{ formatDate(row.startDate) }}</td>
                <td>{{ formatCurrency(row.salary) }}</td>
                <td>
                  <span :class="['badge', `badge-${row.status.type}`]">
                    {{ row.status.label }}
                  </span>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="btn btn-sm btn-outline-primary" @click="viewEmployee(row)">View</button>
                    <button class="btn btn-sm btn-outline-secondary" @click="editEmployee(row)">Edit</button>
                    <button class="btn btn-sm btn-outline-error" @click="deleteEmployee(row)">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table Info and Pagination -->
        <div class="table-footer">
          <div class="table-info">
            Showing {{ startEntry }} to {{ endEntry }} of {{ filteredData.length }} entries
            <span v-if="searchQuery">(filtered from {{ tableData.length }} total entries)</span>
          </div>
          <div class="pagination-wrapper">
            <nav class="pagination">
              <button 
                class="page-btn"
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
              >
                Previous
              </button>
              <button 
                v-for="page in visiblePages" 
                :key="page"
                :class="['page-btn', { active: page === currentPage }]"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
              <button 
                class="page-btn"
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Filtering Table -->
    <div class="showcase-section">
      <h2>Advanced Filtering</h2>
      <div class="table-demo">
        <!-- Advanced Filters -->
        <div class="advanced-filters">
          <div class="filter-row">
            <div class="filter-group">
              <label>Office:</label>
              <select v-model="filters.office" @change="applyFilters" class="form-control form-control-sm">
                <option value="">All Offices</option>
                <option v-for="office in uniqueOffices" :key="office" :value="office">{{ office }}</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Position:</label>
              <select v-model="filters.position" @change="applyFilters" class="form-control form-control-sm">
                <option value="">All Positions</option>
                <option v-for="position in uniquePositions" :key="position" :value="position">{{ position }}</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Status:</label>
              <select v-model="filters.status" @change="applyFilters" class="form-control form-control-sm">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div class="filter-group">
              <label>Salary Range:</label>
              <div class="range-filter">
                <input 
                  v-model="filters.salaryMin" 
                  type="number" 
                  placeholder="Min"
                  class="form-control form-control-sm"
                  @input="applyFilters"
                >
                <span>-</span>
                <input 
                  v-model="filters.salaryMax" 
                  type="number" 
                  placeholder="Max"
                  class="form-control form-control-sm"
                  @input="applyFilters"
                >
              </div>
            </div>
            <div class="filter-group">
              <button class="btn btn-sm btn-outline-secondary" @click="clearFilters">Clear Filters</button>
            </div>
          </div>
        </div>

        <!-- Filtered Results Table -->
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in filteredAdvancedData" :key="row.id">
                <td>{{ row.name }}</td>
                <td>{{ row.position }}</td>
                <td>{{ row.office }}</td>
                <td>{{ formatCurrency(row.salary) }}</td>
                <td>
                  <span :class="['badge', `badge-${row.status.type}`]">
                    {{ row.status.label }}
                  </span>
                </td>
              </tr>
              <tr v-if="filteredAdvancedData.length === 0">
                <td colspan="5" class="no-results">No matching records found</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="filter-results">
          Showing {{ filteredAdvancedData.length }} of {{ tableData.length }} entries
        </div>
      </div>
    </div>

    <!-- Selectable Rows Table -->
    <div class="showcase-section">
      <h2>Selectable Rows</h2>
      <div class="table-demo">
        <!-- Bulk Actions -->
        <div class="bulk-actions" v-if="selectedRows.length > 0">
          <div class="selection-info">
            {{ selectedRows.length }} row(s) selected
          </div>
          <div class="bulk-buttons">
            <button class="btn btn-sm btn-primary" @click="bulkAction('export')">Export Selected</button>
            <button class="btn btn-sm btn-warning" @click="bulkAction('archive')">Archive Selected</button>
            <button class="btn btn-sm btn-error" @click="bulkAction('delete')">Delete Selected</button>
          </div>
        </div>

        <!-- Selectable Table -->
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  <input 
                    type="checkbox" 
                    :checked="isAllSelected"
                    @change="toggleSelectAll"
                    class="form-check-input"
                  >
                </th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>
                  <input 
                    type="checkbox" 
                    :value="product.id"
                    v-model="selectedRows"
                    class="form-check-input"
                  >
                </td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ formatCurrency(product.price) }}</td>
                <td>{{ product.stock }}</td>
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

    <!-- Export and Actions -->
    <div class="showcase-section">
      <h2>Export & Actions</h2>
      <div class="table-demo">
        <div class="export-actions">
          <button class="btn btn-outline-primary" @click="exportData('csv')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Export CSV
          </button>
          <button class="btn btn-outline-success" @click="exportData('excel')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
            </svg>
            Export Excel
          </button>
          <button class="btn btn-outline-info" @click="exportData('pdf')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Export PDF
          </button>
          <button class="btn btn-outline-secondary" @click="printTable">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
            </svg>
            Print
          </button>
        </div>

        <!-- Summary Statistics -->
        <div class="table-stats">
          <div class="stat-card">
            <div class="stat-value">{{ tableData.length }}</div>
            <div class="stat-label">Total Records</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ uniqueOffices.length }}</div>
            <div class="stat-label">Offices</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ uniquePositions.length }}</div>
            <div class="stat-label">Positions</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ formatCurrency(averageSalary) }}</div>
            <div class="stat-label">Avg Salary</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// Types
interface Employee {
  id: number
  name: string
  position: string
  office: string
  age: number
  startDate: string
  salary: number
  avatar: string
  status: {
    type: string
    label: string
  }
}

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  status: {
    type: string
    label: string
  }
}

// State
const searchQuery = ref('')
const sortColumn = ref('id')
const sortDirection = ref<'asc' | 'desc'>('asc')
const currentPage = ref(1)
const pageSize = ref(10)
const selectedRows = ref<number[]>([])

// Filters
const filters = ref({
  office: '',
  position: '',
  status: '',
  salaryMin: '',
  salaryMax: ''
})

// Table columns configuration
const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'position', label: 'Position', sortable: true },
  { key: 'office', label: 'Office', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'startDate', label: 'Start Date', sortable: true },
  { key: 'salary', label: 'Salary', sortable: true },
  { key: 'status', label: 'Status', sortable: false },
  { key: 'actions', label: 'Actions', sortable: false }
]

// Sample data
const tableData = ref<Employee[]>([])
const products = ref<Product[]>([])

// Initialize sample data
onMounted(() => {
  generateSampleData()
})

const generateSampleData = () => {
  const names = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'David Brown', 'Lisa Anderson', 'Tom Garcia', 'Emily Davis', 'Chris Martinez', 'Amanda Taylor', 'Kevin White', 'Jessica Lee', 'Robert Clark', 'Mary Rodriguez', 'James Lewis', 'Patricia Walker', 'Michael Hall', 'Linda Allen', 'William Young', 'Elizabeth King']
  const positions = ['Software Engineer', 'Product Manager', 'Designer', 'Data Analyst', 'Marketing Manager', 'Sales Representative', 'HR Specialist', 'DevOps Engineer', 'Technical Writer', 'QA Engineer']
  const offices = ['New York', 'San Francisco', 'London', 'Tokyo', 'Sydney', 'Toronto', 'Berlin', 'Paris']
  const statuses = [
    { type: 'success', label: 'Active' },
    { type: 'warning', label: 'Pending' },
    { type: 'error', label: 'Inactive' }
  ]

  // Generate employees
  for (let i = 1; i <= 50; i++) {
    tableData.value.push({
      id: i,
      name: names[Math.floor(Math.random() * names.length)],
      position: positions[Math.floor(Math.random() * positions.length)],
      office: offices[Math.floor(Math.random() * offices.length)],
      age: Math.floor(Math.random() * 40) + 25,
      startDate: new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      salary: Math.floor(Math.random() * 80000) + 40000,
      avatar: `https://via.placeholder.com/32/${Math.floor(Math.random() * 16777215).toString(16)}/ffffff?text=${names[Math.floor(Math.random() * names.length)].charAt(0)}`,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    })
  }

  // Generate products
  const productNames = ['MacBook Pro', 'iPhone 14', 'iPad Air', 'AirPods Pro', 'Apple Watch', 'Dell XPS', 'Surface Pro', 'Galaxy S23', 'Pixel 7', 'ThinkPad X1']
  const categories = ['Laptops', 'Phones', 'Tablets', 'Audio', 'Wearables', 'Accessories']
  
  for (let i = 1; i <= 20; i++) {
    products.value.push({
      id: i,
      name: productNames[Math.floor(Math.random() * productNames.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      price: Math.floor(Math.random() * 2000) + 100,
      stock: Math.floor(Math.random() * 100),
      status: statuses[Math.floor(Math.random() * statuses.length)]
    })
  }
}

// Computed properties
const filteredData = computed(() => {
  let data = [...tableData.value]

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    data = data.filter(row => 
      Object.values(row).some(value => 
        String(value).toLowerCase().includes(query)
      )
    )
  }

  // Apply sorting
  if (sortColumn.value) {
    data.sort((a, b) => {
      let aVal = a[sortColumn.value as keyof Employee]
      let bVal = b[sortColumn.value as keyof Employee]

      // Handle nested objects
      if (typeof aVal === 'object' && aVal !== null) {
        aVal = (aVal as any).label || (aVal as any).type || ''
      }
      if (typeof bVal === 'object' && bVal !== null) {
        bVal = (bVal as any).label || (bVal as any).type || ''
      }

      if (aVal < bVal) return sortDirection.value === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection.value === 'asc' ? 1 : -1
      return 0
    })
  }

  return data
})

const filteredAdvancedData = computed(() => {
  let data = [...tableData.value]

  // Apply office filter
  if (filters.value.office) {
    data = data.filter(row => row.office === filters.value.office)
  }

  // Apply position filter
  if (filters.value.position) {
    data = data.filter(row => row.position === filters.value.position)
  }

  // Apply status filter
  if (filters.value.status) {
    data = data.filter(row => row.status.type === filters.value.status)
  }

  // Apply salary range filter
  if (filters.value.salaryMin) {
    data = data.filter(row => row.salary >= parseInt(filters.value.salaryMin))
  }
  if (filters.value.salaryMax) {
    data = data.filter(row => row.salary <= parseInt(filters.value.salaryMax))
  }

  return data
})

const totalPages = computed(() => Math.ceil(filteredData.value.length / pageSize.value))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredData.value.slice(start, end)
})

const startEntry = computed(() => (currentPage.value - 1) * pageSize.value + 1)
const endEntry = computed(() => Math.min(currentPage.value * pageSize.value, filteredData.value.length))

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i)
      pages.push('...', total)
    } else if (current >= total - 3) {
      pages.push(1, '...')
      for (let i = total - 4; i <= total; i++) pages.push(i)
    } else {
      pages.push(1, '...')
      for (let i = current - 1; i <= current + 1; i++) pages.push(i)
      pages.push('...', total)
    }
  }
  
  return pages.filter(page => page !== '...' || pages.indexOf(page) === pages.lastIndexOf(page))
})

const uniqueOffices = computed(() => [...new Set(tableData.value.map(row => row.office))].sort())
const uniquePositions = computed(() => [...new Set(tableData.value.map(row => row.position))].sort())

const isAllSelected = computed(() => {
  return products.value.length > 0 && selectedRows.value.length === products.value.length
})

const averageSalary = computed(() => {
  const sum = tableData.value.reduce((acc, row) => acc + row.salary, 0)
  return sum / tableData.value.length
})

// Methods
const sort = (column: string) => {
  if (sortColumn.value === column) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = column
    sortDirection.value = 'asc'
  }
  currentPage.value = 1
}

const handleSearch = () => {
  currentPage.value = 1
}

const updatePagination = () => {
  currentPage.value = 1
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const applyFilters = () => {
  // Filters are reactive, computed property will update automatically
}

const clearFilters = () => {
  filters.value = {
    office: '',
    position: '',
    status: '',
    salaryMin: '',
    salaryMax: ''
  }
}

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    selectedRows.value = []
  } else {
    selectedRows.value = products.value.map(product => product.id)
  }
}

const bulkAction = (action: string) => {
  console.log(`Bulk ${action} for rows:`, selectedRows.value)
  // Implement bulk actions here
}

const viewEmployee = (employee: Employee) => {
  console.log('View employee:', employee)
}

const editEmployee = (employee: Employee) => {
  console.log('Edit employee:', employee)
}

const deleteEmployee = (employee: Employee) => {
  console.log('Delete employee:', employee)
}

const exportData = (format: string) => {
  console.log(`Export data as ${format}`)
  // Implement export functionality
}

const printTable = () => {
  console.log('Print table')
  window.print()
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}
</script>

<style scoped>
.datatables-page {
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

.table-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  overflow: hidden;
}

/* Table Controls */
.table-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.entries-selector {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.entries-selector select {
  width: 80px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.search-box input {
  width: 200px;
}

/* Advanced Filters */
.advanced-filters {
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  align-items: end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 120px;
}

.filter-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
}

.range-filter {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.range-filter input {
  width: 80px;
}

.range-filter span {
  color: var(--text-secondary);
}

/* Table Styles */
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
  position: sticky;
  top: 0;
  z-index: 10;
}

.table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.table th.sortable:hover {
  background: var(--surface-hover);
}

.sort-indicator {
  margin-left: var(--spacing-xs);
  display: inline-block;
  vertical-align: middle;
}

.sort-indicator svg {
  transition: transform 0.2s;
}

.sort-indicator .rotated {
  transform: rotate(180deg);
}

.table-striped tbody tr:nth-child(even) {
  background: var(--surface-secondary);
}

.table-bordered {
  border: 1px solid var(--border-light);
}

.table-bordered th,
.table-bordered td {
  border: 1px solid var(--border-light);
}

.table-hover tbody tr:hover {
  background: var(--surface-hover);
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* User Info */
.user-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar-sm {
  width: 24px;
  height: 24px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Table Actions */
.table-actions {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

/* Table Footer */
.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-lg);
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.table-info {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Pagination */
.pagination {
  display: flex;
  gap: var(--spacing-xs);
}

.page-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  background: var(--surface-primary);
  color: var(--text-primary);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.page-btn:hover:not(:disabled) {
  background: var(--surface-hover);
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn.active {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-color: var(--primary-color);
}

/* Bulk Actions */
.bulk-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--info-light);
  border: 1px solid var(--info-color);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
}

.selection-info {
  font-weight: 500;
  color: var(--info-color);
}

.bulk-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

/* Export Actions */
.export-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;
}

.export-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

/* Table Stats */
.table-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.stat-card {
  background: var(--surface-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
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

.form-check-input {
  width: 16px;
  height: 16px;
  cursor: pointer;
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

.btn-primary {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-color: var(--primary-color);
}

.btn-primary:hover {
  background: var(--primary-dark);
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

.btn-outline-info {
  background: transparent;
  color: var(--info-color);
  border-color: var(--info-color);
}

.btn-outline-info:hover {
  background: var(--info-color);
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

/* Utilities */
.no-results {
  text-align: center;
  color: var(--text-secondary);
  font-style: italic;
  padding: var(--spacing-xl);
}

.filter-results {
  margin-top: var(--spacing-md);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .table-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-row {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .filter-group {
    min-width: auto;
  }
  
  .table-footer {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  
  .bulk-actions {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .export-actions {
    justify-content: center;
  }
  
  .table-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .table th,
  .table td {
    padding: var(--spacing-sm);
  }
  
  .table-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .table-stats {
    grid-template-columns: 1fr;
  }
  
  .pagination {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
