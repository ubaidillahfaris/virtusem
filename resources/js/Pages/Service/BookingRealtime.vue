<template>
<div ref="seatContainer" class="grid grid-flow-row grid-cols-4 gap-12 w-fit justify-start">
    <Seat v-for="(seat, index) in seats" :key="index" :title="seat.title" :icon="seat.icon"
        :badgeColor="seat.badgeColor" :seat-color="seat.seatColor" @book-seat="bookingHandler(index)" />
</div>
</template>

<script>
import Seat from "@/Components/Seat.vue";

export default {
    components: { Seat },
    data() {
        return {
            seats: [],
        };
    },
    mounted() {
        setTimeout(() => {
            
            for (let i = 0; i < 16; i++) {
               setTimeout(() => {
                this.seats.push({
                    title: i + 1,
                    icon: "eos-icons:bubble-loading",
                    badgeColor: "bg-orange-600 hidden",
                    seatColor: "bg-green-500",
                })   
                
               }, (i + 1) * 200);
            }

        }, 900);;
    },
    methods: {
        bookingHandler(index) {
            const seat = this.seats[index]; // Ambil data kursi saat ini

            this.seats[index] = {
                ...seat, // Salin data sebelumnya
                icon: seat.icon === "mdi:check-bold" ? "eos-icons:bubble-loading" : "mdi:check-bold",
                badgeColor: seat.badgeColor === "bg-green-600 flex" ? "bg-orange-600 hidden" : "bg-green-600 flex",
                seatColor: seat.seatColor === "bg-gray-900" ? "bg-green-500" : "bg-gray-900",
            };

            // ✅ Pastikan Vue 3 mendeteksi perubahan
            this.seats = [...this.seats];
        }

    },

};
</script>