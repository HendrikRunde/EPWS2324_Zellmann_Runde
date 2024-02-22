<script setup>
import { reactive, ref, computed } from 'vue';

import UserFinances from './components/UserFinances.vue'
import EinnahmeQuellen from './components/EinnahmeQuellen.vue'
import AusgabenKategorien from './components/AusgabenKategorien.vue'
import Prognose from './components/Prognose.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

const showLogin = ref(true)
const showUI = ref(false)
const showRegister = ref(false)

const loggedUser = reactive({
  vorname: '',
  nachname: '',
  alter: 0,
  aktuellesSemester: 0,
})

const dataFinances = reactive({
  einnahmen: 1400,
  ausgaben: 1115
})

const einsparpotenzial = computed(() => {
  return dataFinances.einnahmen - dataFinances.ausgaben
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


const dataPrognose = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5
    }

  ]
})

const optionsPrognose = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
})


function logOn() {
  showLogin.value = false
  showUI.value = true
}

function afterRegister(inputData) {
  showLogin.value = false
  showUI.value = true
  showRegister.value = false
  loggedUser.vorname = inputData.vorname
  loggedUser.nachname = inputData.nachname
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

</script>

<template>
  <Login v-if="showLogin" :logon="logOn" :register="makeRegister" />

  <Register :register="afterRegister" v-if="showRegister" :cancel="cancelRegister" />

  <div class="app-wrapper" v-if="showUI">
    <nav class="app-header navbar navbar-expand bg-body">
      <div class="container-fluid">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"> <a class="nav-link" href="#" data-lte-toggle="fullscreen"> <i data-lte-icon="maximize"
                class="bi bi-arrows-fullscreen"></i> <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"
                style="display: none;"></i> </a>
          </li>
          <li class="nav-item dropdown user-menu"> <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img src="/img/user2-160x160.jpg" class="user-image rounded-circle shadow" alt="User Image"> <span
                class="d-none d-md-inline">{{ loggedUser.vorname }} {{ loggedUser.nachname}}</span> </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="app-main">
      <div class="app-content-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-8">
              <h3 class="mb-0">Finanzratgeber v1</h3>
            </div>
            <div class="col-sm-4 text-right">
              <div class="row">
                <div class="col-4">
                  <h4>Student</h4>
                </div>
                <div class="col-4">
                  <h4>Berufstätiger</h4>
                </div>
              </div>
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
            <AusgabenKategorien />
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
                      <div class="progress-group">
                        Anfangskapital
                        <span class="float-end"><b>1.000,00 €</b></span>

                      </div>
                      <div class="progress-group">
                        Sparrate
                        <span class="float-end"><b>250 €</b></span>
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
                        <span class="float-end"><b>40 Jahre</b></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="row">
                    <div class="col-md-3 col-6">
                      <div class="text-center border-end"> <span class="text-success"> <i class="bi bi-caret-up-fill"></i>
                          3%
                        </span>
                        <h5 class="fw-bold mb-0 text-info">1.000,00 €</h5> <span class="text-uppercase">Guthaben zu
                          Jahresbeginn</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="text-center border-end"> <span class="text-info"> &nbsp; </span>
                        <h5 class="fw-bold mb-0 text-danger">120.000,00 €</h5> <span
                          class="text-uppercase">Einzahlungen</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="text-center border-end"> <span class="text-success"> <i class="bi bi-caret-up-fill"></i>
                          3% </span>
                        <h5 class="fw-bold mb-0 text-warning">112.141,63€</h5> <span class="text-uppercase">Zins-
                          gutschriften</span>
                      </div>
                    </div>
                    <div class="col-md-3 col-6">
                      <div class="text-center"> <span class="text-danger"> &nbsp; </span>
                        <h5 class="fw-bold mb-0 text-success">233.141,63€</h5> <span class="text-uppercase">Das erzielte
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

