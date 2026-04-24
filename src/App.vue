<script setup>
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <header class="site-header">
    <div class="brand">
      <RouterLink to="/">BTG</RouterLink>
    </div>
    <NavMenu />
  </header>

  <main class="site-main">
    <RouterView />
  </main>

  <footer class="site-footer">
    <p>© {{ new Date().getFullYear() }} BTG — International Sports Organisation</p>
  </footer>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.brand a {
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.05em;
}

.site-main {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.site-footer {
  padding: 1.5rem 2rem;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #666;
  font-size: 0.875rem;
}
</style>
