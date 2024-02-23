<template>
    <div class="container col-2" style="padding-top: 250px;">
        <div class="login-box">
            <div class="login-logo">
                <b>Finanzperspektive</b>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Für den weiteren Vorgang wird eine Anmeldung benötigt</p>

                    <form>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="E-Mail" v-model="email" @input="resetWrongUser">
                            <div class="input-group-append">
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Passwort" v-model="pass" @input="resetWrongUser">
                            <div class="input-group-append">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button class="btn btn-primary btn-block" @click="logOn" :disabled="!loginIsValid">Anmelden</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <p class="mb-0">
                        <a class="text-center" @click="register">Neuregistrierung</a>
                    </p>
                    <p class="text-danger" v-if="wrongUser">Falsche Benutzereingaben!</p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>

    </div>
</template>

<script setup>
import existingUsers from '../main'
import { reactive, onMounted, computed, ref } from 'vue'
const props = defineProps({
    logon: {
        type: Function
    },
    register: {
        type: Function
    },

})

const email = ref('')
const pass=ref('')
const wrongUser = ref(false)
const loginIsValid = computed(()=>{
    return email.value.length>0 && pass.value.length>0
})

function logOn(){
    let found = existingUsers.find(e=>e.email==email.value)
    //alert(found)
    if(found!=undefined){
        props.logon(found)
    }
    else{
        wrongUser.value=true
    }
}

function resetWrongUser(){
    wrongUser.value = false
}

function register(){
    props.register()
}

</script>