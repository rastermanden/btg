<script setup>
import BNav from './components/BNav.vue'
import BFooter from './components/BFooter.vue'
</script>

<template>
  <div class="B" data-screen-label="BTG">
    <BNav />
    <main class="B-main">
      <RouterView />
    </main>
    <BFooter />
  </div>
</template>
