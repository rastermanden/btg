<script setup>
import { ref } from 'vue'
import BHero from '../components/BHero.vue'

const heroLayout = ref('poster')

const pillars = [
  ['I', 'FIVE MEN', 'The entire field. All Klint GC. All old enough to know better. None willing to quit.'],
  ['II', 'ONE COURSE', 'Klint GC, par 71. 18 holes of stroke play in the morning. Windmill still in play.'],
  ['III', 'ONE TROPHY', 'The Pink Shorts. Worn for 365 days. To dinners, to press, to the first tee of the next edition.'],
]

const scorecard = [
  ['STROKE (18H)', '−7'],
  ['SET 1', '6-4'],
  ['SET 2', '6-3'],
  ['BTG POINTS', '19.0'],
  ['AQUAVITS', '0 DECLINED'],
]
</script>

<template>
  <BHero :layout="heroLayout" />

  <div class="B-tweak" role="group" aria-label="Hero layout">
    <span class="label">Hero</span>
    <button :class="{ active: heroLayout === 'poster' }" @click="heroLayout = 'poster'">Poster</button>
    <button :class="{ active: heroLayout === 'split' }" @click="heroLayout = 'split'">Split</button>
    <button :class="{ active: heroLayout === 'countdown' }" @click="heroLayout = 'countdown'">Countdown</button>
  </div>

  <section class="B-section">
    <div class="B-section-head">
      <div>
        <h2>TWO SPORTS.<br><span>ONE </span><span style="color: var(--B-pink);">RIDICULOUS</span><span> DAY.</span></h2>
        <div class="sub">— and one pair of very pink shorts at the end of it.</div>
      </div>
      <div class="n">§ 01</div>
    </div>
    <div class="B-pillars">
      <div v-for="[i, t, b] in pillars" :key="i" class="p-card">
        <div class="ix">{{ i }} / III</div>
        <h3>{{ t }}</h3>
        <p>{{ b }}</p>
      </div>
    </div>
  </section>

  <section class="B-feature">
    <div class="scroll">
      <span>DRIVE IT.</span><span class="pink">RALLY IT.</span><span>WEAR THE SHORTS.</span>
      <span style="color: var(--B-turf);">★</span>
      <span>DRIVE IT.</span><span class="pink">RALLY IT.</span>
      <span>DRIVE IT.</span><span class="pink">RALLY IT.</span><span>WEAR THE SHORTS.</span>
      <span style="color: var(--B-turf);">★</span>
      <span>DRIVE IT.</span><span class="pink">RALLY IT.</span>
    </div>
  </section>

  <section class="B-section alt">
    <div class="B-section-head">
      <div>
        <h2 style="color: var(--B-gold);">SHORTS-HOLDER<br>OF MMXXV.</h2>
        <div class="sub">Currently unbeaten. Currently pink.</div>
      </div>
      <div class="n" style="background: var(--B-pink); color: #fff;">§ 02</div>
    </div>
    <div class="B-shorts-holder">
      <div>
        <div class="nick">“Bogey King”</div>
        <div class="bigname">KASPER<br><span class="pink">GUMMIBEN</span></div>
        <p class="copy">
          Sealed the 2025 edition on a sudden-death chip-in from 42 metres off the 18th. Has since legally changed his surname to match the trophy. The shorts fit. The marriage did not survive.
        </p>
      </div>
      <div class="card-bg">
        <div class="label">FINAL SCORECARD · MMXXV</div>
        <table>
          <tbody>
            <tr v-for="[k, v] in scorecard" :key="k">
              <td class="k">{{ k }}</td>
              <td class="v">{{ v }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
