import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
});
