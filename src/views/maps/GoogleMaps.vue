<template>
  <div class="page-content">
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-content">
        <h1>Google Maps</h1>
        <p class="page-description">Interactive Google Maps integration placeholder</p>
      </div>
      <div class="page-breadcrumb">
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/dashboard">Dashboard</RouterLink></li>
            <li class="breadcrumb-item">Maps</li>
            <li class="breadcrumb-item active" aria-current="page">Google Maps</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Maps Section -->
    <div class="grid-container">
      <div class="grid-item full-width">
        <div class="card">
          <div class="card-header">
            <h3>Google Maps Integration</h3>
            <p>This component will integrate Google Maps API when implemented</p>
          </div>
          <div class="card-body">
            <!-- Map Placeholder -->
            <div class="map-placeholder">
              <div class="map-placeholder-content">
                <div class="map-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h4>Google Maps Component</h4>
                <p>Interactive map with markers, controls, and location services</p>
                <div class="placeholder-features">
                  <span class="feature-tag">📍 Custom Markers</span>
                  <span class="feature-tag">🛣️ Directions</span>
                  <span class="feature-tag">🔍 Search Places</span>
                  <span class="feature-tag">📐 Distance Calculation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Controls Preview -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Map Controls</h3>
          </div>
          <div class="card-body">
            <div class="control-group">
              <label>Map Type</label>
              <select class="form-control" disabled>
                <option>Roadmap</option>
                <option>Satellite</option>
                <option>Hybrid</option>
                <option>Terrain</option>
              </select>
            </div>
            <div class="control-group">
              <label>Zoom Level</label>
              <input type="range" class="range-slider" min="1" max="20" value="10" disabled>
            </div>
            <div class="control-group">
              <label>Center Location</label>
              <input type="text" class="form-control" value="New York, NY" disabled>
            </div>
          </div>
        </div>
      </div>

      <!-- Implementation Info -->
      <div class="grid-item half-width">
        <div class="card">
          <div class="card-header">
            <h3>Implementation Guide</h3>
          </div>
          <div class="card-body">
            <div class="implementation-steps">
              <div class="step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>Get API Key</h4>
                  <p>Obtain Google Maps JavaScript API key from Google Cloud Console</p>
                </div>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>Install Library</h4>
                  <p>Install @googlemaps/js-api-loader package</p>
                </div>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>Initialize Map</h4>
                  <p>Create map instance with custom options and markers</p>
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
.map-placeholder {
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.map-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>');
}

.map-placeholder-content {
  text-align: center;
  z-index: 1;
  position: relative;
}

.map-icon {
  margin-bottom: var(--spacing-md);
  opacity: 0.8;
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

.control-group {
  margin-bottom: var(--spacing-md);
}

.control-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--text-color);
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

.range-slider {
  width: 100%;
  appearance: none;
  height: 6px;
  border-radius: 3px;
  background: var(--border-color);
  outline: none;
}

.range-slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
}

.implementation-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.step {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
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

.step-content h4 {
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
  font-size: 1rem;
}

.step-content p {
  margin: 0;
  color: var(--text-color-secondary);
  font-size: 0.875rem;
  line-height: 1.4;
}
</style>
