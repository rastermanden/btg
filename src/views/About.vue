<script setup>
const council = [
  ['PRESIDENT', 'Troels Smashmose'],
  ['SECRETARIAT', 'Uffe Dobbelbogey'],
  ['TREASURER', 'Mikkel Slicefinger'],
  ['RULES CMTE', 'Kasper Gummiben'],
  ['JUNIOR', 'Martin Pølsefod'],
]

const facilities = [
  ['THE COURSE', 'Par 71 · 6,214m', 'Coastal links. Three blind doglegs. One windmill in play since 2019.'],
  ['THE COURTS', '3 grass · 1 clay', 'Seaside grass. Line calls by whoever is nearest. Overhead disputes settled at the bar.'],
  ['THE CLUBHOUSE', 'Built 1921', 'Home to the Shorts vault, the charter, 17 framed photos, one stuffed fox.'],
]
</script>

<template>
  <section class="B-section">
    <div class="B-section-head">
      <div>
        <h2>ABOUT B<br>TENNIS GOLF.</h2>
        <div class="sub">Five friends. One bad idea. Fifteen editions.</div>
      </div>
      <div class="n">§ ABOUT</div>
    </div>
    <div class="B-about-grid">
      <div>
        <p class="lead-quote">
          In the summer of 2011, a disagreement about the proper seven-iron grip became an argument about the one-handed backhand. Four aquavits in, somebody said: <b>“fine, let's do both.”</b>
        </p>
        <p class="body">
          Fifteen editions later, B Tennis Golf is a registered sporting body, a 47-page charter, and a single pair of pink shorts that has not been cleaned since 2017. The field has never exceeded five. The venue has never left Klint. The windmill has been in play since 2019.
        </p>
        <p class="body">
          We are not a real federation. We are a registered one. There is a difference, and our lawyer has explained it to us three times.
        </p>
      </div>
      <div class="B-council">
        <h3>THE COUNCIL</h3>
        <div class="rows">
          <div v-for="[r, n] in council" :key="r" class="row">
            <div class="role">{{ r }}</div>
            <div class="name">{{ n }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="B-facilities">
      <div v-for="[t, s, b] in facilities" :key="t" class="p-card">
        <div class="ix">{{ t }}</div>
        <h3>{{ s }}</h3>
        <p>{{ b }}</p>
      </div>
    </div>
  </section>
</template>
