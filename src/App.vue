<script setup>
import { reactive, ref, computed, watch } from 'vue';

import UserFinances from './components/UserFinances.vue'
import EinnahmeQuellen from './components/EinnahmeQuellen.vue'
import AusgabenKategorien from './components/AusgabenKategorien.vue'
import Prognose from './components/Prognose.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const showLogin = ref(true)
const showUI = ref(false)
const showRegister = ref(false)

const guthabenZuJahresBegin = ref(1000)
const zinssatz = ref(3)
const einzahlungen = ref(0)
const zinsgutschriften = ref(0)
const erziehlterKapital = ref(0)

const loggedUser = reactive({
  data: {}
})

const dataFinances = reactive({
  einnahmen: undefined,
  ausgaben: undefined
})

const einsparpotenzial = computed(() => {
  return dataFinances.einnahmen - dataFinances.ausgaben
})

watch(einsparpotenzial, (newValue, oldValue) => {
  //alert('computedProperty was ' + oldValue + '. Now it is ' + newValue + '.')
  calculatePrognose()
})

//
watch(loggedUser, (newValue, oldValue) => {
  //alert('computedProperty was ' + oldValue + '. Now it is ' + newValue + '.')
  calculatePrognose()
})



watch(guthabenZuJahresBegin, (newValue, oldValue) => {
  //alert('computedProperty was ' + oldValue + '. Now it is ' + newValue + '.')
  if (newValue > 0) {
    calculatePrognose()
  }
})


const dataEinnahmeQuellen = ref([
  { id: 1, name: 'Werkstudent', value: 1000 }
])

function changedEinnahmeQuellen(data) {
  console.log('changed eq', data)
  dataEinnahmeQuellen.value = data // JSON.parse(JSON.stringify(data))
  let summe = parseInt(0)
  dataEinnahmeQuellen.value.forEach(element => {
    if (element) {
      summe += parseInt(element.value)
    }
  })
  dataFinances.einnahmen = summe
}

let dataPrognose = reactive({
  labels: [],
  datasets: []
  // {
  //   label: '',
  //   data: [65, 59, 80, 81, 56, 55, 40],
  //   fill: true,
  //   borderColor: 'rgb(75, 192, 192)',
  //   tension: 0.5
  // }
})

const countYears = computed(() => {
  return 67 - loggedUser.data.alter
})

const yearsLabels = computed(() => {
  let l = []
  for (let i = 1; i < countYears.value; i++) {
    l.push(i < 10 ? '0' + i : '' + i)
  }
  return l
})


const optionsPrognose = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#fff',
      },
    },
    title: {
      display: true,
      text: ''
    }
  }
})

function logOn(data) {
  showLogin.value = false
  showUI.value = true
  setUserData(data)
}

function afterRegister(inputData) {
  showLogin.value = false
  showUI.value = true
  showRegister.value = false

  //console.log('after-register', inputData)
  setUserData(inputData);
}

function setUserData(inputData) {
  loggedUser.data = JSON.parse(JSON.stringify(inputData));
  changedEinnahmeQuellen(loggedUser.data.einnahmeQuellen);
  dataFinances.ausgaben = loggedUser.data.ausgaben;
  console.log('years', yearsLabels.value);
  //datasets für Prognosen berechnen
  calculatePrognose();
}

function calculatePrognose() {

  dataPrognose = {
    labels: [],
    datasets: []
  }

  dataPrognose.labels = yearsLabels.value;
  dataPrognose.datasets = [];
  let d = getPrognose(3);
  dataPrognose.datasets.push(d);
  //MSCI World 8,65%
  //S&P500 10,21%
  //DAX 8,97% 
  if (loggedUser.data.dynamic.risikoAnlagen) {
    let m = getPrognose(8.65);
    dataPrognose.datasets.push(m);

    let s = getPrognose(10.21);
    dataPrognose.datasets.push(s);

    let dax = getPrognose(8.97);
    dataPrognose.datasets.push(dax);
  }

  if (loggedUser.data.finanzZiel != undefined && parseInt(loggedUser.data.finanzZiel)) {
    let d = getFinanzZieleDataSorce(loggedUser.data.finanzZiel);
    dataPrognose.datasets.push(d);
  }
}

function getBorderColorZuZins(zins) {
  let color = 'rgb(75, 192, 192)'
  switch (zins) {
    case 3:
      color = 'rgb(75, 192, 192)'
      break
    case 8.65:
      color = 'rgb(225,225,25)'
      break
    case 10.21:
      color = 'rgb(0,0,128)'
      break
    case 8.97:
      color = 'rgb(128,0,0)'
      break
  }
  return color
}

function getPrognose(zins) {
  const years = countYears.value
  const startKapital = parseInt(guthabenZuJahresBegin.value)
  const einsparPotenzial = einsparpotenzial.value

  let data = []
  let value = (startKapital + einsparPotenzial * 12)
  let zinsValue = (value * zins) / 100
  data.push(value + zinsValue)
  einzahlungen.value = value
  zinsgutschriften.value = zinsValue

  for (let i = 1; i < years; i++) {
    let last = data[i - 1]
    let value = last + (einsparPotenzial * 12)
    let zinsValue = (value * zins) / 100
    einzahlungen.value += (einsparPotenzial * 12)
    zinsgutschriften.value += zinsValue

    data.push(value + zinsValue)
  }

  erziehlterKapital.value = data[data.length - 1]

  let d = {
    label: 'Zinssatz ' + zins + '%',
    data: data,
    fill: true,
    borderColor: getBorderColorZuZins(zins), //'rgb(75, 192, 192)',
    tension: 0.5
  }
  console.log(d)
  return d
}

