import Vue from 'vue'
import Router from 'vue-router'
import MyComponent from '@/components/MyComponent.vue'
import MyComponent2 from '@/components/MyComponent2.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

// vue-router
export default new Router({
  mode: 'history', // gets rid of hash on route, not sure if this is good?
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comp1',
      name: 'Comp1',
      component: MyComponent
    },
    {
      path: '/comp2',
      name: 'Comp2',
      component: MyComponent2
    }
  ]
})
