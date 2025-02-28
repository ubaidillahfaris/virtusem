<template>
<div class="w-full min-h-screen relative overflow-hidden flex justify-center items-start">
    <div class="absolute opacity-15 md:opacity-20 bg-accent w-96 h-80 -top-12 -left-48 blur-3xl rounded-full z-0"></div>
    <div class="absolute opacity-10 md:opacity-10 bg-accent w-96 h-80 bottom-10 -right-48 blur-3xl rounded-full z-0">
    </div>
    <div class="absolute group-hover:blur-sm transition duration-300 delay-75 
    ease-in-out top-0 z-0 object-cover opacity-20 w-full h-screen"
        :style="`background-image: url('storage/Line BG.svg');`" />

    <div v-if="loadedGunungan" class="w-full min-h-96 flex flex-col justify-center items-center space-y-6 mt-6">
        <transition enter-active-class="animate-fadeIn" leave-active-class="animate-fadeOut">
            <div v-if="showTitle"
                class="animate-slideYIn delay-300 duration-200 ease-in-out flex flex-row space-x-2 justify-center items-center w-full">
                <Stripe></Stripe>
                <p class="text-white">Digging deeper</p>
                <Stripe></Stripe>
            </div>
        </transition>
        <transition enter-active-class="animate-fadeIn" leave-active-class="animate-fadeOut">
            <div v-if="showSubTitle" class="w-full animate-slideYIn delay-300 duration-200 ease-in-out">
                <p class="text-4xl text-white text-center">
                    Our Services
                </p>
            </div>

        </transition>


        <div class="grid grid-cols-1 gap-12 p-6 w-full">

            <div class="relative z-20 grid grid-cols-1 md:grid-flow-row md:grid-cols-2 gap-6 w-full
            items-center">
                <div class="min-h-[400px] w-full flex justify-center">
                    <BookingRealtime></BookingRealtime>
                </div>
                <div class="min-h-64 w-full flex flex-col 
                items-start justify-center space-y-4 relative">
                    <p class="absolute top-0 
                        text-2xl text-white text-center w-full 
                        animate-slideYIn ease-in-out flex flex-row space-x-2 
                        justify-center items-center" v-if="realtimeAppSection.title">
                        Realtime App
                    </p>
                    <p class="absolute top-10 
                        text-lg animate-slideYIn delay-1200 duration-200 ease-in-out 
                        text-center" v-if="realtimeAppSection.subtitle">
                        <span class="text-accent">Don't Let Slow Systems </span>
                        <span class="text-white">Hold Your Business Back – Build a Real-Time Application Today!</span>
                    </p>

                    <p class="absolute top-36 sm:top-28 
                        animate-slideYIn delay-1200 duration-200 ease-in-out 
                        text-center text-white" v-if="realtimeAppSection.description">
                        Our real-time application development services ensure that your business stays ahead. Using
                        cutting-edge technologies like
                        <span class="text-accent"> WebSocket</span>, <span class="text-accent"> Firebase</span>, and
                        <span class="text-accent"> event-driven architectures</span>, we create ultra-fast, interactive
                        applications that keep users engaged and satisfied.

                    </p>
                </div>
            </div>



            <div class="relative mt-20 z-20 grid grid-cols-1 md:grid-flow-row md:grid-cols-2 gap-6 items-center w-full">

                <div class="min-h-64 w-full flex flex-col 
                items-start justify-center space-y-4 relative">
                    <p class="absolute top-0 
                        text-2xl text-white text-center w-full 
                        animate-slideYIn ease-in-out flex flex-row space-x-2 
                        justify-center items-center" v-if="systemInformationSection.title">
                        Information System
                    </p>
                    <p class="absolute top-10 
                        text-lg animate-slideYIn delay-1200 duration-200 ease-in-out 
                        text-center" v-if="systemInformationSection.subtitle">
                        <span class="text-accent">Stop Wasting Time </span>
                        <span class="text-white">with Inefficient Systems – Upgrade to a Smart Information System
                            Today!</span>
                    </p>

                    <p class="absolute top-36 sm:top-28 
                        animate-slideYIn delay-1200 duration-200 ease-in-out 
                        text-center text-white" v-if="systemInformationSection.description">
                        <span class="">
                            Outdated and disorganized business processes slow you down, waste resources, and frustrate
                            your team. If your current system relies on
                        </span>
                        <span class="text-accent">manual work</span>, <span class="text-accent">scattered data</span>,
                        or <span class="text-accent">constant errors</span>, you’re already falling behind.
                    </p>
                </div>

                <div class="mt-10">
                    <apexchart class="w-full" type="area" :options="chartOptions" :series="series"></apexchart>
                </div>

            </div>
            <Footer></Footer>
        </div>

    </div>

    <div ref="gununganContainer" class="absolute top-0 left-0 right-0 w-full min-h-screen">
        <div v-for="(image, index) in gununganImages" :key="index" 
            class="absolute top-0 w-[700px] h-[1200px] bg-cover z-0 transition-opacity duration-1000"
            :class="index === 0 ? '-left-[15vh] sm:left-[25vw] animate-moveToLeft' : '-right-[15vh] sm:right-[25vw] animate-moveToRight'"
            :style="`background-image: url('${image}')`">
        </div>
    </div>
    <!-- Objek Kiri -->
    <!-- <img src="storage/Gunungan.svg" 
        class="absolute top-0 w-[700px] h-[1200px] bg-cover z-0 animate-moveToLeft" 
        @load="loadedGunungan = true" 
        style="--translate-distance: 200px;"> -->

    <!-- Gunungan Kanan -->
    <!-- <img src="storage/Gunungan.svg" 
        class="absolute top-0 w-[700px] h-[1200px] bg-cover z-0 animate-moveToRight"
        @load="loadedGunungan = true" 
        style="--translate-distance: 200px;"> -->

