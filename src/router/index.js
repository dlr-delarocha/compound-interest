import Vue from 'vue'
import VueRouter from 'vue-router'
import CompoundInterestForm from "../views/compound-interest/CompoundInterestForm";
// import Home from "../views/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {title: 'Inicio - Omar Educación Financiera'},
    beforeEnter() {location.href = 'https://omareducacionfinanciera.com/blog'}
  },
  {
    path: '/',
    name: 'compoundInterest',
    component: CompoundInterestForm,
    meta: {title: 'Interés Compuesto - Omar Educación Financiera'}
  }

]

const router = new VueRouter({
  routes
})

//define title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
