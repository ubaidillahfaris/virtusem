<template>
<div class="w-full min-h-screen relative overflow-hidden flex justify-center items-start">
    <div class="absolute opacity-15 md:opacity-20 bg-accent w-96 h-80 -top-12 -left-48 blur-3xl rounded-full z-0">
    </div>
    <div
        class="absolute opacity-10 md:opacity-10 bg-accent w-96 h-80 bottom-10 -right-48 blur-3xl rounded-full z-0">
    </div>
    <div class="absolute group-hover:blur-sm transition duration-300 delay-75 
ease-in-out top-0 z-0 object-cover opacity-20 w-full h-screen"
        :style="`background-image: url('storage/Line BG.svg');`" />

        <div class="grid grid-cols-1 gap-6 w-full justify-center items-center">

            <div class="z-10 w-full flex flex-row justify-center items-center p-6 space-x-6">
                <Icon icon="game-icons:squid" width="100" height="100" class="text-white"></Icon>
                <div class="flex flex-col space-y-2">
                    <p class="text-white text-5xl font-semibold">Error</p>
                <p class="text-white text-sm">Your Page Not Found or Deleted</p>
                </div>
            </div>
    
            <div class="flex flex-row justify-center z-10">
                <router-link to="/">
                    <button class="z-10 w-fit flex flex-row justify-center 
                    bg-accent
                    items-center px-3 py-2 rounded-full">
                        Return to home
                    </button>
                </router-link>
            </div>
        </div>
</div>
</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import App from './App.vue';
export default {
    components: { App,Navbar }
}
</script>