<script setup>
import { useRouter } from 'vue-router'
import { posterUrl } from '../data.js'

defineProps({
  layout: { type: String, default: 'poster' },
})

const router = useRouter()
const go = (path) => router.push(path)
</script>

<template>
  <div v-if="layout === 'split'" class="B-hero layout-split">
    <div class="h-left">
      <div class="sub">SIDE A — MORNING</div>
      <div class="super">GOLF.</div>
    </div>
    <div class="h-right">
      <div class="sub">SIDE B — AFTERNOON</div>
      <div class="super" style="text-align: right;">TENNIS.</div>
    </div>
    <div class="center-seam" />
    <div class="middle-title">
      BTG 2026
      <span class="gold-script">Golden Gummiben</span>
    </div>
  </div>

  <div v-else-if="layout === 'countdown'" class="B-hero layout-countdown">
    <div class="cd-grid">
      <div>
        <div class="eyebrow">MMXXVI · EDITION XV</div>
        <h1>THE <span class="pink">PINK</span><br>IS COMING.</h1>
        <div class="tee">First tee · 07:30 · Klint GC</div>
      </div>
      <div class="cd-boxes">
        <div class="cd-box"><div class="n">00</div><div class="l">DAYS</div></div>
        <div class="cd-box"><div class="n">07</div><div class="l">HRS</div></div>
        <div class="cd-box"><div class="n">42</div><div class="l">MIN</div></div>
        <div class="cd-box"><div class="n">18</div><div class="l">SEC</div></div>
      </div>
    </div>
  </div>

  <div v-else class="B-hero layout-poster">
    <div class="poster-col">
      <div class="sticker s1">WINNER<br>TAKES<br>PINK SHORTS!</div>
      <img :src="posterUrl" alt="BTG 2026 Poster" />
      <div class="sticker s2" style="background: var(--B-gold); color: var(--B-navy);">EDITION<br>XV</div>
    </div>
    <div class="copy-col">
      <div>
        <div class="eyebrow">MMXXVI · Pro/Am · Edition XV</div>
        <h1>
          BTG <span class="pink">2026</span>
          <span class="script">Golden Gummiben</span>
          Tournament.
        </h1>
        <p class="lead">Five Klint men. One golf course. Three tennis courts. One pair of aggressively pink shorts. Contested in a single, deeply regrettable afternoon.</p>
        <div class="meta-row">
          <span>24—25 April</span><span class="dot"></span>
          <span>Klint, DK</span><span class="dot"></span>
          <span>Since 2011</span>
        </div>
        <div class="ctas">
          <button class="btn pink" type="button" @click="go('/rules')">Read the Rules</button>
          <button class="btn cream" type="button" @click="go('/players')">Meet the Field</button>
        </div>
      </div>
    </div>
  </div>
</template>
