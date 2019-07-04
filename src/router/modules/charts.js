/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    },
    {
      path: 'highcharts-chart',
      component: () => import('@/views/charts/highcharts'),
      name: 'highcharts',
      meta: { title: 'Highcharts Chart', noCache: true }
    },
    {
      path: 'cytoscape',
      component: () => import('@/views/charts/cytoscape'),
      name: 'cytoscape',
      meta: { title: 'cytoscape', noCache: true }
    }
  ]
}

export default chartsRouter
