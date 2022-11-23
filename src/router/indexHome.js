export default {
  path: '/',
  name: '首页',
  component: () => import(/* webpackChunkName: "home" */ '@/components/home/index')
}
