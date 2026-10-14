# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. Gekozen door de gebruiker boven Next.js en plain HTML/CSS, omdat de site vrijwel volledig content is en er nauwelijks client-side interactie nodig is.

Twee architectuurafspraken die hierbij horen, gemaakt om latere wijzigingen goedkoop te houden:

- **Copy staat los van markup.** Alle teksten in losse contentbestanden per taal, nooit inline in componenten. Reden: bij een design-aanpassing hoeft de copy dan niet opnieuw geschreven te worden.
- **Design tokens staan in één bestand.** Kleuren, typografie en spacing centraal, zodat een visuele koerswijziging één bestand raakt in plaats van elke component.

Meertaligheid: `nl`, `en` en `pt` zijn alle drie actief. Nederlands staat op de wortel, de andere twee onder `/en/` en `/pt/`. De pagina zelf staat in `src/layouts/Startpagina.astro` en krijgt het contentbestand als prop; `src/i18n/talen.ts` is het register. Een taal erbij is een contentbestand, een regel in dat register en een regel in `astro.config.mjs`. Het Portugees is Braziliaans (`pt-BR`), want daar staat het programma. De taalschakelaar staat in de kop en toont alleen talen die bestaan.

De drie contentbestanden hebben dezelfde vorm en dezelfde volgorde. Een wijziging in `nl.json` hoort in alle drie te landen; als de vorm uiteenloopt, valt de pagina in die taal om.

Deploytarget: Vercel. Een push naar `main` zet de site op esporte-mais.vercel.app. Het domein maisesporte.nl staat nog bij Cloud86 en wordt later omgezet. Let op: de mail van info@maisesporte.nl (MX) draait op dezelfde Cloud86-server, dus bij het omzetten eerst de MX naar een eigen hostrecord verhuizen, anders valt de mail weg.

## Users

**Primair: Nederlandse organisaties die partner willen worden.** Het bronmateriaal is volledig geschreven als partnerwervingsdocument ("Wij zoeken organisaties die verder kijken dan alleen sponsoring"). De beslissers die het moeten overtuigen zitten op MVO/duurzaamheid, HR/employer branding, marketing/communicatie of directieniveau. Zij beoordelen of dit past bij hun maatschappelijke positionering en of het intern te verkopen is aan medewerkers.

De gewenste actie is één specifieke stap: **een kennismakingsgesprek plannen.** Niet doneren, niet aanmelden.

**Secundair, expliciet in het bronmateriaal genoemd: Nederlandse basisscholen.** De doelstelling noemt 50 basisscholen die de leerlijn "Wat zie jij?" gaan gebruiken. Of scholen een eigen ingang op de site krijgen is nog niet besloten.

De jongeren in Brazilië zijn de begunstigden van het programma, niet de bezoekers van deze site.

## Product Purpose

MAIS ESPORTE is een internationale impactbeweging die jongeren in Braziliaanse favela's opleidt tot leiders, coaches en positieve rolmodellen, via sport, ervaringsleren en persoonlijke ontwikkeling. Het werkgebied is Noordoost-Brazilië; de coördinaten bij het logo (3°55′33.93″ S, 38°43′38.49″ W) wijzen naar Ceará.

De aanleiding: in Noordoost-Brazilië groeit een grote groep jongeren op waar kansen schaars zijn en negatieve invloeden dagelijks aanwezig. Veel jongeren missen toegang tot goed onderwijs, stabiel werk, veilige leefomstandigheden en inspirerende rolmodellen. De zichtbare gevolgen zijn schooluitval, criminaliteit, uitzichtloosheid en een gebrek aan toekomstperspectief.

Het uitgangspunt van de organisatie, letterlijk uit het bronmateriaal: jongeren hebben geen medelijden nodig, maar vertrouwen, verantwoordelijkheid en kansen om zichzelf te ontwikkelen. Dit is geen liefdadigheidsframe maar een potentieelframe — de kernboodschap is "van risicojongeren naar rolmodellen".

