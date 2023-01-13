import Vue from 'vue';
import VueRouter from "vue-router";
import Container from "../components/Container.vue"
Vue.use(VueRouter);
const routes = [
    {
        path: '/multi-step',
        name: 'multiStepForm',
        component: Container
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;