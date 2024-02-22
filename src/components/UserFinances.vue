<template>
  <div class="row" id="userfinances">
    <div class="col-md-4 col-sm-4 col-12">
      <div class="info-box text-bg-primary">
        <span class="info-box-icon"> <i class="bi bi-bookmark-fill"></i> </span>
        <div class="info-box-content">
          <span class="info-box-text">Einnahmen</span>
          <span class="info-box-number">{{ einnahmen }} €</span>
          <div class="progress">
            <div class="progress-bar" style="width: 70%"></div>
          </div>
          <span class="progress-description"> 5% mehr zum letzten Monat </span>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-4 col-12">
      <div class="info-box text-bg-danger">
        <span class="info-box-icon"> <i class="bi bi-calendar3"></i> </span>
        <div class="info-box-content">
          <span class="info-box-text">Ausgaben</span>
          <span class="info-box-number">{{ ausgaben }} €</span>
          <div class="progress">
            <div class="progress-bar" style="width: 70%"></div>
          </div>
          <span class="progress-description"> 5% mehr zum letzten Monat </span>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-4 col-12">
      <div class="info-box text-bg-success">
        <span class="info-box-icon"> <i class="bi bi-hand-thumbs-up"></i> </span>
        <div class="info-box-content">
          <span class="info-box-text">Einsparpotenzial</span>
          <span class="info-box-number">{{ einsparpotenzial }} €</span>
          <div class="progress">
            <div class="progress-bar" style="width: 70%"></div>
          </div>
          <span class="progress-description"> 5% mehr zum letzten Monat </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps(['einnahmen', 'ausgaben', 'einsparpotenzial'])
import { reactive, computed } from 'vue';

// const data = reactive({
//   einnahmen: 1400,
//   ausgaben: 1115
// })

// const einsparpotenzial = computed(() => {
//   return data.einnahmen - data.ausgaben
// })

</script>
