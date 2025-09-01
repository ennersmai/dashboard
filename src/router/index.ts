import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'dashboard',
      redirect: '/dashboard',
      component: () => import('../views/DashboardLayout.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'main-dashboard',
          component: () => import('../views/Dashboard.vue')
        },
        // Component Showcase Routes
        {
          path: '/components/avatars',
          name: 'avatars',
          component: () => import('../views/components/Avatars.vue')
        },
        {
          path: '/components/buttons',
          name: 'buttons',
          component: () => import('../views/components/Buttons.vue')
        },
        {
          path: '/components/gridsystem',
          name: 'gridsystem',
          component: () => import('../views/components/GridSystem.vue')
        },
        {
          path: '/components/panels',
          name: 'panels',
          component: () => import('../views/components/Panels.vue')
        },
        {
          path: '/components/notifications',
          name: 'notifications',
          component: () => import('../views/components/Notifications.vue')
        },
        {
          path: '/components/sweetalert',
          name: 'sweetalert',
          component: () => import('../views/components/SweetAlert.vue')
        },
        {
          path: '/components/typography',
          name: 'typography',
          component: () => import('../views/components/Typography.vue')
        },
        {
          path: '/components/font-awesome',
          name: 'font-awesome',
          component: () => import('../views/components/FontAwesome.vue')
        },
        {
          path: '/components/simple-line',
          name: 'simple-line',
          component: () => import('../views/components/SimpleLineIcons.vue')
        },
        {
          path: '/components/forms',
          name: 'forms',
          component: () => import('../views/components/Forms.vue')
        },
        {
          path: '/components/tables/basic',
          name: 'basic-tables',
          component: () => import('../views/components/BasicTables.vue')
        },
        {
          path: '/components/tables/datatables',
          name: 'datatables',
          component: () => import('../views/components/Datatables.vue')
        },
        {
          path: '/charts/chartjs',
          name: 'chartjs',
          component: () => import('../views/components/ChartJs.vue')
        },
        {
          path: '/charts/sparkline',
          name: 'sparkline',
          component: () => import('../views/components/Sparkline.vue')
        },
        {
          path: '/components/sidebar-layouts',
          name: 'sidebar-layouts',
          component: () => import('../views/components/SidebarLayouts.vue')
        },
        // Sidebar Layout Style Switchers (redirect to base components with style applied)
        {
          path: '/sidebar-layouts/default',
          name: 'sidebar-default',
          component: () => import('../views/sidebar-layouts/DefaultStyle.vue')
        },
        {
          path: '/sidebar-layouts/style2',
          name: 'sidebar-style2',
          component: () => import('../views/sidebar-layouts/SidebarStyle2.vue')
        },
        {
          path: '/sidebar-layouts/icon-menu',
          name: 'icon-menu',
          component: () => import('../views/sidebar-layouts/IconMenu.vue')
        },
        // Menu Levels routes
        {
          path: '/menu-levels/level-2-a1',
          name: 'menu-level-2-a1',
          component: () => import('../views/menu-levels/Level2A1.vue')
        },
        {
          path: '/menu-levels/level-2-a2',
          name: 'menu-level-2-a2',
          component: () => import('../views/menu-levels/Level2A2.vue')
        },
        {
          path: '/menu-levels/level-2-b1',
          name: 'menu-level-2-b1',
          component: () => import('../views/menu-levels/Level2B1.vue')
        },
        {
          path: '/menu-levels/level-1-c',
          name: 'menu-level-1-c',
          component: () => import('../views/menu-levels/Level1C.vue')
        },
        // Deep Level 5 Menu Routes
        {
          path: '/menu-levels/deep/create-permission',
          name: 'CreatePermission',
          component: () => import('@/views/menu-levels/deep/CreatePermission.vue')
        },
        {
          path: '/menu-levels/deep/edit-permissions',
          name: 'EditPermissions',
          component: () => import('@/views/menu-levels/deep/EditPermissions.vue')
        },
        {
          path: '/menu-levels/deep/delete-permissions',
          name: 'DeletePermissions',
          component: () => import('@/views/menu-levels/deep/DeletePermissions.vue')
        },
        {
          path: '/menu-levels/deep/super-admin',
          name: 'SuperAdmin',
          component: () => import('@/views/menu-levels/deep/SuperAdmin.vue')
        },
        {
          path: '/menu-levels/deep/admin-role',
          name: 'AdminRole',
          component: () => import('@/views/menu-levels/deep/AdminRole.vue')
        },
        {
          path: '/menu-levels/deep/active-users',
          name: 'ActiveUsers',
          component: () => import('@/views/menu-levels/deep/ActiveUsers.vue')
        },
        {
          path: '/menu-levels/deep/inactive-users',
          name: 'InactiveUsers',
          component: () => import('@/views/menu-levels/deep/InactiveUsers.vue')
        },
        {
          path: '/menu-levels/deep/articles',
          name: 'Articles',
          component: () => import('@/views/menu-levels/deep/Articles.vue')
        },
        {
          path: '/menu-levels/deep/media',
          name: 'Media',
          component: () => import('@/views/menu-levels/deep/Media.vue')
        },
        {
          path: '/menu-levels/deep/peak-hours',
          name: 'PeakHours',
          component: () => import('@/views/menu-levels/deep/PeakHours.vue')
        },
        {
          path: '/menu-levels/deep/off-peak',
          name: 'OffPeak',
          component: () => import('@/views/menu-levels/deep/OffPeak.vue')
        },
        {
          path: '/menu-levels/deep/weekly-traffic',
          name: 'WeeklyTraffic',
          component: () => import('@/views/menu-levels/deep/WeeklyTraffic.vue')
        },
        {
          path: '/menu-levels/deep/revenue-reports',
          name: 'RevenueReports',
          component: () => import('@/views/menu-levels/deep/RevenueReports.vue')
        },
        {
          path: '/menu-levels/deep/export',
          name: 'Export',
          component: () => import('@/views/menu-levels/deep/Export.vue')
        },
        {
          path: '/menu-levels/deep/system-config',
          name: 'SystemConfig',
          component: () => import('@/views/menu-levels/deep/SystemConfig.vue')
        },
        // Maps placeholder routes
        {
          path: '/maps/google',
          name: 'GoogleMaps',
          component: () => import('@/views/maps/GoogleMaps.vue')
        },
        {
          path: '/maps/jsvectormap',
          name: 'Jsvectormap',
          component: () => import('@/views/maps/Jsvectormap.vue')
        },
        // Widgets route
        {
          path: '/widgets',
          name: 'Widgets',
          component: () => import('@/views/Widgets.vue')
        },
        // Documentation route
        {
          path: '/documentation',
          name: 'Documentation',
          component: () => import('@/views/Documentation.vue')
        }
      ]
    }
  ]
})

export default router
