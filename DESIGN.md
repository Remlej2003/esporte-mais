---
name: MAIS ESPORTE
description: Muurschrift in de kleuren van onnoraadsen.nl. Eén doorlopende zwarte muur met geverfde vlakken in antraciet en goud, gekwaste randen en een geschilderde telling.
colors:
  kalk: "#1a1a1a"
  kalk-diep: "#242322"
  kalk-schaduw: "#3d3d3d"
  veld: "#353433"
  veld-diep: "#2a2928"
  lak: "#d4a84b"
  lak-helder: "#d4a84b"
  goud: "#e8c97b"
  roet: "#1a1a1a"
  op-kalk: "#faf8f5"
  op-kalk-zacht: "#c9c2b6"
  op-veld: "#faf8f5"
  op-veld-zacht: "#d2cbbf"
  op-lak: "#1a1a1a"
  zand: "#e8e4dc"
typography:
  display:
    fontFamily: "Vollkorn, 'Hoefler Text', Georgia, serif"
    fontSize: "clamp(2.75rem, 10.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Vollkorn, 'Hoefler Text', Georgia, serif"
    fontSize: "clamp(2rem, 5.5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Vollkorn, 'Hoefler Text', Georgia, serif"
    fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  cijfer:
    fontFamily: "Vollkorn, 'Hoefler Text', Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontFeature: "tabular-nums lining-nums"
  keerpunt:
    fontFamily: "Vollkorn, 'Hoefler Text', Georgia, serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: "-0.02em"
  groot:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
  klein:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.62
  plaat:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
    fontVariation: "font-stretch 84%"
rounded:
  pil: "999px"
  boog: "46% 46% 3px 3px / 26% 26% 3px 3px"
  plaat: "2px"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4rem"
  s9: "6rem"
  s10: "8rem"
  sectie: "clamp(3rem, 5.5vw, 4.75rem)"
  sectie-vlak: "clamp(2.25rem, 3.8vw, 3.25rem)"
  rand: "clamp(1.25rem, 5vw, 4rem)"
components:
  knop-vol:
    backgroundColor: "{colors.lak}"
    textColor: "{colors.roet}"
    rounded: "{rounded.pil}"
    padding: "0.85em 1.5em"
    typography: "{typography.klein}"
  knop-vol-hover:
    backgroundColor: "{colors.goud}"
    textColor: "{colors.roet}"
  knop-lijn:
    backgroundColor: "transparent"
    textColor: "{colors.op-kalk}"
    rounded: "{rounded.pil}"
    padding: "0.85em 1.5em"
    typography: "{typography.klein}"
  knop-licht:
    backgroundColor: "{colors.lak}"
    textColor: "{colors.roet}"
    rounded: "{rounded.pil}"
    padding: "0.85em 1.5em"
    typography: "{typography.klein}"
  knop-licht-hover:
    backgroundColor: "{colors.goud}"
    textColor: "{colors.roet}"
  knop-lijnlicht:
    backgroundColor: "transparent"
    textColor: "{colors.op-veld}"
    rounded: "{rounded.pil}"
    padding: "0.85em 1.5em"
    typography: "{typography.klein}"
  knop-uit:
    backgroundColor: "transparent"
    textColor: "{colors.op-veld}"
    rounded: "{rounded.pil}"
    padding: "0.85em 1.5em"
    typography: "{typography.klein}"
  paneel:
    backgroundColor: "{colors.veld-diep}"
    textColor: "{colors.op-veld}"
    rounded: "0"
    padding: "clamp(1rem, 2.2vw, 2rem)"
  bord:
    backgroundColor: "{colors.veld}"
    textColor: "{colors.op-veld}"
    rounded: "0"
    padding: "clamp(1.5rem, 3vw, 3rem)"
  etiket:
    backgroundColor: "transparent"
    textColor: "{colors.op-kalk}"
    rounded: "{rounded.pil}"
    padding: "0.55em 1.15em"
    typography: "{typography.klein}"
  foto-plaat:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.plaat}"
    padding: "0 0 0 0.75rem"
  nav-band:
    backgroundColor: "{colors.kalk}"
    textColor: "{colors.op-kalk-zacht}"
    padding: "1rem 0"
---

# Design System: MAIS ESPORTE

> De acht kopjes hieronder staan bewust in het Engels: dat zijn de vaste, machineleesbare
> secties van de DESIGN.md-spec. Alle inhoud is Nederlands.

## Overview

**Creative North Star: "Muurschrift"**

De hele pagina is één handgeschilderde muur op een Braziliaans buurtveld. Geen scherm met blokken erop, maar pleisterwerk waar iemand met een kwast op geschreven heeft. Sinds 13 oktober 2026 is die muur zwart, in de kleuren van onnoraadsen.nl: uit twee kleurvoorbeelden is de donkere stijl gekozen. Secties zijn plekken op die muur, geen losse componenten: de muur (`kalk`, `#1a1a1a`) loopt onafgebroken door van de kop tot de voet, en de korrellaag ligt over alles heen, ook over de geverfde vlakken. Dat is wat het één oppervlak maakt in plaats van gestapelde kleurvlakken.

Wat erop staat is geverfd, niet gekaderd. Een vlak in antraciet of goud eindigt in een kwasthaal met ongelijke amplitude, niet in een rechte lijn of een afgeronde hoek. Er zijn nergens kaarten, nergens omlijningen om inhoud heen, nergens schaduwen. De dichtheid is ruim maar niet leeg: tekst krijgt binnen de verf meer lucht dan erbuiten, omdat een letter de gekwaste rand niet mag raken.

