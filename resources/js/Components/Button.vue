<template>
    <button type="button"
    :class="{
        'bg-darkBackground hover:bg-accent text-white' : type === 'dark',
        'bg-white hover:bg-gray-300 text-darkBackground' : type === 'white',
        'bg-accent hover:bg-gray-300 text-darkBackground' : type === 'accent',
    }"
    class="rounded-full uppercase px-7 py-3 transition delay-75 duration-100 ease-in-out">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'dark',
        }
    }
}
</script>