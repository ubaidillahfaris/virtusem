import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import gradients from 'tailwindcss-gradients';


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                'mainBackground': '#151414',
                'darkBackground': '#1E1E21',
                'accent': '#1FD372',
                'greyBackground': '#929292',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideXIn: {
                    "0%": { transform: "translateX(-20px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideXRIn: {
                    "0%": { transform: "translateX(20px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideXOut: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(-20px)", opacity: "0" },
                },
                slideXROut: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(20px)", opacity: "0" },
                },
                slideYIn: {
                    "0%": { transform: "translateY(10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideYOut: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(10px)", opacity: "0" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
                
                slideXIn: "slideXIn 0.5s ease-in-out forwards",
                slideXOut: "slideXOut 0.5s ease-in-out forwards",
                slideXRIn: "slideXRIn 0.5s ease-in-out forwards",
                slideXROut: "slideXROut 0.5s ease-in-out forwards",
                
                
                slideYIn: "slideYIn 0.5s ease-in-out forwards",
                slideYOut: "slideYOut 0.5s ease-in-out forwards",
            },
        },
    },

    plugins: [forms],
};
