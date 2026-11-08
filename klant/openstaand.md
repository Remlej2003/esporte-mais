# Openstaand werk voor Onno — stand op 8 november 2026

Alles wat Onno Raadsen gevraagd heeft en nog niet af is, met per punt waar het
vandaan komt en wat het blokkeert. Drie sites lopen door elkaar in dezelfde
WhatsApp- en mailwisseling; ze staan hier uit elkaar getrokken.

Bronnen:
`A` = spraakbericht (uitgeschreven in `gesprekken/2026-10-spraakberichten.md`) ·
`W` = WhatsApp-tekst · `E` = e-mail Onno 11 oktober · `D` = document
"Aanpassingen 4 oktober.docx"

Het spraakbericht van 30 oktober staat in
`gesprekken/2026-10-30-onno-projectplan-op-aanvraag.md`, de getypte opdracht
van 31 oktober in `gesprekken/2026-10-31-onno-fotos-en-filmpje.md`.

---

## 1. MAIS ESPORTE — deze repo, maisesporte.nl

| # | Punt | Bron | Stand |
|---|------|------|-------|
| M-1 | Derde kleurversie, de "tussenweg" | A 15 okt | **Af en live** — definitief besluit, staat op `/` |
| M-2 | Partnership-PDF vervangen door laatste versie | W 14 okt | **Af** — zie hieronder |
| M-3 | Site live zetten op maisesporte.nl | W 14 okt, A 20 okt | **Af en live** — 26 oktober, zie hieronder |
| M-4 | Logo naar Onno sturen | W 14 okt, D 4 okt | **Klaar om te versturen** — downloadlink in de conceptmail |
| M-5 | Uitleggen wat "logo als vectorbestand" is | E | **Klaar om te versturen** — in de conceptmail en de LEES MIJ van de zip |
| M-6 | Moet er een logo bij "Onze missie"? | E | **Open** — vraag van Onno terug aan Jelmer |
| M-7 | Grotere originelen van twee foto's | E, W 14 okt | **Open** — Onno moet ze sturen; het regeltje onderaan de site is op zijn verzoek weg (20 okt) |
| M-8 | "Foto's bij onze aanpak zijn slecht, kleiner maken?" | E | **Klaar om te versturen** — antwoord in de conceptmail |
| M-9 | Leeg vlak naast tekst bij Opleidingscentrum | A 12 okt | **Niet reproduceerbaar** — zie hieronder |
| M-10 | Uitgebreide versie: downloaden of op aanvraag? | D 4 okt, A 30 okt | **Teruggedraaid** — sinds 30 oktober weer op aanvraag |
| M-11 | Drie foto's vervangen en een filmpje erin | W 31 okt | **Af** — zie hieronder |
| M-12 | Onepager op de site, "met titel One pager" | W begin nov | **Af en live** — 8 november, zie hieronder |
| M-13 | Filmpje vervangen door het origineel | W 5 nov | **Af en live** — 8 november, zie hieronder |

### M-3 — live op maisesporte.nl sinds 26 oktober

Onno op 20 oktober (spraakbericht): "Nog vast te stellen" onderaan weghalen,
en "zet hem online". Jelmer koos de **tussenversie**.

- Tussenweg is het standaardpalet op alle talen, `/voorbeeld-tussen/` stuurt
  door naar `/`. Het blok "Nog vast te stellen" is weg. noindex eraf,
  canonical naar `https://maisesporte.nl/`.
- **Vercel** (team `project-onnos-projects`, inloggen als `projectonno-6492`):
  `maisesporte.nl` → Production, `www.maisesporte.nl` → 308 naar
  `maisesporte.nl`. Alle drie Valid Configuration, SSL door Vercel.
- **Cloud86-DNS**, zone maisesporte.nl, na de wijziging:

| Naam | Type | Waarde |
|---|---|---|
| `@` | A | `216.198.79.1` (Vercel) |
| `www` | CNAME | `61170e50c5ccd6da.vercel-dns-017.com` (Vercel) |
| `webmail` | A | `45.82.188.146` (Cloud86) |
| `mail`, `smtp`, `ftp` | CNAME | `webmail.maisesporte.nl` |
| `@` | MX | `10 webmail.maisesporte.nl` |
| `@` | TXT | `"v=spf1 +mx +ip4:45.82.188.146 -all"` |
| `*` | A | `45.82.188.146` (ongewijzigd) |

  Vroeger wees alles, ook MX en `mail`, naar `maisesporte.nl` zelf. Die zijn
  eerst losgekoppeld, daarna pas `@` naar Vercel. Gecontroleerd: de
  mailserver neemt post voor `info@maisesporte.nl` nog aan.
