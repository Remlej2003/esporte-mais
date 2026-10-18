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

In deze sessie (19 oktober) is gedaan:

1. **De tussenversie gebouwd** → `/voorbeeld-tussen/`. Warme zandmuur,
   diepgroen en terracotta, goud alleen nog als hooglicht. De site zelf is
   níet gewijzigd en staat nog steeds donker. Zie `DESIGN.md`, "De tussenweg".
2. **De partnership-PDF vervangen** door de versie van 9 oktober.
3. Dit dossier aangelegd.

Alles wat nog ligt staat in `openstaand.md`. Het hardnekkigste punt is de
brochure van **Wat zie jij?**, drie keer gevraagd en nog steeds niet gedaan,
omdat het bronbestand nergens op deze computer te vinden is.

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
