<script setup>
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rules', label: 'Rules' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' }
]
</script>

<template>
  <nav class="nav-menu">
    <RouterLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="nav-link"
    >
      {{ link.label }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-menu {
  display: flex;
  gap: 1.25rem;
}

.nav-link {
  font-size: 0.95rem;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
}

.nav-link.router-link-exact-active {
  border-bottom-color: #222;
  font-weight: 600;
}
</style>
