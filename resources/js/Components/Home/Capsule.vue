<template>
    <div class=" w-80 space-y-4 h-16 md:h-24 hover:scale-105 transition ease-in-out flex justify-center items-center rounded-full overflow-hidden bg-cover" :style="`background-image: url('${imageLink}');`">
        <p class=" left-0 right-0 text-center text-white font-bold text-lg">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: "Capsule",
    props: {
        imageLink: {
            type: String,
        },
        text: {
            type: String,
            default: 'Capsule'
        }
    }
}
</script>