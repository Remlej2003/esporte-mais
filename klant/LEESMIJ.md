# Klantdossier Onno Raadsen — begin hier

Dit mapje is er voor de volgende AI-sessie (en voor Jelmer zelf over drie
maanden). Niet de code, maar de opdracht: wie de klant is, wat hij gevraagd
heeft, wat er is toegezegd en wat er nog ligt.

`DESIGN.md` en `PRODUCT.md` in de hoofdmap beschrijven de site. Dit beschrijft
de klant.

| Bestand | Waarvoor |
|---|---|
| `openstaand.md` | **Begin hier.** Alles wat nog moet, per site, met wat het blokkeert. |
| `gesprekken/2026-10-spraakberichten.md` | De vier spraakberichten van okt 2026, uitgeschreven. Hierin staat letterlijk wat is beloofd. |
| `gesprekken/_ruwe-whisper-output/` | Onbewerkte transcriptie, voor als je wilt nagaan of ik iets verkeerd heb gelezen. |
| `antwoord-aan-onno-2026-10-19.md` | Concept-antwoord op Onno's mail van 11 oktober. Nog niet verstuurd. |

---

## De situatie in het kort

Jelmer bouwt en onderhoudt voor Onno Raadsen **drie** websites. Ze lopen door
elkaar in dezelfde WhatsApp-chat, en dat is de belangrijkste reden dat er
dingen blijven liggen:

| Site | Repo | Wat het is |
|---|---|---|
| **maisesporte.nl** | `esporte-mais` (deze) | Het nieuwe project. Nog niet live. |
| **watziejij.nu** | `zie-jij-de-wereld-main` | Lesprogramma voor basisscholen. Live. |
| **onnoraadsen.nl** | `Onnos-site` | Onno's persoonlijke site. Live. |

Als Onno "de site" zegt, controleer welke hij bedoelt. Dat is in deze chat
meerdere keren misgegaan.

### MAIS ESPORTE zelf

Jongeren uit Braziliaanse favela's worden opgeleid tot Urban Adventure Coach en
begeleiden daarna zelf de kinderen in hun eigen wijk. Opleidingscentrum is
Sitio Vale da Serra bij Maranguape, Ceará. Juridische afzender is **Vale da
Serra Company**. Voortbouwend op 25 jaar ARCA (`arcaceara.org.br`). De site
moet drie talen: Nederlands, Engels, Portugees — die staan er al.

Let op de naam: **MAIS ESPORTE**, niet "Esporte Mais". De repo en de
Vercel-URL heten nog andersom; dat is historie, niet de merknaam.

---

## Hoe Onno werkt — lees dit vóór je iets terugschrijft

Dit is geen karakterschets voor de lol; het verklaart waarom dingen
vastlopen.

- **Hij stuurt veel in spraakberichten en losse appjes.** Eén onderwerp komt
  vaak over vijf berichten verdeeld. Lees altijd het blok eromheen.
- **Hij vraagt dingen vaker dan één keer en houdt dat bij.** "nogmaals (derde
  keer....)". Als hij iets herhaalt, is het al een tijd blijven liggen — dan is
  erkennen beter dan uitleggen.
- **Hij reageert op wat hij ziet, niet op wat er in de code staat.** "Ik zie
  geen veranderingen" betekent meestal dat er niet gedeployd is, of dat hij een
  gecachete versie ziet. Controleer wat er daadwerkelijk live staat.
- **Bestandsoverdracht gaat regelmatig mis.** Er zijn in deze chat meerdere
  WeTransfers verlopen voordat ze gedownload waren. Vraag om mail, en download
  meteen.
- **Hij verandert van gedachten, en dat mag.** Op 12 oktober koos hij de
  donkere versie; op 15 oktober trok hij dat weer open. Leg keuzes daarom vast
  met datum.
- **Hij is in de basis tevreden en aardig** ("Goed bezig weer Jelmer!"). De
  irritatie gaat vrijwel altijd over tempo en over herhaling, niet over
  kwaliteit.

### Praktisch

