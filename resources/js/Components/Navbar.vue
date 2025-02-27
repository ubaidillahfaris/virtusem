<template>
    <nav class="w-full flex items-center justify-between p-6 bg-mainBackground text-white">
        <!-- Logo -->
        <h1 class="text-2xl uppercase font-bold bg-gradient-to-r from-[#FFFFFF] to-[#767585] bg-clip-text text-transparent">
            {{ appName }}
        </h1>

        <!-- Desktop Menu -->
        <div class="hidden md:flex flex-row space-x-6 uppercase">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
        </div>

        <!-- Button -->
        <div class="hidden md:block">
            <!-- <Button>Subscribe</Button> -->
        </div>

        <!-- Burger Menu (Mobile) -->
        <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>

        <!-- Mobile Menu -->
        <transition enter-active-class="transform transition duration-300 ease-in-out "
                    leave-active-class="transform transition duration-300 ease-in-out opacity-0">
            <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full z-50
             bg-mainBackground text-white p-6 flex flex-col space-y-4 md:hidden">
             <NavLink @click="toggleMenu" to="/">Home</NavLink>
             <NavLink @click="toggleMenu" to="/service">Service</NavLink>
            <!-- <Button >Subscribe</Button> -->
            </div>
        </transition>
    </nav>
</template>

<script>
import { usePage } from "@inertiajs/vue3";
import Button from "./Button.vue";
import NavLink from "./NavLink.vue";

export default {
    components: { Button, NavLink },
    data() {
        return {
            appName: usePage().props.appName,
            isMenuOpen: false, // State untuk menu mobile
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
/* Styling tambahan untuk transition */
</style>
