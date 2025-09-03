 s# 🎨 Theme Customization Guide

## 📁 Primary CSS File Location

**Main Theme File:** `src/assets/main.css`

This file contains all CSS variables and global styles for the entire dashboard. You can customize colors, spacing, typography, and transitions by modifying the CSS variables in the `:root` section.

---

## 🎯 Key Customization Areas

### 🌈 **Colors**

```css
/* Primary Colors - Modify these for brand colors */
--primary-color: #3b82f6;        /* Main brand color */
--primary-hover: #2563eb;        /* Hover state */
--primary-light: #dbeafe;        /* Light variant */
--secondary-color: #6b7280;      /* Secondary brand color */
--accent-color: #10b981;         /* Accent/success color */

/* Background Colors */
--bg-primary: #ffffff;           /* Main background */
--bg-secondary: #f8fafc;         /* Secondary background */
--bg-tertiary: #f1f5f9;         /* Tertiary background */
--bg-dark: #1e293b;             /* Dark background */

/* Sidebar Colors - Complete sidebar theming */
--sidebar-bg: #1e293b;           /* Sidebar background */
--sidebar-text: #cbd5e1;         /* Default text color */
--sidebar-text-hover: #ffffff;   /* Hover text color */
--sidebar-active-bg: #3b82f6;    /* Active item background */
--sidebar-active-text: #ffffff;  /* Active item text */
--sidebar-border: #334155;       /* Sidebar borders */

/* Topbar Colors */
--topbar-bg: #ffffff;            /* Header background */
--topbar-text: #374151;          /* Header text */
--topbar-border: #e5e7eb;        /* Header border */
```

### 📏 **Layout & Spacing**

```css
/* Sidebar Dimensions */
--sidebar-width: 280px;          /* Expanded sidebar width */
--sidebar-collapsed-width: 70px; /* Collapsed sidebar width */
--topbar-height: 70px;           /* Header height */

/* Spacing System */
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

### ⚡ **Animations & Transitions**

```css
/* Transition Speeds */
--transition-fast: 0.2s ease-in-out;    /* Fast animations */
--transition-normal: 0.2s ease-in-out;  /* Normal animations */
--transition-slow: 0.5s ease-in-out;    /* Slow animations */
```

### 🔤 **Typography**

```css
/* Font Sizes */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */

/* Font Family */
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

---

## 🔧 **Component-Specific Customization**

### **Sidebar Styles**
- **File:** `src/components/layout/Sidebar.vue`
- **Styles:** Lines 77-310 (CSS section)
- **Key Classes:** `.sidebar`, `.sidebar--style1`, `.sidebar--style2`, `.sidebar--collapsed`

### **Menu Items**
- **File:** `src/components/layout/SidebarItem.vue`
- **Styles:** Lines 129-365 (CSS section)
- **Key Classes:** `.menu-item`, `.menu-link`, `.menu-button`, `.submenu`

### **Header/Topbar**
- **File:** `src/components/layout/Topbar.vue`
- **Styles:** Lines 119-286 (CSS section)
- **Key Classes:** `.topbar`, `.topbar-content`, `.user-profile`

### **Footer/Bottombar**
- **File:** `src/components/layout/Bottombar.vue`
- **Styles:** Lines 22-82 (CSS section)
- **Key Classes:** `.bottombar`, `.bottombar-content`

---

## 🎨 **Quick Theme Examples**

### **Dark Theme**
```css
:root {
  --primary-color: #6366f1;
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --topbar-bg: #1f2937;
  --topbar-text: #f9fafb;
}
```

### **Corporate Blue Theme**
```css
:root {
  --primary-color: #1e40af;
  --primary-hover: #1d4ed8;
  --sidebar-bg: #1e3a8a;
  --sidebar-active-bg: #1e40af;
  --accent-color: #0ea5e9;
}
```

### **Green Theme**
```css
:root {
  --primary-color: #059669;
  --primary-hover: #047857;
  --sidebar-bg: #064e3b;
  --sidebar-active-bg: #059669;
  --accent-color: #10b981;
}
```

---

## 📱 **Responsive Design**

All responsive breakpoints are handled automatically. The main breakpoint is:
- **Mobile:** `@media (max-width: 768px)`

You can add custom responsive styles by following the same pattern in any component.

---

## 🚀 **How to Apply Changes**

1. **Open:** `src/assets/main.css`
2. **Modify:** The CSS variables in the `:root` section
3. **Save:** The file - changes will apply immediately in development
4. **Test:** Check all pages and sidebar states for consistency

---

## ⚠️ **Important Notes**

- **Always test** changes in both light and dark mode
- **Check sidebar states:** Default, Style 2, and Icon Menu (collapsed)
- **Verify responsive design** on mobile devices
- **Test all menu levels** including nested menus
- **Ensure accessibility** with sufficient color contrast

---

## 🔍 **Additional Files**

For advanced customization, you may also need to modify:

- **Menu Data:** `src/data/menuData.ts` (menu structure and icons)
- **Menu Types:** `src/types/menu.ts` (TypeScript interfaces)
- **Sidebar Logic:** `src/composables/useSidebar.ts` (sidebar state management)

---

**💡 Pro Tip:** Use browser developer tools to experiment with CSS variables in real-time before making permanent changes!