De toon is stellig en waardig, nooit zielig. Dat is een productafspraak (potentieel boven medelijden) die zich visueel vertaalt: jongeren staan op foto's als hoofdrolspelers in een geverfde lijst, de vijfjaardoelen staan als een met de hand bijgehouden telling op de muur en niet als een statistiekenbalk in kolommen, en de partnertiers zijn de geschilderde reclameborden langs de rand van het veld.

**Key Characteristics:**

- Eén doorlopend oppervlak; secties zijn plekken op de muur, geen blokken
- Gekwaste randen in plaats van omlijning, radius of schaduw
- Gemeten pleisterkorrel over de volle paginahoogte, in `overlay`
- Twee handen: Vollkorn schildert, Archivo sjabloneert
- Zwart, antraciet, goud en crème, de kleuren van onnoraadsen.nl, meer niet
- Eén geregisseerd bewegingsmoment op de hele pagina

## Colors

De kleuren van onnoraadsen.nl op een zwarte muur: zwart als ondergrond, antraciet voor de geverfde vlakken, goud als verf en crème als tekst. De tokennamen zijn de rollen uit Muurschrift gebleven (`kalk` is de muur, `veld` het scharnier, `lak` het accent), zodat componenten niet hoeven te weten welke verf erin zit. Alles staat in `tokens.css`; er is geen tweede palet meer.

### Primary

- **Goud** (`lak`, `#d4a84b`): de verf van dit palet. Alle koppen (regel in `global.css`), de primaire en de lichte knop, het impactblok, het derde partnerbord (Strategic partner), het merk, de bovenrand van de voet, de streepjes voor lijstitems, de focusring en de huidige taal. `lak-helder` is hier dezelfde kleur; de naam blijft voor het interactieaccent.
- **Antraciet** (`veld`, `#353433`): het scharnier van de pagina. Draagt de lus en het eerste partnerbord (Community partner). `veld-diep` (`#2a2928`) is dezelfde pot dieper: de twee panelen binnen de lus en de contactsectie.

### Secondary

- **Licht goud** (`goud`, `#e8c97b`): het accent op donkere vlakken. Het circuit van de lus, de slotzin van de lus, de uitnodiging en de labels in de contactsectie, de streepjes op donkere vlakken, de hoverstand van de knoppen en de selectiekleur van de browser.
- **Zand** (`#e8e4dc`): uitsluitend het tweede partnerbord (Impact partner), zodat de drie borden oplopen van antraciet via zand naar goud.

### Neutral

- **Muur** (`kalk`, `#1a1a1a`): achtergrond van `body`, van de navigatieband en van de `theme-color` van de browser.
- **Diepe muur** (`kalk-diep`, `#242322`): dezelfde muur één tint opgehaald. Onderscheidt de twee geverfde vlakken missie en aanpak van de kale muur eromheen zonder er een kaart van te maken.
- **Schaduw** (`kalk-schaduw`, `#3d3d3d`): uitsluitend de duim van de scrollbar.
- **Kwastzwart** (`roet`, `#1a1a1a`): tekst op goud en op zand.

De antraciettinten zijn een fractie warm gezet (`#353433` in plaats van `#3d3d3d`), zodat ze bij het goud en de crème horen en niet koud grijs worden.

### Tekstkleuren per ondergrond

- **`op-kalk` / `op-kalk-zacht`**: crème `#faf8f5` en warm zand `#c9c2b6` op de muur.
- **`op-veld` / `op-veld-zacht`**: crème en `#d2cbbf` op antraciet.
- **`op-lak`**: kwastzwart op goud.
- **`accent-kop`**: crème, voor het cursieve slotwoord van de hoofdkop ("door.").

Gemeten contrast: gouden kop op de muur 7,9:1, op antraciet 5,6:1; zachte tekst op de muur 9,8:1; zwart op goud 7,9:1. Niets zakt onder 5,5:1.

### Named Rules

**De Grondregel.** Tekstkleur volgt de ondergrond, niet het element. Op elk vlak wordt de bijbehorende `op-*`-kleur gebruikt; secundaire tekst is altijd getint vanuit diezelfde ondergrond en **nooit koel grijs**. Op zwart betekent dat warm crème en zand. Toets: als een secundaire regel naar het goud en de crème trekt, klopt het; als hij blauwig neutraal is, klopt het niet.

**De Twee Assen Regel.** `.geverfd` en `.donker` zijn onafhankelijke assen. `.geverfd` betekent uitsluitend "heeft gekwaste randen"; `.donker` betekent uitsluitend "staat op een eigen gekleurd vlak" (lus, impact, contact). Een sectie kan het één zonder het ander zijn (aanpak en missie zijn `.geverfd` op de diepe muur). Ze zijn ooit één klasse geweest en dat gaf twee secties in stilte de verkeerde streepjes en tekstkleur. Nooit weer samenvoegen.

**De Gouden Vlek Regel.** De verfvlek achter een foto is altijd goud (`lak` of `goud`). Een vlek in antraciet of grijs leest op zwart als een slagschaduw, en dit systeem heeft geen schaduwen.

### Herkomst

Tot 12 oktober 2026 was de muur gekalkt (`#ede5d3`) met veldgroen, menie en goud. Daarna stonden er twee kleurvoorbeelden naast de site, `/voorbeeld-kleuren/` (licht) en `/voorbeeld-donker/`. Donker is gekozen; dat palet is nu de site zelf. De voorbeeldpagina's zijn weg en de oude adressen sturen door naar de startpagina (`astro.config.mjs`).

### De tussenweg

Op 15 oktober 2026 trok de opdrachtgever die keuze weer open. Twee bezwaren, allebei terecht: de site lijkt in het donkere palet te veel op zijn eigen onnoraadsen.nl, en zwart-met-goud leest als luxe — parfum, horloges — en niet als een maatschappelijk project. Het lichte voorbeeld vond hij te licht.

