<template>
  <div class="typography-page">
    <div class="page-header">
      <h1>Typography</h1>
      <p>Complete typography system showcasing headings, paragraphs, text styles, and color variations.</p>
    </div>

    <!-- Headings -->
    <div class="showcase-section">
      <h2>Headings</h2>
      <div class="typography-demo">
        <div class="heading-showcase">
          <h1 class="display-heading">Display Heading</h1>
          <p class="heading-info">Display • 3rem (48px) • Bold</p>
        </div>
        
        <div class="heading-showcase">
          <h1>Heading 1</h1>
          <p class="heading-info">H1 • 2.5rem (40px) • Bold</p>
        </div>

        <div class="heading-showcase">
          <h2>Heading 2</h2>
          <p class="heading-info">H2 • 2rem (32px) • Bold</p>
        </div>

        <div class="heading-showcase">
          <h3>Heading 3</h3>
          <p class="heading-info">H3 • 1.75rem (28px) • Semibold</p>
        </div>

        <div class="heading-showcase">
          <h4>Heading 4</h4>
          <p class="heading-info">H4 • 1.5rem (24px) • Semibold</p>
        </div>

        <div class="heading-showcase">
          <h5>Heading 5</h5>
          <p class="heading-info">H5 • 1.25rem (20px) • Semibold</p>
        </div>

        <div class="heading-showcase">
          <h6>Heading 6</h6>
          <p class="heading-info">H6 • 1.125rem (18px) • Semibold</p>
        </div>
      </div>
    </div>

    <!-- Body Text -->
    <div class="showcase-section">
      <h2>Body Text</h2>
      <div class="text-showcase">
        <div class="text-sample">
          <p class="text-xl">Extra Large Text</p>
          <p class="text-info">1.25rem (20px) • Regular</p>
        </div>

        <div class="text-sample">
          <p class="text-lg">Large Text</p>
          <p class="text-info">1.125rem (18px) • Regular</p>
        </div>

        <div class="text-sample">
          <p class="text-base">Base Text</p>
          <p class="text-info">1rem (16px) • Regular</p>
        </div>

        <div class="text-sample">
          <p class="text-sm">Small Text</p>
          <p class="text-info">0.875rem (14px) • Regular</p>
        </div>

        <div class="text-sample">
          <p class="text-xs">Extra Small Text</p>
          <p class="text-info">0.75rem (12px) • Regular</p>
        </div>
      </div>
    </div>

    <!-- Text Styles -->
    <div class="showcase-section">
      <h2>Text Styles</h2>
      <div class="style-grid">
        <div class="style-example">
          <p class="font-thin">Thin Weight</p>
          <span class="style-label">font-weight: 100</span>
        </div>

        <div class="style-example">
          <p class="font-light">Light Weight</p>
          <span class="style-label">font-weight: 300</span>
        </div>

        <div class="style-example">
          <p class="font-normal">Normal Weight</p>
          <span class="style-label">font-weight: 400</span>
        </div>

        <div class="style-example">
          <p class="font-medium">Medium Weight</p>
          <span class="style-label">font-weight: 500</span>
        </div>

        <div class="style-example">
          <p class="font-semibold">Semibold Weight</p>
          <span class="style-label">font-weight: 600</span>
        </div>

        <div class="style-example">
          <p class="font-bold">Bold Weight</p>
          <span class="style-label">font-weight: 700</span>
        </div>

        <div class="style-example">
          <p class="font-extrabold">Extra Bold</p>
          <span class="style-label">font-weight: 800</span>
        </div>

        <div class="style-example">
          <p class="italic">Italic Style</p>
          <span class="style-label">font-style: italic</span>
        </div>

        <div class="style-example">
          <p class="underline">Underlined Text</p>
          <span class="style-label">text-decoration: underline</span>
        </div>

        <div class="style-example">
          <p class="line-through">Strikethrough</p>
          <span class="style-label">text-decoration: line-through</span>
        </div>

        <div class="style-example">
          <p class="uppercase">UPPERCASE TEXT</p>
          <span class="style-label">text-transform: uppercase</span>
        </div>

        <div class="style-example">
          <p class="lowercase">lowercase text</p>
          <span class="style-label">text-transform: lowercase</span>
        </div>

        <div class="style-example">
          <p class="capitalize">Capitalized Text</p>
          <span class="style-label">text-transform: capitalize</span>
        </div>

        <div class="style-example">
          <p class="tracking-wide">Letter Spacing</p>
          <span class="style-label">letter-spacing: 0.025em</span>
        </div>

        <div class="style-example">
          <p class="leading-loose">Line Height</p>
          <span class="style-label">line-height: 2</span>
        </div>

        <div class="style-example">
          <p class="truncate">This text will be truncated with ellipsis if it's too long</p>
          <span class="style-label">text-overflow: ellipsis</span>
        </div>
      </div>
    </div>

    <!-- Text Colors -->
    <div class="showcase-section">
      <h2>Text Colors</h2>
      <div class="color-grid">
        <div class="color-example">
          <p class="text-primary">Primary Text</p>
          <span class="color-swatch bg-primary"></span>
        </div>

        <div class="color-example">
          <p class="text-secondary">Secondary Text</p>
          <span class="color-swatch bg-secondary"></span>
        </div>

        <div class="color-example">
          <p class="text-success">Success Text</p>
          <span class="color-swatch bg-success"></span>
        </div>

        <div class="color-example">
          <p class="text-warning">Warning Text</p>
          <span class="color-swatch bg-warning"></span>
        </div>

        <div class="color-example">
          <p class="text-error">Error Text</p>
          <span class="color-swatch bg-error"></span>
        </div>

        <div class="color-example">
          <p class="text-info">Info Text</p>
          <span class="color-swatch bg-info"></span>
        </div>

        <div class="color-example">
          <p class="text-muted">Muted Text</p>
          <span class="color-swatch bg-muted"></span>
        </div>

        <div class="color-example">
          <p class="text-dark">Dark Text</p>
          <span class="color-swatch bg-dark"></span>
        </div>
      </div>
    </div>

    <!-- Quotes and Citations -->
    <div class="showcase-section">
      <h2>Quotes & Citations</h2>
      
      <div class="quote-examples">
        <blockquote class="blockquote">
          <p>"The future belongs to those who believe in the beauty of their dreams. Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
          <footer class="blockquote-footer">
            <cite>Eleanor Roosevelt</cite>
          </footer>
        </blockquote>

        <blockquote class="blockquote blockquote--bordered">
          <p>"Innovation distinguishes between a leader and a follower. Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</p>
          <footer class="blockquote-footer">
            <cite>Steve Jobs</cite>
          </footer>
        </blockquote>

        <div class="inline-quote">
          <p>As Maya Angelou once said, <q class="quote-inline">"If you don't like something, change it. If you can't change it, change your attitude."</q> This wisdom applies perfectly to software development.</p>
        </div>
      </div>
    </div>

    <!-- Lists -->
    <div class="showcase-section">
      <h2>Lists</h2>
      
      <div class="list-examples">
        <div class="list-group">
          <h3>Unordered List</h3>
          <ul class="list-styled">
            <li>First item in the list</li>
            <li>Second item with more content
              <ul>
                <li>Nested item one</li>
                <li>Nested item two</li>
              </ul>
            </li>
            <li>Third item in the list</li>
            <li>Fourth and final item</li>
          </ul>
        </div>

        <div class="list-group">
          <h3>Ordered List</h3>
          <ol class="list-styled">
            <li>First step in the process</li>
            <li>Second step with details
              <ol>
                <li>Sub-step A</li>
                <li>Sub-step B</li>
              </ol>
            </li>
            <li>Third step to complete</li>
            <li>Final step</li>
          </ol>
        </div>

        <div class="list-group">
          <h3>Custom List</h3>
          <ul class="list-custom">
            <li>✓ Task completed successfully</li>
            <li>⚠ Task with warning status</li>
            <li>✗ Task failed or cancelled</li>
            <li>→ Task in progress</li>
          </ul>
        </div>

        <div class="list-group">
          <h3>Definition List</h3>
          <dl class="definition-list">
            <dt>HTML</dt>
            <dd>HyperText Markup Language - the standard markup language for creating web pages.</dd>
            
            <dt>CSS</dt>
            <dd>Cascading Style Sheets - a style sheet language used for describing the presentation of a document.</dd>
            
            <dt>JavaScript</dt>
            <dd>A programming language that conforms to the ECMAScript specification.</dd>
          </dl>
        </div>
      </div>
    </div>

    <!-- Paragraphs and Content -->
    <div class="showcase-section">
      <h2>Paragraph Styles</h2>
      
      <div class="paragraph-examples">
        <div class="paragraph-group">
          <h3>Lead Paragraph</h3>
          <p class="lead">This is a lead paragraph that stands out from regular body text. It's typically used for introductory content and has slightly larger text and different styling to draw the reader's attention.</p>
        </div>

        <div class="paragraph-group">
          <h3>Regular Paragraph</h3>
          <p>This is a regular paragraph with normal styling. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          
          <p>Multiple paragraphs are separated by appropriate spacing. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="paragraph-group">
          <h3>Small Text</h3>
          <p class="text-small">This is smaller text, often used for captions, footnotes, or supplementary information. It maintains readability while being less prominent than regular body text.</p>
        </div>
      </div>
    </div>

    <!-- Code and Preformatted Text -->
    <div class="showcase-section">
      <h2>Code & Preformatted Text</h2>
      
      <div class="code-examples">
        <div class="code-group">
          <h3>Inline Code</h3>
          <p>Use the <code>console.log()</code> function to output messages to the browser console. You can also use <code>document.querySelector()</code> to select elements.</p>
        </div>

        <div class="code-group">
          <h3>Code Block</h3>
          <pre class="code-block"><code>function greetUser(name) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log('Hello, World!');
  }
}