Succes voor deze site: een partnergesprek dat begint.

## Positioning

**Jongeren leiden jongeren.** Deelnemers worden opgeleid tot Urban Adventure Coaches en begeleiden vervolgens zelf andere kinderen en jongeren in hun eigen wijk. Die peer-education-lus is het mechanisme dat een naburige organisatie niet zomaar kan kopiëren, en het onderscheidt dit van sportprogramma's waar volwassenen lesgeven aan kinderen.

Wat de methode volgens het bronmateriaal uniek maakt:

- jongeren leiden jongeren
- leren door doen
- focus op eigenaarschap
- directe verbinding met toekomst en arbeidsmarkt
- sterke combinatie van lokale impact en internationale samenwerking

Onderbouwing: meer dan 25 jaar praktijkervaring van ARCA in de Braziliaanse favela's. De aanpak is lokaal verankerd, praktijkgericht en bewezen effectief.

Richting partners is de positionering expliciet "meer dan sponsoring": partners verbinden zich aan een internationale beweging, niet aan een project.

## Operating Context

De aanpak combineert persoonlijke ontwikkeling, leiderschapstraining, sport en ervaringsleren, coaching en community building.

Partners kunnen echt betrokken raken — het bronmateriaal noemt: impactreizen naar Brazilië, vrijwilligersprogramma's, onderwijsprojecten, inspiratiesessies, storytelling en contentcreatie, en internationale samenwerking. De toon daarbij: "niet betrokken vanaf de zijlijn, maar midden in de impact."

Wat een partner eruit haalt: een concrete bijdrage aan de Sustainable Development Goals, krachtige employer branding, authentieke storytelling en content, employee engagement, internationale zichtbaarheid, en toegang tot een netwerk van impactgedreven organisaties.

Partnerships zijn afstembaar op employer branding, onderwijsprojecten, employee engagement en maatschappelijke positionering.

## Capabilities and Constraints

**Drie partnertiers.** Namen, bedragen en voordelen liggen vast in het document Partnershipmogelijkheden (aangeleverd 4 oktober). Op de site staat per pakket een samenvatting; het volledige document is als PDF te downloaden.

- *Community partner, Verbinden*: vanaf € 12.500 per jaar. Voor een eerste kennismaking, laagdrempelig. Onder meer vermelding en logo op de Sportbus, content, impact dashboard en een reis van 7 dagen voor 2 medewerkers.
- *Impact partner, Verbreden*: vanaf € 25.000 per jaar. Voor zichtbaarheid en teambinding. Alles van Community plus de reis voor 4 medewerkers, een workshop door Onno, een film per halfjaar en een presentatie per jaar.
- *Strategic partner, Verankeren*: vanaf € 50.000 per jaar. Strategisch. Alles van Impact plus een Full Moon Expedition van 10 dagen, de naam verbonden aan een projectonderdeel, een training van 2 dagdelen en twee keer per jaar overleg met Onno.

Daarnaast een laagdrempelige instap: een losse workshop of training door Onno, richtprijs € 2.000 tot € 3.500, zonder verdere verplichting.

**Doelstellingen voor vijf jaar.** 240 jongeren opleiden tot Urban Adventure Coach; meer dan 1.500 kinderen bereiken; 20 impactkampen organiseren; 50 Nederlandse basisscholen betrekken met de leerlijn "Wat zie jij?"; meer dan 10.000 mensen indirect bereiken.

Daarnaast wordt gewerkt aan meer zelfvertrouwen bij jongeren, sterkere communities, minder invloed van criminaliteit en betere kansen op werk en opleiding. Dit zijn expliciet kwalitatieve ambities, geen gemeten resultaten — het bronmateriaal presenteert ze ook zo.

