import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/scss/bootstrap.scss',
                'resources/scss/custom.scss',
                'resources/scss/icons.scss',
            ],
            refresh: true,
        }),
    ],
});
