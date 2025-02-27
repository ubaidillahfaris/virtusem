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
                moveToLeft: {
                    "0%": { transform: "translateX(0) scale(1.5) rotate(0deg)", opacity: "1" },
                    "50%": { transform: "translateX(var(--moveX-half)) translateY(var(--moveY)) scale(var(--scale-half)) rotate(7deg)", opacity: "0.7" },
                    "100%": { transform: "translateX(var(--moveX-full)) translateY(var(--moveY)) scale(var(--scale-full)) rotate(15deg)", opacity: "0.05" },
                },
                moveToRight: {
                    "0%": { transform: "translateX(0) scale(1.5) rotate(0deg)", opacity: "1" },
                    "50%": { transform: "translateX(calc(-1 * var(--moveX-half))) translateY(var(--moveY)) scale(var(--scale-half)) rotate(-7deg)", opacity: "0.7" },
                    "100%": { transform: "translateX(calc(-1 * var(--moveX-full))) translateY(var(--moveY)) scale(var(--scale-full)) rotate(-15deg)", opacity: "0.05" },
                },
                sparkle: {
                    "0%": { opacity: 0, transform: "scale(0.5) translateY(0px)" },
                    "50%": { opacity: 1, transform: "scale(1) translateY(-10px)" },
                    "100%": { opacity: 0, transform: "scale(0.8) translateY(-20px)" }
                },
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
                shake: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
                    "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
                },
            },
            animation: {
                moveToLeft: "moveToLeft 0.8s cubic-bezier(0.8, 0.0, 0.2, 1) forwards",
                moveToRight: "moveToRight 0.8s cubic-bezier(0.8, 0.0, 0.2, 1) forwards",
                sparkle: "sparkle 0.5s ease-out infinite",
                fadeIn: "fadeIn 0.3s ease-in-out",
                slideXIn: "slideXIn 0.5s ease-in-out forwards",
                slideXOut: "slideXOut 0.5s ease-in-out forwards",
                slideXRIn: "slideXRIn 0.5s ease-in-out forwards",
                slideXROut: "slideXROut 0.5s ease-in-out forwards",
                slideYIn: "slideYIn 0.5s ease-in-out forwards",
                slideYOut: "slideYOut 0.5s ease-in-out forwards",
                shake: "shake 0.5s ease-in-out",
            },
        },
    },

    plugins: [forms],
};
