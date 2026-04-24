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
      <div class="sticker s1">MIKKEL<br>TAKES<br>THE SHORTS!</div>
      <img :src="posterUrl" alt="BTG 2026 Poster" />
      <div class="sticker s2" style="background: var(--B-gold); color: var(--B-navy);">EDITION<br>XV</div>
      <div class="sticker s3">CHAMPION<br>MMXXVI</div>
    </div>
    <div class="copy-col">
      <div>
        <div class="eyebrow">MMXXVI · Edition XV · Champion declared</div>
        <h1>
          MIKKEL <span class="pink">SLICEFINGER</span>
          <span class="script">wins the Golden Gummiben.</span>
          Fourth pair of pink.
        </h1>
        <p class="lead">Closed out the fifteenth edition on a feathered drop-shot lob from the deuce court. Dylan on the lips, chalk on the line, Kasper's face on the ground.</p>
        <div class="meta-row">
          <span>24—25 April 2026</span><span class="dot"></span>
          <span>Klint, DK</span><span class="dot"></span>
          <span>Champion · Slicefinger</span>
        </div>
        <div class="ctas">
          <button class="btn pink" type="button" @click="go('/history')">Read the Register</button>
          <button class="btn cream" type="button" @click="go('/players')">Meet the Field</button>
        </div>
      </div>
    </div>
  </div>
</template>
