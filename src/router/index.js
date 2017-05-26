import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FormCenario from '@/components/planejamento/FormCenario'

export const routes = [
    { path: '', component: Hello, titulo: 'Hello' },
    { path: '/cenarios', component: FormCenario, titulo: 'FormCenario' }
];

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history'
})