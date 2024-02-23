<template>
    <div class="container" style="padding-top: 30px;">
        <h2>Finanzperspektive</h2>
        <h3>Neuregistrierung</h3>
        <h4>Um Sie bestmöglichst beraten zu können, benötigen wir einige Angaben von Ihnen:</h4>
        <div class="container" style="padding-top: 50px;">
            <div class="row">
                <div class="col-3">Vorname* </div>
                <div class="col-6"> <input type="text" class="form-control" id="vorname" placeholder="Vorname eingeben"
                        v-model="inputData.vorname"></div>

            </div>
            <div class="row">
                <div class="col-3">Nachname* </div>
                <div class="col-6"> <input type="text" class="form-control" id="vorname" placeholder="Nachname eingeben"
                        v-model="inputData.nachname"></div>

            </div>
            <div class="row">
                <div class="col-3">E-Mail* </div>
                <div class="col-6"> <input type="text" class="form-control" id="email" placeholder="E-Mail eingeben"
                        v-model="inputData.email"></div>

            </div>
            <div class="row">
                <div class="col-3">Passwort* </div>
                <div class="col-6"> <input type="password" class="form-control  " :class="(passwordIsInValid?'is-invalid':'')" id="password" placeholder="Passwort eingeben"
                        v-model="inputData.passwort">
                        <span id="exampleInputPassword1-error" class="error invalid-feedback">Passwort muss mid. aus 8 Zechen bestehen, Groß-,Kleinbuchstaben und Zahlen beinhaltem</span>    
                </div>
                        
            </div>
            <div class="row">
                <div class="col-3">Alter* </div>
                <div class="col-6"> <input type="text" class="form-control" id="alter" placeholder="Alter eingeben"
                        v-model="inputData.alter"></div>

            </div>
            <div class="row">
                <div class="col-3">Aktuelles Semester</div>
                <div class="col-6"> <input type="text" class="form-control" id="semester"
                        placeholder="Aktuelles Semester eingeben" v-model="inputData.aktuellesSemester"></div>
            </div>
            <div class="row" style="padding-top: 15px;">
                <h5>Fügen Sie Ihre Einnahmequellen hinzu*</h5>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="form-group" v-for="(item, index, key) in inputData.einnahmeQuellen" :key="item">
                            <div class="row" v-if="item">
                                <div class="col-8" style="padding-right: 0;">
                                    <input type="text" class="form-control" id="name" placeholder="Berufsbezeichnung"
                                        v-model="inputData.einnahmeQuellen[index].name">
                                </div>
                                <div class="col-2 text-end" style="padding-right: 0;">
                                    <input type="text" class="form-control" id="value" placeholder="Wert"
                                        v-model="inputData.einnahmeQuellen[index].value">
                                </div>
                                <div class="col-2 text-end">
                                    <button type="button" class="btn btn-secondary btn-sm" style="margin-right: 3px;"
                                        @click="addEinnahmeQuelle(index)">
                                        +
                                    </button>
                                    <button type="button" class="btn btn-secondary btn-sm"
                                        @click="removeEinnahmeQuelle(index)" :disabled="eineEinzigeEinnahmeQuelle">
                                        -
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row" style="padding-top: 15px;">

                <div class="row">
                    <div class="col-3">Ausgaben*</div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="ausgaben" placeholder="Wert"
                            v-model="inputData.ausgaben">
                    </div>
                </div>
                <div class="row" style="padding-top: 15px;">
                    <div class="col-12">
                        <h5>Ordnen Sie Ihre Ausgaben zu den folgenden Ausgabenkategorien zu (optional)</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="form-group" v-for="(item, index, key) in inputData.ausgabenKategorien" :key="item">
                            <div class="row" v-if="item">
                                <div class="col-8" style="padding-right: 0;">
                                    <input type="text" class="form-control" id="name" placeholder="Kategorie-Bezeichnung"
                                        v-model="inputData.ausgabenKategorien[index].name">
                                </div>
                                <div class="col-2 text-end" style="padding-right: 0;">
                                    <input type="text" class="form-control" id="value" placeholder="Wert"
                                        v-model="inputData.ausgabenKategorien[index].value">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" style="padding-top: 15px;">
                <h4>Weitere Meilensteine miteinbeziehen</h4>
                <div class="col-sm-6">
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="inputData.dynamic.job">
                            <label class="form-check-label">Berufstätigkeit (Feste Anstellung oder Selbständigkeit nach ca. 10 Jahren)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  v-model="inputData.dynamic.family">
                            <label class="form-check-label">Familienplanung (Heirat & Kinder nach ca. 15 Jahren)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  v-model="inputData.dynamic.immobilie">
                            <label class="form-check-label">Immobilienkauf (nach ca. 20 Jahren)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"  v-model="inputData.dynamic.risikoAnlagen">
                            <label class="form-check-label">Investments in Aktien, Fonds, ETF's</label>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row" style="padding-top: 15px;">
                <div class="row">
                    <div class="col-3">Langfristiges finanzielles Ziel</div>
                    <div class="col-6">
                        <input type="text" class="form-control" id="ausgaben" placeholder="Wert eingeben (z.B 500.000€)"
                            v-model="inputData.finanzZiel">
                    </div>
                </div>
            </div>


        </div>



        <div class="row" style="padding-top: 50px;">
            <div class="col-12">Mit * sind die Pflichtfelder gekennzeichnet</div>
        </div>

        <div class="row" style="padding-top: 50px;">
            <div class="col-3"></div>
            <div class="col-6">
                <p class="text-end">
                    <button class="btn btn-secondary" @click="cancel" style="margin-right: 5px;">Abbrechen</button>
                    <button class="btn btn-primary" @click="register" :disabled="!formValid">Registrierung
                        abschliessen</button>
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
    email:'',
    alter: 18,
    aktuellesSemester: 3,
    passwort:'',
    finanzZiel:undefined,
    einnahmeQuellen: [
        {
            id: 1,
            name: 'Werkstudent',
            value: undefined
        }
    ],
    ausgaben: undefined,
    ausgabenKategorien: [
        {
            id: 1,
            name: 'Wohnen',
            value: undefined,
        },
        //"Wohnen", "Ernährung", "Gesundheit", "Studium", "Hobbies", "Reisen", "Keine Kategorie"
        {
            id: 2,
            name: 'Ernährung',
            value: undefined,
        },
        {
            id: 3,
            name: 'Gesundheit',
            value: undefined,
        },
        {
            id: 4,
            name: 'Studium',
            value: undefined,
        },
        {
            id: 5,
            name: 'Versicherungen',
            value: undefined,
        },
        {
            id: 6,
            name: 'Hobbies',
            value: undefined,
        },
        {
            id: 7,
            name: 'Reisen',
            value: undefined
        }

    ],
    dynamic: {
        job: true,
        family:false,
        immobilie:false,
        risikoAnlagen:false
    }
})

