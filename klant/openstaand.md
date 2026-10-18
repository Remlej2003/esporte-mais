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
| M-1 | Derde kleurversie, de "tussenweg" | A 15 okt | **Af en live** — twee varianten, zie hieronder |
| M-2 | Partnership-PDF vervangen door laatste versie | W 14 okt | **Af** — zie hieronder |
| M-3 | Site live zetten op maisesporte.nl | W 14 okt | **Open** — wacht op besluit + Cloud86-code |
| M-4 | Logo naar Onno sturen | W 14 okt, D 4 okt | **Open** — bestanden klaar, moeten verstuurd |
| M-5 | Uitleggen wat "logo als vectorbestand" is | E | **Open** — staat in de conceptmail |
| M-6 | Moet er een logo bij "Onze missie"? | E | **Open** — vraag van Onno terug aan Jelmer |
| M-7 | Grotere originelen van twee foto's | E, W 14 okt | **Open** — Onno moet ze sturen |
| M-8 | "Foto's bij onze aanpak zijn slecht, kleiner maken?" | E | **Open** — antwoord in de conceptmail |
| M-9 | Leeg vlak naast tekst bij Opleidingscentrum | A 12 okt | **Open** — visueel nalopen |
| M-10 | Uitgebreide versie ook downloadbaar? | D 4 okt | **Open — tegenstrijdig**, zie hieronder |

### M-1 — er liggen twee tussenversies klaar

Beide staan live op `esporte-mais.vercel.app` en zijn te openen zonder in
te loggen. De startpagina zelf is **niet** gewijzigd en staat nog donker.

| Adres | Wat het is |
|---|---|
| `/voorbeeld-tussen/` | zandmuur, diepgroen en terracotta |
| `/voorbeeld-tussen-goud/` | zandmuur, zijn antraciet en goud |
| `/` | de huidige donkere site, onveranderd |

De tweede kwam er op 19 oktober bij op verzoek: er mocht "ietsjes meer" van
onnoraadsen.nl in. Schermafdrukken van alle drie staan in
`kleurvergelijking/`. Zie `DESIGN.md` voor waarom zijn goud niet zomaar op
een zandmuur kan.

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

Iemand heeft dit dus bewust zo gezet, of juist over het hoofd gezien. **Niet
zelf wijzigen** — eerst aan Onno vragen. Staat in de conceptmail.

---

## 2. Wat zie jij? — repo `zie-jij-de-wereld-main`, watziejij.nu

| # | Punt | Bron | Stand |
|---|------|------|-------|
| W-1 | Downloadbare brochure vervangen | W 2 okt, E, W 14 okt | **Geblokkeerd** |

**Dit is het punt waar Onno het meest over gevallen is.** Op 14 oktober:
"nogmaals (derde keer....), vervang op wat zie jij graag het document dat down
te loaden is." In de mail van 11 oktober: "Bij Wat zie jij? ontbreekt het
document dat ik je gestuurd heb."

Waar het staat:

- Bestand: `src/assets/Wat zie jij 2025-26 PO.pdf` (26 MB, 18 pagina's)
- Gebruikt door zeven pagina's: `Home`, `Index`, `DeLeerlijn`, `Kerndoelen`,
  `Aanschaffen`, `OverOns`, `Subsidie` — allemaal via dezelfde import
- **Eén bestand overschrijven is genoeg.** Alle zeven knoppen volgen mee.
  (Hernoemen kan ook, maar dan moeten die zeven imports mee.)

Waarom het nog niet kan:

Het vervangende document — "Wat zie jij PO.pdf", 18 pagina's, door Onno
gestuurd op **2 oktober 2026** met "Bij de pagina De Leerlijn" — **staat niet
op deze computer**. Niet in Downloads, niet in iCloud, en ook niet in de
WhatsApp-export: die bewaarde alleen bijlagen vanaf 11 oktober.

Dat het er nog niet op staat is hard te zien: het huidige bestand is in git
voor het laatst aangeraakt op **18 november 2025**, bijna een jaar geleden. Het
nieuwe heeft toevallig óók 18 pagina's, dus op paginatelling alleen kun je ze
niet uit elkaar houden — kijk naar het jaartal in de brochure zelf.

**Nodig:** Onno het document nog één keer laten sturen, bij voorkeur per mail.
In deze chat zijn al meerdere WeTransfers verlopen voordat ze gedownload waren.

---

## 3. onnoraadsen.nl — repo `Onnos-site`

| # | Punt | Bron | Stand |
|---|------|------|-------|
| O-1 | maisesporte.nl toevoegen aan de lijst sites | W 9 okt | **Open** |
| O-2 | Bij "Ambitie en droom": verkorte én uitgebreide versie downloadbaar, in plaats van het huidige document. Tekst wordt "Je kan hier de verkorte en uitgebreide versie downloaden." | D 4 okt | **Open** — beide PDF's zijn er |
| O-3 | Bij "Voor investeerders en bedrijven": Partnershipmogelijkheden downloadbaar | D 4 okt, W 14 okt | **Open** — PDF is er |

De bestanden voor O-2 en O-3 staan klaar in `/Users/jelmersicloud/Downloads/`
(korte versie, uitgebreide versie 2027–2031 vs 2) en voor de partnership-PDF
geldt weer: **de juiste komt uit de WhatsApp-export**, niet uit Downloads.

---

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
