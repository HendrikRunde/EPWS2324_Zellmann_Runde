<template>
    <div class="col-12 col-md-6">
        <div class="card mb-4">
            <div class="card-header">
                <h3 class="card-title">Ausgabenkategorien</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" title="Ausgabenkategorien bearbein" @click="edit">
                        <i class="bi bi-pencil"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="row" v-if="!editMode">
                    <div class="col-6">
                        <Doughnut :data="doughnutData" :options="chartOptions"></Doughnut>
                    </div>
                    <div class="col-6">
                    </div>
                </div>
            </div>
            <div class="card-body" v-if="editMode">
                <div class="row" v-for="(item, index, key) in inputData" :key="item">
                    <div class="col-3">{{ item.name }}</div>
                    <div class="col-3">
                        <input type="text" class="form-control" id="value" placeholder="Wert" v-model="item.value">
                    </div>
                </div>
                <div class="row" style="padding-top: 20px;">
                    <div class="col-6 text-center">
                        <button class="btn btn-secondary" @click="cancelEdit">Abbrechen</button>
                        <button class="btn btn-primary" @click="applyChanges">Übernehmen</button>
                    </div>
                </div>
            </div>
            <div class="alert alert-info" style="margin: 50px;">
                <h5><i class="bi bi-info-circle-fill"></i> Goldene Finanzierungsregel (optionaler Richtwert)</h5>
                <ul>
                    <li>50% für Fixkosten, wie Miete, Nebenkosten und Versicherungen</li>
                    <li>30% für die Freizeitgestaltung, wie Hobbies, Sport, Kleidung oder Ausgehen</li>
                    <li>20% für das Sparen</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
    data: {
        type: Array,
        required: true,
        default: () => []
    },
    ausgaben: {
        type: Number,
        required: true,
    },
    dataChanged: {
        type: Function
    },
    cancel: {
        type: Function
    }
})

const editMode = ref(false)

const inputData = ref([])

const labels = computed(() => {
    let l = []
    props.data.forEach(element => {
        if (element) {
            if (parseInt(element.value) > 0) {
                l.push(element.name + ':' + element.value)
            }
        }
    })

    if (l.length == 0) {
        l.push('Keine Kategorie:' + props.ausgaben)
    }
    return l
})

const kategorien = computed(() => {
    let l = []
    props.data.forEach(element => {
        if (element) {
            if (parseInt(element.value) > 0) {
                l.push(element.value)
            }
        }
    })

    if (l.length == 0) {
        l.push(props.ausgaben)
    }
    return l

})

const doughnutData = reactive({
    labels: labels,
    datasets: [{
        label: '',
        data: kategorien,
        backgroundColor: [
            'rgb(0, 130, 200)',
            'rgb(128, 0, 0)',
            'rgb(170, 110, 40)',
            'rgb(128, 128, 0)',
            'rgb(0, 128, 128)',
            'rgb(0, 0, 128)',
            'rgb(60,180,75)',
            'rgb(250, 75, 75)',
            'rgb(245, 130, 48)',
            'rgb(210, 245, 60)',

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

function cancelEdit() {
    editMode.value = false
}

function applyChanges() {
    props.dataChanged(inputData.value)
    editMode.value = false
}

function edit() {
    inputData.value = props.data
    editMode.value = true
}


</script>