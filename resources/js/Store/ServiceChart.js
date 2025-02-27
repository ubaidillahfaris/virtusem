import { ref } from "vue";
import { defineStore } from "pinia";

export const useServiceChart = defineStore("ServiceChart", () => {
    const chartOptions = ref({
        chart: {
            id: "vuechart-example",
        },
        stroke: {
            curve: "smooth",
        },
        grid: {
            show: true,
            borderColor: '#636668',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            row: {
                colors: undefined,
                opacity: 0.5
            },
            column: {
                colors: undefined,
                opacity: 0.5
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        fill: {
            colors: ['#1FD372', '#1FD372', '#1FD372'],
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.2,
                gradientToColors: ["#1FD372"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 80],
                colorStops: []
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
    })
    

    return {
        chartOptions,
    }
});
