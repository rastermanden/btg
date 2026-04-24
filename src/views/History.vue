<script setup>
import { BTG_DATA } from '../data.js'

const wins = [
  ['TROELS SMASHMOSE', 4],
  ['MIKKEL SLICEFINGER', 2],
  ['KASPER GUMMIBEN', 2],
]
</script>

<template>
  <section class="B-section">
    <div class="B-section-head">
      <div>
        <h2>THE PINK SHORTS<br>REGISTER.</h2>
        <div class="sub">Ten editions. Four men. One trophy — and a new name at the top.</div>
      </div>
      <div class="n">§ HISTORY</div>
    </div>
    <div class="B-table-wrap">
      <table class="B-table">
        <thead>
          <tr>
            <th>YEAR</th>
            <th>CHAMPION</th>
            <th>SCORE</th>
            <th>VENUE</th>
            <th>NOTE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(h, i) in BTG_DATA.history"
            :key="h.year"
            :class="{ 'champion-row': i === 0 }"
          >
            <td class="year">{{ h.year }}</td>
            <td class="champ">{{ h.champ }}</td>
            <td class="mono-cell">{{ h.score }}</td>
            <td>{{ h.venue }}</td>
            <td class="note-cell">{{ h.note }}</td>
            <td><span v-if="i === 0" class="shorts-tag gold">Champion</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="B-wins">
      <div v-for="[n, w] in wins" :key="n" class="p-card">
        <div class="ix">SHORTS</div>
        <h3>{{ n }}</h3>
        <div class="bars">
          <span v-for="i in w" :key="i" class="bar" />
          <span class="mult">×{{ w }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
