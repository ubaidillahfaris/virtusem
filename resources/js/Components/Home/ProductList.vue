<template>
<div class="grid grid-cols-1 gap-6 w-full">

    <!-- title -->
    <transition enter-active-class="animate-fadeIn" leave-active-class="animate-fadeOut">
        <div v-if="showTitle" class="animate-slideYIn delay-300 duration-200 ease-in-out flex flex-row space-x-2 justify-center items-center w-full">
            <Stripe></Stripe>
            <p class="text-white">Why Choose Us</p>
            <Stripe></Stripe>
        </div>
    </transition>

    <!-- sub title -->
    <transition enter-active-class="animate-fadeIn" leave-active-class="animate-fadeOut">
        <div v-if="showSubTitle" class="w-full animate-slideYIn delay-300 duration-200 ease-in-out">
            <p class="text-4xl text-white text-center">
                Your Trusted Partner in
                <br> Digital Success
            </p>
        </div>
    </transition>

    <!-- card -->
    <div class="grid grid-cols-1 md:grid-flow-row md:grid-cols-3 gap-12 p-8 md:px-32 md:py-12 content-center items-start w-full">
        <transition enter-active-class="animate-slideYIn" leave-active-class="animate-slideYOut">
            <HomeCard title="Landing Page" v-if="showCard.card1">
                <p class="text-greyBackground text-center mt-8">We offer a professional website for your business. How
                    they
                    know you deeper than what they see now</p>
            </HomeCard>
        </transition>
        <transition enter-active-class="animate-slideYIn" leave-active-class="animate-slideYOut">
            <HomeCard title="Custom App" v-if="showCard.card2">
                <p class="text-greyBackground text-center mt-8">Our system will always provide convenience and
                    efficiency
                    for your work. As far as what you want, we will provide it</p>
            </HomeCard>
        </transition>
        <transition enter-active-class="animate-slideYIn" leave-active-class="animate-slideYOut">
            <HomeCard title="Product Design" v-if="showCard.card3">
                <p class="text-greyBackground text-center mt-8">How our product displays make it easier for you to
                    interact
                    with the system created</p>
            </HomeCard>
        </transition>
    </div>
</div>
</template>

<script>
import HomeCard from '../Card/HomeCard.vue';
import Stripe from '../Stripe.vue';

export default {
    components: {
        Stripe, HomeCard
    },

    data() {
        return {
            showTitle: false,
            showSubTitle: false,
            showCard: {
                card1: false,
                card2: false,
                card3: false
            }
        }
    },
    mounted() {
        this.renderAnimation()
    },
    methods: {
        renderAnimation() {
            setTimeout(() => { this.showTitle = true; }, 50);
            setTimeout(() => { this.showSubTitle = true; }, 150);
            setTimeout(() => { this.showCard.card1 = true; }, 300);
            setTimeout(() => { this.showCard.card2 = true; }, 600);
            setTimeout(() => { this.showCard.card3 = true; }, 900);
        }
    },

}
</script>