</div>
</template>

<script>
import Navbar from '@/Components/Navbar.vue';
import App from '../App.vue';
import Stripe from '@/Components/Stripe.vue';
import Footer from '@/Components/Footer.vue';
import BookingRealtime from './BookingRealtime.vue';
import { useServiceChart } from '@/Store/ServiceChart';
export default {
    components: { Navbar, App, Stripe, Footer, BookingRealtime },
    setup() {
        const { chartOptions } = useServiceChart();

        const series = [{
            name: 'Sold',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
        }]
        return { chartOptions, series }
    },
    data() {
        return {
            showTitle: false,
            showSubTitle: false,
            realtimeAppSection: {
                title: false,
                subtitle: false,
                description: false
            },
            systemInformationSection: {
                title: false,
                subtitle: false,
                description: false
            },
            loadedGunungan: false,
            gununganImages: []
        }
    },
    mounted() {
        this.loadGunungan();

        if (this.loadedGunungan) {
            setTimeout(() => {
                setTimeout(() => { this.showTitle = true; }, 500);
                setTimeout(() => { this.showSubTitle = true; }, 550);

                Object.keys(this.realtimeAppSection).forEach((key, index) => {
                    setTimeout(() => {
                        this.realtimeAppSection[key] = true;
                    }, (index + 1) * 600)
                });

                Object.keys(this.systemInformationSection).forEach((key, index) => {
                    setTimeout(() => {
                        this.systemInformationSection[key] = true;
                    }, (index + 1) * 800);
                });
            }, 1000);
        }
    },
    methods: {
        loadGunungan() {
            const gununganSrc = 'storage/Gunungan.svg';

            const img1 = new Image();
            const img2 = new Image();
            img1.src = gununganSrc;
            img2.src = gununganSrc;

            let loadedCount = 0;
            const onLoadHandler = () => {
                loadedCount++;
                if (loadedCount === 2) {
                    this.gununganImages.push(gununganSrc, gununganSrc); // Masukkan ke array
                }
            };
            
            img1.onload = onLoadHandler;
            img2.onload = onLoadHandler;
            this.loadedGunungan = true;
        }
    },
}
</script>
