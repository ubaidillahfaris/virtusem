<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    to: {
        type:Function
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-accent text-sm font-medium leading-5 text-white transition duration-150 ease-in-out'
        : `inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-accent
        text-sm font-medium 
        leading-5 text-white transition duration-150 ease-in-out`,
);
</script>

<template>
    <router-link :to="to"     :class="classes">
        <slot />
    </router-link>
</template>