- Domeinen staan bij **Cloud86**. Hosting van de nieuwe sites via **Vercel**
  (gratis).
- Voor Cloud86 is een **verificatiecode** nodig die naar Onno gaat. Hij moet
  dus bereikbaar zijn op het moment dat je inlogt; die codes verlopen snel.
- `info@maisesporte.nl` is ingesteld en komt binnen bij Onno; webmail op
  `webmail.maisesporte.nl`.
- Tarief **€ 15 per uur** sinds 9 december 2025, uren in een Google Sheet,
  betaling in termijnen.
- **Wachtwoorden staan hier bewust niet in.** Die staan in de WhatsApp-chat en
  horen niet in een git-repo.

---

## Waar het nu staat — 19 oktober 2026

De site is **nog niet live** op maisesporte.nl en staat op
`esporte-mais.vercel.app`.

Op **15 oktober** vroeg Onno om een derde kleurvoorstel: het lichte was hem te
licht, en het donkere lijkt te veel op zijn eigen onnoraadsen.nl. Jelmer
beloofde een tussenweg, voor uiterlijk zondag 18 oktober. Op 18 oktober appte
hij "het is vanavond af, morgen kun je kijken". **Die toezegging is te laat.**

In deze sessie (19 oktober) is gedaan en live gezet:

1. **Twee tussenversies gebouwd**, allebei op een warme zandmuur:
   `/voorbeeld-tussen/` met diepgroen en terracotta, en
   `/voorbeeld-tussen-goud/` met zijn eigen antraciet en goud. Beide staan
   op `esporte-mais.vercel.app` en zijn zonder inloggen te openen. De
   startpagina is níet gewijzigd en staat nog donker. Zie `DESIGN.md`.
2. **De partnership-PDF vervangen** door de versie van 9 oktober.
3. Dit dossier aangelegd, met een concept-antwoord op zijn mail.

**Let op bij preview-links:** dit Vercel-project heeft deployment protection
aan voor branch-previews. Een link als
`esporte-mais-git-<branch>-project-onnos-projects.vercel.app` stuurt Onno naar
een Vercel-inlogscherm. Alleen `esporte-mais.vercel.app` (productie, vanaf
`main`) is voor hem te openen. Zo zag hij de vorige kleurvoorbeelden ook.

### Wat er nog ligt, en op wie het wacht

Alles staat in `openstaand.md`. Vier dingen kunnen niet door een AI-sessie
afgemaakt worden, omdat ze buiten deze computer liggen:

| Punt | Wacht op |
|---|---|
| Brochure Wat zie jij? vervangen | Onno moet het bestand opnieuw sturen — het staat nergens op deze computer |
| Uitgebreide versie downloadbaar? | Onno — zijn eigen instructies spreken elkaar tegen, zie M-10 |
| Site live op maisesporte.nl | Onno's kleurkeuze, plus een Cloud86-code die naar hem gaat |
| Het concept-antwoord versturen | Jelmer — hij stuurt het zelf |

Het hardnekkigste punt blijft de brochure van **Wat zie jij?**: drie keer
gevraagd, nog steeds niet gedaan. Vraag er als eerste naar.

---

## Drie dingen die je makkelijk verkeerd doet

1. **De partnership-PDF in `~/Downloads` is de oude.** De goede komt uit de
   WhatsApp-export van 14 oktober. Gelijke naam, ander bestand.
2. **Kleuren wijzig je in `src/styles/tokens.css`, nergens anders.** De
   componenten kennen alleen rolnamen (`--kalk` is de muur, `--veld` het
   geverfde vlak, `--lak` het accent). Een losse kleurwaarde in een component
   is een fout.
3. **Het donkere palet zet koppen in goud; het tussenpalet in inkt.** Goud
   leest op elke ondergrond, inkt niet. Elk vlak dat zijn eigen tekstkleur zet
   — `.lus`, `.contact`, `.doelen`, `.bord` — heeft daarom een uitzondering in
   `global.css` nodig. Vergeet je die, dan staat er donkere inkt op donkergroen.
   Dat is in deze sessie één keer misgegaan en hersteld.
