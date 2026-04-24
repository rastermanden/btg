export const BTG_DATA = {
  org: 'B Tennis Golf',
  orgFull: 'Bilateral Tennis & Golf Federation',
  edition: 'MMXXVI',
  year: 2026,
  event: 'Golden Gummiben Pro/Am',
  venue: 'Klint',
  venueFull: 'Klint Municipal Course & Seaside Courts',
  country: 'Denmark',
  dates: 'April 24–25, 2026',
  datesShort: '24—25 APR',
  founded: 2011,
  motto: 'Drive it. Rally it.',
  prize: 'The Pink Shorts',

  players: [
    { no: 1, first: 'Mikkel', last: 'Slicefinger', nick: 'The Drop Shot', club: 'Klint GC', nation: 'DK', hcp: 4.2, serve: 188, wins: 3, shorts: 2024, img: 'assets/players/mikkel.svg', persona: 'Bob Dylan' },
    { no: 2, first: 'Kasper', last: 'Gummiben', nick: 'Bogey King', club: 'Klint GC', nation: 'DK', hcp: 2.8, serve: 201, wins: 4, shorts: 2025, img: 'assets/players/kasper.svg', persona: 'Axl Rose' },
    { no: 3, first: 'Uffe', last: 'Dobbelbogey', nick: 'Cold Fore', club: 'Klint GC', nation: 'DK', hcp: 6.1, serve: 176, wins: 2, shorts: 2022, img: 'assets/players/uffe.svg', persona: 'Harald Blåtand' },
    { no: 4, first: 'Troels', last: 'Smashmose', nick: 'Deuce Daddy', club: 'Klint GC', nation: 'DK', hcp: 1.4, serve: 192, wins: 5, shorts: 2023, img: 'assets/players/troels.svg', persona: 'Dolph Lundgren' },
    { no: 5, first: 'Martin', last: 'Pølsefod', nick: 'Chunker Supreme', club: 'Klint GC', nation: 'DK', hcp: 5.8, serve: 183, wins: 1, shorts: null, img: 'assets/players/martin.svg', persona: 'Dee Snider' },
  ],

  history: [
    { year: 2025, champ: 'Kasper Gummiben', score: '−7 / 6-4 6-3', venue: 'Klint', note: 'Sudden-death chip-in on 18; renamed himself after the trophy' },
    { year: 2024, champ: 'Mikkel Slicefinger', score: '−9 / 7-6 6-4', venue: 'Klint', note: 'Sliced into the clubhouse window, still won' },
    { year: 2023, champ: 'Troels Smashmose', score: '−5 / 6-2 6-2', venue: 'Klint', note: 'Forehand so loud it scared the seagulls' },
    { year: 2022, champ: 'Uffe Dobbelbogey', score: '−6 / 6-4 7-5', venue: 'Klint', note: 'Won despite two penalty strokes and his own surname' },
    { year: 2021, champ: 'Mikkel Slicefinger', score: '−4 / 6-3 6-4', venue: 'Klint', note: 'Pandemic-era single-pair format' },
    { year: 2020, champ: 'Troels Smashmose', score: '−8 / 6-4 6-7 6-2', venue: 'Klint', note: 'Longest final on record — 4h 18m' },
    { year: 2019, champ: 'Kasper Gummiben', score: '−3 / 7-5 6-4', venue: 'Klint', note: 'Legendary rally of 47 shots on the 6th tee' },
    { year: 2018, champ: 'Uffe Dobbelbogey', score: '−6 / 6-1 6-2', venue: 'Klint', note: 'Rain delay, played in pink ponchos' },
    { year: 2017, champ: 'Troels Smashmose', score: '−2 / 6-4 4-6 7-5', venue: 'Klint', note: 'Shorts revealed to be two sizes too small' },
  ],

  rules: [
    {
      article: 'I', title: 'Constitution', sections: [
        { n: '1.01', body: "The Bilateral Tennis & Golf Federation (hereinafter 'B Tennis Golf' or 'BTG') is a registered sporting body governing the hybrid discipline of bilateral play." },
        { n: '1.02', body: 'Each sanctioned BTG event shall comprise one (1) round of stroke-play golf followed by one (1) best-of-three-sets lawn tennis match, contested by the same field on the same day.' },
        { n: '1.03', body: "The Federation's motto is 'Drive it. Rally it.' No alternative slogans are recognised." },
      ],
    },
    {
      article: 'II', title: 'The Field', sections: [
        { n: '2.01', body: 'Each annual championship shall admit twelve (12) competitors, mixed gender, minimum handicap of 10.0 and a verifiable one-handed backhand (either side).' },
        { n: '2.02', body: 'A minimum of one (1) Pro and one (1) Am shall comprise each pairing. A Pro who cannot rally, or an Am who cannot chip, disqualifies the pair.' },
        { n: '2.03', body: 'Wildcards are issued at the sole discretion of the Shorts-Holder, who may extend an invitation to any one (1) competitor of their choosing.' },
      ],
    },
    {
      article: 'III', title: 'Format of Play', sections: [
        { n: '3.01', body: 'Day One: 18 holes of stroke-play, conducted under R&A rules with BTG local amendments (see Article V).' },
        { n: '3.02', body: 'Day Two: Best-of-three singles tennis; all matches contested on grass; tie-breaks to ten (10) points in the final set.' },
        { n: '3.03', body: 'A composite index ranks competitors: every stroke under par is worth one (1) BTG point; every set won is worth four (4) BTG points; the ace bonus adds one (1) BTG point per ace, capped at five (5) per match.' },
      ],
    },
    {
      article: 'IV', title: 'Equipment', sections: [
        { n: '4.01', body: 'Competitors must arrive with a single bag containing both golf clubs and one (1) tennis racquet. The racquet shall be transported in the putter sleeve.' },
        { n: '4.02', body: "Tennis balls may be used as temporary markers on the green when nothing else is available. The competitor must call it aloud: 'marking with felt.'" },
        { n: '4.03', body: 'Spiked shoes are prohibited on the tennis surface. Pink socks are encouraged but not required. Pink shorts are reserved for the reigning Shorts-Holder.' },
      ],
    },
    {
      article: 'V', title: 'BTG Local Amendments', sections: [
        { n: '5.01', body: 'A ball that lands in the net of an adjacent tennis court shall be played as a lateral hazard, with the drop point taken at the baseline.' },
        { n: '5.02', body: "Should a competitor strike a tennis ball with a golf club during play (accidentally or otherwise), they shall immediately cry 'Gummiben!' — failure to do so incurs a one-stroke penalty." },
        { n: '5.03', body: "The 18th hole of any BTG-sanctioned course shall be playable as a drop shot: a ball landing within 3m of the pin from beyond 120m may be substituted for a tennis ball of the competitor's choice, and putted." },
      ],
    },
    {
      article: 'VI', title: 'The Pink Shorts', sections: [
        { n: '6.01', body: 'The overall BTG Points leader shall be declared the Shorts-Holder and shall, in an immediate post-final ceremony, don the Pink Shorts.' },
        { n: '6.02', body: "The Pink Shorts must be worn during (a) the closing dinner, (b) any and all press obligations, and (c) the first tee-shot of the subsequent year's championship." },
        { n: '6.03', body: "The Shorts may not be altered, embroidered, bleached, or passed to a civilian. Their return to the Federation at the following year's opening ceremony is mandatory and non-negotiable." },
      ],
    },
    {
      article: 'VII', title: 'Conduct', sections: [
        { n: '7.01', body: 'Competitors shall address one another by their registered nickname at all times during competition play.' },
        { n: '7.02', body: 'The traditional pre-match handshake is performed racquet-to-club, blade-to-face, at the net. A high-five is considered grounds for a warning.' },
        { n: '7.03', body: 'No competitor shall decline a post-round aquavit without submitting a written medical exemption at least seven (7) days in advance.' },
      ],
    },
  ],
}

export const posterUrl = `${import.meta.env.BASE_URL}assets/poster.jpeg`
