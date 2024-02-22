<template>
    <div class="col-12 col-md-6">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="card-title">Ausgabenkategorien</h3>
                <div class="card-tools"> </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-8">
                        <!-- <div id="pie-chart"></div> -->
                        <Doughnut :data="doughnutData" :options="chartOptions"></Doughnut>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const doughnutData = reactive({
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
})

const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: '#fff',
            },
            position: 'right'
        }
    }
})

</script>