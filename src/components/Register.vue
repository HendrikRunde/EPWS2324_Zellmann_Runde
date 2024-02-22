<template>
    <div class="container" style="padding-top: 30px;">
        <h3>Registrierung für Finanzratgeber</h3>
        <h4>Um Sie bestmöglich zu beraten, brauchen wir einige Angaben von Ihnen:</h4>
        <div class="container" style="padding-top: 50px;">
            <div class="row">
                <div class="col-3">Vorname: </div>
                <div class="col-6"> <input type="text" class="form-control" id="vorname"
                        placeholder="Vorname eingeben" v-model="inputData.vorname"></div>

            </div>
            <div class="row">
                <div class="col-3">Nachname: </div>
                <div class="col-6"> <input type="text" class="form-control" id="vorname"
                        placeholder="Nachname eingeben" v-model="inputData.nachname"></div>

            </div>
            <div class="row">
                <div class="col-3">Alter: </div>
                <div class="col-6"> <input type="text" class="form-control" id="alter"
                        placeholder="Alter eingeben" v-model="inputData.alter"></div>

            </div>  
            <div class="row">
                <div class="col-3">Aktuelles Semester: </div>
                <div class="col-6"> <input type="text" class="form-control" id="semester"
                        placeholder="Aktuelles Semester eingeben" v-model="inputData.aktuellesSemester"></div>
            </div>    
            <div class="row" style="padding-top: 15px;">
                <h4>Fügen Sie die Einnahmequellen hinzu:</h4>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="form-group" v-for="(item, index, key) in inputData.einnahmeQuellen" :key="item">
                        <div class="row" v-if="item">
                            <div class="col-8" style="padding-right: 0;">
                                <input type="text" class="form-control" id="name"
                                    placeholder="Job-Bezeichnung" v-model="inputData.einnahmeQuellen[index].name">
                            </div>
                            <div class="col-2 text-end"  style="padding-right: 0;">
                                <input type="text" class="form-control" id="value" placeholder="Wert"
                                    v-model="inputData.einnahmeQuellen[index].value">
                            </div>
                            <div class="col-2 text-end">
                                <button type="button" class="btn btn-secondary btn-sm" style="margin-right: 3px;"
                                    @click="addEinnahmeQuelle(index)">
                                    +
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm" @click="removeEinnahmeQuelle(index)">
                                    -
                                </button>

                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>                  
        </div>

        <div class="row" style="padding-top: 50px;">
            <div class="col-3"></div>
            <div class="col-6">
                <p class="text-end">
                    <button class="btn btn-secondary" @click="cancel" style="margin-right: 5px;">Abbrechen</button>
                    <button class="btn btn-primary" @click="register" :disabled="!formValid">Registrierung abschliessen</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted, computed, ref } from 'vue'

const inputData = reactive({
    vorname: '',
    nachname: '',
    alter: 18,
    aktuellesSemester: 3,
    einnahmeQuellen: [
        {
            id: 1,
            name: 'Werkstudent',
            value: 0
        }
    ],
    ausgaben: [

    ]
})

const formValid = computed(
    ()=>{
        return inputData.vorname.length>0 && inputData.nachname.length>0
    }
)

function addEinnahmeQuelle(index) {
    inputData.einnahmeQuellen.push({ id: new Date().getTime(), name: '', value: 0 })
}

function removeEinnahmeQuelle(index){
    delete inputData.einnahmeQuellen[index];
}

const props = defineProps({
    register: {
        type: Function
    },
    cancel: {
        type: Function
    },    
})


function register() {
    alert('close register!')
    props.register(inputData)
}

function cancel() {
    alert('cancel register!')
    props.cancel()
}

</script>