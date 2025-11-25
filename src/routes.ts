import React from 'react'
import { type RouteObject } from 'react-router-dom'

import Layout from '@/pages/layout/Layout'
import LandingPage from '@/pages/LandingPage'
import About from '@/pages/About'
import AuthLayout from '@/pages/auth/Layout'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

export const routes: RouteObject[] = [
  // Auth-only layout routes
  {
    element: React.createElement(AuthLayout),
    children: [
      { path: '/login', element: React.createElement(Login) },
      { path: '/register', element: React.createElement(Register) },
    ],
  },

  // Main site layout routes
  {
    path: '/',
    element: React.createElement(Layout),
    children: [
      { index: true, element: React.createElement(LandingPage) },
      { path: 'about', element: React.createElement(About) },
    ],
  },
]

export default routes
