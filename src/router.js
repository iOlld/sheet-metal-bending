import { createRouter, createWebHistory } from 'vue-router'

import { routes } from 'vue-router/auto-routes'

function routesProcess(routes) {
  const routesNew = []

  for (const route of routes) {
    route.props = true
    if (!route.meta?.breadcrumb)
      route.meta = { breadcrumb: false, ...(route.meta || {}) }

    if (route.children)
      route.children = routesProcess(route.children)

    routesNew.push(route)
  }
  return routesNew
}

const router = createRouter({
  history: createWebHistory(),
  routes: routesProcess(routes)
})

export default router