greetUser('Vue Developer');</code></pre>
        </div>

        <div class="code-group">
          <h3>Keyboard Keys</h3>
          <p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, or <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste. Use <kbd>F12</kbd> to open developer tools.</p>
        </div>

        <div class="code-group">
          <h3>Sample Output</h3>
          <samp>user@computer:~$ npm install vue@next
+ vue@3.3.4
added 1 package in 2.5s</samp>
        </div>
      </div>
    </div>

    <!-- Text Utilities -->
    <div class="showcase-section">
      <h2>Text Utilities</h2>
      
      <div class="utility-examples">
        <div class="utility-group">
          <h3>Text Alignment</h3>
          <p class="text-left">Left aligned text (default)</p>
          <p class="text-center">Center aligned text</p>
          <p class="text-right">Right aligned text</p>
          <p class="text-justify">Justified text that spreads across the full width of the container, creating even spacing between words to align with both left and right margins.</p>
        </div>

        <div class="utility-group">
          <h3>Text Wrapping</h3>
          <div class="text-wrap-demo">
            <p class="text-wrap">This text will wrap normally when it reaches the edge of its container, breaking at appropriate word boundaries.</p>
            <p class="text-nowrap">This text will not wrap and will overflow its container if it's too long to fit on a single line.</p>
            <p class="text-break">Thisverylongwordwithoutspaceswillbreakwhenitreachesthecontaineredgetopreventoverflow.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No JavaScript logic needed for this static showcase
