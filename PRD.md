Of course. Here is the complete, polished Product Requirements Document (PRD) in Markdown format, incorporating all the details we've discussed. It specifies that "Widgets" will be addressed after the other components are completed.

---

# Product Requirements Document (PRD): White-Label Vue 3 Admin Template

**Version:** 1.0
**Status:** Finalized for Initial Development Phase
**Reference Design:** Kaiadmin Lite 1.2.0

## 1. Overview & Objective

This document outlines the requirements for building a modular, responsive, and highly customizable white-label admin dashboard template. The primary objective is to create a robust front-end application using **Vue 3 with the Composition API (strictly, no Options API)**.

The core feature is its white-label capability, allowing easy customization of key UI sections (topbar, sidebar, background) through a straightforward CSS variable system and a configuration file.

## 2. Initial Deliverables

The initial development phase will focus on delivering a core application consisting of:

*   **A Login Page:** The entry point for the application.
*   **A Main Dashboard Page:** The default view after a user logs in.
*   **A Comprehensive Component Showcase:** A set of pages demonstrating all core UI elements.
*   **A Functional, Multi-Style Sidebar:** The primary navigation tool.

## 3. Key Technical & Functional Requirements

*   **Framework:** Vue 3 (Composition API only).
*   **Bundler:** Vite.
*   **Routing:** Vue Router for all navigation.
*   **Styling:** A standard CSS approach heavily reliant on CSS variables for theming.
*   **Structure:** A modular, component-based architecture (`Layout.vue`, `Sidebar.vue`, `Topbar.vue`, etc.).
*   **Responsiveness:** The layout must be fully responsive and adapt gracefully to desktop, tablet, and mobile viewports.
*   **Data-Driven Menus:** The sidebar navigation must be configurable via a `JSON`-like data object, not hardcoded.

## 4. Core Pages & Layout

### 4.1. Login Page

A standalone page featuring:
*   Username/Email input field.
*   Password input field.
*   A "Login" button.
*   A static QR code image placeholder, designated for future mobile login integration.

### 4.2. Main Dashboard Page

The default landing page after login, which includes a layout with placeholder widgets for:
*   **KPI Cards:** Visitors, Subscribers, Sales, Orders.
*   **Graphs & Charts:** User Statistics, Daily Sales.
*   **Maps:** Users Geolocation.
*   **Lists & Tables:** New Customers, Transaction History.

### 4.3. Core Layout Components
*   **Topbar:** Contains a search bar placeholder and a user profile dropdown menu.
*   **Bottombar (Footer):** An optional, configurable footer section.
*   **Background:** The main content area background, customizable via CSS.

## 5. Sidebar Navigation (Primary Focus)

The sidebar is the most critical component of this project and must meet the following requirements:

### 5.1. Navigation Mechanics
*   **Multi-Level Support:** Must support up to **five levels** of nested menus.
*   **Expansion Behavior:** All submenus must expand vertically downwards in an **accordion style**. Sideways fly-out menus are not desired for the primary navigation.
*   **State Highlighting:** The active/current page's menu item must be visually highlighted.
*   **Badge Support:** Menu items must support optional numeric badges (e.g., for notifications or item counts).

### 5.2. Sidebar Layouts & Styles
The application must support dynamically changing the sidebar's appearance and behavior:
*   **Sidebar Style 2:** A mode where menu items are rendered as distinct buttons with clear hover/active effects.
*   **Icon Menu:** A collapsed mode where the sidebar shrinks to show only the top-level icons. On hover, the full sidebar menu temporarily flies out to the right for interaction.

## 6. Component Showcase (Sidebar Menu Items)

The following pages must be created to demonstrate the template's UI capabilities.