- **Let op mailapps:** wie in een mailapp `maisesporte.nl` als IMAP/SMTP-server
  had ingevuld, moet dat veranderen in `mail.maisesporte.nl` (of
  `shared36.cloud86-host.nl`, waar het certificaat van de mailserver op staat).
  Webmail via `webmail.maisesporte.nl` werkt ongewijzigd.

### M-1 — de kleurkeuze is definitief

**Dit punt is dicht. De groen-terracotta tussenweg is het besluit en staat
sinds 26 oktober op maisesporte.nl als het enige palet.** Niet opnieuw
openbreken, en niet opnieuw aan Onno voorleggen.

| Adres | Wat het is |
|---|---|
| `/` | de site, groen-terracotta tussenweg |
| `/voorbeeld-tussen/`, `/voorbeeld-tussen-goud/` en de andere voorbeeldadressen | sturen door naar `/` |

Op 19 oktober is er ook een variant gemaakt in Onno's eigen antraciet en goud
(`/voorbeeld-tussen-goud/`). Jelmer koos dezelfde dag voor de groen-terracotta
versie, en de gouden is weer verwijderd; dat oude adres stuurt door naar `/`.

**Let op, dit is één keer misgegaan:** bij het kiezen tussen de twee is eerst
de verkeerde weggehaald — "die met gele teksten, die ipv die met donkergroen"
is gelezen als *houd* de gele, terwijl het *weg met* de gele betekende. Bij
een keuze tussen varianten: vraag terug welke **blijft**, met het adres erbij.

Schermafdrukken staan in `kleurvergelijking/`, en `DESIGN.md` legt de keuzes
uit.

### M-2 — wat er precies is gewisseld

Op de site stond de versie van **6 oktober** (`c33184bb…`, 645.014 bytes). Onno
stuurde op 14 oktober de versie van **9 oktober** (`1ac5bc62…`, 643.452 bytes)
met "ik zie dat bij partnership mogelijkheden niet de laatste versie staat".
Hij had gelijk. De nieuwe staat nu op `public/downloads/`.

Pas op: de kopie in Jelmers Downloads-map heet hetzelfde maar is de **oude**.
De juiste komt uit de WhatsApp-export, niet uit Downloads.

### M-7 en M-8 — dit is één en hetzelfde probleem

Onno noemt dit op drie plekken anders, maar het gaat steeds om dezelfde twee
foto's in "Jongeren leiden jongeren":

| Bestand | Resolutie | Oordeel |
|---|---|---|
| `kratten-toren.jpg` | 900 × 900 | te klein voor hoe groot hij staat |
| `kind-begeleid.jpg` | 728 × 546 | te klein, en de slechtste van de twee |

Ter vergelijking: de foto's van het opleidingscentrum zijn 1600 × 1200 tot
2000 × 1500. Ook `band-paal.jpg` (572 × 1090) bij Onze aanpak is aan de krappe
kant.

Onno's eigen voorstel — ze kleiner tonen — werkt en kan meteen. Maar het echte
antwoord is dat hij de originelen opstuurt; die zijn er, want deze twee zijn
uit de PDF geplukt in plaats van los aangeleverd.

### M-9 — ik zie het lege vlak niet meer

Op 19 oktober nagelopen op 1440, 1920 en mobiel. Het opleidingscentrum heeft
links de kop met daaronder het grote beeld (sinds 31 oktober het filmpje,
daarvoor de overzichtsfoto), rechts de tekst, en daaronder de rij met drie
foto's. Op beide desktopbreedtes vullen de kolommen elkaar; op
mobiel staat alles onder elkaar, dus daar kan per definitie geen vlak "naast de
tekst" staan.

Waarschijnlijk keek Onno naar een versie van vóór 10 oktober, toen de vier
foto's van het centrum erbij kwamen — zijn bericht is van 12 oktober, maar de
deploy kan hem later bereikt hebben. **Niet zelf gaan gokken naar een
oplossing**: vraag hem een schermafdruk als hij het nog ziet.

