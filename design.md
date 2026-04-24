# BTG Site — Design Notes

Implementation of the [Claude Design handoff bundle](https://api.anthropic.com/v1/design/h/5XGUBAGpJ2K1q5VzCJYJgQ) for the **Bilateral Tennis & Golf Federation** (BTG) site — a playful, fictional international sporting body built around the annual *Golden Gummiben* Pro/Am tournament in Klint, Denmark.

## Source

The handoff bundle contained two side-by-side prototype directions:

- **A · Federation** — serious FIFA/ATP feel (navy + gold, Alfa Slab One).
- **B · Clubhouse** — loud, pink-forward, Bowlby One + Playfair Display.

The chat transcript shows the user locked in **Direction B**, so the React prototype in `direction-b.jsx` / `style-b.css` is the reference this Vue site targets.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Vue 3 (`<script setup>`) |
| Routing | `vue-router` with `createWebHashHistory` (GitHub Pages friendly at `/btg/`) |
| Styling | Global CSS in `src/style.css` — class names mirror the prototype (`.B-nav`, `.B-hero`, etc.) |
| Build | Vite, `base: '/btg/'` |
| Type face | Bowlby One · Playfair Display · DM Sans · Oswald · JetBrains Mono (Google Fonts) |

React's inline `style={{}}` patterns were converted to plain CSS classes where they recurred, and to `style="..."` attributes where they were one-offs.

## Pages

Five routes, matching the prototype nav:

1. `/` **Home** — hero (poster by default, tweakable to split or countdown), "Two Sports / One Ridiculous Day" pillar grid, marquee strip, reigning Shorts-Holder panel with scorecard.
2. `/about` — origin story, The Council roster, facilities cards.
3. `/rules` — seven-article charter with sticky sidebar index + commentary pull-quote.
4. `/players` — five player cards, reigning Shorts-Holder highlighted in pink.
5. `/history` — Pink Shorts Register table (2017 → 2025) + wins tally cards.

## Component layout

```
src/
  main.js
  App.vue                  ← <BNav/> + <RouterView/> + <BFooter/>
  router/index.js          ← five routes
  data.js                  ← tournament data (players, history, rules) + posterUrl helper
  style.css                ← global design-system CSS
  components/
    BNav.vue               ← pink header + animated navy ticker
    BFooter.vue            ← four-column navy footer with gradient top border
    BHero.vue              ← 3 hero layouts: poster · split · countdown
  views/
    Home.vue
    About.vue
    Rules.vue
    Players.vue
    History.vue
public/
  assets/poster.jpeg       ← the 2026 tournament poster (hero image)
```

## Design tokens (CSS vars on `:root`)

```
--B-bg:        #fff3e6   /* cream page background */
--B-cream:     #ffe9d1   /* card background */
--B-ink:       #0e1a33   /* body text */
--B-pink:      #ef3a8a   /* primary accent — the shorts */
--B-pink-deep: #c61d6e
--B-gold:      #d8a63a   /* trophy / edition */
--B-turf:      #2b7a3e   /* turf green */
--B-navy:      #0e1a33   /* borders, contrast bg */
```

## Notable behaviour

- **Hero layout tweak.** The prototype exposed three hero treatments via its in-canvas Tweaks panel. Home renders a small inline toggle (`.B-tweak`) so visitors can switch between *Poster*, *Split*, and *Countdown* without rebuilding.
- **Tickers animate.** The static flexed ticker in the prototype is upgraded to a continuous CSS keyframe scroll (`B-ticker-scroll`, `B-feature-scroll`) with duplicated content for seamless loop.
- **Hash routing.** Uses `createWebHashHistory` so the site works on GitHub Pages under `/btg/` without a server rewrite.
- **Responsive collapse** at ≤ 960px: all two/three-column grids stack; the primary nav is hidden in favour of the pink header crest + CTA (a mobile menu is future work).

## Out of scope

- The tournament poster is the only raster asset; no fallback SVG was generated.
- No real backend — `data.js` is static and mirrors the prototype's `BTG_DATA`.
- "The Council", footer link columns, and the CTA button are not wired to routes (the prototype left them as copy too).
