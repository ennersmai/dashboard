<template>
  <div class="page-content">
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-content">
        <h1>JSVectorMap</h1>
        <p class="page-description">Interactive vector maps with data visualization</p>
      </div>
      <div class="page-breadcrumb">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li class="breadcrumb-item">Maps</li>
            <li class="breadcrumb-item active" aria-current="page">JSVectorMap</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Maps Section -->
    <div class="grid-container">
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-header">
            <h3>World Map with Data Visualization</h3>
            <p>Interactive vector map with regional data and custom styling</p>
          </div>
          <div class="card-body">
            <!-- Vector Map Placeholder -->
            <div class="vector-map-placeholder">
              <div class="vector-map-content">
                <div class="map-icon">
                  <svg width="80" height="50" viewBox="0 0 100 60" fill="currentColor">
                    <!-- Simplified world map SVG -->
                    <path d="M15,25 Q20,20 30,22 L40,20 Q45,18 50,20 L60,22 Q70,25 80,23 L85,25 Q90,28 85,35 L80,40 Q70,42 60,38 L50,35 Q45,33 40,35 L30,38 Q20,40 15,35 Z" opacity="0.7"/>
                    <path d="M25,30 Q30,28 35,30 L40,28 Q45,26 50,28 L55,30 Q60,32 55,38 L50,42 Q45,44 40,40 L35,38 Q30,36 25,38 Z" opacity="0.5"/>
                    <circle cx="30" cy="32" r="2" opacity="0.8"/>
                    <circle cx="50" cy="30" r="2" opacity="0.8"/>
                    <circle cx="70" cy="35" r="2" opacity="0.8"/>
                  </svg>
                </div>
                <h4>JSVectorMap Integration</h4>
                <p>Lightweight vector maps with data visualization capabilities</p>
                <div class="placeholder-features">
                  <span class="feature-tag">🌍 World Maps</span>
                  <span class="feature-tag">📊 Data Binding</span>
                  <span class="feature-tag">🎨 Custom Styling</span>
                  <span class="feature-tag">⚡ Lightweight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Types -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Available Map Types</h3>
          </div>
          <div class="card-body">
            <div class="map-types">
              <div class="map-type-item">
                <div class="map-type-preview world">🌍</div>
                <div class="map-type-info">
                  <h4>World Map</h4>
                  <p>Complete world map with country boundaries</p>
                </div>
              </div>
              <div class="map-type-item">
                <div class="map-type-preview usa">🇺🇸</div>
                <div class="map-type-info">
                  <h4>USA Map</h4>
                  <p>United States with state boundaries</p>
                </div>
              </div>
              <div class="map-type-item">
                <div class="map-type-preview europe">🇪🇺</div>
                <div class="map-type-info">
                  <h4>Europe Map</h4>
                  <p>European countries with detailed borders</p>
                </div>
              </div>
              <div class="map-type-item">
                <div class="map-type-preview custom">⚙️</div>
                <div class="map-type-info">
                  <h4>Custom Maps</h4>
                  <p>Create custom regions and boundaries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Configuration -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Map Configuration</h3>
          </div>
          <div class="card-body">
            <div class="config-section">
              <h4>Color Schemes</h4>
              <div class="color-swatches">
                <div class="color-swatch blue"></div>
                <div class="color-swatch green"></div>
                <div class="color-swatch orange"></div>
                <div class="color-swatch purple"></div>
              </div>
            </div>
            
            <div class="config-section">
              <h4>Markers & Labels</h4>
              <div class="feature-toggles">
                <label class="toggle-item">
                  <input type="checkbox" checked disabled>
                  <span>Show Country Labels</span>
                </label>
                <label class="toggle-item">
                  <input type="checkbox" checked disabled>
                  <span>Custom Markers</span>
                </label>
                <label class="toggle-item">
                  <input type="checkbox" disabled>
                  <span>Zoom Controls</span>
                </label>
              </div>
            </div>

            <div class="config-section">
              <h4>Data Visualization</h4>
              <div class="data-options">
                <select class="form-control" disabled>
                  <option>Population Density</option>
                  <option>GDP per Capita</option>
                  <option>Temperature</option>
                  <option>Custom Data</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Implementation -->
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-header">
            <h3>Implementation Steps</h3>
          </div>
          <div class="card-body">
            <div class="implementation-grid">
              <div class="implementation-step">
                <div class="step-header">
                  <span class="step-number">1</span>
                  <h4>Install Package</h4>
                </div>
                <div class="step-content">
                  <code>npm install jsvectormap</code>
                  <p>Install the JSVectorMap library and required map files</p>
                </div>
              </div>
              
              <div class="implementation-step">
                <div class="step-header">
                  <span class="step-number">2</span>
                  <h4>Import Maps</h4>
                </div>
                <div class="step-content">
                  <code>import 'jsvectormap/dist/maps/world'</code>
                  <p>Import the specific map files you need for your application</p>
                </div>
              </div>
              
              <div class="implementation-step">
                <div class="step-header">
                  <span class="step-number">3</span>
                  <h4>Initialize Map</h4>
                </div>
                <div class="step-content">
                  <code>new jsVectorMap({ ... })</code>
                  <p>Create map instance with custom configuration and data</p>
                </div>
              </div>
              
              <div class="implementation-step">
                <div class="step-header">
                  <span class="step-number">4</span>
                  <h4>Add Data</h4>
                </div>
                <div class="step-content">
                  <code>series: { regions: [...] }</code>
                  <p>Bind your data to regions for visualization</p>
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
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.vector-map-placeholder {
  height: 350px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.vector-map-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 2px, transparent 2px),
              radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 2px, transparent 2px);
  background-size: 30px 30px;
}

.vector-map-content {
  text-align: center;
  z-index: 1;
  position: relative;
}

.map-icon {
  margin-bottom: var(--spacing-md);
  opacity: 0.9;
}

.placeholder-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  justify-content: center;
  margin-top: var(--spacing-lg);
}

.feature-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
}

.map-types {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.map-type-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.map-type-item:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.map-type-preview {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color-secondary);
  border-radius: var(--border-radius);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.map-type-info h4 {
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
  font-size: 1rem;
}

.map-type-info p {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 0.875rem;
}

.config-section {
  margin-bottom: var(--spacing-lg);
}

.config-section h4 {
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  font-size: 1rem;
}

.color-swatches {
  display: flex;
  gap: var(--spacing-sm);
}

.color-swatch {
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.color-swatch:hover {
  transform: scale(1.1);
}

.color-swatch.blue { background: linear-gradient(45deg, #667eea, #764ba2); }
.color-swatch.green { background: linear-gradient(45deg, #56ab2f, #a8e6cf); }
.color-swatch.orange { background: linear-gradient(45deg, #ff9a56, #ffad56); }
.color-swatch.purple { background: linear-gradient(45deg, #a18cd1, #fbc2eb); }

.feature-toggles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.toggle-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-color);
  cursor: pointer;
}

.toggle-item input[type="checkbox"] {
  margin: 0;
}

.data-options {
  margin-top: var(--spacing-sm);
}

.form-control {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background: var(--bg-color);
  color: var(--text-color);
}

.form-control:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.implementation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.implementation-step {
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--bg-color-secondary);
}

.step-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.step-number {
  width: 32px;
  height: 32px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.step-header h4 {
  margin: 0;
  color: var(--text-color);
  font-size: 1rem;
}

.step-content code {
  display: block;
  background: var(--bg-color);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.step-content p {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 0.875rem;
  line-height: 1.4;
}
</style>
