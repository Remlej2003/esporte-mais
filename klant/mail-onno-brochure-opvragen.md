# Kort mailtje: brochure Wat zie jij? opvragen

**Probeer dit eerst zelf**, dan hoef je Onno niets te vragen: het document
staat vrijwel zeker nog in WhatsApp **op je telefoon**. Open de chat met Onno,
scroll naar **2 oktober 2026** — het bericht met "Wat zie jij PO.pdf, 18
pagina's", gevolgd door "Bij de pagina De Leerlijn". Doorsturen naar je eigen
mail is genoeg.

Waarom het niet op je Mac staat: WhatsApp Desktop bewaart alleen recente
bijlagen. In Onno's map staat nog maar één PDF (die van partnerships, van 14
oktober). Alles van begin oktober is daar weg.

Lukt dat niet, dan hieronder het mailtje.

---

Onderwerp: **Document Wat zie jij? — kun je 'm nog één keer sturen?**

Hoi Onno,

Korte vraag. Dat document voor Wat zie jij? dat je op 2 oktober via WhatsApp
stuurde ("Wat zie jij PO", 18 pagina's, voor de pagina De Leerlijn) — ik kan
hem aan mijn kant nergens meer terugvinden. WhatsApp heeft hem inmiddels
opgeruimd.

Zou je hem nog één keer willen mailen? Dan zet ik hem er dezelfde dag op. Het
is bij mij één bestand vervangen, dus alle downloadknoppen op de site pakken
hem meteen mee.

Sorry dat je hier vaker naar hebt moeten vragen.

Groet,
Jelmer

---

## Zodra het bestand binnen is

Eén handeling, in de repo `zie-jij-de-wereld-main`:

Vervang `src/assets/Wat zie jij 2025-26 PO.pdf` door het nieuwe bestand,
**onder dezelfde naam**. Zeven pagina's importeren dat ene pad — Home, Index,
DeLeerlijn, Kerndoelen, Aanschaffen, OverOns en Subsidie — dus ze volgen
allemaal vanzelf. Daarna bouwen en deployen.

Controleer achteraf dat het gelukt is: het oude bestand heeft md5
`128aed1244da7f512648280525725a1d`. Wat er nu live staat op watziejij.nu is
byte-voor-byte datzelfde bestand, uit november 2025. Zie je na het deployen nog
steeds die md5, dan is het niet doorgekomen.