### 6.1. Components (Base)
*   **Avatars:** Showcase for different sizes, shapes, status indicators, and avatar groups.
*   **Buttons:** Showcase for various button styles, including icons, labels, sizes, states (disabled), types, dropdowns, badges, nav pills, and pagination.
*   **Grid System:** A page demonstrating a comprehensive responsive grid system (XL, LG, MD, SM, XS), including equal-width, mixed, and offset examples.
*   **Panels:** A showcase for tabbed content panels with multiple styles: horizontal/vertical, bordered/borderless, and with/without icons.
*   **Notifications:** A page to demonstrate "growl-style" toast notifications with configurable placement and states.
*   **Sweet Alert:** A page with trigger buttons for various pre-styled modal alerts (e.g., success, error, warning, confirm, with input).
*   **Typography:** A page displaying all standard text elements: headings (h1-h6), paragraphs, lead paragraphs, blockquotes, and contextual text colors (primary, success, danger, etc.).

### 6.2. Forms
*   **Basic Form:** A comprehensive page displaying all available form elements:
    *   **Inputs:** Text, Password, Inline, Disabled, Success/Error states, Textarea.
    *   **Controls:** Radio buttons, checkboxes, static text, file input.
    *   **Selects:** Single-select, multi-select.
    *   **Input Groups:** Inputs with prepended/appended text, icons, buttons, and dropdowns.
    *   **Custom Controls:** Image-based checkboxes, color pickers, button-group selectors, and tag inputs.
    *   **Layouts:** Standard, floating labels, and various input sizes.
    *   **Actions:** Submit and Cancel buttons.

### 6.3. Tables
*   **Basic Tables:** A page demonstrating static HTML table styling options: striped rows, hoverable rows, bordered tables, contextual colors for headers/borders, and a responsive table with horizontal scrolling.
*   **Datatables:** A page demonstrating a feature-rich, interactive table powered by a library like DataTables.net, including pagination, global search, column sorting, a "show entries" selector, multi-filter selects, and dynamic row-adding functionality.

### 6.4. Maps
*   **Google Maps:** A page with an embedded, interactive Google Map showing a marker.
*   **Jsvectormap:** A page with a lightweight, SVG-based vector map demonstrating region highlighting.

### 6.5. Charts
*   **Chart.js:** A showcase of large, interactive charts including Line, Bar, Pie, Doughnut, Radar, and Bubble charts, as well as multi-dataset examples and HTML legends.
*   **Sparkline:** A showcase of small, inline charts including Line, Bar, Tristate, Discrete, and Pie charts, suitable for embedding within text or tables.

## 7. Deferred Items & Future Scope

The following items are acknowledged but are **out of scope** for the initial development phase. They will be addressed in a subsequent phase.

*   **Widgets Page:** The "Widgets" menu item will be present, but the corresponding page will be a placeholder. Development of the full widget library is deferred.
*   **Documentation & Menu Levels Pages:** These will also be placeholders. The core functionality for 5-level menus is a primary requirement, but a dedicated page demonstrating it is not.

## 8. White-Labeling & Theming Strategy

Customization is a primary requirement and will be achieved through:

*   **CSS Variables:** All key theme values (colors, fonts, spacing) will be defined as CSS variables in the `:root` scope. This includes variables for `--sidebar-bg`, `--primary-color`, `--topbar-text`, etc.
*   **Theme Override File:** A dedicated `theme.css` file will be provided where a user can override the default CSS variables to apply a custom brand without touching the core component styles.
*   **Configuration File:** A `theme.config.ts` file will be used to manage non-CSS options, such as toggling the visibility of the bottombar or providing paths to custom logos.

## 9. Acceptance Criteria

The initial development phase will be considered complete when:
1.  The application is built strictly with Vue 3 and the Composition API.
2.  The Login Page, Main Dashboard, and all specified component pages are created and functional.
3.  The sidebar supports 5 levels of downward-expanding navigation and can be switched between its different layout styles.
4.  All specified UI components (buttons, forms, tables, etc.) are implemented as per the detailed requirements.
5.  The white-labeling strategy is proven to work by creating at least two distinct example themes via the CSS override file.
6.  The entire application is fully responsive.