<template>
  <div class="tables-page">
    <div class="page-header">
      <h1>Basic Tables</h1>
      <p>Static HTML table styling options with various layouts, colors, and responsive features.</p>
    </div>

    <!-- Basic Table -->
    <div class="showcase-section">
      <h2>Basic Table</h2>
      <div class="table-demo">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start Date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
            <tr>
              <td>Ashton Cox</td>
              <td>Junior Technical Author</td>
              <td>San Francisco</td>
              <td>66</td>
              <td>2009/01/12</td>
              <td>$86,000</td>
            </tr>
            <tr>
              <td>Cedric Kelly</td>
              <td>Senior Javascript Developer</td>
              <td>Edinburgh</td>
              <td>22</td>
              <td>2012/03/29</td>
              <td>$433,060</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Striped Table -->
    <div class="showcase-section">
      <h2>Striped Table</h2>
      <div class="table-demo">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>MacBook Pro</td>
              <td>Laptops</td>
              <td>$2,399</td>
              <td>15</td>
              <td><span class="badge badge-success">In Stock</span></td>
            </tr>
            <tr>
              <td>002</td>
              <td>iPhone 14</td>
              <td>Phones</td>
              <td>$999</td>
              <td>32</td>
              <td><span class="badge badge-success">In Stock</span></td>
            </tr>
            <tr>
              <td>003</td>
              <td>iPad Air</td>
              <td>Tablets</td>
              <td>$599</td>
              <td>0</td>
              <td><span class="badge badge-error">Out of Stock</span></td>
            </tr>
            <tr>
              <td>004</td>
              <td>AirPods Pro</td>
              <td>Audio</td>
              <td>$249</td>
              <td>8</td>
              <td><span class="badge badge-warning">Low Stock</span></td>
            </tr>
            <tr>
              <td>005</td>
              <td>Apple Watch</td>
              <td>Wearables</td>
              <td>$399</td>
              <td>25</td>
              <td><span class="badge badge-success">In Stock</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Bordered Table -->
    <div class="showcase-section">
      <h2>Bordered Table</h2>
      <div class="table-demo">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="user-info">
                  <div class="avatar avatar-sm">
                    <img src="https://via.placeholder.com/32" alt="User">
                  </div>
                  <span>John Doe</span>
                </div>
              </td>
              <td>john.doe@example.com</td>
              <td>Admin</td>
              <td>IT</td>
              <td>
                <div class="table-actions">
                  <button class="btn btn-sm btn-outline-primary">Edit</button>
                  <button class="btn btn-sm btn-outline-error">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-info">
                  <div class="avatar avatar-sm">
                    <img src="https://via.placeholder.com/32" alt="User">
                  </div>
                  <span>Jane Smith</span>
                </div>
              </td>
              <td>jane.smith@example.com</td>
              <td>Manager</td>
              <td>Sales</td>
              <td>
                <div class="table-actions">
                  <button class="btn btn-sm btn-outline-primary">Edit</button>
                  <button class="btn btn-sm btn-outline-error">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="user-info">
                  <div class="avatar avatar-sm">
                    <img src="https://via.placeholder.com/32" alt="User">
                  </div>
                  <span>Mike Johnson</span>
                </div>
              </td>
              <td>mike.johnson@example.com</td>
              <td>Developer</td>
              <td>Engineering</td>
              <td>
                <div class="table-actions">
                  <button class="btn btn-sm btn-outline-primary">Edit</button>
                  <button class="btn btn-sm btn-outline-error">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Hoverable Table -->
    <div class="showcase-section">
      <h2>Hoverable Table</h2>
      <div class="table-demo">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-001</td>
              <td>Alice Cooper</td>
              <td>2023-12-01</td>
              <td>$1,250.00</td>
              <td><span class="badge badge-success">Completed</span></td>
              <td><span class="badge badge-info">Credit Card</span></td>
            </tr>
            <tr>
              <td>#ORD-002</td>
              <td>Bob Wilson</td>
              <td>2023-12-02</td>
              <td>$875.50</td>
              <td><span class="badge badge-warning">Pending</span></td>
              <td><span class="badge badge-info">PayPal</span></td>
            </tr>
            <tr>
              <td>#ORD-003</td>
              <td>Carol Brown</td>
              <td>2023-12-03</td>
              <td>$2,100.75</td>
              <td><span class="badge badge-success">Completed</span></td>
              <td><span class="badge badge-info">Bank Transfer</span></td>
            </tr>
            <tr>
              <td>#ORD-004</td>
              <td>David Lee</td>
              <td>2023-12-04</td>
              <td>$450.25</td>
              <td><span class="badge badge-error">Cancelled</span></td>
              <td><span class="badge badge-secondary">N/A</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Condensed Table -->
    <div class="showcase-section">
      <h2>Condensed Table</h2>
      <div class="table-demo">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ITEM-001</td>
              <td>Premium Wireless Headphones</td>
              <td>2</td>
              <td>$149.99</td>
              <td>$299.98</td>
            </tr>
            <tr>
              <td>ITEM-002</td>
              <td>Bluetooth Speaker</td>
              <td>1</td>
              <td>$79.99</td>
              <td>$79.99</td>
            </tr>
            <tr>
              <td>ITEM-003</td>
              <td>USB-C Cable</td>
              <td>3</td>
              <td>$12.99</td>
              <td>$38.97</td>
            </tr>
            <tr>
              <td>ITEM-004</td>
              <td>Wireless Charger</td>
              <td>1</td>
              <td>$29.99</td>
              <td>$29.99</td>
            </tr>
            <tr>
              <td>ITEM-005</td>
              <td>Phone Case</td>
              <td>2</td>
              <td>$19.99</td>
              <td>$39.98</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="4">Total</th>
              <th>$488.91</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Contextual Table -->
    <div class="showcase-section">
      <h2>Contextual Table Rows</h2>
      <div class="table-demo">
        <table class="table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Result</th>
              <th>Score</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-success">
              <td>Unit Tests</td>
              <td>Passed</td>
              <td>98%</td>
              <td>✓ Success</td>
              <td>2023-12-01</td>
            </tr>
            <tr class="table-info">
              <td>Integration Tests</td>
              <td>Running</td>
              <td>-</td>
              <td>⏳ In Progress</td>
              <td>2023-12-01</td>
            </tr>
            <tr class="table-warning">
              <td>Performance Tests</td>
              <td>Warning</td>
              <td>75%</td>
              <td>⚠ Needs Attention</td>
              <td>2023-12-01</td>
            </tr>
            <tr class="table-error">
              <td>Security Tests</td>
              <td>Failed</td>
              <td>45%</td>
              <td>✗ Failed</td>
              <td>2023-12-01</td>
            </tr>
            <tr>
              <td>Code Coverage</td>
              <td>Completed</td>
              <td>85%</td>
              <td>✓ Passed</td>
              <td>2023-12-01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Dark Table -->
    <div class="showcase-section">
      <h2>Dark Table</h2>
      <div class="table-demo">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Server</th>
              <th>Status</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Disk</th>
              <th>Uptime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>web-server-01</td>
              <td><span class="badge badge-success">Online</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 45%"></div>
                </div>
                <span class="progress-text">45%</span>
              </td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 62%"></div>
                </div>
                <span class="progress-text">62%</span>
              </td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 78%"></div>
                </div>
                <span class="progress-text">78%</span>
              </td>
              <td>15 days</td>
            </tr>
            <tr>
              <td>web-server-02</td>
              <td><span class="badge badge-success">Online</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 32%"></div>
                </div>
                <span class="progress-text">32%</span>
              </td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 55%"></div>
                </div>
                <span class="progress-text">55%</span>
              </td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 43%"></div>
                </div>
                <span class="progress-text">43%</span>
              </td>
              <td>8 days</td>
            </tr>
            <tr>
              <td>db-server-01</td>
              <td><span class="badge badge-warning">Maintenance</span></td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 12%"></div>
                </div>
                <span class="progress-text">12%</span>
              </td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 28%"></div>
                </div>
                <span class="progress-text">28%</span>
              </td>
              <td>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 91%"></div>
                </div>
                <span class="progress-text">91%</span>
              </td>
              <td>2 hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Responsive Table -->
    <div class="showcase-section">
      <h2>Responsive Table</h2>
      <div class="table-demo">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Final Price</th>
                <th>Stock</th>
                <th>Vendor</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Professional Camera</td>
                <td>CAM-2023-001</td>
                <td>Electronics</td>
                <td>Canon</td>
                <td>$1,299.99</td>
                <td>10%</td>
                <td>$1,169.99</td>
                <td>12</td>
                <td>Tech Supplier Co.</td>
                <td>4.8/5</td>
                <td>127</td>
                <td>
                  <div class="table-actions">
                    <button class="btn btn-sm btn-outline-primary">View</button>
                    <button class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Gaming Laptop</td>
                <td>LAP-2023-002</td>
                <td>Computers</td>
                <td>ASUS</td>
                <td>$1,899.99</td>
                <td>15%</td>
                <td>$1,614.99</td>
                <td>8</td>
                <td>Computer World Inc.</td>
                <td>4.6/5</td>
                <td>89</td>
                <td>
                  <div class="table-actions">
                    <button class="btn btn-sm btn-outline-primary">View</button>
                    <button class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Wireless Headphones</td>
                <td>AUD-2023-003</td>
                <td>Audio</td>
                <td>Sony</td>
                <td>$349.99</td>
                <td>20%</td>
                <td>$279.99</td>
                <td>25</td>
                <td>Audio Solutions Ltd.</td>
                <td>4.7/5</td>
                <td>203</td>
                <td>
                  <div class="table-actions">
                    <button class="btn btn-sm btn-outline-primary">View</button>
                    <button class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <small class="table-note">Scroll horizontally to see all columns on smaller screens.</small>
      </div>
    </div>

    <!-- Table with Fixed Header -->
    <div class="showcase-section">
      <h2>Fixed Header Table</h2>
      <div class="table-demo">
        <div class="table-fixed-header">
          <table class="table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Hire Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="employee in employees" :key="employee.id">
                <td>{{ employee.id }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.department }}</td>
                <td>{{ employee.position }}</td>
                <td>{{ employee.salary }}</td>
                <td>{{ employee.hireDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <small class="table-note">Table header remains fixed while scrolling through content.</small>
      </div>
    </div>

    <!-- Table Variations -->
    <div class="showcase-section">
      <h2>Table Style Combinations</h2>
      <div class="table-grid">
        <div class="table-demo">
          <h3>Striped + Bordered</h3>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>95</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td><span class="badge badge-warning">Pending</span></td>
                <td>87</td>
              </tr>
              <tr>
                <td>Carol</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>92</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-demo">
          <h3>Hover + Small</h3>
          <table class="table table-hover table-sm">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Widget A</td>
                <td>5</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Widget B</td>
                <td>3</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Widget C</td>
                <td>8</td>
                <td>$12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Sample data for fixed header table
const employees = ref([
  { id: 'EMP001', name: 'John Doe', department: 'Engineering', position: 'Senior Developer', salary: '$95,000', hireDate: '2020-01-15' },
  { id: 'EMP002', name: 'Jane Smith', department: 'Design', position: 'UX Designer', salary: '$78,000', hireDate: '2020-03-22' },
  { id: 'EMP003', name: 'Mike Johnson', department: 'Marketing', position: 'Marketing Manager', salary: '$85,000', hireDate: '2019-11-08' },
  { id: 'EMP004', name: 'Sarah Wilson', department: 'Engineering', position: 'Frontend Developer', salary: '$82,000', hireDate: '2021-05-14' },
  { id: 'EMP005', name: 'David Brown', department: 'Sales', position: 'Sales Representative', salary: '$65,000', hireDate: '2021-08-30' },
  { id: 'EMP006', name: 'Lisa Anderson', department: 'HR', position: 'HR Specialist', salary: '$58,000', hireDate: '2020-12-10' },
  { id: 'EMP007', name: 'Tom Garcia', department: 'Engineering', position: 'Backend Developer', salary: '$88,000', hireDate: '2019-07-25' },
  { id: 'EMP008', name: 'Emily Davis', department: 'Design', position: 'Graphic Designer', salary: '$72,000', hireDate: '2021-02-18' },
  { id: 'EMP009', name: 'Chris Martinez', department: 'Operations', position: 'Operations Manager', salary: '$92,000', hireDate: '2018-09-12' },
  { id: 'EMP010', name: 'Amanda Taylor', department: 'Finance', position: 'Financial Analyst', salary: '$75,000', hireDate: '2020-06-05' },
  { id: 'EMP011', name: 'Kevin White', department: 'Engineering', position: 'DevOps Engineer', salary: '$98,000', hireDate: '2019-04-30' },
  { id: 'EMP012', name: 'Jessica Lee', department: 'Marketing', position: 'Content Manager', salary: '$68,000', hireDate: '2021-11-22' }
])
</script>

<style scoped>
.tables-page {
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

.showcase-section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.table-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  overflow: hidden;
}

.table-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-lg);
}