`/voorbeeld-tussen/` is het antwoord: de muur is gebakken klei (`#d9cdb9`), warm zand dat duidelijk geen wit en duidelijk geen zwart is. Daarop drie aardkleuren in plaats van alleen gouden accenten — diepgroen (`#2f4038`) voor de geverfde vlakken, terracotta (`#9c4523`) als accent en actie, goud (`#c9922f`) nog alleen als fijn hooglicht. Drie tonen uit één familie: warmer dan donker, zonder de drukte van de eerste schets, waar veldgroen naast menie naast goud stond.

Het palet staat in `tokens.css` onder `:root[data-palet='tussen']` en wordt aangezet via de prop `palet` op `Startpagina` en `Base`. De site zelf blijft donker tot er gekozen is.

**De Inkt-tegen-Goud Regel.** Dit palet kan één ding niet wat het donkere wel kan. Daar staan koppen in goud, en goud leest op élke ondergrond in dit systeem. Hier staan koppen in inkt, en inkt leest niet op diepgroen. Elk vlak dat zijn eigen tekstkleur zet — `.lus`, `.contact`, `.doelen`, `.bord` — moet daarom in `global.css` zijn kop laten erven in plaats van inkt op te leggen. De uitzonderingslijst bij `:root[data-palet='tussen']` is dus langer dan die bij het standaardpalet, en dat is geen slordigheid: komt er een vlak met eigen tekstkleur bij, dan hoort het in die lijst. Zonder die regel stond "Jongeren leiden jongeren" in donkere inkt op donkergroen.

Contrast is nagerekend, niet geschat: tekst op de muur 10,5:1, zachte tekst 5,8:1, crème op diepgroen 11:1, crème op terracotta 7,3:1, goud op diepgroen 4,6:1. Alles haalt WCAG AA. De korrel staat hier op 0.14 in plaats van 0.2, omdat overlay het hardst bijt in de middentonen: dezelfde korrel telt op een zandmuur zwaarder dan op zwart.

## Typography

**Display Font:** Vollkorn (fallback 'Hoefler Text', Georgia, serif), variabel 400 tot 900, met echte cursief
**Body Font:** Archivo (fallback system-ui), variabel 100 tot 900, breedte-as 62% tot 125%

Beide zijn lokaal gehost als gesubsette woff2 in `public/fonts/`, met `font-display: swap` en preload van de latin-subsets in `Base.astro`. `font-synthesis-weight` staat uit: schuine of vette letters komen uit de variabele as, nooit uit een browserimitatie.

**Karakter:** Vollkorn is de geschilderde romein. Hij heeft de onregelmatige, iets vette penseelvorm die een geschilderde muurletter hoort te hebben, en draagt alles wat op de muur geschilderd is: koppen, de getallen van de telling en de omslagzinnen. Archivo is de sjabloonletter. Op zijn smalle, gespatieerde, kapitale instelling is hij het gesjabloneerde plaatje; op zijn normale instelling draagt hij alle lopende tekst. Twee handen, twee functies.

### Hierarchy

- **Display** (Vollkorn 800, `clamp(2.75rem, 10.5vw, 6rem)`, lh 0.94, ls -0.03em): uitsluitend de hoofdkop. Op architectuurschaal, maximaal 13ch breed (16ch onder 62rem) zodat hij afbreekt als geschilderde tekst en niet als een regel.
- **Headline** (Vollkorn 700, `clamp(2rem, 5.5vw, 3.5rem)`, lh 1.06): elke sectiekop. Altijd met een `max-width` in `ch` (11 tot 16), zodat de afbreking een compositie is en geen toeval.
- **Title** (Vollkorn 700, `clamp(1.3rem, 2.6vw, 1.75rem)`, lh 1.06): subkoppen binnen een sectie en de twee bijschriften onder de panelen in de lus.
- **Cijfer** (Vollkorn 800, `clamp(3rem, 8vw, 5.5rem)`, lh 0.9, ls -0.035em, `tabular-nums lining-nums`): uitsluitend de getallen van de vijfjarentelling. De tabulaire cijfers zorgen dat de vijf getallen onder elkaar uitlijnen.
- **Keerpunt** (`--t-keerpunt`, Vollkorn 600, `clamp(1.6rem, 3.4vw, 2.5rem)`, lh 1.24): de omslagzin waar een stuk kantelt van probleem naar potentieel. Geen citaatblok, geen aanhalingstekens: dit is proza op grotere schaal.
- **Uitspraak** (`--t-uitspraak`, Vollkorn, `clamp(1.3rem, 2.5vw, 1.85rem)`): de kortere zin die een sectie afsluit. Draagt de kleine keerpuntvariant, de cursieve sluitzin van de lus en de slotzin van de visie. Eén maat voor alle drie, want het zijn dezelfde soort zin.
- **Bordnaam** (`--t-bord`, Vollkorn 700, `clamp(1.5rem, 3.4vw, 2.35rem)`, lh 1.05): uitsluitend de naam op een partnerbord. Eigen stap omdat een bord op een muur zijn eigen schaal heeft, los van de sectiekoppen eromheen.
- **H4** (`--t-h4`, `clamp(1.15rem, 2vw, 1.45rem)`): de gevolgenlijst en het kopje boven de kwalitatieve ambities. De kleinste stap die nog als kop leest.
- **Groot** (Archivo, `clamp(1.125rem, 1.8vw, 1.375rem)`, lh 1.5): de inleidende alinea onder een kop, en de tekst in de partnerborden. Op kalk in `op-kalk-zacht`; op donker in de eigen tekstkleur met opacity 0.92.
- **Body** (Archivo 400, 1.0625rem, lh 1.62): lopende tekst. Regellengte begrensd op `--maat` (68ch) via `.maat`.
- **Klein** (Archivo, 0.875rem): knoplabels, voetnoten, de open punten.
- **Plaat** (Archivo 600, 0.7rem, breedte 84%, ls 0.16em, kapitaal): het gesjabloneerde plaatje.

