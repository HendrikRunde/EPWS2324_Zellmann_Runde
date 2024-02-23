<template>
    <div class="col-12 col-md-6">
        <div class="card mb-12">
            <div class="card-header">
                <h3 class="card-title">Einnahmequellen</h3>
                <div class="card-tools">

                    <button type="button" class="btn btn-tool" title="Einnahenmequellen bearbein" @click="openModal">
                        <i class="bi bi-pencil"></i>
                    </button>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="p-3">
                    <div class="row">
                        <div class="col-12" v-for="item in props.data" :key="item">
                            <div class="info-box mb-3 text-bg-success" v-if="item"> <span class="info-box-icon">
                                    <i class="bi bi-person-workspace"></i> </span> 
                                <div class="info-box-content"> <span class="info-box-text">{{ item.name }}</span> <span
                                        class="info-box-number">{{ item.value }}€</span> </div>
                            </div>
                        </div>
                        <!-- <div class="col-12">
                            <div class="info-box mb-3 text-bg-warning"> <span class="info-box-icon">
                                    <i class="bi bi-heart-fill"></i> </span>
                                <div class="info-box-content"> <span class="info-box-text">Nebenjob
                                        1</span> <span class="info-box-number">150€</span> </div>
                            </div>
                        </div>

                        <div class="col-12">

                            <div class="info-box mb-3 text-bg-info"> <span class="info-box-icon">
                                    <i class="bi bi-boxes"></i> </span>
                                <div class="info-box-content"> <span class="info-box-text">Nebenjob
                                        2</span> <span class="info-box-number">150€</span> </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="info-box mb-3 text-bg-success"> <span class="info-box-icon"> <i
                                        class="bi bi-chat-fill"></i> </span>
                                <div class="info-box-content"> <span class="info-box-text">Privatunterricht</span> <span
                                        class="info-box-number">100€</span>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modal_demo">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Einnahmequellen bearbeiten</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h5>Einnahmequellen:</h5>
                    <div class="form-group" v-for="(item, index, key) in inputData" :key="item">
                        <div class="row" v-if="item">
                            <div class="col-8">
                                <input type="text" class="form-control" id="exampleInputEmail1"
                                    placeholder="Job-Bezeichnung" v-model="inputData[index].name">
                            </div>
                            <div class="col-2">
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Wert"
                                    v-model="inputData[index].value">
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-secondary btn-sm" style="margin-right: 5px;"
                                    @click="addEinnahmeQuelle(index)">
                                    <!-- <i class="far fa-trash-alt"></i> -->
                                    +
                                </button>
                                <button type="button" class="btn btn-secondary btn-sm" @click="removeEinnahmeQuelle(index)">
                                    <!-- <i class="far fa-trash-alt"></i> -->
                                    -
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal"
                        @click="closeModal">Abbrechen</button>
                    <button type="button" class="btn btn-primary" @click="changeInputData">Übernehmen</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script setup>
import { reactive, onMounted, computed, ref } from 'vue'

const props = defineProps({
    data: {
        type: Array,
        required: true,
        default: () => []
    },
    dataChanged: {
        type: Function
    },
    cancel: {
        type: Function
    }
})


const inputData = ref([])

function changeInputData() {
    console.log('change input data', inputData, props.data)
    props.dataChanged(inputData.value)
    closeModal()
}

function addEinnahmeQuelle(index) {
    inputData.value.push({ id: new Date().getTime(), name: '', value: 0 })
}

function removeEinnahmeQuelle(index){
    delete inputData.value[index];
    console.log('after delete', inputData.value)
}


const state = reactive({
    modal_demo: null,
})

onMounted(() => {
    state.modal_demo = new bootstrap.Modal('#modal_demo', {})
})

function openModal() {
    inputData.value = [...props.data]
    state.modal_demo.show()
}

function closeModal() {
    console.log('changedInput', inputData.value)
    state.modal_demo.hide()
}
</script>