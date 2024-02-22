<template>
    <div class="container col-2" style="padding-top: 250px;">
        <div class="login-box">
            <div class="login-logo">
                <b>Finanzratgeber</b>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form method="post">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email">
                            <div class="input-group-append">
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password">
                            <div class="input-group-append">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button class="btn btn-primary btn-block" @click="logOn">Anmelden</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <p class="mb-0">
                        <a class="text-center" @click="register">Register a new membership</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>

    </div>
</template>

<script setup>

const props = defineProps({
    logon: {
        type: Function
    },
    register: {
        type: Function
    },

})

function logOn(){
    props.logon()
}

function register(){
    props.register()
}

</script>