### Named Rules

**De Plaatregel.** `.plaat` is uitsluitend voor echte aanduidingen: een fotobijschrift, het merkwoord, het label bij een contactgegeven, de kopjes boven de websites en het register van openstaande punten in de voet, de titel van een placeholder. Het is **nooit** een label dat de kop ernaast herhaalt. Toets: verwijder het plaatje. Verdwijnt er informatie, dan mocht het er staan. Verdwijnt er alleen decoratie, dan was het een eyebrow.

**Geen Eyebrow Regel.** Er staat nergens op deze pagina een kicker of eyebrow boven een kop, en er komt er nooit een bij. Een kop die opgewarmd moet worden is de verkeerde kop. Kopjes die eerder als sjabloonplaatje waren opgemaakt zonder ooit iets aan te duiden (`partner__bordenkop`, `partner__lijstkop`, `doelen__daarnaastkop`) zijn teruggezet naar gewone `title`-koppen. Een kop hoort een kop te zijn.

**Geen Kastlijntjes Regel.** In geen enkele zichtbare tekst staat een kastlijntje (em dash). De opdrachtgever heeft dit expliciet gevraagd. Gebruik een dubbele punt, een komma of een haakje. Dit geldt voor `src/content/nl.json` en voor elke tekst die er later bij komt, in elke taal.

**De Uitlijnregel.** Elk getal dat in een kolom of onder elkaar staat, krijgt `.cijfers` (`tabular-nums lining-nums`): de telling en de coördinaten bij het merk.

**Geen Losse Maten Regel.** Er staat geen enkele letterlijke `font-size` in een component of in de pagina; elke maat komt uit een `--t-*`-token. Zeven losse `clamp()`-waarden zijn hierop teruggebracht nadat de detector ze tegen deze ramp aanhield. Heb je een maat nodig die er niet is, voeg dan een token toe en beschrijf hem hierboven. Een losse waarde in de pagina laat de ramp en de code uit elkaar lopen, en dat merkt niemand tot het te laat is.

## Layout

**Container.** Eén enkele omhulling: `.omhulsel` = `width: min(100% - var(--rand) * 2, var(--breed))`, gecentreerd. `--breed` is 78rem (1248px), `--rand` loopt van 20px tot 64px. Op een viewport van 1440px levert dat een paginamarge van precies 96px links en rechts. Die 96px is het bemonsteringsgebied voor de korrelmeting hieronder.

**Rasters.** Alle secties zijn tweekoloms `grid` met ongelijke verhoudingen, nooit 50/50: 1.35/0.65 (hero), 0.85/1.15 (waarom), 0.78/1.22 (de lus: tekst naast de twee vakken), 1.15/0.85 (aanpak), 0.9/1.1 (opleidingscentrum), 0.86/1.14 (ervaring), 1.2/0.8 (missie), 0.9/1.1 (partner), 0.72/1.28 (in een partnerbord), 1.3/0.7 (Begin klein naast de lijst), 1.1/0.9 (doorlezen). In het opleidingscentrum staat onder de kop het overzicht van het terrein, in dezelfde kolom (`grid-template-areas`); de tekst loopt ernaast over twee rijen. Zo staat er naast de lange tekst geen leeg vlak meer. De rest van de galerij is geen raster maar een flexrij van twee met daaronder het grasveld als panorama (zie Foto). De ongelijkheid is het punt: geschilderde compositie, geen kolomindeling. De enige uitzondering is het raster van de twee lusvakken zelf, dat exact 1/1 is, en dat is een inhoudelijke eis (zie Components).

**Breekpunten.** Twee, geen meer.

- **62rem**: alle tweekoloms rasters vallen naar één kolom, ook de lus (de vakken blijven dan maximaal 46rem breed) en het opleidingscentrum (volgorde kop, tekst, foto); de kleefzittende aanpakfoto wordt statisch; de ervaringsfoto gaat onder de tekst (`order: 2`); de hoofdkop verruimt van 13ch naar 16ch.
- **54rem**: het lusraster valt naar één kolom en het circuit wordt een pijl terug omhoog (`max-height` 8rem naar 5rem); de telling stapelt getal boven woord; de fotorijen van het opleidingscentrum stapelen; Begin klein en de lijst ernaast gaan onder elkaar; de twee voetkolommen ook.
- Lokale correcties daarbuiten: 74rem voor de navigatierij, 40rem waaronder de navigatieband meescrolt, 34rem voor de heroknoppen, 30rem voor de navigatieknop.

**Ritme.** Tien stappen (`s1` 0.25rem tot `s10` 8rem), plus twee sectiematen.

### Named Rules

**De Twee Maten Regel.** `--sectie` (`clamp(3rem, 5.5vw, 4.75rem)`) is de ademruimte **binnen** een geverfd vlak: de tekst mag de gekwaste rand niet raken. `--sectie-vlak` (`clamp(2.25rem, 3.8vw, 3.25rem)`) is de kortere padding van gewone secties op dezelfde kalk, waar de padding zelf de tussenruimte is. Dit zijn twee tokens en dat blijft zo. Eén maat voor beide gaf 360px lege muur tussen de vlakken.

**De Randmarge Regel.** De `margin-block` van `.geverfd` is `clamp(1.5rem, 2.4vw, 2.25rem)`: net meer dan de hoogte van de gekwaste rand (`clamp(20px, 2.6vw, 34px)`), zodat die vrij ligt zonder dat er een gat valt. Vergroot die marge niet; de rand hoort de muur te raken.

