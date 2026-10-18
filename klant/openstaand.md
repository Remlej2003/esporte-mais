# Openstaand werk voor Onno — stand op 19 oktober 2026

Alles wat Onno Raadsen gevraagd heeft en nog niet af is, met per punt waar het
vandaan komt en wat het blokkeert. Drie sites lopen door elkaar in dezelfde
WhatsApp- en mailwisseling; ze staan hier uit elkaar getrokken.

Bronnen:
`A` = spraakbericht (uitgeschreven in `gesprekken/2026-10-spraakberichten.md`) ·
`W` = WhatsApp-tekst · `E` = e-mail Onno 11 oktober · `D` = document
"Aanpassingen 4 oktober.docx"

---

## 1. MAIS ESPORTE — deze repo, maisesporte.nl

| # | Punt | Bron | Stand |
|---|------|------|-------|
| M-1 | Derde kleurversie, de "tussenweg" | A 15 okt | **Af en live** — `/voorbeeld-tussen-goud/` |
| M-2 | Partnership-PDF vervangen door laatste versie | W 14 okt | **Af** — zie hieronder |
| M-3 | Site live zetten op maisesporte.nl | W 14 okt | **Open** — wacht op besluit + Cloud86-code |
| M-4 | Logo naar Onno sturen | W 14 okt, D 4 okt | **Open** — bestanden klaar, moeten verstuurd |
| M-5 | Uitleggen wat "logo als vectorbestand" is | E | **Open** — staat in de conceptmail |
| M-6 | Moet er een logo bij "Onze missie"? | E | **Open** — vraag van Onno terug aan Jelmer |
| M-7 | Grotere originelen van twee foto's | E, W 14 okt | **Open** — Onno moet ze sturen |
| M-8 | "Foto's bij onze aanpak zijn slecht, kleiner maken?" | E | **Open** — antwoord in de conceptmail |
| M-9 | Leeg vlak naast tekst bij Opleidingscentrum | A 12 okt | **Open** — visueel nalopen |
| M-10 | Uitgebreide versie ook downloadbaar | D 4 okt | **Af en live** — 19 oktober |

### M-1 — de tussenversie staat klaar

Live op `esporte-mais.vercel.app`, te openen zonder in te loggen. De
startpagina zelf is **niet** gewijzigd en staat nog donker.

| Adres | Wat het is |
|---|---|
| `/voorbeeld-tussen-goud/` | zandmuur met zijn antraciet en goud |
| `/` | de huidige donkere site, onveranderd |

Er is op 19 oktober ook een variant met diepgroen en terracotta gemaakt. Die
is er op verzoek weer uit: Onno's eigen kleuren wonnen. Het oude adres
`/voorbeeld-tussen/` stuurt door naar het gouden, dus een link die al
rondgaat blijft werken. Schermafdrukken staan in `kleurvergelijking/`, en
`DESIGN.md` legt uit waarom zijn goud niet zomaar op een zandmuur kan.

**Wacht nu op Onno's keuze.** Zolang die er niet is, blijft M-3 dicht.

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

### M-10 — hier spreken twee instructies elkaar tegen

- `D` (4 oktober) zegt: "Bij maisesporte.nl komt deze versie ook te staan,
  samen met de verkorte versie." Dus beide als download.
- De site doet nu: korte versie als download, volledig projectplan **op
  aanvraag** via een mailknop. In `nl.json` staat erbij `"Op verzoek"`, en
  commit `e2a1316` heet "Aanpassingen 4 oktober verwerkt".

Op 19 oktober is dit beslist en doorgevoerd: **beide versies als download**,
op allebei de sites. De aanvraagknop met mailto is weg; op maisesporte in alle
drie de talen, waarbij bij en en pt vermeld staat dat het document
Nederlandstalig is.

De drie documenten op maisesporte, met hun md5:

| Bestand | md5 |
|---|---|
| `mais-esporte-korte-versie.pdf` | `d9b84ec5209941420a3d21c3037f47b9` |
| `mais-esporte-uitgebreide-versie.pdf` | `5a001d9c73e06fe2816cb28d7dc208c3` |
| `mais-esporte-partnershipmogelijkheden.pdf` | `1ac5bc623f8fa18c5bd2ead45f0effec` |

Dezelfde drie staan op onnoraadsen.nl, met dezelfde md5's.

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
| O-2 | Verkorte én uitgebreide versie downloadbaar bij "Ambitie en droom" | D 4 okt | **Af en live** — 19 oktober |
| O-3 | Partnershipmogelijkheden downloadbaar bij "Voor investeerders en bedrijven" | D 4 okt, W 14 okt | **Af en live** — 19 oktober |

Alle drie staan live op onnoraadsen.nl.

O-1 bleek op 10 oktober al gedaan: MAIS ESPORTE staat in de strip met
initiatieven en bij de websites in de voet.

Bij O-2 stond de uitgebreide versie op **aanvraag**, via een mailto-knop. Dat
week af van Onno's document van 4 oktober, dat zegt dat beide versies gewoon te
downloaden moeten zijn. Sinds 19 oktober zijn het twee downloadknoppen, en
volgt de tekst zijn formulering: "Je kan hier de verkorte en uitgebreide versie
downloaden."

Bij O-3 stond de knop er al, maar met de **oude** partnership-PDF van 6
oktober — precies de versie waar Onno op 14 oktober over viel bij maisesporte.
Nu vervangen door die van 9 oktober.

**De drie documenten, met hun md5 zodat je ze kunt controleren:**

| Bestand | md5 |
|---|---|
| `mais-esporte-korte-versie.pdf` | `d9b84ec5209941420a3d21c3037f47b9` |
| `mais-esporte-uitgebreide-versie.pdf` | `5a001d9c73e06fe2816cb28d7dc208c3` |
| `mais-esporte-partnershipmogelijkheden.pdf` | `1ac5bc623f8fa18c5bd2ead45f0effec` |

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

## Wat Onno al heeft goedgekeurd — niet opnieuw vragen

- **Juridische afzender: Vale da Serra Company.** Staat in de voet.
- **Toestemming voor publicatie van herkenbare personen op de foto's: akkoord**
  (e-mail 11 oktober, "Ok"). Dit is een mondelinge toezegging in een mail —
  die mail bewaren.
- **Alles uit het scholendocument mag gebruikt worden** (W, 3 november 2025).
