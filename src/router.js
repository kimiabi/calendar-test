import Vue from 'vue'
import Router from 'vue-router'
import Calendar from './components/Calendar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Calendar }
    ]
})