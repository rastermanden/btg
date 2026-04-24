<script setup>
const items = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rules', label: 'Rules' },
  { to: '/players', label: 'Players' },
  { to: '/history', label: 'History' },
]

const tickerItems = [
  'Pink Shorts MMXXVI',
  'Five Men. One Trophy.',
  'Drive it · Rally it',
  'Est. 2011 · Klint DK',
  'Cry “Gummiben!”',
]
</script>

<template>
  <header class="B-nav">
    <RouterLink to="/" class="logo">
      <div class="crest">★</div>
      <span>BTG</span>
    </RouterLink>
    <nav>
      <RouterLink
        v-for="i in items"
        :key="i.to"
        :to="i.to"
        active-class="active"
        :exact-active-class="i.to === '/' ? 'active' : ''"
      >{{ i.label }}</RouterLink>
    </nav>
    <div class="right">
      <button class="cta-s" type="button">Klint · 24–25 Apr</button>
    </div>
  </header>
  <div class="B-ticker">
    <div class="track">
      <span v-for="(t, i) in tickerItems" :key="'a' + i">{{ t }}</span>
      <span v-for="(t, i) in tickerItems" :key="'b' + i">{{ t }}</span>
    </div>
  </div>
</template>