/* Table Base Styles */
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

.table tbody tr:last-child td {
  border-bottom: none;
}

/* Table Variants */
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
  cursor: pointer;
}

.table-sm th,
.table-sm td {
  padding: var(--spacing-sm);
}

/* Contextual Classes */
.table-success {
  background: var(--success-light);
}

.table-info {
  background: var(--info-light);
}

.table-warning {
  background: var(--warning-light);
}

.table-error {
  background: var(--error-light);
}

/* Dark Table */
.table-dark {
  background: var(--text-primary);
  color: var(--surface-primary);
}

.table-dark th {
  background: rgba(255, 255, 255, 0.1);
  color: var(--surface-primary);
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.table-dark td {
  border-bottom-color: rgba(255, 255, 255, 0.2);
}

.table-dark tbody tr:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive Table */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-note {
  display: block;
  margin-top: var(--spacing-sm);
  color: var(--text-secondary);
  font-style: italic;
}

/* Fixed Header Table */
.table-fixed-header {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.table-fixed-header .table {
  margin: 0;
}

.table-fixed-header .table th {
  position: sticky;
  top: 0;
  background: var(--surface-secondary);
  z-index: 10;
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

/* Progress Bars in Tables */
.progress-bar {
  width: 80px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin-right: var(--spacing-xs);
}

.table-dark .progress-bar {
  background: rgba(255, 255, 255, 0.2);
}

.progress-fill {
  height: 100%;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: var(--text-secondary);
  display: inline-block;
  min-width: 30px;
}

.table-dark .progress-text {
  color: var(--surface-primary);
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

.badge-secondary {
  background: var(--surface-secondary);
  color: var(--text-secondary);
}

/* Button Styles */
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
  font-size: 0.75rem;
  line-height: 1;
}

.btn-sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.75rem;
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

.btn-outline-error {
  background: transparent;
  color: var(--error-color);
  border-color: var(--error-color);
}

.btn-outline-error:hover {
  background: var(--error-color);
  color: var(--text-on-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .table-grid {
    grid-template-columns: 1fr;
  }
  
  .table {
    font-size: 0.8125rem;
  }
  
  .table th,
  .table td {
    padding: var(--spacing-sm);
  }
  
  .table-actions {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
  
  .user-info {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
  
  .progress-bar {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .table th,
  .table td {
    padding: var(--spacing-xs);
  }
  
  .table {
    font-size: 0.75rem;
  }
  
  .badge {
    font-size: 0.6875rem;
    padding: 2px var(--spacing-xs);
  }
  
  .btn-sm {
    font-size: 0.6875rem;
    padding: 2px var(--spacing-xs);
  }
}
</style>
