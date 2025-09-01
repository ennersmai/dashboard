<template>
  <div class="forms-page">
    <div class="page-header">
      <h1>Forms</h1>
      <p>Comprehensive form components including input types, validation states, layouts, and custom controls.</p>
    </div>

    <!-- Basic Form Elements -->
    <div class="showcase-section">
      <h2>Basic Form Elements</h2>
      <div class="form-demo">
        <form @submit.prevent="handleSubmit" class="demo-form">
          <div class="form-group">
            <label for="text-input" class="form-label">Text Input</label>
            <input 
              id="text-input"
              type="text" 
              class="form-control"
              placeholder="Enter your text here"
              v-model="formData.textInput"
            >
            <small class="form-help">This is a help text for the input field.</small>
          </div>

          <div class="form-group">
            <label for="email-input" class="form-label">Email Input</label>
            <input 
              id="email-input"
              type="email" 
              class="form-control"
              placeholder="user@example.com"
              v-model="formData.email"
            >
          </div>

          <div class="form-group">
            <label for="password-input" class="form-label">Password Input</label>
            <div class="input-group">
              <input 
                id="password-input"
                :type="showPassword ? 'text' : 'password'" 
                class="form-control"
                placeholder="Enter your password"
                v-model="formData.password"
              >
              <button 
                type="button" 
                class="input-group-btn"
                @click="showPassword = !showPassword"
              >
                <svg v-if="showPassword" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,11.83 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.09L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.76,7.13 11.37,7 12,7Z" />
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                </svg>
              </button>
            </div>
          </div>

          <div class="form-group">
            <label for="number-input" class="form-label">Number Input</label>
            <input 
              id="number-input"
              type="number" 
              class="form-control"
              placeholder="0"
              min="0"
              max="100"
              v-model="formData.number"
            >
          </div>

          <div class="form-group">
            <label for="tel-input" class="form-label">Phone Input</label>
            <input 
              id="tel-input"
              type="tel" 
              class="form-control"
              placeholder="+1 (555) 123-4567"
              v-model="formData.phone"
            >
          </div>

          <div class="form-group">
            <label for="url-input" class="form-label">URL Input</label>
            <input 
              id="url-input"
              type="url" 
              class="form-control"
              placeholder="https://example.com"
              v-model="formData.url"
            >
          </div>

          <div class="form-group">
            <label for="search-input" class="form-label">Search Input</label>
            <input 
              id="search-input"
              type="search" 
              class="form-control"
              placeholder="Search..."
              v-model="formData.search"
            >
          </div>
        </form>
      </div>
    </div>

    <!-- Select and Options -->
    <div class="showcase-section">
      <h2>Select Elements</h2>
      <div class="form-demo">
        <div class="form-grid">
          <div class="form-group">
            <label for="select-basic" class="form-label">Basic Select</label>
            <select id="select-basic" class="form-control" v-model="formData.basicSelect">
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div class="form-group">
            <label for="select-multiple" class="form-label">Multiple Select</label>
            <select id="select-multiple" class="form-control" multiple v-model="formData.multipleSelect">
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </select>
          </div>

          <div class="form-group">
            <label for="select-grouped" class="form-label">Grouped Select</label>
            <select id="select-grouped" class="form-control" v-model="formData.groupedSelect">
              <option value="">Select a technology</option>
              <optgroup label="Frontend">
                <option value="vue">Vue.js</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
              </optgroup>
              <optgroup label="Backend">
                <option value="node">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Textarea and Content -->
    <div class="showcase-section">
      <h2>Textarea Elements</h2>
      <div class="form-demo">
        <div class="form-grid">
          <div class="form-group">
            <label for="textarea-basic" class="form-label">Basic Textarea</label>
            <textarea 
              id="textarea-basic"
              class="form-control"
              rows="4"
              placeholder="Enter your message here..."
              v-model="formData.message"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="textarea-large" class="form-label">Large Textarea</label>
            <textarea 
              id="textarea-large"
              class="form-control form-control-lg"
              rows="6"
              placeholder="This is a larger textarea for more content..."
              v-model="formData.largeMessage"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- Checkboxes and Radio Buttons -->
    <div class="showcase-section">
      <h2>Checkboxes & Radio Buttons</h2>
      <div class="form-demo">
        <div class="form-grid">
          <!-- Checkboxes -->
          <div class="form-group">
            <fieldset>
              <legend class="form-label">Checkboxes</legend>
              <div class="checkbox-group">
                <div class="form-check">
                  <input 
                    id="check1" 
                    type="checkbox" 
                    class="form-check-input"
                    value="option1"
                    v-model="formData.checkboxes"
                  >
                  <label for="check1" class="form-check-label">Option 1</label>
                </div>
                <div class="form-check">
                  <input 
                    id="check2" 
                    type="checkbox" 
                    class="form-check-input"
                    value="option2"
                    v-model="formData.checkboxes"
                  >
                  <label for="check2" class="form-check-label">Option 2</label>
                </div>
                <div class="form-check">
                  <input 
                    id="check3" 
                    type="checkbox" 
                    class="form-check-input"
                    value="option3"
                    v-model="formData.checkboxes"
                  >
                  <label for="check3" class="form-check-label">Option 3</label>
                </div>
                <div class="form-check">
                  <input 
                    id="check4" 
                    type="checkbox" 
                    class="form-check-input"
                    value="option4"
                    v-model="formData.checkboxes"
                    disabled
                  >
                  <label for="check4" class="form-check-label">Disabled Option</label>
                </div>
              </div>
            </fieldset>
          </div>

          <!-- Radio Buttons -->
          <div class="form-group">
            <fieldset>
              <legend class="form-label">Radio Buttons</legend>
              <div class="radio-group">
                <div class="form-check">
                  <input 
                    id="radio1" 
                    type="radio" 
                    name="radioGroup"
                    class="form-check-input"
                    value="small"
                    v-model="formData.radioSelection"
                  >
                  <label for="radio1" class="form-check-label">Small</label>
                </div>
                <div class="form-check">
                  <input 
                    id="radio2" 
                    type="radio" 
                    name="radioGroup"
                    class="form-check-input"
                    value="medium"
                    v-model="formData.radioSelection"
                  >
                  <label for="radio2" class="form-check-label">Medium</label>
                </div>
                <div class="form-check">
                  <input 
                    id="radio3" 
                    type="radio" 
                    name="radioGroup"
                    class="form-check-input"
                    value="large"
                    v-model="formData.radioSelection"
                  >
                  <label for="radio3" class="form-check-label">Large</label>
                </div>
                <div class="form-check">
                  <input 
                    id="radio4" 
                    type="radio" 
                    name="radioGroup"
                    class="form-check-input"
                    value="disabled"
                    v-model="formData.radioSelection"
                    disabled
                  >
                  <label for="radio4" class="form-check-label">Disabled</label>
                </div>
              </div>
            </fieldset>
          </div>

          <!-- Inline Checkboxes -->
          <div class="form-group">
            <fieldset>
              <legend class="form-label">Inline Checkboxes</legend>
              <div class="checkbox-group checkbox-group--inline">
                <div class="form-check form-check--inline">
                  <input 
                    id="inline1" 
                    type="checkbox" 
                    class="form-check-input"
                    value="red"
                    v-model="formData.inlineCheckboxes"
                  >
                  <label for="inline1" class="form-check-label">Red</label>
                </div>
                <div class="form-check form-check--inline">
                  <input 
                    id="inline2" 
                    type="checkbox" 
                    class="form-check-input"
                    value="green"
                    v-model="formData.inlineCheckboxes"
                  >
                  <label for="inline2" class="form-check-label">Green</label>
                </div>
                <div class="form-check form-check--inline">
                  <input 
                    id="inline3" 
                    type="checkbox" 
                    class="form-check-input"
                    value="blue"
                    v-model="formData.inlineCheckboxes"
                  >
                  <label for="inline3" class="form-check-label">Blue</label>
                </div>
              </div>
            </fieldset>
          </div>

          <!-- Switch Toggles -->
          <div class="form-group">
            <fieldset>
              <legend class="form-label">Switch Toggles</legend>
              <div class="switch-group">
                <div class="form-switch">
                  <input 
                    id="switch1" 
                    type="checkbox" 
                    class="form-switch-input"
                    v-model="formData.switches.notifications"
                  >
                  <label for="switch1" class="form-switch-label">Enable Notifications</label>
                </div>
                <div class="form-switch">
                  <input 
                    id="switch2" 
                    type="checkbox" 
                    class="form-switch-input"
                    v-model="formData.switches.darkMode"
                  >
                  <label for="switch2" class="form-switch-label">Dark Mode</label>
                </div>
                <div class="form-switch">
                  <input 
                    id="switch3" 
                    type="checkbox" 
                    class="form-switch-input"
                    v-model="formData.switches.autoSave"
                  >
                  <label for="switch3" class="form-switch-label">Auto Save</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>

    <!-- Date and Time Inputs -->
    <div class="showcase-section">
      <h2>Date & Time Inputs</h2>
      <div class="form-demo">
        <div class="form-grid">
          <div class="form-group">
            <label for="date-input" class="form-label">Date</label>
            <input 
              id="date-input"
              type="date" 
              class="form-control"
              v-model="formData.date"
            >
          </div>

          <div class="form-group">
            <label for="time-input" class="form-label">Time</label>
            <input 
              id="time-input"
              type="time" 
              class="form-control"
              v-model="formData.time"
            >
          </div>

          <div class="form-group">
            <label for="datetime-input" class="form-label">DateTime Local</label>
            <input 
              id="datetime-input"
              type="datetime-local" 
              class="form-control"
              v-model="formData.datetime"
            >
          </div>

          <div class="form-group">
            <label for="month-input" class="form-label">Month</label>
            <input 
              id="month-input"
              type="month" 
              class="form-control"
              v-model="formData.month"
            >
          </div>

          <div class="form-group">
            <label for="week-input" class="form-label">Week</label>
            <input 
              id="week-input"
              type="week" 
              class="form-control"
              v-model="formData.week"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Range and File Inputs -->
    <div class="showcase-section">
      <h2>Range & File Inputs</h2>
      <div class="form-demo">
        <div class="form-grid">
          <div class="form-group">
            <label for="range-input" class="form-label">
              Range Slider ({{ formData.range }})
            </label>
            <input 
              id="range-input"
              type="range" 
              class="form-range"
              min="0"
              max="100"
              v-model="formData.range"
            >
            <div class="range-labels">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>

          <div class="form-group">
            <label for="file-input" class="form-label">File Upload</label>
            <input 
              id="file-input"
              type="file" 
              class="form-control"
              @change="handleFileChange"
            >
            <small class="form-help">Choose a file to upload</small>
          </div>

          <div class="form-group">
            <label for="file-multiple" class="form-label">Multiple Files</label>
            <input 
              id="file-multiple"
              type="file" 
              class="form-control"
              multiple
              accept="image/*"
              @change="handleMultipleFiles"
            >
            <small class="form-help">Select multiple image files</small>
          </div>

          <div class="form-group">
            <label for="color-input" class="form-label">Color Picker</label>
            <input 
              id="color-input"
              type="color" 
              class="form-control form-control-color"
              v-model="formData.color"
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Input Sizes -->
    <div class="showcase-section">
      <h2>Input Sizes</h2>
      <div class="form-demo">
        <div class="form-group">
          <label for="input-sm" class="form-label">Small Input</label>
          <input 
            id="input-sm"
            type="text" 
            class="form-control form-control-sm"
            placeholder="Small input"
          >
        </div>

        <div class="form-group">
          <label for="input-default" class="form-label">Default Input</label>
          <input 
            id="input-default"
            type="text" 
            class="form-control"
            placeholder="Default input"
          >
        </div>

        <div class="form-group">
          <label for="input-lg" class="form-label">Large Input</label>
          <input 
            id="input-lg"
            type="text" 
            class="form-control form-control-lg"
            placeholder="Large input"
          >
        </div>
      </div>
    </div>

    <!-- Validation States -->
    <div class="showcase-section">
      <h2>Validation States</h2>
      <div class="form-demo">
        <div class="form-grid">
          <div class="form-group">
            <label for="valid-input" class="form-label">Valid Input</label>
            <input 
              id="valid-input"
              type="text" 
              class="form-control is-valid"
              value="Valid value"
            >
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="form-group">
            <label for="invalid-input" class="form-label">Invalid Input</label>
            <input 
              id="invalid-input"
              type="text" 
              class="form-control is-invalid"
              value="Invalid value"
            >
            <div class="invalid-feedback">
              Please provide a valid value.
            </div>
          </div>

          <div class="form-group">
            <label for="warning-input" class="form-label">Warning Input</label>
            <input 
              id="warning-input"
              type="text" 
              class="form-control is-warning"
              value="Warning value"
            >
            <div class="warning-feedback">
              This field has a warning.
            </div>
          </div>

          <div class="form-group">
            <label for="disabled-input" class="form-label">Disabled Input</label>
            <input 
              id="disabled-input"
              type="text" 
              class="form-control"
              value="Disabled value"
              disabled
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Input Groups -->
    <div class="showcase-section">
      <h2>Input Groups</h2>
      <div class="form-demo">
        <div class="form-group">
          <label for="prepend-input" class="form-label">Input with Prepend</label>
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input 
              id="prepend-input"
              type="text" 
              class="form-control"
              placeholder="Username"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="append-input" class="form-label">Input with Append</label>
          <div class="input-group">
            <input 
              id="append-input"
              type="text" 
              class="form-control"
              placeholder="Amount"
            >
            <span class="input-group-text">.00</span>
          </div>
        </div>

        <div class="form-group">
          <label for="both-input" class="form-label">Input with Both</label>
          <div class="input-group">
            <span class="input-group-text">$</span>
            <input 
              id="both-input"
              type="text" 
              class="form-control"
              placeholder="0.00"
            >
            <span class="input-group-text">.00</span>
          </div>
        </div>

        <div class="form-group">
          <label for="button-input" class="form-label">Input with Button</label>
          <div class="input-group">
            <input 
              id="button-input"
              type="text" 
              class="form-control"
              placeholder="Search..."
            >
            <button class="input-group-btn btn-primary" type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Layouts -->
    <div class="showcase-section">
      <h2>Form Layouts</h2>
      
      <!-- Horizontal Form -->
      <div class="form-demo">
        <h3>Horizontal Form</h3>
        <form class="form-horizontal">
          <div class="form-group form-group--horizontal">
            <label for="h-email" class="form-label form-label--horizontal">Email</label>
            <div class="form-control-wrapper">
              <input 
                id="h-email"
                type="email" 
                class="form-control"
                placeholder="Email address"
              >
            </div>
          </div>

          <div class="form-group form-group--horizontal">
            <label for="h-password" class="form-label form-label--horizontal">Password</label>
            <div class="form-control-wrapper">
              <input 
                id="h-password"
                type="password" 
                class="form-control"
                placeholder="Password"
              >
            </div>
          </div>

          <div class="form-group form-group--horizontal">
            <div class="form-label--horizontal"></div>
            <div class="form-control-wrapper">
              <div class="form-check">
                <input id="h-remember" type="checkbox" class="form-check-input">
                <label for="h-remember" class="form-check-label">Remember me</label>
              </div>
            </div>
          </div>

          <div class="form-group form-group--horizontal">
            <div class="form-label--horizontal"></div>
            <div class="form-control-wrapper">
              <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
          </div>
        </form>
      </div>

      <!-- Inline Form -->
      <div class="form-demo">
        <h3>Inline Form</h3>
        <form class="form-inline">
          <div class="form-group">
            <label for="inline-email" class="sr-only">Email</label>
            <input 
              id="inline-email"
              type="email" 
              class="form-control"
              placeholder="Email"
            >
          </div>
          <div class="form-group">
            <label for="inline-password" class="sr-only">Password</label>
            <input 
              id="inline-password"
              type="password" 
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <div class="form-check">
              <input id="inline-remember" type="checkbox" class="form-check-input">
              <label for="inline-remember" class="form-check-label">Remember</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
      </div>

      <!-- Grid Form -->
      <div class="form-demo">
        <h3>Grid Form</h3>
        <form class="form-grid">
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label for="first-name" class="form-label">First Name</label>
              <input 
                id="first-name"
                type="text" 
                class="form-control"
                placeholder="First name"
              >
            </div>
            <div class="form-group">
              <label for="last-name" class="form-label">Last Name</label>
              <input 
                id="last-name"
                type="text" 
                class="form-control"
                placeholder="Last name"
              >
            </div>
          </div>

          <div class="form-group">
            <label for="address" class="form-label">Address</label>
            <input 
              id="address"
              type="text" 
              class="form-control"
              placeholder="1234 Main St"
            >
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="form-group">
              <label for="city" class="form-label">City</label>
              <input 
                id="city"
                type="text" 
                class="form-control"
                placeholder="City"
              >
            </div>
            <div class="form-group">
              <label for="state" class="form-label">State</label>
              <select id="state" class="form-control">
                <option value="">Choose...</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
              </select>
            </div>
            <div class="form-group">
              <label for="zip" class="form-label">Zip</label>
              <input 
                id="zip"
                type="text" 
                class="form-control"
                placeholder="Zip"
              >
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input id="grid-terms" type="checkbox" class="form-check-input">
              <label for="grid-terms" class="form-check-label">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <!-- Form Actions -->
    <div class="showcase-section">
      <h2>Form Actions</h2>
      <div class="form-demo">
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-secondary">Cancel</button>
          <button type="reset" class="btn btn-outline-secondary">Reset</button>
          <button type="button" class="btn btn-outline-primary">Save Draft</button>
        </div>
      </div>
    </div>

    <!-- Debug Panel -->
    <div class="showcase-section">
      <h2>Form Data Debug</h2>
      <div class="debug-panel">
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Form data
const formData = reactive({
  textInput: '',
  email: '',
  password: '',
  number: 0,
  phone: '',
  url: '',
  search: '',
  basicSelect: '',
  multipleSelect: [],
  groupedSelect: '',
  message: '',
  largeMessage: '',
  checkboxes: [],
  radioSelection: '',
  inlineCheckboxes: [],
  switches: {
    notifications: false,
    darkMode: false,
    autoSave: true
  },
  date: '',
  time: '',
  datetime: '',
  month: '',
  week: '',
  range: 50,
  color: '#4F46E5'
})

