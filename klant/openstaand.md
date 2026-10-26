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
| M-1 | Derde kleurversie, de "tussenweg" | A 15 okt | **Af en live** — `/voorbeeld-tussen/` |
| M-2 | Partnership-PDF vervangen door laatste versie | W 14 okt | **Af** — zie hieronder |
| M-3 | Site live zetten op maisesporte.nl | W 14 okt, A 20 okt | **Af en live** — 26 oktober, zie hieronder |
| M-4 | Logo naar Onno sturen | W 14 okt, D 4 okt | **Klaar om te versturen** — downloadlink in de conceptmail |
| M-5 | Uitleggen wat "logo als vectorbestand" is | E | **Klaar om te versturen** — in de conceptmail en de LEES MIJ van de zip |
| M-6 | Moet er een logo bij "Onze missie"? | E | **Open** — vraag van Onno terug aan Jelmer |
| M-7 | Grotere originelen van twee foto's | E, W 14 okt | **Open** — Onno moet ze sturen; het regeltje onderaan de site is op zijn verzoek weg (20 okt) |
| M-8 | "Foto's bij onze aanpak zijn slecht, kleiner maken?" | E | **Klaar om te versturen** — antwoord in de conceptmail |
| M-9 | Leeg vlak naast tekst bij Opleidingscentrum | A 12 okt | **Niet reproduceerbaar** — zie hieronder |
| M-10 | Uitgebreide versie ook downloadbaar | D 4 okt | **Af en live** — 19 oktober |

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

### M-1 — de tussenversie staat klaar

Live op `esporte-mais.vercel.app`, te openen zonder in te loggen. De
startpagina zelf is **niet** gewijzigd en staat nog donker.

| Adres | Wat het is |
|---|---|
| `/voorbeeld-tussen/` | zandmuur met diepgroen en terracotta |
| `/` | de huidige donkere site, onveranderd |

Op 19 oktober is er ook een variant gemaakt in Onno's eigen antraciet en goud
(`/voorbeeld-tussen-goud/`). Jelmer koos dezelfde dag voor de groen-terracotta
versie, en de gouden is weer verwijderd; dat oude adres stuurt door naar
`/voorbeeld-tussen/`.

**Let op, dit is één keer misgegaan:** bij het kiezen tussen de twee is eerst
de verkeerde weggehaald — "die met gele teksten, die ipv die met donkergroen"
is gelezen als *houd* de gele, terwijl het *weg met* de gele betekende. Bij
een keuze tussen varianten: vraag terug welke **blijft**, met het adres erbij.

Schermafdrukken staan in `kleurvergelijking/`, en `DESIGN.md` legt de keuzes
uit.

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

### M-9 — ik zie het lege vlak niet meer

Op 19 oktober nagelopen op 1440, 1920 en mobiel. Het opleidingscentrum heeft
links de kop met daaronder de overzichtsfoto, rechts de tekst, en daaronder de
rij met drie foto's. Op beide desktopbreedtes vullen de kolommen elkaar; op
mobiel staat alles onder elkaar, dus daar kan per definitie geen vlak "naast de
tekst" staan.

Waarschijnlijk keek Onno naar een versie van vóór 10 oktober, toen de vier
foto's van het centrum erbij kwamen — zijn bericht is van 12 oktober, maar de
deploy kan hem later bereikt hebben. **Niet zelf gaan gokken naar een
oplossing**: vraag hem een schermafdruk als hij het nog ziet.

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