### M-10 — hier is een tegenspraak zelf opgelost, en dat was fout

Twee instructies spraken elkaar tegen:

- `D` (4 oktober) zegt: "Bij maisesporte.nl komt deze versie ook te staan,
  samen met de verkorte versie." Te lezen als: beide als download.
- De site deed: korte versie als download, volledig projectplan **op aanvraag**
  via een mailknop. In `nl.json` stond erbij `"Op verzoek"`, en commit
  `e2a1316` heet "Aanpassingen 4 oktober verwerkt".

Op 19 oktober is die tegenspraak **zelf beslist** in het voordeel van `D`:
beide versies als download, op allebei de sites (commit `fba1818`). Er is niet
teruggevraagd. Op 30 oktober kwam Onno er zelf op terug (`A` 30 okt):

> "Nu zie ik dat mensen de verlengde versie van het project kunnen downloaden.
> Ik vind het eigenlijk veel fijner wat je eerst had, dat mensen die kunnen
> aanvragen. […] Kijk even naar de tekst zoals je die had staan in de
> één-na-laatste versie, want dat was prima."

**Dit is dezelfde fout als bij de kleurvarianten (zie M-1): bij een
tegenspraak of een keuze hoort een vraag terug, geen eigen besluit.** Dat stond
al in dit dossier opgeschreven en is één punt lager alsnog misgegaan.

Op 30 oktober teruggedraaid op maisesporte.nl:

- De oude tekst en de aanvraagknop met mailto staan terug in nl, en en pt —
  letterlijk de formulering van vóór `fba1818`, want dat is wat Onno "prima"
  noemde.
- `mais-esporte-uitgebreide-versie.pdf` is **uit `public/downloads/` gehaald**,
  zodat de directe link ook echt niet meer werkt. Een knop weghalen terwijl het
  bestand blijft staan is alleen cosmetisch. Het bestand blijft in de
  git-historie (`fba1818`) en op onnoraadsen.nl.

**Op onnoraadsen.nl is het dezelfde dag ook teruggedraaid**, op verzoek van
Jelmer ("onnoraadsen.nl moet ook de op aanvraag hebben"). Eerst bleef die site
staan omdat de downloadtekst daar Onno's eigen formulering was; dat argument
weegt niet op tegen dat het plan dan alsnog overal te downloaden was. Zie O-2.
De twee sites staan dus weer gelijk, nu allebei op aanvraag.

De documenten op maisesporte, met hun md5:

| Bestand | md5 |
|---|---|
| `mais-esporte-korte-versie.pdf` | `d9b84ec5209941420a3d21c3037f47b9` |
| `mais-esporte-partnershipmogelijkheden.pdf` | `1ac5bc623f8fa18c5bd2ead45f0effec` |

Op onnoraadsen.nl staan deze twee plus
`mais-esporte-uitgebreide-versie.pdf` (`5a001d9c73e06fe2816cb28d7dc208c3`).

### M-11 — drie foto's vervangen en het filmpje erin, 31 oktober

Onno vroeg het 's ochtends om 11:16, met een reden erbij: "Morgen ga ik
investeerders benaderen en zou fijn als alles gelijk goed staat." Hij wees per
stuk aan welk beeld weg moest, met een schermafdruk erbij, en gaf twee keer
zelf het bijschrift op. Uitgeschreven in
`gesprekken/2026-10-31-onno-fotos-en-filmpje.md`.

| Plek op de site | Was | Is nu |
|---|---|---|
| Onze missie, naast de tekst | `terrein.jpg` | `terrein-kamp.jpg` — tenten bij schemering |
| Opleidingscentrum, groot onder de kop | `centrum-terrein.jpg` | het filmpje `public/video/vale-da-serra.mp4` |
| Opleidingscentrum, rij van twee | `centrum-kring.jpg` | `centrum-samenwerking.jpg` — "Samenwerkingsoefening" |
| Opleidingscentrum, breed eronder | `centrum-grasveld.jpg` | `centrum-uitzicht.jpg` — "75 hectare grond op het opleidingscentrum" |

De vier oude bestanden zijn uit `src/images/` verwijderd; ze blijven in de
git-historie. De md5 van wat er nu staat:

