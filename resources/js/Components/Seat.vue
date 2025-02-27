<template>
    <div @dblclick="handleClick"
    class="relative w-16 h-16 animate-fadeIn p-0.5 cursor-pointer group hover:border-white flex justify-center items-center 
    rounded-2xl border-2 border-blue-500/10 transition-all duration-300 ease-in-out">
        <div ref="statusBadge" class="absolute justify-center items-center
        w-6 h-6 rounded-full -top-3 -left-3 transition-all 
        duration-300 ease-in-out"
        :class="[badgeColor, display]">
            <Icon :icon="icon" width="12" height="12" class="text-white" />
        </div>
        <div class="w-14 h-14 rounded-xl inline-flex justify-center items-center text-center" :class="seatColor">
            <span class="text-white text-xl group-hover:text-2xl group-hover:text-white select-none
            transition-all duration-300 ease-in-out">
                A{{ title }}
            </span>
        </div>
                
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String
        },
        icon:{  
            type: String,
            default: 'eos-icons:bubble-loading'
        },
        badgeColor: {
            type: String,
            default: 'bg-orange-600 hidden'
        },
        display: {
            type: String,
            default: 'flex group-hover:flex'
        },
        seatColor:{
            type: String,
        }
    },
    methods: {
    handleClick(event) {
      this.$emit("book-seat"); // Emit event ke parent
      
    },
  },
}
</script>