<script setup>
import { BTG_DATA } from '../data.js'

const pad2 = (n) => String(n).padStart(2, '0')
const shortsYear = (y) => String(y).slice(2)
const imgUrl = (path) => `${import.meta.env.BASE_URL}${path}`
</script>

<template>
  <section class="B-section">
    <div class="B-section-head">
      <div>
        <h2>THE FIELD.</h2>
        <div class="sub">Five men. All Klint. All in.</div>
      </div>
      <div class="n">§ PLAYERS</div>
    </div>
    <div class="B-players">
      <div
        v-for="p in BTG_DATA.players"
        :key="p.no"
        class="card"
        :class="{ shorts: !!p.shorts }"
      >
        <div class="no">{{ pad2(p.no) }}</div>
        <div class="portrait">
          <img
            v-if="p.img"
            :src="imgUrl(p.img)"
            :alt="`${p.first} ${p.last} — cartoon portrait as ${p.persona}`"
          />
        </div>
        <div class="nation">{{ p.nation }} · {{ p.club }}</div>
        <div class="name">{{ p.first }} {{ p.last }}</div>
        <div class="nick">“{{ p.nick }}”</div>
        <div class="stats">
          <div><div class="k">HCP</div><div class="v">{{ p.hcp }}</div></div>
          <div><div class="k">SERVE</div><div class="v">{{ p.serve }}</div></div>
          <div><div class="k">WINS</div><div class="v">{{ p.wins }}</div></div>
        </div>
        <div v-if="p.shorts" class="shorts-tag">
          Shorts ’{{ shortsYear(p.shorts) }}
        </div>
      </div>
    </div>
  </section>
</template>
