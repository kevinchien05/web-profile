import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import ToastService from 'primevue/toastservice';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        },
    }
});
app.use(ToastService);
app.mount('#app');