// State
const showPassword = ref(false)

// Methods
const handleSubmit = () => {
  console.log('Form submitted:', formData)
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    console.log('File selected:', file.name)
  }
}

const handleMultipleFiles = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    console.log('Files selected:', Array.from(files).map(f => f.name))
  }
}
</script>

<style scoped>
.forms-page {
  padding: var(--spacing-lg);
  max-width: 1200px;
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
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.form-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.demo-form {
  max-width: 600px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--spacing-md);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.gap-4 {
  gap: var(--spacing-lg);
}

/* Form Groups */
.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group:last-child {
  margin-bottom: 0;
}

/* Labels */
.form-label {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-size: 0.875rem;
}

.form-help {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: var(--spacing-xs);
}

/* Form Controls */
.form-control {
  display: block;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-primary);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  transition: all 0.2s ease;
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-control:disabled {
  background: var(--surface-secondary);
  opacity: 0.6;
  cursor: not-allowed;
}

.form-control::placeholder {
  color: var(--text-muted);
}

/* Control Sizes */
.form-control-sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.875rem;
}

.form-control-lg {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 1.125rem;
}

.form-control-color {
  width: 60px;
  height: 40px;
  padding: 0;
  border: none;
  cursor: pointer;
}

/* Textarea */
textarea.form-control {
  resize: vertical;
  min-height: 80px;
}