</script>

<style scoped>
.typography-page {
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

/* Headings */
.typography-demo {
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
}

.heading-showcase {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-light);
}

.heading-showcase:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.display-heading {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-showcase h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-showcase h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-showcase h3 {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-showcase h4 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-showcase h5 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-showcase h6 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.heading-info {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 400;
  margin: 0;
}

/* Body Text */
.text-showcase {
  display: grid;
  gap: var(--spacing-lg);
}

.text-sample {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.text-sample p {
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.text-xl {
  font-size: 1.25rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-base {
  font-size: 1rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-info {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Text Styles */
.style-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.style-example {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  text-align: center;
}

.style-example p {
  font-size: 1.125rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.style-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-family: 'Courier New', monospace;
}

/* Font Weights */
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }

/* Text Styles */
.italic { font-style: italic; }
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.tracking-wide { letter-spacing: 0.025em; }
.leading-loose { line-height: 2; }

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}

/* Text Colors */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.color-example {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.color-example p {
  font-weight: 500;
  margin: 0;
}

.color-swatch {
  width: 24px;
  height: 24px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-light);
}

.text-primary { color: var(--primary-color); }
.text-secondary { color: var(--text-secondary); }
.text-success { color: var(--success-color); }
.text-warning { color: var(--warning-color); }
.text-error { color: var(--error-color); }
.text-info { color: var(--info-color); }
.text-muted { color: var(--text-muted); }
.text-dark { color: var(--text-primary); }

.bg-primary { background-color: var(--primary-color); }
.bg-secondary { background-color: var(--text-secondary); }
.bg-success { background-color: var(--success-color); }
.bg-warning { background-color: var(--warning-color); }
.bg-error { background-color: var(--error-color); }
.bg-info { background-color: var(--info-color); }
.bg-muted { background-color: var(--text-muted); }
.bg-dark { background-color: var(--text-primary); }

/* Quotes */
.quote-examples {
  display: grid;
  gap: var(--spacing-xl);
}

.blockquote {
  padding: var(--spacing-xl);
  background: var(--surface-secondary);
  border-radius: var(--border-radius-lg);
  font-size: 1.125rem;
  line-height: 1.6;
  position: relative;
}

.blockquote p {
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: var(--spacing-lg);
  position: relative;
}

.blockquote p::before {
  content: '"';
  font-size: 4rem;
  color: var(--primary-color);
  position: absolute;
  left: -2rem;
  top: -1rem;
  font-family: Georgia, serif;
}

.blockquote--bordered {
  border-left: 4px solid var(--primary-color);
  background: var(--primary-light);
}

.blockquote-footer {
  text-align: right;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.blockquote-footer cite {
  font-weight: 600;
  font-style: normal;
}

.inline-quote {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.quote-inline {
  font-style: italic;
  color: var(--primary-color);
}

/* Lists */
.list-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.list-group {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.list-group h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.list-styled {
  padding-left: var(--spacing-lg);
  color: var(--text-primary);
}

.list-styled li {
  margin-bottom: var(--spacing-sm);
  line-height: 1.5;
}

.list-styled ul,
.list-styled ol {
  margin-top: var(--spacing-sm);
}

.list-custom {
  list-style: none;
  padding-left: 0;
}

.list-custom li {
  margin-bottom: var(--spacing-sm);
  padding-left: var(--spacing-md);
  color: var(--text-primary);
  line-height: 1.5;
}

.definition-list {
  display: grid;
  gap: var(--spacing-md);
}

.definition-list dt {
  font-weight: 600;
  color: var(--text-primary);
}

.definition-list dd {
  color: var(--text-secondary);
  margin-left: var(--spacing-lg);
  line-height: 1.5;
}

/* Paragraphs */
.paragraph-examples {
  display: grid;
  gap: var(--spacing-xl);
}

.paragraph-group {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.paragraph-group h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.lead {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.paragraph-group p {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.paragraph-group p:last-child {
  margin-bottom: 0;
}

.text-small {
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Code */
.code-examples {
  display: grid;
  gap: var(--spacing-xl);
}

.code-group {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.code-group h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.code-group p {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

code {
  background: var(--surface-secondary);
  color: var(--primary-color);
  padding: 0.125rem 0.25rem;
  border-radius: var(--border-radius-sm);
  font-family: 'Courier New', monospace;
  font-size: 0.875em;
}

.code-block {
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--text-primary);
}

kbd {
  background: var(--text-primary);
  color: var(--surface-primary);
  padding: 0.125rem 0.375rem;
  border-radius: var(--border-radius-sm);
  font-family: 'Courier New', monospace;
  font-size: 0.75em;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

samp {
  background: var(--surface-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  display: block;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  color: var(--text-primary);
  white-space: pre;
}

/* Text Utilities */
.utility-examples {
  display: grid;
  gap: var(--spacing-xl);
}

.utility-group {
  padding: var(--spacing-lg);
  background: var(--surface-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
}

.utility-group h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

.text-wrap-demo {
  max-width: 400px;
}

.text-wrap {
  word-wrap: break-word;
  margin-bottom: var(--spacing-md);
}

.text-nowrap {
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}

.text-break {
  word-break: break-all;
  margin-bottom: var(--spacing-md);
}

.utility-group p {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.utility-group p:last-child {
  margin-bottom: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .style-grid,
  .color-grid {
    grid-template-columns: 1fr;
  }
  
  .list-examples {
    grid-template-columns: 1fr;
  }
  
  .heading-showcase h1,
  .display-heading {
    font-size: 2rem;
  }
  
  .heading-showcase h2 {
    font-size: 1.75rem;
  }
  
  .blockquote p::before {
    font-size: 3rem;
    left: -1.5rem;
  }
}
</style>
