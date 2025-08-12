<script setup>
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div class="main-container container py-4">
    <header class="mb-4">
      <div class="d-flex justify-content-center">
        <BHeader />
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.main-container {
  max-width: 950px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  min-height: 90vh;
  padding-bottom: 2rem;
}
</style>


