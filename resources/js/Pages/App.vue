<template>
<Navbar></Navbar>
<router-view v-slot="{ Component }">
    <component :is="Component" />
</router-view>
</template>

<script>
import Navbar from '@/Components/Navbar.vue';

export default {
    components: { Navbar }
}
</script>