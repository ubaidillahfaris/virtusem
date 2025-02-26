<template>
<div class="w-full h-screen md:min-h-[80vh] grid grid-cols-1 md:grid-flow-row md:grid-cols-2 gap-6">
    <!-- left hero -->
    <div class="md:relative md:overflow-y-hidden">
        <div class="absolute opacity-15 md:opacity-20 bg-accent w-96 h-80 -top-12 -left-12 blur-3xl rounded-full z-0"></div>
        <div class="px-8 py-8 relative grid grid-cols-1 gap-6 z-30">

            <transition enter-active-class="animate-slideXIn" leave-active-class="animate-slideXOut">
                <div v-if="showAppName" class="grid grid-cols-1 gap-6">
                    <div class="flex flex-row space-x-2 items-center">
                        <Stripe></Stripe>
                        <span class="text-white">
                            {{ appName }}
                        </span>
                    </div>
                </div>
            </transition>



            <div class="space-y-2 md:space-y-8">

                <Transition enter-active-class="animate-slideXIn" leave-active-class="animate-slideXOut">
                    <p v-if="showAppDescription" class="text-lg md:text-5xl text-white">
                        Integrated Technology Solutions for the Future of Your Business
                    </p>
                </Transition>


                <!-- sub description -->
                <transition enter-active-class="animate-slideXIn" leave-active-class="animate-slideXOut">
                    <p class="text-greyBackground" v-if="showSubDescription">
                        We provide comprehensive digital solutions: attractive websites, innovative applications, and
                        reliable
                        systems to support your business. Our focus is on making technology easy to use, so your
                        business
                        can
                        grow
                        in the digital era
                    </p>
                </transition>
            </div>

            <transition enter-active-class="animate-slideYIn" leave-active-class="animate-slideYOut">
                <div v-if="showRegisterButton" class="flex flex-row justify-center md:justify-start">
                    <RouterLink to="/service">
                        <Button :type="'accent' ">
                            Our Services
                        </Button>
                    </RouterLink>
                </div>
            </transition>
        </div>
    </div>


    <!-- rigth hero -->
    <div class="relative md:overflow-hidden group">
        <div class="flex justify-end p-8 ">
            <div class="grid grid-cols-1 gap-6 max-sm:min-h-64 w-[32rem] z-20">

                <transition enter-active-class="animate-slideXRIn" leave-active-class="animate-slideXROut">
                    <div class="flex justify-center md:justify-end" v-if="showCapsule.capsule1">
                        <Capsule
                            text="Initializing"
                            image-link="https://plus.unsplash.com/premium_photo-1682339458664-ca534cd881d5?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                        </Capsule>
                    </div>
                </transition>


                <transition enter-active-class="animate-slideXIn" leave-active-class="animate-slideXOut">
                    <div v-if="showCapsule.capsule2" class="flex justify-center md:justify-start">
                        <Capsule
                            text="Designing"
                            image-link="https://images.unsplash.com/photo-1709995904988-4a9fd416c5a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D">
                        </Capsule>
                    </div>
                </transition>

                
                <transition enter-active-class="animate-slideXRIn" leave-active-class="animate-slideXROut">
                    <div class="flex justify-center md:justify-end"  v-if="showCapsule.capsule3">
                        <Capsule
                            text="Developing & Deploying"
                            image-link="https://images.unsplash.com/photo-1570701123784-2d41777f5e93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVuc3BhbHNofGVufDB8fDB8fHww">
                        </Capsule>
                    </div>
                </transition>
            </div>
        </div>
        <div class="absolute group-hover:blur-sm transition duration-300 delay-75 ease-in-out top-0 z-0 object-cover opacity-40 w-full h-full"
            :style="`background-image: url('storage/Line BG.svg');`" />
    </div>



</div>
</template>
<script>
import { usePage } from '@inertiajs/vue3';
import Button from '../Button.vue';
import Capsule from './Capsule.vue';
import Stripe from '../Stripe.vue';

export default {
    components: {
        Button, Capsule, Stripe
    },
    data() {
        return {
            appName: usePage().props.appName,
            showAppName: false,
            showAppDescription: false,
            showSubDescription: false,
            showRegisterButton: false,
            showCapsule: {
                capsule1: false,
                capsule2: false,
                capsule3: false,
            }
        }
    },
    mounted() {
        this.renderAnimation()
    },
    unmounted() {
        this.leaveAnimation();
    },
    methods: {
        renderAnimation() {
            setTimeout(() => { this.showAppName = true; }, 50);
            setTimeout(() => { this.showAppDescription = true; }, 150);
            setTimeout(() => { this.showSubDescription = true; }, 300);
            setTimeout(() => { this.showRegisterButton = true; }, 600);

            Object.keys(this.showCapsule).forEach((key, index) => {
                setTimeout(() => {
                    this.showCapsule[key] = true;
                }, (index + 1) * 500);
            });
        },
        leaveAnimation() {
            setTimeout(() => { this.showAppName = false; }, 50);
            setTimeout(() => { this.showAppDescription = false; }, 50);
            setTimeout(() => { this.showSubDescription = false; }, 50);
            setTimeout(() => { this.showRegisterButton = false; }, 50);

            Object.keys(this.showCapsule).forEach((key, index) => {
                setTimeout(() => {
                    this.showCapsule[key] = false;
                },200);
            });
        }
    },
}
</script>
