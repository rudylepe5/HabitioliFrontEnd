import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'
import NavVar from '@/components/NavVar'
import Habits from '@/components/Habits'
import Tasks from '@/components/Tasks'
import CreateNewHabit from '@/components/CreateNewHabit'
import EveryHabit from '@/components/EveryHabit'
import EditHabit from '@/components/EditHabit'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home/task/:id',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/home/habit/:id',
      name: 'Habits',
      component: Habits
    },
    {
      path: '/everyHabit',
      name: 'EveryHabit',
      component: EveryHabit
    },
    {
      path: '/home/habit/editHabit/:id/:idHabit',
      name: 'EditHabit',
      component: EditHabit
    },
    {
      path: '/home/habit/createNewHabit/:id',
      name: 'CreateNewHabit',
      component: CreateNewHabit
    },
    {
      path: '/home/:id',
      name: 'Home',
      component: Home
    }
    
  ]
})

export default router
