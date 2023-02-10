import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashBoard from '../views/Dashboard.vue'
import InfoCharacter from '../views/InfoCharacter.vue'
import PerfilUser from '../views/PerfilUser.vue'
import FavoriteCharacters from '../views/FavoriteCharacters.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/info/:id',
    name: 'InfoCharacter',
    component: InfoCharacter
  }
  ,
  {
    path: '/perfil',
    name: 'PerfilUser',
    component: PerfilUser
  },
  {
    path: '/favorites/:id',
    name: 'FavoriteCharacters',
    component: FavoriteCharacters
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
