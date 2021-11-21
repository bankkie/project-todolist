import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormTodo.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/FormTodo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (Object.keys(store.state.selectTodolist).length === 0 && store.state.selectTodolist.constructor === Object && to.path === '/edit') {
    return next('/add');
  } else {
    next();
  }
});

export default router
