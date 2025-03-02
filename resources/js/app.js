import '../css/app.css';
import '../css/custom.css'
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import onScroll from "./onScroll";
import router from './router';
import { Icon } from '@iconify/vue';
import VueApexCharts from 'vue3-apexcharts';
import { createPinia } from 'pinia';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const pinia = createPinia();
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(router)
            .use(pinia)
            .use(VueApexCharts)
            .component('Icon', Icon);

        app.directive("onscroll", onScroll);
        app.mount(el);
        return app
    },
    progress: {
        color: '#4B5563',
    },
});
