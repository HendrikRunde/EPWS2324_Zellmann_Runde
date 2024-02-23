import { createApp } from 'vue'
//import UserFinances from './components/UserFinances.vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// const appEinnahmen = createApp(UserFinances)
// appEinnahmen.mount('#userfinances')

const existingUsers = [
    {
        vorname: 'Alex',
        nachname: 'Zellmann',
        email: 'alex.zellmann@hotmail.de',
        alter: 23,
        aktuellesSemester: 7,
        passwort: '',
        finanzZiel: 600000,
        einnahmeQuellen: [
            {
                id: 1,
                name: 'Werkstudent',
                value: 600
            },
            {
                id: 2,
                name: 'Nebenjob',
                value: 450
            }
        ],
        ausgaben: 620,
        ausgabenKategorien: [
            {
                id: 1,
                name: 'Wohnen',
                value: 400,
            },
            //"Wohnen", "Ernährung", "Gesundheit", "Studium", "Hobbies", "Reisen", "Keine Kategorie"
            {
                id: 2,
                name: 'Ernährung',
                value: 100,
            },
            {
                id: 3,
                name: 'Gesundheit',
                value: 20,
            },
            {
                id: 4,
                name: 'Studium',
                value: 30,
            },
            {
                id: 5,
                name: 'Versicherungen',
                value: undefined,
            },
            {
                id: 6,
                name: 'Hobbies',
                value: 70,
            },
            {
                id: 7,
                name: 'Reisen',
                value: undefined
            }

        ],
        dynamic: {
            job: false,
            family: false,
            immobilie: false,
            risikoAnlagen: false
        }
    }
]

export default existingUsers;