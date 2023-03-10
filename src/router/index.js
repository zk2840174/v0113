// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/todo/list',
    name: 'TodoListPage',
    component: () => import("@/views/todo/TodoListPage.vue")
  },
  {
    path: '/todo/register',
    name: 'TodoLRegisterPage',
    component: () => import("@/views/todo/TodoRegisterPage.vue")
  },
  {
    path: '/todo/read/:id',
    name: 'TodoReadPage',
    component: () => import("@/views/todo/TodoReadPage.vue"),
    meta: {requireAuth:true}
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("@/views/LoginPage.vue")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to,from) => {

  if(to.meta.requireAuth){
    console.log("requireAuth")

    if(!localStorage.getItem("access")){

      return "/login";
    }


  }

})

export default router
