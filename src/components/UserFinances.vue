<template>
  <div class="row" id="userfinances">
    <div class="col-md-4 col-sm-4 col-12">
      <div class="info-box text-bg-primary">
        <span class="info-box-icon"> <i class="bi bi-bookmark-fill"></i> </span>
        <div class="info-box-content">
          <span class="info-box-text">Einnahmen</span>
          <span class="info-box-number">{{ einnahmen }} €</span>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-4 col-12">
      <div class="info-box text-bg-danger">
        <span class="info-box-icon"> <i class="bi bi-calendar3"></i> </span>
        <div class="info-box-content">
          <span class="info-box-text">Ausgaben</span>
          <span class="info-box-number">{{ ausgaben }} €</span>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-4 col-12">
      <div class="info-box text-bg-success">
        <span class="info-box-icon"> <i class="bi bi-hand-thumbs-up"></i> </span>
        <div class="info-box-content">
          <span class="info-box-text">Einsparpotenzial</span>
          <span class="info-box-number">{{ einsparpotenzial }} €</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps(['einnahmen', 'ausgaben', 'einsparpotenzial'])
import { reactive, computed } from 'vue';

</script>
