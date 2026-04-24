<script setup>
import { BTG_DATA } from '../data.js'
</script>

<template>
  <section class="B-section">
    <div class="B-section-head">
      <div>
        <h2>THE CHARTER.</h2>
        <div class="sub">Seven articles. Non-negotiable.</div>
      </div>
      <div class="n">§ RULES</div>
    </div>
    <div class="B-rules-grid">
      <div class="B-rules">
        <div v-for="a in BTG_DATA.rules" :key="a.article" class="article">
          <div class="article-head">
            <div class="roman">ART. {{ a.article }}</div>
            <div class="title">{{ a.title }}</div>
          </div>
          <div v-for="s in a.sections" :key="s.n" class="sec">
            <div class="sn">§ {{ s.n }}</div>
            <p>{{ s.body }}</p>
          </div>
        </div>
      </div>
      <aside class="B-rules-aside">
        <div class="index">
          <h4>INDEX</h4>
          <ol>
            <li v-for="a in BTG_DATA.rules" :key="a.article">
              <span class="roman">{{ a.article }}</span>
              <span>{{ a.title }}</span>
            </li>
          </ol>
        </div>
        <div class="quote">
          “When in doubt: cry <b>Gummiben!</b>, take the penalty, drink the aquavit.”
          <div class="attrib">Charter commentary · 2024</div>
        </div>
      </aside>
    </div>
  </section>
</template>