**De Regellengte Regel.** Lopende tekst is begrensd op 68ch (`--maat`, via `.maat`). Kort proza in een smalle kolom krijgt geen eigen maat maar de kolombreedte.

## Elevation & Depth

Er zijn **geen schaduwen** in dit systeem. Geen enkele `box-shadow`, geen enkele `filter: drop-shadow`, op de hele site. Diepte komt uit drie dingen die verf ook echt doet:

1. **Verflagen.** Een vlak in `veld-diep` op een vlak in `veld` leest als tweede laag verf, niet als een opgetild paneel. Dat is de enige stapeling die het systeem kent.
2. **Uit het lood.** Een foto zit op een vlek verf die 8 tot 18px is verschoven en `-0.7deg` gedraaid; de foto zelf staat `0.35deg` de andere kant op. Dat is geen slagschaduw maar een geplakt vel op een geverfde ondergrond. De vlek zit op `z-index: -1` binnen een `isolation: isolate`, dus hij kruipt nooit onder de buren.
3. **De pleisterkorrel.** Eén turbulentielaag over de volle paginahoogte in `mix-blend-mode: overlay` op `opacity: 0.2`, die zowel oplicht als verdiept, want pleisterwerk is naar twee kanten korrelig.

### Named Rules

**De Korrelregel.** De korrel is `position: absolute` op een `position: relative` body, met `z-index: 9`. Nooit `fixed`. Fixed legt de korrel op het glas in plaats van op het pleisterwerk en dekt bovendien maar één viewport, waardoor een paginabrede opname de rest van de muur kaal laat. Hij hoort bij de muur en scrollt dus mee.

**De Gemeten Materiaal Regel.** De korrelsterkte is gemeten, niet geschat. Doel is een spreiding van 12 tot 24 van 255 op een vlak vlak. Controleren met:

```
node scripts/meet-korrel.mjs <png> 5 <y> 80
```

Bemonster **binnen** de paginamarge van 96px (`x = 5`, breedte 80), anders meet je letterantialiasing in plaats van pleisterwerk. Gemeten op 13 oktober 2026 op een opname van 1440px breed, na de overstap naar zwart, met `--korrel-sterkte: 0.2`:

| Ondergrond | R | G | B |
| --- | --- | --- | --- |
| `kalk` (`#1a1a1a`) | 10 | 10 | 10 |
| `kalk-diep` (`#242322`) | 14 | 14 | 14 |
| `veld` (`#353433`) | 22 | 20 | 20 |

Op de kale zwarte muur blijft de spreiding met 10 net onder de ondergrens: `overlay` kan op bijna-zwart weinig verdiepen. Op de vlakken zit hij er ruim in. Dat is de huidige, bewuste stand: hoger zetten maakt de antraciet vlakken vuil. Verander `--korrel-sterkte` niet zonder opnieuw te meten. Zonder ffmpeg kan het ook met `sips -s format bmp --cropOffset <y> 5 -c 80 80` en de minimum- en maximumwaarde per kanaal.

## Shapes

De vormtaal kent precies drie vormen, en ze staan tegenover elkaar.

**De gekwaste rand.** Een geverfd vlak eindigt boven en onder in een kwasthaal: een SVG-pad van 1440 bij 40 eenheden, `preserveAspectRatio="none"`, absoluut geplaatst met `clamp(20px, 2.6vw, 34px)` hoogte en 1px overlap zodat er geen haarlijn valt. Er zijn **drie** varianten met verschillende amplitude en golflengte; de onderrand is dezelfde vorm gespiegeld (`scaleY(-1)`). Links en rechts krijgt een vlak nooit een rand: verf loopt de marge uit.

**De boog** (`rounded.boog`, `46% 46% 3px 3px / 26% 26% 3px 3px`): een hoge, ronde bovenkant op een vrijwel vierkante voet. De vorm van een raamboog of een nis in een gepleisterde muur. Uitsluitend voor foto's, en alleen waar de foto los op de muur staat (hero, aanpak, ervaring).

**De pil** (`rounded.pil`, 999px): knoppen, etiketten en de overslaan-link. De enige volledig ronde vorm in het systeem, en daarmee het signaal "hier kun je op klikken".

**Het plaatje** (`rounded.plaat`, 2px): vrijwel recht, met net genoeg zachtheid om niet gesneden te lijken. Voor foto's die als document of registratie functioneren (de panelen in de lus, het terrein bij de visie).

**Lijndikte.** Twee stappen: `--lijn` 2px (etiketrand, knoprand, scheidingslijn in de telling, waarschuwingskader) en `--lijn-zwaar` 4px (focusring en de bovenrand van de voet). Haarlijnen van 1px zijn de uitzondering, niet de basis: alleen scheidingsregels binnen een lijst.

**Streepjes in plaats van bullets.** Geen enkele lijst gebruikt een leesteken als opsommingsmerk. Een `streeplijst`-item krijgt een geschilderd staafje van 16 bij 2px in `lak-helder` (op donker: `goud`); de voetlijst een kortere variant van 12px in de eigen tekstkleur.

### Named Rules

**De Geen Kaarten Regel.** Vlakken op de muur hebben gekwaste randen, geen omlijning en geen radius. Er staat nergens een `border` rondom een blok inhoud, en er komt er nooit een bij. Een nieuw blok krijgt een verfkleur en twee `KwastRand`-componenten, of het krijgt niets. De enige rechthoekige omlijningen die het systeem toestaat zijn **gestippeld** en betekenen "hier ontbreekt nog iets": elk open punt (`.openpunt`) en de uitgeschakelde knop.

**De Randvariatie Regel.** Twee aangrenzende gekwaste randen krijgen nooit hetzelfde variantnummer. Eén hergebruikte golf op elke sectie is een sjabloon, geen kwast. Wissel `variant={1|2|3}` af per plek.

