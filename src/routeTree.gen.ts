/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as KioskLayoutRouteImport } from './routes/_kiosk-layout/route'
import { Route as IndexImport } from './routes/index'
import { Route as AdminIndexImport } from './routes/admin/index'
import { Route as AdminAdminLayoutImport } from './routes/admin/_admin-layout'
import { Route as AdminLoginIndexImport } from './routes/admin/login/index'
import { Route as KioskLayoutKioskIndexImport } from './routes/_kiosk-layout/kiosk/index'
import { Route as AdminAdminLayoutQueueingIndexImport } from './routes/admin/_admin-layout/queueing/index'
import { Route as AdminAdminLayoutManagementIndexImport } from './routes/admin/_admin-layout/management/index'
import { Route as AdminAdminLayoutDashboardIndexImport } from './routes/admin/_admin-layout/dashboard/index'
import { Route as AdminAdminLayoutAppointmentsIndexImport } from './routes/admin/_admin-layout/appointments/index'
import { Route as AdminAdminLayoutAnalyticsIndexImport } from './routes/admin/_admin-layout/analytics/index'
import { Route as KioskLayoutKioskPagesNowServingRouteImport } from './routes/_kiosk-layout/kiosk/_pages/now-serving/route'

// Create Virtual Routes

const AdminImport = createFileRoute('/admin')()

// Create/Update Routes

const AdminRoute = AdminImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const KioskLayoutRouteRoute = KioskLayoutRouteImport.update({
  id: '/_kiosk-layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AdminIndexRoute = AdminIndexImport.update({
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)

const AdminAdminLayoutRoute = AdminAdminLayoutImport.update({
  id: '/_admin-layout',
  getParentRoute: () => AdminRoute,
} as any)

const AdminLoginIndexRoute = AdminLoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => AdminRoute,
} as any)

const KioskLayoutKioskIndexRoute = KioskLayoutKioskIndexImport.update({
  path: '/kiosk/',
  getParentRoute: () => KioskLayoutRouteRoute,
} as any)

const AdminAdminLayoutQueueingIndexRoute =
  AdminAdminLayoutQueueingIndexImport.update({
    path: '/queueing/',
    getParentRoute: () => AdminAdminLayoutRoute,
  } as any)

const AdminAdminLayoutManagementIndexRoute =
  AdminAdminLayoutManagementIndexImport.update({
    path: '/management/',
    getParentRoute: () => AdminAdminLayoutRoute,
  } as any)

const AdminAdminLayoutDashboardIndexRoute =
  AdminAdminLayoutDashboardIndexImport.update({
    path: '/dashboard/',
    getParentRoute: () => AdminAdminLayoutRoute,
  } as any)

const AdminAdminLayoutAppointmentsIndexRoute =
  AdminAdminLayoutAppointmentsIndexImport.update({
    path: '/appointments/',
    getParentRoute: () => AdminAdminLayoutRoute,
  } as any)

const AdminAdminLayoutAnalyticsIndexRoute =
  AdminAdminLayoutAnalyticsIndexImport.update({
    path: '/analytics/',
    getParentRoute: () => AdminAdminLayoutRoute,
  } as any)

const KioskLayoutKioskPagesNowServingRouteRoute =
  KioskLayoutKioskPagesNowServingRouteImport.update({
    path: '/kiosk/now-serving',
    getParentRoute: () => KioskLayoutRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_kiosk-layout': {
      preLoaderRoute: typeof KioskLayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/admin/_admin-layout': {
      preLoaderRoute: typeof AdminAdminLayoutImport
      parentRoute: typeof AdminRoute
    }
    '/admin/': {
      preLoaderRoute: typeof AdminIndexImport
      parentRoute: typeof AdminImport
    }
    '/_kiosk-layout/kiosk/': {
      preLoaderRoute: typeof KioskLayoutKioskIndexImport
      parentRoute: typeof KioskLayoutRouteImport
    }
    '/admin/login/': {
      preLoaderRoute: typeof AdminLoginIndexImport
      parentRoute: typeof AdminImport
    }
    '/_kiosk-layout/kiosk/_pages/now-serving': {
      preLoaderRoute: typeof KioskLayoutKioskPagesNowServingRouteImport
      parentRoute: typeof KioskLayoutRouteImport
    }
    '/admin/_admin-layout/analytics/': {
      preLoaderRoute: typeof AdminAdminLayoutAnalyticsIndexImport
      parentRoute: typeof AdminAdminLayoutImport
    }
    '/admin/_admin-layout/appointments/': {
      preLoaderRoute: typeof AdminAdminLayoutAppointmentsIndexImport
      parentRoute: typeof AdminAdminLayoutImport
    }
    '/admin/_admin-layout/dashboard/': {
      preLoaderRoute: typeof AdminAdminLayoutDashboardIndexImport
      parentRoute: typeof AdminAdminLayoutImport
    }
    '/admin/_admin-layout/management/': {
      preLoaderRoute: typeof AdminAdminLayoutManagementIndexImport
      parentRoute: typeof AdminAdminLayoutImport
    }
    '/admin/_admin-layout/queueing/': {
      preLoaderRoute: typeof AdminAdminLayoutQueueingIndexImport
      parentRoute: typeof AdminAdminLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  KioskLayoutRouteRoute.addChildren([
    KioskLayoutKioskIndexRoute,
    KioskLayoutKioskPagesNowServingRouteRoute,
  ]),
  AdminRoute.addChildren([
    AdminAdminLayoutRoute.addChildren([
      AdminAdminLayoutAnalyticsIndexRoute,
      AdminAdminLayoutAppointmentsIndexRoute,
      AdminAdminLayoutDashboardIndexRoute,
      AdminAdminLayoutManagementIndexRoute,
      AdminAdminLayoutQueueingIndexRoute,
    ]),
    AdminIndexRoute,
    AdminLoginIndexRoute,
  ]),
])

/* prettier-ignore-end */