| Bestand | md5 |
|---|---|
| `src/images/terrein-kamp.jpg` | `04766386c7cd9bf27a278b1b52671fb1` |
| `src/images/centrum-samenwerking.jpg` | `613df795b001db4bbc179c9feb85d04c` |
| `src/images/centrum-uitzicht.jpg` | `eddbe3d3fa457b21d30c8dc17aeb3346` |
| `public/video/vale-da-serra.mp4` | `3fb350a8b3a6757852c47c1441e6ce6a` |

Wat er onderweg aan keuzes is gemaakt, zodat het terug te draaien is:

- **De samenwerkingsfoto is bijgesneden.** De bron is staand (3000 × 4000); het
  vak in die rij is liggend 3:2. Uitgesneden rond de groep op de stam, 2000 ×
  1333. De volle staande foto zit in de WhatsApp-export
  (`00000086-20240809_113211.jpg`, md5 `b8edfa394c3a227717e48876b638abf9`).
- **Het brede vak staat nu op 16:9 in plaats van 2000/922.** Onno's foto is
  4:3; in de oude smalle band viel de lucht en het gazon eraf. Het vak is
  alleen in zijn eigen rij, dus geen enkele andere foto verschuift hierdoor.
- **"Samenwerk oefening" is "Samenwerkingsoefening" geworden** — los
  geschreven is het geen Nederlands, en dit staat op de pagina waar hij
  investeerders naartoe stuurt. Zijn tweede bijschrift staat er letterlijk.
- **Het filmpje speelt niet uit zichzelf.** Nieuw component `Film.astro`, met
  `preload="none"`: tot iemand op play drukt wordt er niets van de 25 MB
  opgehaald, alleen het posterbeeld van 45 kB. Geen autoplay, geen geluid dat
  zomaar begint. Het staat op zijn eigen staande maat (478 × 850) en wordt niet
  breder gerekt dan 480 pixels, want breder is alleen maar zachter.

Twee dingen die aandacht vragen en **niet** zelf zijn beslist:

1. ~~**Er zijn twee filmpjes gestuurd.**~~ **Beantwoord op 5 november:** Onno
   stuurde het origineel van dezelfde film, dus het was de goede. Zie M-13.
2. **Het filmpje is niet van MAIS ESPORTE.** Het is de promotievideo van het
   landgoed: Portugese ondertitels, GPS-coördinaten in beeld en het logo van
   Vale da Serra, 2 minuten 17 lang. Onno vroeg er zelf om en werkt met die
   plek, dus het staat erin — maar op een pagina voor investeerders staat nu
   het merk van een ander. Dat is zijn keuze om te maken, niet die van de
   bouwer.

### M-12 — de onepager erbij, 8 november

Onno stuurde `MAIS ESPORTE onepager.pdf` met "Kan je deze nog op de site
zetten? Met titel One pager". Uitgeschreven in
`gesprekken/2026-11-onno-onepager-en-origineel.md`.

- Staat op `public/downloads/mais-esporte-one-pager.pdf`.
- Eerste knop in "Lees het hele verhaal", vóór de korte versie: van kort naar
  lang. Naam "One pager (PDF)"; in het Engels en Portugees met "(PDF, Dutch)"
  en "(PDF, em holandês)", net als de andere PDF's.