const eineEinzigeEinnahmeQuelle = computed(()=>
{
    console.log('eineEinzigeEinnahmeQuelle')
    return inputData.einnahmeQuellen.length==1
})

const eineEinzigeAusgabenKategorie = computed(()=>
{
    return inputData.ausgabenKategorien.length==1
})

const  passwordIsInValid = computed(()=> {
    let upperchars = Boolean(inputData.passwort.match(/[A-Z]/))
    let lowerchars = Boolean(inputData.passwort.match(/[a-z]/))
    let digitschars = Boolean(inputData.passwort.match(/[0-9]/))

    return inputData.passwort.length==0 ? false : inputData.passwort.length<8 || !upperchars || !lowerchars || !digitschars
})


const formValid = computed(
    () => {
        let foundAnyEinnahmeQuelle = inputData.einnahmeQuellen.length>0 && inputData.einnahmeQuellen.find(e=> e && e.name!='' && parseInt(e.value)>0)!=null
        console.log('formisvalid', foundAnyEinnahmeQuelle)
        return inputData.vorname.length > 0 
        &&  inputData.email.length > 0 
        && inputData.nachname.length > 0 
        && parseInt(inputData.ausgaben) > 0 
        && parseInt(inputData.alter) > 0 
        && inputData.passwort.length>5 && !passwordIsInValid.value
        && foundAnyEinnahmeQuelle 
    }
)

function addEinnahmeQuelle(index) {
    inputData.einnahmeQuellen.push({ id: new Date().getTime(), name: '', value: undefined })
}

function removeEinnahmeQuelle(index) {
    inputData.einnahmeQuellen.splice(index, 1);
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
    props.register(inputData)
}

function cancel() {
    //alert('cancel register!')
    props.cancel()
}

</script>