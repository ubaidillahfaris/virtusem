<template>
    <div class="border border-accent space-y-4 p-3 mx-1 mb-2 rounded-lg">
        <div class="w-full bg-darkBackground p-12 rounded-sm space-y-4">
            <div class="flex flex-row space-x-1 text-center sm:space-x-2 justify-center items-center text-white">
                <Stripe></Stripe>
                <p>Available For New Project</p>
                <Stripe></Stripe>
            </div>
            <p class="text-2xl sm:text-5xl p-2 bg-gradient-to-r from-[#FFFFFF] to-[#767585] 
            bg-clip-text text-transparent text-center">
                Interested in Working Together?
            </p>

            <p class="text-center text-white">We would love to connect with you</p>


            <div class="w-full flex justify-center">
                <Button type="accent">
                    Schedule a Call
                </Button>
            </div>
        </div>
        <div class="flex flex-row space-x-4 text-white justify-center">
            <p>Kediri, East Java, Indonesia</p>
            <p>64121</p>
            <p>@{{ year}} Virtusem.id</p>
        </div>
    </div>
</template>

<script>
import { usePage } from '@inertiajs/vue3';
import moment from 'moment';
import Stripe from './Stripe.vue';
import Button from './Button.vue';

export default {
    name: "Footer",
    components:{
        Stripe,Button
    },
    data() {
        return {
            appName: usePage().props.appName,
            year: moment().format('YYYY')
        }
    }
}
</script>