import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FormCenario from '@/components/planejamento/FormCenario'
import ListaCenarios from '@/components/planejamento/ListaCenarios'

export const routes = [
    { path: '/cenarios', component: ListaCenarios, titulo: 'Cenários', name: 'lista' },
    { path: '/cenario', component: FormCenario, titulo: 'FormCenario', name: 'novo' },
    { path: '*', component: ListaCenarios, menu: false}
];

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history'
})