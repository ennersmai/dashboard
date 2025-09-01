<template>
  <div class="grid-page">
    <div class="page-header">
      <h1>Grid System</h1>
      <p>Responsive grid system with flexible columns, breakpoints, and utility classes.</p>
    </div>

    <!-- Basic Grid -->
    <div class="showcase-section">
      <h2>Basic Grid Columns</h2>
      <div class="grid-demo">
        <div class="row">
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col">
            <div class="grid-item">col</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Width Columns -->
    <div class="showcase-section">
      <h2>Fixed Width Columns</h2>
      <div class="grid-demo">
        <div class="row">
          <div class="col-1">
            <div class="grid-item">col-1</div>
          </div>
          <div class="col-11">
            <div class="grid-item">col-11</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-2">
            <div class="grid-item">col-2</div>
          </div>
          <div class="col-10">
            <div class="grid-item">col-10</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-3">
            <div class="grid-item">col-3</div>
          </div>
          <div class="col-9">
            <div class="grid-item">col-9</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-4">
            <div class="grid-item">col-4</div>
          </div>
          <div class="col-8">
            <div class="grid-item">col-8</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-5">
            <div class="grid-item">col-5</div>
          </div>
          <div class="col-7">
            <div class="grid-item">col-7</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-6">
            <div class="grid-item">col-6</div>
          </div>
          <div class="col-6">
            <div class="grid-item">col-6</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mixed Columns -->
    <div class="showcase-section">
      <h2>Mixed Column Widths</h2>
      <div class="grid-demo">
        <div class="row">
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col-6">
            <div class="grid-item">col-6</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col-5">
            <div class="grid-item">col-5</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Auto Columns -->
    <div class="showcase-section">
      <h2>Auto-sizing Columns</h2>
      <div class="grid-demo">
        <div class="row">
          <div class="col-auto">
            <div class="grid-item">col-auto</div>
          </div>
          <div class="col">
            <div class="grid-item">col (fills remaining space)</div>
          </div>
          <div class="col-auto">
            <div class="grid-item">col-auto</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-auto">
            <div class="grid-item">Variable width content</div>
          </div>
          <div class="col">
            <div class="grid-item">col</div>
          </div>
          <div class="col-auto">
            <div class="grid-item">Auto</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Responsive Breakpoints -->
    <div class="showcase-section">
      <h2>Responsive Breakpoints</h2>
      <div class="breakpoint-info">
        <div class="info-grid">
          <div class="info-item">
            <strong>XS</strong>
            <span>&lt; 576px</span>
          </div>
          <div class="info-item">
            <strong>SM</strong>
            <span>≥ 576px</span>
          </div>
          <div class="info-item">
            <strong>MD</strong>
            <span>≥ 768px</span>
          </div>
          <div class="info-item">
            <strong>LG</strong>
            <span>≥ 992px</span>
          </div>
          <div class="info-item">
            <strong>XL</strong>
            <span>≥ 1200px</span>
          </div>
        </div>
      </div>
      
      <div class="grid-demo">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="grid-item responsive-item">
              <span class="visible-xs">12</span>
              <span class="visible-sm">6</span>
              <span class="visible-md">4</span>
              <span class="visible-lg">3</span>
              <span class="visible-xl">2</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="grid-item responsive-item">
              <span class="visible-xs">12</span>
              <span class="visible-sm">6</span>
              <span class="visible-md">4</span>
              <span class="visible-lg">3</span>
              <span class="visible-xl">2</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="grid-item responsive-item">
              <span class="visible-xs">12</span>
              <span class="visible-sm">6</span>
              <span class="visible-md">4</span>
              <span class="visible-lg">3</span>
              <span class="visible-xl">2</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="grid-item responsive-item">
              <span class="visible-xs">12</span>
              <span class="visible-sm">6</span>
              <span class="visible-md">4</span>
              <span class="visible-lg">3</span>
              <span class="visible-xl">2</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="grid-item responsive-item">
              <span class="visible-xs">12</span>
              <span class="visible-sm">6</span>
              <span class="visible-md">4</span>
              <span class="visible-lg">3</span>
              <span class="visible-xl">2</span>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div class="grid-item responsive-item">
              <span class="visible-xs">12</span>
              <span class="visible-sm">6</span>
              <span class="visible-md">4</span>
              <span class="visible-lg">3</span>
              <span class="visible-xl">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Column Offsets -->
    <div class="showcase-section">
      <h2>Column Offsets</h2>
      <div class="grid-demo">
        <div class="row">
          <div class="col-4">
            <div class="grid-item">col-4</div>
          </div>
          <div class="col-4 offset-4">
            <div class="grid-item">col-4 offset-4</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-3 offset-3">
            <div class="grid-item">col-3 offset-3</div>
          </div>
          <div class="col-3 offset-3">
            <div class="grid-item">col-3 offset-3</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-6 offset-3">
            <div class="grid-item">col-6 offset-3</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nested Grids -->
    <div class="showcase-section">
      <h2>Nested Grids</h2>
      <div class="grid-demo">
        <div class="row">
          <div class="col-9">
            <div class="grid-item">
              <span>col-9</span>
              <div class="row nested-row">
                <div class="col-8">
                  <div class="grid-item nested-item">col-8</div>
                </div>
                <div class="col-4">
                  <div class="grid-item nested-item">col-4</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="grid-item">col-3</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-6">
            <div class="grid-item">
              <span>col-6</span>
              <div class="row nested-row">
                <div class="col">
                  <div class="grid-item nested-item">col</div>
                </div>
                <div class="col">
                  <div class="grid-item nested-item">col</div>
                </div>
                <div class="col">
                  <div class="grid-item nested-item">col</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="grid-item">col-6</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alignment -->
    <div class="showcase-section">
      <h2>Vertical Alignment</h2>
      <div class="grid-demo alignment-demo">
        <div class="row align-items-start" style="height: 100px;">
          <div class="col">
            <div class="grid-item">align-items-start</div>
          </div>
          <div class="col">
            <div class="grid-item">align-items-start</div>
          </div>
          <div class="col">
            <div class="grid-item">align-items-start</div>
          </div>
        </div>
        
        <div class="row align-items-center" style="height: 100px;">
          <div class="col">
            <div class="grid-item">align-items-center</div>
          </div>
          <div class="col">
            <div class="grid-item">align-items-center</div>
          </div>
          <div class="col">
            <div class="grid-item">align-items-center</div>
          </div>
        </div>
        
        <div class="row align-items-end" style="height: 100px;">
          <div class="col">
            <div class="grid-item">align-items-end</div>
          </div>
          <div class="col">
            <div class="grid-item">align-items-end</div>
          </div>
          <div class="col">
            <div class="grid-item">align-items-end</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Horizontal Alignment -->
    <div class="showcase-section">
      <h2>Horizontal Alignment</h2>
      <div class="grid-demo">
        <div class="row justify-content-start">
          <div class="col-4">
            <div class="grid-item">justify-content-start</div>
          </div>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-4">
            <div class="grid-item">justify-content-center</div>
          </div>
        </div>
        
        <div class="row justify-content-end">
          <div class="col-4">
            <div class="grid-item">justify-content-end</div>
          </div>
        </div>
        
        <div class="row justify-content-around">
          <div class="col-2">
            <div class="grid-item">around</div>
          </div>
          <div class="col-2">
            <div class="grid-item">around</div>
          </div>
          <div class="col-2">
            <div class="grid-item">around</div>
          </div>
        </div>
        
        <div class="row justify-content-between">
          <div class="col-2">
            <div class="grid-item">between</div>
          </div>
          <div class="col-2">
            <div class="grid-item">between</div>
          </div>
          <div class="col-2">
            <div class="grid-item">between</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for static grid showcase