**Visie.** Uitgroeien tot een internationaal platform voor ervaringsleren, leiderschap en community impact, met een kenniscentrum voor ervaringsleren, een schaalbare methodiek, internationale samenwerkingen, onderwijsverbindingen en een groeiend netwerk van impactpartners. Letterlijk uit het bronmateriaal: "Ons doel is om een model te ontwikkelen dat ook inzetbaar wordt in andere regio's en landen." De favela in Ceará is dus het beginpunt, niet de begrenzing — dat is wat een partner koopt.

**Terminologie.** Urban Adventure Coach (de opleiding en de rol), peer-education, impactkampen, leerlijn "Wat zie jij?", ARCA (de Braziliaanse partnerorganisatie met 25+ jaar ervaring).

### Expliciet onbesloten — niet invullen zonder de opdrachtgever

- **De relatie tussen MAIS ESPORTE, ARCA en Vale da Serra Company.** Alle drie komen in het bronmateriaal voor, maar hun onderlinge verhouding niet. Vale da Serra staat als logo op de titelpagina, ARCA wordt genoemd als de organisatie met 25+ jaar ervaring. Wie de juridische afzender van de site is, moet bevestigd worden.
- **Het moment waarop maisesporte.nl naar Vercel wordt omgezet** (zie Stack, en de mail).
- **Of basisscholen een eigen ingang krijgen.**

## Brand Commitments

**Naam: MAIS ESPORTE.** Bevestigd door de opdrachtgever. Het bronmateriaal schrijft consequent "ESPORTE MAIS" — die schrijfwijze is achterhaald en moet in alle overgenomen teksten omgedraaid worden.

**Bestaand beeldmerk: VALE DA SERRA COMPANY.** Staat op de titelpagina van het bronmateriaal: een kompasroos over een berg-silhouet, met de plaatsnaam eronder en de coördinaten 3°55′33.93″ S 38°43′38.49″ W erboven. Alleen beschikbaar als rasterafbeelding uit het PDF, niet als vectorbestand. De verhouding tot de naam MAIS ESPORTE is nog niet bevestigd (zie onbesloten punten).

**Voertaal Nederlands**, gericht op een Nederlands zakelijk publiek. De toon in het bronmateriaal is stellig en waardig, zonder liefdadigheidssentiment: potentieel boven medelijden, vertrouwen boven hulp. Zinnen als "Niet betrokken vanaf de zijlijn, maar midden in de impact" zetten het register.

**De kleuren zijn die van onnoraadsen.nl, op zwart.** Op 13 oktober 2026 is uit twee kleurvoorbeelden de donkere stijl gekozen: zwart, antraciet, goud en crème, zoals onnoraadsen.nl en de PDF's van MAIS ESPORTE zelf. Dat vervangt het gebroken wit, diepgroen en koraaloranje van de eerste schets. De rest van die schets blijft de stijlverwachting: een display-schreefletter, gebogen fotovormen en pill-vormige knoppen. De verzonnen inhoud daarin (partnerbedragen, het citaat) valt daar nadrukkelijk buiten.

**Geen slachtofferframing.** Dit is de scherpste inhoudelijke randvoorwaarde: het bronmateriaal beschrijft de omstandigheden eerlijk en hard, maar positioneert jongeren consequent als dragers van potentieel. Beeld en tekst moeten dat volhouden.

## Evidence on Hand