/* Select */
select.form-control {
  cursor: pointer;
}

select.form-control[multiple] {
  height: auto;
  min-height: 120px;
}

/* Range */
.form-range {
  width: 100%;
  height: 6px;
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
  outline: none;
  cursor: pointer;
  appearance: none;
}

.form-range::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
}

.form-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-xs);
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Input Groups */
.input-group {
  display: flex;
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.input-group .form-control {
  border-radius: 0;
  border-right: none;
}

.input-group .form-control:first-child {
  border-left: 1px solid var(--border-light);
}

.input-group .form-control:last-child {
  border-right: 1px solid var(--border-light);
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  font-size: 1rem;
  white-space: nowrap;
}

.input-group-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.input-group-btn:hover {
  background: var(--surface-hover);
  color: var(--text-primary);
}

.input-group-btn.btn-primary {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-color: var(--primary-color);
}

.input-group-btn.btn-primary:hover {
  background: var(--primary-dark);
}

/* Checkboxes and Radio */
.checkbox-group,
.radio-group,
.switch-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.checkbox-group--inline {
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.form-check {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.form-check--inline {
  margin-right: var(--spacing-md);
}

.form-check-input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.form-check-label {
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--text-primary);
  margin: 0;
}

/* Switch Toggles */
.form-switch {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.form-switch-input {
  position: relative;
  width: 44px;
  height: 24px;
  appearance: none;
  background: var(--surface-secondary);
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.form-switch-input::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.form-switch-input:checked {
  background: var(--primary-color);
}

.form-switch-input:checked::before {
  transform: translateX(20px);
}

.form-switch-label {
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--text-primary);
  margin: 0;
}

/* Validation States */
.is-valid {
  border-color: var(--success-color);
}

.is-valid:focus {
  border-color: var(--success-color);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.is-invalid {
  border-color: var(--error-color);
}

.is-invalid:focus {
  border-color: var(--error-color);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.is-warning {
  border-color: var(--warning-color);
}

.is-warning:focus {
  border-color: var(--warning-color);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.valid-feedback {
  display: block;
  font-size: 0.75rem;
  color: var(--success-color);
  margin-top: var(--spacing-xs);
}

.invalid-feedback {
  display: block;
  font-size: 0.75rem;
  color: var(--error-color);
  margin-top: var(--spacing-xs);
}

.warning-feedback {
  display: block;
  font-size: 0.75rem;
  color: var(--warning-color);
  margin-top: var(--spacing-xs);
}

/* Form Layouts */
.form-horizontal .form-group--horizontal {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-md);
  align-items: start;
  margin-bottom: var(--spacing-lg);
}

.form-label--horizontal {
  padding-top: var(--spacing-sm);
  text-align: right;
}

.form-control-wrapper {
  display: flex;
  flex-direction: column;
}

.form-inline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-md);
}

.form-inline .form-group {
  margin-bottom: 0;
}

.form-grid {
  display: grid;
  gap: var(--spacing-lg);
}

/* Fieldset */
fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

legend {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  padding: 0;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Form Actions */
.form-actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  padding: var(--spacing-lg);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-md);
}

/* Debug Panel */
.debug-panel {
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  overflow-x: auto;
}

.debug-panel pre {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-primary);
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Button Styles */
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

.btn-primary {
  background: var(--primary-color);
  color: var(--text-on-primary);
  border-color: var(--primary-color);
}

.btn-primary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.btn-secondary {
  background: var(--text-secondary);
  color: var(--surface-primary);
  border-color: var(--text-secondary);
}

.btn-secondary:hover {
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
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .form-horizontal .form-group--horizontal {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
  
  .form-label--horizontal {
    text-align: left;
    padding-top: 0;
  }
  
  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .checkbox-group--inline {
    flex-direction: column;
  }
}
</style>