</script>

<style scoped>
.grid-page {
  padding: var(--spacing-lg);
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
}

.showcase-section {
  margin-bottom: var(--spacing-2xl);
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
}

.showcase-section h2 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-light);
}

.grid-demo {
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
}

.grid-demo .row {
  margin-bottom: var(--spacing-md);
}

.grid-demo .row:last-child {
  margin-bottom: 0;
}

.grid-item {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-hover));
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  text-align: center;
  font-weight: 500;
  font-size: var(--font-size-sm);
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nested-item {
  background: linear-gradient(135deg, var(--success-color), #059669);
  margin-top: var(--spacing-sm);
  min-height: 40px;
  font-size: var(--font-size-xs);
}

.nested-row {
  margin-top: var(--spacing-sm);
  margin-bottom: 0;
}

/* Extended Grid System Classes */
.col-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
.col-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
.col-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
.col-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }

/* Offset Classes */
.offset-1 { margin-left: 8.333333%; }
.offset-2 { margin-left: 16.666667%; }
.offset-3 { margin-left: 25%; }
.offset-4 { margin-left: 33.333333%; }
.offset-5 { margin-left: 41.666667%; }
.offset-6 { margin-left: 50%; }

/* Responsive Columns */
@media (min-width: 576px) {
  .col-sm-6 { flex: 0 0 50%; max-width: 50%; }
}

@media (min-width: 768px) {
  .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
}

@media (min-width: 992px) {
  .col-lg-3 { flex: 0 0 25%; max-width: 25%; }
}

@media (min-width: 1200px) {
  .col-xl-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
}

/* Alignment Classes */
.align-items-start { align-items: flex-start; }
.align-items-center { align-items: center; }
.align-items-end { align-items: flex-end; }

.justify-content-start { justify-content: flex-start; }
.justify-content-center { justify-content: center; }
.justify-content-end { justify-content: flex-end; }
.justify-content-around { justify-content: space-around; }
.justify-content-between { justify-content: space-between; }

/* Breakpoint Information */
.breakpoint-info {
  margin-bottom: var(--spacing-lg);
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-md);
}

.info-item {
  text-align: center;
  padding: var(--spacing-md);
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-light);
}

.info-item strong {
  display: block;
  color: var(--primary-color);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.info-item span {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

/* Responsive Demo */
.responsive-item {
  position: relative;
}

.responsive-item span {
  display: none;
}

/* Show different span based on screen size */
@media (max-width: 575px) {
  .responsive-item .visible-xs { display: inline; }
}

@media (min-width: 576px) and (max-width: 767px) {
  .responsive-item .visible-sm { display: inline; }
}

@media (min-width: 768px) and (max-width: 991px) {
  .responsive-item .visible-md { display: inline; }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .responsive-item .visible-lg { display: inline; }
}

@media (min-width: 1200px) {
  .responsive-item .visible-xl { display: inline; }
}

/* Alignment Demo Styling */
.alignment-demo .row {
  background-color: rgba(var(--primary-color), 0.1);
  border: 1px dashed var(--primary-color);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-lg);
}

.alignment-demo .grid-item {
  margin: var(--spacing-xs);
  min-height: 40px;
}

/* Responsive */
@media (max-width: 768px) {
  .grid-page {
    padding: var(--spacing-md);
  }
  
  .grid-demo {
    padding: var(--spacing-md);
  }
  
  .showcase-section {
    padding: var(--spacing-lg);
  }
  
  .info-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: var(--spacing-sm);
  }
}
</style>