**Bron van waarheid, sinds 4 oktober:** de korte versie (`MAIS ESPORTE korte versie.pdf`), het document Partnershipmogelijkheden en de aanpassingenlijst van de opdrachtgever (`Aanpassingen 4 oktober`). Daarvoor was dat `Esporte mais.pdf` (5 pagina's). Alles wat in de designschets stond maar niet in deze documenten, is fictie.

**Wat online staat en wat niet.** De korte versie en de partnershipmogelijkheden staan als PDF op de site (`public/downloads/`). Het volledige projectplan 2027 tot en met 2031 staat bewust níet online: dat is op aanvraag, via info@maisesporte.nl. Het bedrag van de financieringsbehoefte staat niet op de site.

**Contact.** info@maisesporte.nl en WhatsApp +31 6 19 63 09 20, uit het partnerdocument. De primaire knop opent een mail, de tweede WhatsApp.

**Echte foto's.** Vier zijn inmiddels vervangen door de originelen die de opdrachtgever aanleverde: die missen het ingebakken vignet en zijn aanzienlijk scherper. Op 4 oktober kwamen er vier foto's van het opleidingscentrum bij (`centrum-*.jpg`: terrein, vijver, kring, grasveld) en een foto voor het rechter lusvak (`kind-begeleid.jpg`).

1. `1100x1375` — groep die iemand over een betonnen helling omhoog duwt onder een houten constructie. Origineel, uitgesneden op de handeling. Draagt de hero.
2. `900x900` — jongere met helm en klimgordel boven op een toren van bierkratten, krijgt een krat aangereikt van onderen. Origineel.
3. `1100x825` — het terrein: open veld, palmen, lage gebouwen, beboste heuvel. Origineel.
4. `800x600` — kinderen en begeleiders met ballen en pionnen op een zandveld, met bakstenen huizen en de stad erachter. Origineel.
5. `572x1090` — groep die samen een autoband over een paal tilt. Nog uit het PDF, met vignet weggesneden.
6. `kind-begeleid.jpg` — kinderen bij een spel op een zandveld, een begeleider aan de kant. Door de opdrachtgever aangeleverd in de aanpassingenlijst, maar maar **364x273** groot. Tweemaal vergroot (Lanczos, licht verscherpt) zodat de srcset werkt, maar nog steeds zacht naast de scherpe krattentoren. Een origineel hiervan is nodig. De eerdere poortfoto (402x376) is vervallen.

Het bronmateriaal bevat daarnaast een handdruk-clipart bij "Meer dan sponsoring". Dat is geen bewijsmateriaal maar opvulling, en hoort niet op de site.

De hogere resolutie maakt de personen herkenbaarder dan eerst. Dat verzwaart het openstaande punt over publicatietoestemming; het is nu een voorwaarde om live te gaan, niet een formaliteit.

**Wat er niet is, en dus niet verzonnen mag worden:**

- geen citaten, verhalen of testimonials van jongeren, coaches of partners
- geen logo als vectorbestand — alleen het Vale da Serra-merk als rasterafbeelding uit het PDF, dat nagetekend moet worden
- geen video of bewegend beeld
- geen bestaande partnerlogo's of referenties
- geen gemeten resultaten uit het verleden; alle cijfers zijn vooruitblikkende doelen voor vijf jaar en moeten ook als doel gepresenteerd worden
- geen namen of gezichten met gepubliceerde toestemming — bij herkenbaar portret moet toestemming nagevraagd worden

## Product Principles

1. **Potentieel, geen medelijden.** Elke keuze in tekst en beeld toont jongeren als hoofdrolspelers, niet als hulpbehoevenden. Dit is het uitgangspunt van de organisatie zelf, geen stijlvoorkeur.
2. **De lus is het verhaal.** Wat dit onderscheidt is dat opgeleide jongeren zelf anderen gaan begeleiden. Als een bezoeker één ding onthoudt, is het dat.
3. **Doelen als doelen.** De cijfers zijn ambities voor vijf jaar, geen behaalde resultaten. Ze mogen nooit gepresenteerd worden op een manier die het tegendeel suggereert.
4. **Eén gevraagde actie.** De site stuurt naar het kennismakingsgesprek. Andere acties concurreren daarmee en moeten die keuze verdienen.
5. **Alleen bevestigde feiten.** Bij ontbrekend materiaal is een zichtbaar gat of een expliciete placeholder altijd beter dan een aannemelijke invulling. Deze regel heeft de opdrachtgever expliciet gesteld.