function getFinanzZieleDataSorce(ziel) {
  const years = countYears.value
  let data = []

  for (let i = 0; i < years; i++) {
    data.push(ziel)
  }

  let d = {
    label: 'Langfristiges finanzielles Ziel: ' + formatNumber(ziel) + '€',
    data: data,
    fill: true,
    borderColor: 'rgb(60, 180, 75)',
    tension: 0.5
  }
  console.log(d)
  return d
}

function makeRegister() {
  showLogin.value = false
  showRegister.value = true
}

function cancelRegister() {
  showLogin.value = true
  showUI.value = false
  showRegister.value = false
}

function changeCategories(data) {
  console.log('change categories', data)
  let summe = parseInt(0)
  data.forEach(element => {
    if (element && element.value && parseInt(element.value) > 0) {
      summe += parseInt(element.value)
    }
  })
  dataFinances.ausgaben = summe
}

function formatNumber(num) {
  return new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num)
}

</script>

<template>
  <Login v-if="showLogin" :logon="logOn" :register="makeRegister" />

  <Register :register="afterRegister" v-if="showRegister" :cancel="cancelRegister" />

  <div class="app-wrapper" v-if="showUI">
    <nav class="app-header navbar navbar-expand bg-body">
      <div class="container-fluid">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown user-menu"> <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle"></i> <span class="d-none d-md-inline">{{ loggedUser.data?.vorname }} {{
                loggedUser.data?.nachname }}</span> </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="app-main">
      <div class="app-content-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-8">
              <h3 class="mb-0">Finanzperspektive v2</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="app-content">
        <div class="container-fluid">
          <UserFinances :einnahmen="dataFinances.einnahmen" :ausgaben="dataFinances.ausgaben"
            :einsparpotenzial="einsparpotenzial" />

          <div class="row">
            <EinnahmeQuellen :data="dataEinnahmeQuellen" :dataChanged="changedEinnahmeQuellen"
              :cancel="changedEinnahmeQuellen" />
            <AusgabenKategorien :data="loggedUser.data.ausgabenKategorien" :ausgaben="dataFinances.ausgaben"
              :dataChanged="changeCategories" />
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-header">
                  <h5 class="card-title">Prognose</h5>
                  <div class="card-tools"></div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-9">
                      <p class="text-center"> <strong>Berechnung der Altersvorsorge</strong>
                      </p>
                      <Prognose :data="dataPrognose" :options="optionsPrognose" />
                    </div>
                    <div class="col-md-3">
                      <p class="text-center"> <strong>Kenndaten</strong> </p>
                      <div class="progress-group" style="">
                        Anfangskapital
                        <span class="">
                          <input type="text" class="form-control float-end right" id="name" placeholder="Wert"
                            style="width:100px" v-model="guthabenZuJahresBegin">
                        </span>
                      </div>
                      <div class="progress-group">
                        Sparrate
                        <span class="float-end"><b>{{ einsparpotenzial }} €</b></span>
                      </div>
                      <div class="progress-group"> <span class="progress-text">Sparintervall</span> <span
                          class="float-end"><b>monatlich</b></span>
                      </div>
                      <div class="progress-group">
                        Zinssatz
                        <span class="float-end"><b>3%</b></span>
                      </div>
                      <div class="progress-group">
                        Ansparzeit
                        <span class="float-end"><b>{{ countYears }} Jahre</b></span>
                      </div>
                      <hr>
                      <div class="progress-group">
                        Weitere Meilensteine miteinbeziehen
                        <div class="col">
                          <div class="form-group">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox"
                                v-model="loggedUser.data.dynamic.risikoAnlagen">
                              <label class="form-check-label">Investments in Aktien, Fonds, ETF's</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" v-model="loggedUser.data.dynamic.job">
                              <label class="form-check-label">Berufstätigkeit (Feste Anstellung oder Selbständigkeit nach
                                ca. 10 Jahren)</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" v-model="loggedUser.data.dynamic.family">
                              <label class="form-check-label">Familienplanung (Heirat & Kinder nach ca. 15 Jahren)</label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" v-model="loggedUser.data.dynamic.immobilie">
                              <label class="form-check-label">Immobilienkauf (nach ca. 20 Jahren)</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-3 col-6">
                      <div class="text-center border-end"> <span class="text-success"> <i class="bi bi-caret-up-fill"></i>
                          {{ zinssatz }}%
                        </span>
                        <h5 class="fw-bold mb-0 text-info">{{ formatNumber(guthabenZuJahresBegin) }} €</h5> <span
                          class="text-uppercase">Guthaben zu
                          Jahresbeginn</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="text-center border-end"> <span class="text-info"> &nbsp; </span>
                        <h5 class="fw-bold mb-0 text-danger">{{ formatNumber(einzahlungen) }} €</h5> <span
                          class="text-uppercase">Einzahlungen</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="text-center border-end"> <span class="text-success"> <i class="bi bi-caret-up-fill"></i>
                          {{ zinssatz }}% </span>
                        <h5 class="fw-bold mb-0 text-warning">{{ formatNumber(zinsgutschriften) }}€</h5> <span
                          class="text-uppercase">Zins-
                          gutschriften</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="text-center"> <span class="text-danger"> &nbsp; </span>
                        <h5 class="fw-bold mb-0 text-success">{{ formatNumber(erziehlterKapital) }}€</h5> <span
                          class="text-uppercase">Das erzielte
                          Endkapital inkl. Zinsen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.progress-group {
  margin-bottom: 0.9rem;
}

    
.right { text-align: right; } 
</style>