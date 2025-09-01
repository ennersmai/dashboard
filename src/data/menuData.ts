import type { MenuItem } from '@/types/menu'

export const menuData: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" /></svg>',
    path: '/dashboard'
  },
  {
    id: 'components-section',
    title: 'COMPS',
    icon: '',
    isSection: true
  },
  {
    id: 'base',
    title: 'Base',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" /></svg>',
    children: [
      {
        id: 'avatars',
        title: 'Avatars',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>',
        path: '/components/avatars'
      },
      {
        id: 'buttons',
        title: 'Buttons',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,17L15,12L10,7V17Z" /></svg>',
        path: '/components/buttons'
      },
      {
        id: 'gridsystem',
        title: 'Grid System',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10,4V8H14V4H10M16,4V8H20V4H16M16,10V14H20V10H16M16,16V20H20V16H16M14,20V16H10V20H14M8,20V16H4V20H8M8,14V10H4V14H8M8,8V4H4V8H8M10,14H14V10H10V14M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2Z" /></svg>',
        path: '/components/gridsystem'
      },
      {
        id: 'panels',
        title: 'Panels',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>',
        path: '/components/panels'
      },
      {
        id: 'notifications',
        title: 'Notifications',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" /></svg>',
        path: '/components/notifications'
      },
      {
        id: 'sweetalert',
        title: 'Sweet Alert',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z" /></svg>',
        path: '/components/sweetalert'
      },
      {
        id: 'font-awesome',
        title: 'Font Awesome Icons',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" /></svg>',
        path: '/components/font-awesome'
      },
      {
        id: 'simple-line',
        title: 'Simple Line Icons',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M14.5,8L16,9.5L11.5,14L8,10.5L9.5,9L11.5,11L14.5,8Z" /></svg>',
        path: '/components/simple-line'
      },
      {
        id: 'typography',
        title: 'Typography',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,7.87 17.26,7.87H15.11L13.5,14.78H15.54C16.22,14.78 16.17,14.17 16.31,13.63L16.93,13.78L16.34,17.96H16.22C16.08,17.34 15.78,17.11 15.11,17.11H12.42L11.73,20H9.62L12.82,6.65H10.56C9.86,6.65 9.75,7.26 9.37,8.35L8.42,8.16L9.32,4H18.5M2,20V18H6V16H3V14H6V12H2V10H8V20H2Z" /></svg>',
        path: '/components/typography'
      }
    ]
  },
  {
    id: 'sidebar-layouts',
    title: 'Sidebar Layouts',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3,3H9V7H3V3M3,21H9V17H3V21M3,15H9V11H3V15M3,9H9V8H3V9M11,3H21V7H11V3M11,21H21V17H11V21M11,15H21V11H11V15M11,9H21V8H11V9Z" /></svg>',
    children: [
      {
        id: 'sidebar-default',
        title: 'Default',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z" /></svg>',
        path: '/sidebar-layouts/default'
      },
      {
        id: 'sidebar-style-2',
        title: 'Sidebar Style 2',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>',
        path: '/sidebar-layouts/style2'
      },
      {
        id: 'icon-menu',
        title: 'Icon Menu',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3,6H9V8H3V6M3,11H9V13H3V11M3,16H9V18H3V16Z" /></svg>',
        path: '/sidebar-layouts/icon-menu'
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>',
    path: '/components/forms'
  },
  {
    id: 'tables',
    title: 'Tables',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" /></svg>',
    children: [
      {
        id: 'basic-tables',
        title: 'Basic Tables',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" /></svg>',
        path: '/components/tables/basic'
      },
      {
        id: 'datatables',
        title: 'Datatables',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" /></svg>',
        path: '/components/tables/datatables'
      }
    ]
  },
  {
    id: 'maps',
    title: 'Maps',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,21L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z" /></svg>',
    children: [
      {
        id: 'google-maps',
        title: 'Google Maps',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>',
        path: '/maps/google'
      },
      {
        id: 'jsvectormap',
        title: 'Jsvectormap',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,21L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z" /></svg>',
        path: '/maps/jsvectormap'
      }
    ]
  },
  {
    id: 'charts',
    title: 'Charts',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z" /></svg>',
    children: [
      {
        id: 'chartjs',
        title: 'Chart.js',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z" /></svg>',
        path: '/charts/chartjs'
      },
      {
        id: 'sparkline',
        title: 'Sparkline',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" /></svg>',
        path: '/charts/sparkline'
      }
    ]
  },
  {
    id: 'widgets',
    title: 'Widgets',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>',
    path: '/widgets'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M13,17H7V15H13V17M17,13H7V11H17V13M17,9H7V7H17V9Z" /></svg>',
    path: '/documentation'
  },
  {
    id: 'menu-levels',
    title: 'Menu Levels',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3,8H7V6H3V8M3,11H7V9H3V11M3,14H7V12H3V14M3,17H7V15H3V17M8,8H21V6H8V8M8,11H21V9H8V11M8,14H21V12H8V14M8,17H21V15H8V17M3,20H7V18H3V20M8,20H21V18H8V20Z" /></svg>',
    children: [
      {
        id: 'level-1-a',
        title: 'Level 1 - Admin',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8L6,7M4,15H8L6,13M4,19H8L6,17" /></svg>',
        children: [
          {
            id: 'level-2-a1',
            title: 'Level 2 - Users',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>',
            children: [
              {
                id: 'level-3-a1a',
                title: 'Level 3 - Management',
                icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>',
                children: [
                  {
                    id: 'level-4-a1a1',
                    title: 'Level 4 - Permissions',
                    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" /></svg>',
                    children: [
                      {
                        id: 'level-5-a1a1a',
                        title: 'Level 5 - Create Permission',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>',
                        path: '/menu-levels/deep/create-permission'
                      },
                      {
                        id: 'level-5-a1a1b',
                        title: 'Level 5 - Edit Permissions',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>',
                        path: '/menu-levels/deep/edit-permissions'
                      },
                      {
                        id: 'level-5-a1a1c',
                        title: 'Level 5 - Delete Permissions',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',
                        path: '/menu-levels/deep/delete-permissions'
                      }
                    ]
                  },
                  {
                    id: 'level-4-a1a2',
                    title: 'Level 4 - Roles',
                    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14M8.5,14L7.5,15L4.5,12L3.5,13L6.5,16L9.5,13L8.5,14Z" /></svg>',
                    children: [
                      {
                        id: 'level-5-a1a2a',
                        title: 'Level 5 - Super Admin',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>',
                        path: '/menu-levels/deep/super-admin'
                      },
                      {
                        id: 'level-5-a1a2b',
                        title: 'Level 5 - Admin Role',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21A7,7 0 0,1 14,26H10A7,7 0 0,1 3,19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" /></svg>',
                        path: '/menu-levels/deep/admin-role'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'level-3-a1b',
                title: 'Level 3 - Regular Users',
                icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14Z" /></svg>',
                children: [
                  {
                    id: 'level-4-a1b1',
                    title: 'Level 4 - Active Users',
                    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" /></svg>',
                    path: '/menu-levels/deep/active-users'
                  },
                  {
                    id: 'level-4-a1b2',
                    title: 'Level 4 - Inactive Users',
                    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M14.5,9L13.09,10.41L15.67,13L13.09,15.59L14.5,17L17.09,14.41L19.67,17L21.08,15.59L18.5,13L21.08,10.41L19.67,9L17.09,11.59L14.5,9Z" /></svg>',
                    path: '/menu-levels/deep/inactive-users'
                  }
                ]
              }
            ]
          },
          {
            id: 'level-2-a2',
            title: 'Level 2 - Content',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>',
            children: [
              {
                id: 'level-3-a2a',
                title: 'Level 3 - Articles',
                icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M13,17H7V15H13V17M17,13H7V11H17V13M17,9H7V7H17V9Z" /></svg>',
                path: '/menu-levels/deep/articles'
              },
              {
                id: 'level-3-a2b',
                title: 'Level 3 - Media',
                icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" /></svg>',
                path: '/menu-levels/deep/media'
              }
            ]
          }
        ]
      },
      {
        id: 'level-1-b',
        title: 'Level 1 - Reports',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16,8H18V15H16V8M12,2H14V15H12V2M8,9H10V15H8V9M4,11H6V15H4V11Z" /></svg>',
        children: [
          {
            id: 'level-2-b1',
            title: 'Level 2 - Analytics',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" /></svg>',
            children: [
              {
                id: 'level-3-b1a',
                title: 'Level 3 - Traffic Reports',
                icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" /></svg>',
                children: [
                  {
                    id: 'level-4-b1a1',
                    title: 'Level 4 - Daily Traffic',
                    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H11V7H13V13H17V15H7V13Z" /></svg>',
                    children: [
                      {
                        id: 'level-5-b1a1a',
                        title: 'Level 5 - Peak Hours',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7,10L12,15L17,10H7Z" /></svg>',
                        path: '/menu-levels/deep/peak-hours'
                      },
                      {
                        id: 'level-5-b1a1b',
                        title: 'Level 5 - Off-Peak',
                        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17,14L12,9L7,14H17Z" /></svg>',
                        path: '/menu-levels/deep/off-peak'
                      }
                    ]
                  },
                  {
                    id: 'level-4-b1a2',
                    title: 'Level 4 - Weekly Traffic',
                    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,12H12V7H10V14H17V12Z" /></svg>',
                    path: '/menu-levels/deep/weekly-traffic'
                  }
                ]
              },
              {
                id: 'level-3-b1b',
                title: 'Level 3 - Revenue Reports',
                icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" /></svg>',
                path: '/menu-levels/deep/revenue-reports'
              }
            ]
          },
          {
            id: 'level-2-b2',
            title: 'Level 2 - Export',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>',
            path: '/menu-levels/deep/export'
          }
        ]
      },
      {
        id: 'level-1-c',
        title: 'Level 1 - Settings',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.98C19.47,12.66 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98Z" /></svg>',
        children: [
          {
            id: 'level-2-c1',
            title: 'Level 2 - System Config',
            icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" /></svg>',
            path: '/menu-levels/deep/system-config'
          }
        ]
      }
    ]
  }
]