<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const items = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/rules', label: 'Rules' },
  { to: '/players', label: 'Players' },
  { to: '/history', label: 'History' },
]

const tickerItems = [
  'Champion MMXXVI · Mikkel Slicefinger',
  'Drop-shot on match point',
  'Pair N°4 · Pink & Correct',
  'Dylan on the 18th fairway',
  'Kasper: still staring at the green',
]

const isOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { isOpen.value = false })
</script>

<template>
  <header class="B-nav" :class="{ open: isOpen }">
    <RouterLink to="/" class="logo" @click="isOpen = false">
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
        @click="isOpen = false"
      >{{ i.label }}</RouterLink>
    </nav>
    <div class="right">
      <button class="cta-s" type="button">Klint · 24–25 Apr</button>
      <button
        class="burger"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
        aria-controls="B-nav-menu"
        @click="isOpen = !isOpen"
      ><span></span></button>
    </div>
  </header>
  <div class="B-ticker">
    <div class="track">
      <span v-for="(t, i) in tickerItems" :key="'a' + i">{{ t }}</span>
      <span v-for="(t, i) in tickerItems" :key="'b' + i">{{ t }}</span>
    </div>
  </div>
</template>
