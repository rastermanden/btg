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
  ['STROKE (18H)', '−8'],
  ['SET 1', '6-4'],
  ['SET 2', '6-3'],
  ['BTG POINTS', '20.0'],
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

  <section class="B-champion" aria-label="MMXXVI Champion">
    <div class="B-section-head" style="margin-bottom: 28px;">
      <div>
        <h2 style="color: var(--B-navy);">CHAMPION<br><span style="color: var(--B-pink);">MMXXVI.</span></h2>
        <div class="sub" style="color: var(--B-navy);">Fifteenth edition. Fourth pair of pink for the Dylan of Klint.</div>
      </div>
      <div class="n" style="background: var(--B-navy); color: var(--B-gold);">§ 00</div>
    </div>
    <div class="grid">
      <div class="stamp">CHAMPION<span>MMXXVI</span></div>
      <div>
        <div class="nick">“The Drop Shot”</div>
        <div class="bigname">MIKKEL<br><span class="pink">SLICEFINGER</span></div>
        <p class="copy">Closed out the Golden Gummiben with a feathered lob on match point, scraped the baseline, lifted the shorts for the fourth time in fifteen editions. Kasper has been seen staring at the 18th green since Friday.</p>
        <div class="chips">
          <span class="chip pink">−8 on the card</span>
          <span class="chip">6-4 · 6-3</span>
          <span class="chip pink">20.0 BTG pts</span>
          <span class="chip">Pair N°4</span>
        </div>
      </div>
    </div>
  </section>

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
      <span>MIKKEL WINS.</span><span class="pink">DROP-SHOT.</span><span>WEAR THE SHORTS.</span>
      <span style="color: var(--B-turf);">★</span>
      <span>MIKKEL WINS.</span><span class="pink">MMXXVI.</span>
      <span>MIKKEL WINS.</span><span class="pink">DROP-SHOT.</span><span>WEAR THE SHORTS.</span>
      <span style="color: var(--B-turf);">★</span>
      <span>MIKKEL WINS.</span><span class="pink">MMXXVI.</span>
    </div>
  </section>

  <section class="B-section alt">
    <div class="B-section-head">
      <div>
        <h2 style="color: var(--B-gold);">SHORTS-HOLDER<br>OF MMXXVI.</h2>
        <div class="sub">Currently unbeaten. Currently pink.</div>
      </div>
      <div class="n" style="background: var(--B-pink); color: #fff;">§ 02</div>
    </div>
    <div class="B-shorts-holder">
      <div>
        <div class="nick">“The Drop Shot”</div>
        <div class="bigname">MIKKEL<br><span class="pink">SLICEFINGER</span></div>
        <p class="copy">
          Took the 2026 edition with a feathered drop-shot lob on match point, his fourth pair of pink shorts in fifteen editions. Hummed Dylan between every hole. The shorts are said to fit, but only just.
        </p>
      </div>
      <div class="card-bg">
        <div class="label">FINAL SCORECARD · MMXXVI</div>
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