- De inleiding van dat blok noemt hem nu ook ("De one pager en de korte versie
  kun je hier lezen"), in alle drie de talen.
- Erbij, niet in plaats van: de korte versie blijft staan. Bedoelde hij
  vervangen, dan is dat één regel weghalen.

### M-13 — het filmpje in de volle kwaliteit, 8 november

Onno stuurde op 5 november "het origineel": dezelfde film van 2 minuten 17,
maar in 4K (2160 × 3840, 858,6 MB) in plaats van de 478 × 850 die WhatsApp er
op 31 oktober van had gemaakt.

| Bestand | Wat | Grootte |
|---|---|---|
| `public/video/vale-da-serra.webm` | 1080 × 1920, VP9 + Opus, twee passes op 1,6 Mbit/s | 29 MB |
| `public/video/vale-da-serra.mp4` | 1080 × 1920, H.264 + AAC, terugval | 43 MB (was 25 MB bij 478 breed) |
| `public/video/vale-da-serra-poster.webp` | posterbeeld, 720 breed, zelfde moment als eerst (0:55) | 150 kB |

- **Waarom 1080 en niet 4K:** het vak is hoogstens 480 pixels breed, dus 960
  op een retinascherm. 4K is 858 MB en dat is voor een website niet te doen.
- **Twee bronnen:** Jelmer opperde een lichter webformaat. Voor video is dat
  WebM; de browser pakt die als hij hem kan afspelen, anders de MP4 (oudere
  iPhones). Er wordt maar één van de twee opgehaald, en pas na een druk op
  play: `preload="none"` staat er nog steeds.
- **Poster als WebP** in plaats van JPG; de oude `vale-da-serra-poster.jpg` is
  weg. Op 0:55 schemert rechtsonder al het onderschrift "Restaurante e
  Cozinha" in; dat was op de oude poster ook zo, alleen te klein om te zien.
- md5: webm `18114adce21bad4184387dd8b1418c1f`, mp4
  `8fe674e536e2d585dd29139423a6183a`, poster `2398600eb1e2119a38669ab9bc4ab8e0`.
  De md5 van de mp4 in de tabel bij M-11 is die van de oude versie.
- De 4K-bron zit niet in de repo (te groot voor GitHub). Hij staat in Jelmers
  Downloads-map en in de WhatsApp-chat.

---

## 2. Wat zie jij? — repo `zie-jij-de-wereld-main`, watziejij.nu

| # | Punt | Bron | Stand |
|---|------|------|-------|
| W-1 | Downloadbare brochure vervangen | W 2 okt, E, W 14 okt | **Af en live** — 19 oktober |

**Dit was het punt waar Onno het meest over gevallen is** — hij heeft er drie
keer om moeten vragen: 2 oktober via WhatsApp, 11 oktober per mail, en 14
oktober met "nogmaals (derde keer....)". Op 19 oktober is het gedaan. Het
bestand bleek in `~/Downloads` te staan.

De brochure heet nu `src/assets/Wat zie jij PO.pdf`, zoals Onno hem ook
stuurde. De oude heette `Wat zie jij 2025-26 PO.pdf`; die jaargang in de naam
suggereerde ten onrechte dat het bestand actueel was en heeft het zoeken op een
dwaalspoor gezet. De zeven pagina's die hem importeren zijn mee aangepast.

| | oud | nieuw |
|---|---|---|
| md5 | `128aed12…` | `48caf407…` |
| grootte | 26 MB | 6 MB |
| gemaakt | november 2025 | 2 februari 2026 |

**Allebei 18 pagina's** — controleer dit soort dingen dus op md5, niet op
paginatelling of bestandsnaam. Verdere details staan in
`zie-jij-de-wereld-main/OPENSTAAND.md`.

## 3. onnoraadsen.nl — repo `Onnos-site`

| # | Punt | Bron | Stand |
|---|------|------|-------|
| O-1 | maisesporte.nl toevoegen aan de lijst sites | W 9 okt | **Af** — al op 10 oktober gedaan |
| O-2 | Verkorte versie downloadbaar, uitgebreide op aanvraag | D 4 okt, A 30 okt | **Teruggedraaid** — 30 oktober, zie hieronder |
| O-3 | Partnershipmogelijkheden downloadbaar bij "Voor investeerders en bedrijven" | D 4 okt, W 14 okt | **Af en live** — 19 oktober |

Alle drie staan live op onnoraadsen.nl.

O-1 bleek op 10 oktober al gedaan: MAIS ESPORTE staat in de strip met
initiatieven en bij de websites in de voet.

Bij O-2 stond de uitgebreide versie eerst op **aanvraag**, van 19 tot 30
oktober als **download**, en sinds 30 oktober weer op aanvraag — zie M-10 voor
het hele verloop. Wat er nu staat:

- De tekst is "De verkorte versie kun je hier downloaden; de uitgebreide versie
  stuur ik je graag op aanvraag toe." Dat verving Onno's eigen regel "Je kan
  hier de verkorte en uitgebreide versie downloaden", die niet meer klopte.
- De tweede knop heet "Uitgebreide versie aanvragen" en opent een mail naar
  **onnoraadsen@hotmail.com** — het adres dat al op zijn site staat. Op
  maisesporte gaat de aanvraag naar `info@maisesporte.nl`. **Dat verschil is een
  besluit, niet een los eindje:** Jelmer koos op 30 oktober om het zo te
  houden — zijn persoonlijke site naar zijn eigen mail, de projectsite naar het
  projectadres. Niet opnieuw voorleggen.
- `mais-esporte-uitgebreide-versie.pdf` is uit `public/downloads/` gehaald, net
  als op maisesporte, zodat de directe link ook echt niet meer werkt. Het
  bestand blijft in de git-historie.
- De link zit niet meer in `lib/links.ts` als `DOCUMENT_UITGEBREIDE_VERSIE`;
  daar staat nu `DOCUMENT_UITGEBREIDE_VERSIE_AANVRAAG` met de mailto.

**Gecontroleerd vóór de wijziging:** `/api/content` gaf 26 opgeslagen teksten,
maar geen `home-ambition-focus`. De `defaultValue` uit `app/page.tsx` wint dus
en de code-wijziging komt door. Was die sleutel er wél geweest, dan had de
tekst in de bewerkmodus van de site zelf aangepast moeten worden.

**Nog een losse eindje daar:** `public/downloads/` bevat ook
`mijn-ambitie-en-droom-verkort.txt` en `-uitgebreid.txt` uit juli. Ze worden
nergens op de site gelinkt, maar zijn wel op hun eigen adres op te vragen, en
de uitgebreide bevat zijn ambitietekst plus zijn mailadres en telefoonnummer.
Niet hetzelfde document als het projectplan, dus geen spoedgeval — maar vraag
hem of die weg kunnen.

Bij O-3 stond de knop er al, maar met de **oude** partnership-PDF van 6
oktober — precies de versie waar Onno op 14 oktober over viel bij maisesporte.
Nu vervangen door die van 9 oktober.

**De documenten die er nu staan, met hun md5 zodat je ze kunt controleren.**
De uitgebreide versie staat er sinds 30 oktober niet meer bij:

| Bestand | md5 |
|---|---|
| `mais-esporte-korte-versie.pdf` | `d9b84ec5209941420a3d21c3037f47b9` |
| `mais-esporte-partnershipmogelijkheden.pdf` | `1ac5bc623f8fa18c5bd2ead45f0effec` |

De uitgebreide versie (`5a001d9c73e06fe2816cb28d7dc208c3`) stond hier tot
30 oktober en is nu van beide sites af. Hij zit nog in de git-historie van
allebei de repo's.

**Let op bij deze site:** de teksten staan niet alleen in de code. Elke
`EditableText` haalt zijn waarde uit Upstash Redis via `/api/content`, en een
daar opgeslagen tekst wint van de `defaultValue` in `app/page.tsx`. Voor deze
wijziging was er geen opgeslagen versie — gecontroleerd tegen de live site —
dus de code-wijziging kwam door. Is dat een volgende keer niet zo, dan moet de
tekst in de bewerkmodus van de site zelf aangepast worden.

## 4. Administratief

| # | Punt | Bron | Stand |
|---|------|------|-------|
| A-1 | Urenlijst / timesheet sturen | A 11 okt | **Open** |

Afgesproken tarief is € 15 per uur (W, 9 december 2025). Onno betaalt in
termijnen. Uren worden bijgehouden in een Google Sheet.

---

## Het logo

Online als zip: `https://esporte-mais.vercel.app/downloads/mais-esporte-logo.zip`
(lokaal: `public/downloads/mais-esporte-logo.zip`). Alle vijf varianten en de
drie losse beeldmerken, elk als SVG en PNG, plus een `LEES MIJ.txt` in gewone
taal. Wordt nergens op de site gelinkt; het adres is om te delen.

**Let op:** de logobestanden zijn goud, passend bij de huidige donkere site.
Kiest Onno de groen-terracotta tussenversie, dan is een terracotta-variant
waarschijnlijk nodig. De bron staat in `scripts/maak-logo.py`.

## Wat Onno al heeft goedgekeurd — niet opnieuw vragen

- **Juridische afzender: Vale da Serra Company.** Staat in de voet.
- **Toestemming voor publicatie van herkenbare personen op de foto's: akkoord**
  (e-mail 11 oktober, "Ok"). Dit is een mondelinge toezegging in een mail —
  die mail bewaren.
- **Alles uit het scholendocument mag gebruikt worden** (W, 3 november 2025).