## Components

### Buttons (`Knop.astro`)

Karakter: een pil met een pijl erin, klein en dicht, meer een gedrukte knop dan een banner. Props: `href`, `soort` (`vol` | `lijn` | `licht` | `lijnlicht`), `uit` (boolean), `extern` (boolean, opent in een nieuw tabblad: voor PDF's en WhatsApp), `class`. Zonder `uit` rendert hij als `<a>`; met `uit` als een `<button type="button" disabled>`.

- **Shape:** volledig rond (`rounded.pil`), padding `0.85em 1.5em`, altijd een 2px rand, ook bij de gevulde variant.
- **Type:** Archivo 650, 0.875rem, breedte 96%, ls 0.02em, lh 1. Nooit kapitaal.
- **Vol:** goud vlak met zwarte tekst (`--knop-vol`). De enige primaire actie. Hover: naar licht goud, rand mee.
- **Lijn:** doorzichtig met een rand van 38% kwastzwart. Hover: rand naar vol kwastzwart. Op de hero krijgt deze variant expliciet de achtergrond van de muur, zodat de kwastregel er niet doorheen loopt.
- **Licht:** goud vlak met zwarte tekst (`--knop-licht`), voor gebruik op de gekleurde vlakken. Hover: **naar licht goud**, niet naar wit.
- **Lijnlicht:** de tweede actie op donker, naast een lichte knop. Doorzichtig, tekst in `op-veld`, rand van 45% `op-veld`. Hover: rand naar vol `op-veld`. Staat in de contactsectie naast de mailknop (WhatsApp).
- **Uit:** doorzichtig met een gestippelde gouden rand, `cursor: not-allowed`, pijl op 45% en geen hoverbeweging. Betekent: deze knop bestaat wel, maar heeft nog geen bestemming. Zichtbaar leeg is eerlijker dan een dode link.
- **Pijl:** een 1em SVG die bij hover 0.2em naar rechts schuift. Dat is de enige beweging die een knop maakt.

### Navigation (`Nav.astro`)

Een kleefzittende band in de kleur van de muur (`position: sticky`, `z-index: 20`) met onderaan een gekwaste rand in dezelfde kleur, zodat de band eindigt zoals alle andere verf op deze muur. Merk links, ankers in het midden als `plaat`-plaatjes in `op-kalk-zacht`, primaire pil rechts. Hover op een link: tekst naar `op-kalk` plus een 2px onderstreping in `lak-helder`. Onder 74rem zakken de links onder het merk in plaats van in een uitklapmenu te verdwijnen: vijf ankers verbergen achter een knop kost meer dan het oplevert. `scroll-padding-top` staat op 5.5rem zodat een anker niet onder de band eindigt. Onder 40rem is de band drie regels hoog en nam hij vast bovenin ruim een kwart van een telefoonscherm in; daar scrolt hij mee (`position: relative`) en zakt `scroll-padding-top` naar 1rem.

### Foto (`Foto.astro`)

De signatuurcomponent. Props: `src` (ImageMetadata), `alt`, `plaat` (optioneel bijschrift), `vorm` (`boog` | `recht`, standaard `boog`), `vlek` (verfkleur van de vlek eronder, standaard `lak-helder`; altijd goud, zie De Gouden Vlek Regel), `breedtes` (array voor `widths`), `sizes`, `verhouding` (optionele geforceerde `aspect-ratio`), `kwaliteit` (optionele webp-kwaliteit, alleen voor bronmateriaal dat slecht comprimeert), `class`.

Structuur: een `<figure>` met daarin een vel waarop de vlek verf achter het beeld ligt, en optioneel een `<figcaption>` met de `plaat`-opmaak, links uitgelijnd achter een 1px verticale streep op 45% currentColor, maximaal 34ch breed. Het bijschrift beschrijft wat je ziet; het is geen label dat de kop ernaast herhaalt.

`verhouding` bestaat voor één doel: twee foto's naast elkaar dwingen hetzelfde vak te vullen ondanks verschillende bronformaten. Gebruik het niet decoratief.

**De fotogalerij van het opleidingscentrum.** Vier rechte plaatjes (`vorm="recht"`, het is documentatie van de plek). De eerste, het terrein, staat groot onder de kop. Daaronder een flexrij met de vijver en de kring, en het grasveld als panorama over de volle breedte. In de rij krijgt elke foto `flex-grow` gelijk aan zijn `verhouding` (breedte gedeeld door hoogte) met basis 0, zodat de twee foto's exact even hoog uitkomen en hun bijschriften op één lijn beginnen. Wie een verhouding in het template wijzigt, wijzigt de `flex-grow` in de CSS mee. Onder 54rem stapelt de rij. De kop "Het opleidingscentrum." schaalt in de smalle kolom mee (`min(var(--t-h2), 4.3vw)`), anders loopt het lange woord de tekstkolom in.

### Paneel (het lusvak)

Karakter: twee vakken in `veld-diep` binnen het antraciet vlak, rechts naast de kop en de inleiding, elk met een gekwaste rand boven en onder, en met de vaste volgorde foto (met bijschrift), dan de zin. De zin loopt door over de twee vakken: "De jongere wordt opgeleid…" links, "…en het kind wordt begeleid." rechts. Een subgrid legt foto en zin van beide vakken op dezelfde rijen, zodat de zin rechts niet een regel hoger begint als het fotobijschrift links langer is. De vakken staan bewust niet over de volle breedte: de aangeleverde foto's zijn klein (het kind 728 bij 546 pixels) en werden daar wazig opgeblazen. Op 1440px is een lusfoto 285px breed. Komen er grotere originelen, dan kan het raster terug naar de volle breedte.

**De Gelijkheidsregel.** De twee panelen in de peer-lus zijn **geometrisch identiek**: zelfde breedte (`repeat(2, minmax(0, 1fr))`, exact 1/1), zelfde `align-items: stretch`, zelfde padding, zelfde achtergrond, zelfde `vorm="recht"`, zelfde `vlek`, en dezelfde geforceerde `verhouding="1 / 1"` op de foto. Dat is geen opmaakvoorkeur maar de productclaim letterlijk gerenderd: de jongere die wordt opgeleid en het kind dat wordt begeleid staan in hetzelfde vak omdat ze dezelfde persoon worden. Ongelijke panelen breken de belofte. Het enige wat mag verschillen is het variantnummer van de gekwaste rand.

### Bord (het partnerbord)

Wat een sponsor in het echt koopt is een geschilderd bord langs de rand van het veld. Drie borden onder elkaar, van klein naar groot, elk een vol vlak in een eigen verf met een gekwaste rand boven en onder: Community partner op antraciet, Impact partner op zand, Strategic partner op goud: ze lopen op van donker naar goud. Tweekoloms 0.72/1.28. Links de naam in `--t-bord` met het werkwoord (Verbinden, Verbreden, Verankeren) cursief eronder, het bedrag in Vollkorn op `--t-h4` met `.cijfers`, en de doelgroep ("Voor: …") klein. Rechts eventueel "Alles uit …, plus:" en een `streeplijst` met de voordelen. Op verf dragen de streepjes de inkt van het bord in plaats van `lak-helder`, want goud verdwijnt op goud. Geen omlijning, geen radius, geen schaduw: verf op de muur. Verf en inkt komen uit `--bord-1` tot en met `--bord-3` en hun `-inkt` in `tokens.css`, via één array in het template.

### Kwastrand (`KwastRand.astro`)

De rand van een geverfd vlak. Props: `kleur` (verplicht, meestal een `var(--...)`), `positie` (`boven` | `onder`), `variant` (1 | 2 | 3), `class`. Absoluut geplaatst, dus de ouder heeft `position: relative` nodig; `section` heeft dat globaal. De kleur moet de achtergrondkleur van het vlak zijn dat hij afsluit, anders leest het als een tweede kleurvlak in plaats van als de rand van het eerste.

### Kwastregel (`Kwastregel.astro`)

Eén kwasthaal als scheidingsregel: dikker in het midden waar de kwast vol zit, uitlopend aan het eind waar hij leegraakt. Props: `kleur` (standaard `currentColor`), `class`. Hoogte `clamp(7px, 0.8vw, 11px)`, `opacity: 0.72`. Gebruikt op de hero, waar hij achter de knoppen doorloopt zodat de pil op de regel staat. Waar het ontwerp een geschilderde regel belooft, staat deze component, niet de platte `.regel`-helper.

### Merk (`Merk.astro`)

Het Vale da Serra-merk, nagetekend als SVG: een kompasroos over een bergsilhouet, in een viewBox van 48 bij 44. Props: `hoogte` (standaard 2.4rem), `kleur` (standaard `currentColor`), `toonCoordinaten` (boolean), `class`. De woordmerkgroottes schalen mee met `hoogte` (naam op 34%, coördinaten op 23%), zodat het merk één ding blijft op elke schaal. De coördinaten (`3°55′33.93″ S · 38°43′38.49″ W`) staan alleen in de voet, niet in de navigatie. Dit is een vectorherteking van een rasterafbeelding uit het bronmateriaal; hij wordt vervangen zodra er een echt logobestand is. Losse logobestanden (SVG met de letters als paden, en PNG) staan in `merk/`, gemaakt met `scripts/maak-logo.py`.

### Etiket

Handgeschilderd etiket: pilvormig, doorzichtig, met een 2px rand op 55% `lak`. Archivo 600 op 0.875rem. Voor korte opsommingen die geen lijst hoeven te zijn (de onderdelen van de aanpak).

### Named Rules

**De Scoperegel.** Een klasse die je aan een Astro-childcomponent doorgeeft, erft het `data-astro-cid`-attribuut van het oudertemplate **niet**. Een gescopete regel die zo'n klasse aanspreekt moet daarom geschreven worden als `.gescopete-ouder :global(.de-klasse)`, anders valt hij geruisloos weg. Vijf regels zijn op precies deze manier dood geweest. Het is veilig omdat de ouderselector wél gescopet is, dus er lekt niets. Herken je aan het patroon: staat er in het template `class="iets"` op een `<Component />`, dan hoort de CSS ernaar te wijzen via `:global()`.

**De Placeholderregel.** Elk gat in het materiaal is zichtbaar gemarkeerd, met een gestippelde rand (`.openpunt`) en een `role="note"`. Sinds de aanlevering van 4 oktober (contactgegevens, bedragen, PDF's, foto's van het opleidingscentrum) staat er alleen nog een register van openstaande punten in de voet. Het mechanisme blijft: `.openpunt` voor een gat in een sectie, en een `Knop` met `uit` voor een actie zonder bestemming. Een aannemelijke invulling is nooit toegestaan: een zichtbaar gat is eerlijker en de opdrachtgever ziet meteen wat er nog moet komen.

## Do's and Don'ts

### Do:

- **Do** de tekstkleur van de ondergrond nemen via het bijbehorende `op-*`-token, en secundaire tekst tinten vanuit die ondergrond.
- **Do** een nieuw geverfd vlak afsluiten met `KwastRand` boven en onder, in de achtergrondkleur van dat vlak, en met wisselende `variant`.
- **Do** `--sectie` gebruiken voor padding binnen een geverfd vlak en `--sectie-vlak` voor gewone secties op kalk.
- **Do** `.gescopete-ouder :global(.klasse)` schrijven zodra je een klasse aan een childcomponent doorgeeft.
- **Do** de twee lusvakken exact gelijk houden in maat, behandeling en beeldverhouding.
- **Do** ongelijke rasterverhoudingen kiezen (1.35/0.65, 0.86/1.14) in plaats van 50/50, behalve waar gelijkheid inhoudelijk vereist is.
- **Do** een sectiekop een `max-width` in `ch` geven zodat de afbreking een keuze is.
- **Do** de korrel opnieuw meten na elke wijziging aan `--korrel-sterkte`, de blend-mode of de achtergrondkleuren, met `node scripts/meet-korrel.mjs <png> 5 <y> 80`.
- **Do** een ontbrekend gegeven zichtbaar markeren met een gestippelde rand en een `role="note"`.
- **Do** getallen in kolommen `.cijfers` geven.

### Don't:

- **Don't** kaarten maken. Geen `border` rondom een blok inhoud, geen radius op een sectie, geen omlijnde tegels. Verf heeft gekwaste randen. De enige toegestane rechthoekige omlijning is gestippeld en betekent "ontbreekt nog".
- **Don't** een `box-shadow` of `drop-shadow` toevoegen. Dit systeem heeft er nul en dat is de bedoeling; diepte komt uit verflagen, verschuiving en korrel.
- **Don't** `.geverfd` en `.donker` samenvoegen of door elkaar gebruiken. Gekwaste randen en donkere ondergrond zijn onafhankelijke assen.
- **Don't** de korrel op `position: fixed` zetten. Hij hoort op het pleisterwerk, niet op het glas, en fixed dekt maar één viewport.
- **Don't** de korrel meten buiten de paginamarge van 96px: daar meet je letterantialiasing.
- **Don't** een kicker of eyebrow boven een kop zetten, in welke vorm dan ook.
- **Don't** `.plaat` gebruiken als label dat de kop ernaast herhaalt. Sjabloonplaatjes dragen informatie: fotobijschriften, contactlabels, het register van openstaande punten.
- **Don't** een kastlijntje (em dash) in zichtbare tekst zetten, in geen enkele taal.
- **Don't** grijs gebruiken voor secundaire tekst. Tint vanuit de ondergrond.
- **Don't** een tweede bewegend element toevoegen. Er is precies één geregisseerd moment op deze pagina: het circuit van de lus dat gaat lopen zodra je het ziet (`stroke-dasharray: 6 14`, `animation: kruip 26s linear infinite`), aangezet door een IntersectionObserver op 25% zichtbaarheid die zichzelf daarna losknoopt, en volledig uitgeschakeld onder `prefers-reduced-motion: reduce`. Alle andere beweging is een toestandsovergang van 220ms op hover of focus, nooit iets dat vanzelf begint.
- **Don't** een nieuwe kleur introduceren. Zwart, antraciet, goud, zand en crème. Een tint ertussenin verdwijnt tegen de muur.
- **Don't** een geverfd vlak links of rechts een rand geven. Verf loopt de marge uit.

## Bekende inconsistenties in de huidige code

Eerlijk vastgelegd zodat niemand ze voor systeem aanziet.

- **Dood token.** `--duur: 800ms` staat in `tokens.css` maar wordt nergens gebruikt; alle overgangen draaien op `--duur-kort` (220ms). Eén duur is dus het feitelijke systeem, niet twee.
- **Ongebruikte helpers.** `.regel` (de platte 1px-scheidingsregel) en `.maat-kort` / `--maat-kort: 46ch` staan in `global.css` maar worden in geen enkel template toegepast. `.regel` is in de praktijk vervangen door `Kwastregel.astro`. Beschouw ze niet als vastgelegd systeem tot ze een gebruiker hebben.
- **Dode responsieve regel.** In `src/pages/index.astro` zet de 62rem-mediaquery `grid-template-columns` en `gap` op `.pad__spoor`, maar dat element is geen grid- of flexcontainer. Beide declaraties doen niets.
- **Ongetokeniseerde lettergewichten.** Naast de gewichten in de typeschaal staan losse waarden in de code: 550 (waarschuwing bij de doelen), 650 (knoplabel, eenheid in de telling), 600 (etiket, keerpunt, plaat). Ze zijn legitiem omdat Archivo en Vollkorn variabele fonts zijn, maar er is geen gewichtsschaal als token.
- **Korrelspreiding per kanaal.** Zie De Gemeten Materiaal Regel: op kalk haalt het rode kanaal 10 in plaats van de beoogde 12 tot 24, terwijl blauw op 25 zit. Bekend en geaccepteerd, niet stilzwijgend gladgestreken.

### De tussenweg, in zijn eigen kleuren

Op 19 oktober 2026 kwam de vraag of er "ietsjes meer" van de kleuren van onnoraadsen.nl in kon. `/voorbeeld-tussen-goud/` is dezelfde zandmuur als hierboven, maar met antraciet en goud in plaats van diepgroen en terracotta.

Dat kan niet door simpelweg zijn goud over te nemen. `#d4a84b` is gemaakt voor een zwarte ondergrond en haalt op zand 1,4:1 — onleesbaar. Dit palet splitst de goudfamilie daarom in tweeën. Op de muur staat een warm brons (`--lak`, `#6f4a16`), donker genoeg om als tekst en als knop te lezen. Het échte goud (`--goud`, zijn `#d4a84b`) verschijnt uitsluitend op de antracieten vlakken, waar het wél schittert: op de lus, het contactblok en het bovenste partnerbord. Een messing plaat op een donker paneel, niet een gouden letter op zand.

Het eerste brons stond op `#6f5312` en las als een grote olijfgroene vlak bij het impactblok, dat de volle `--lak` als ondergrond neemt. `#6f4a16` is dezelfde helderheid maar warmer, en leest als brons.
