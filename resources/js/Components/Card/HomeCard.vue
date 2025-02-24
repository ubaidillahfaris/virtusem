<template>
    <div class="relative flex flex-col justify-center items-center group hover:scale-105 transition ease-in-out duration-150 delay-100 cursor-pointer">
        <div class="bg-white p-4 absolute -top-8 rounded-full transition-transform duration-300 ease-in-out group-hover:rotate-45">
            <img src="/storage/Star.svg" alt="Laravel Logo" 
            class="w-7 h-7 transition-transform duration-300 ease-in-out">
        </div>
        <div class="bg-mainBackground border border-gray-500 border-opacity-30 w-full px-6 py-12 rounded-lg 
        group-hover:bg-darkBackground transition-colors duration-300">
            <p class="text-center text-white text-xl group-hover:text-accent">{{ title }}</p>
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: "HomeCard",
    props: {
        title: {
            type: String,
            default: 'Home Card'
        }
    }
}
</script>