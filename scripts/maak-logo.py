"""
Exporteert het MAIS ESPORTE-merk uit src/components/Merk.astro als SVG met de
letters omgezet naar paden (Archivo 700, breedte 78%, spatiering 0.14em, zoals
.merk__naam), zodat het logo werkt zonder het lettertype.

Vereist: pip install fonttools brotli
Gebruik:  python3 scripts/maak-logo.py public/fonts/Archivo-latin.woff2 merk
De PNG-versies zijn daarna met headless Chrome gerenderd op 2400px breed.
"""
import sys, os
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

woff, uit = sys.argv[1], sys.argv[2]
os.makedirs(uit, exist_ok=True)

def instantie(wght, wdth):
    f = TTFont(woff)
    axes = {a.axisTag: (a.minValue, a.maxValue) for a in f['fvar'].axes}
    return instancer.instantiateVariableFont(f, {'wght': wght, 'wdth': wdth}), axes

def tekstpad(font, tekst, grootte, x0, basislijn, spatiering_em):
    upem = font['head'].unitsPerEm
    s = grootte / upem
    gs = font.getGlyphSet(); cmap = font.getBestCmap(); hmtx = font['hmtx']
    pen = SVGPathPen(gs)
    x = x0
    for i, ch in enumerate(tekst):
        g = cmap[ord(ch)]
        tp = TransformPen(pen, (s, 0, 0, -s, x, basislijn))
        gs[g].draw(tp)
        x += hmtx[g][0] * s
        if i < len(tekst) - 1:
            x += spatiering_em * grootte
    return pen.getCommands(), x

def kaphoogte(font):
    os2 = font['OS/2']
    return getattr(os2, 'sCapHeight', 0) or 700

# Het merk zoals in src/components/Merk.astro: viewBox 48x44, hoogte = merk-h.
H = 44.0
MERK = '''<path d="M4 38 L18 16 L26 27 L32 19 L44 38 Z" fill="{k}" opacity="0.9"/>
<path d="M24 1 L26.6 9.4 L35 12 L26.6 14.6 L24 23 L21.4 14.6 L13 12 L21.4 9.4 Z" fill="{k}"/>
<circle cx="24" cy="12" r="10.5" fill="none" stroke="{k}" stroke-width="1.4" opacity="0.65"/>'''

naamfont, axes = instantie(700, 78)
print('assen', axes)
grootte = 0.34 * H                 # .merk__naam: calc(var(--merk-h) * 0.34)
gat = 0.75 / 2.4 * H               # gap var(--s3) bij de standaardhoogte 2.4rem
upem = naamfont['head'].unitsPerEm
cap = kaphoogte(naamfont) * grootte / upem
basis = H / 2 + cap / 2            # kapitalen gecentreerd op het merk
d, eind = tekstpad(naamfont, 'MAIS ESPORTE', grootte, 48 + gat, basis, 0.14)
breedte = eind + 2

# (beeldmerk, naam). De standaard is zoals op de site: gouden merk, crème
# naam, voor op een donkere achtergrond. `licht` is dezelfde maar met een
# zwarte naam, voor op wit of crème.
kleuren = {
    'standaard': ('#d4a84b', '#faf8f5'),
    'licht': ('#d4a84b', '#1a1a1a'),
    'goud': ('#d4a84b', '#d4a84b'),
    'zwart': ('#1a1a1a', '#1a1a1a'),
    'wit': ('#ffffff', '#ffffff'),
}
for naam, (k, kt) in kleuren.items():
    pad = 2.0
    vb = f'{-pad} {-pad} {breedte + 2*pad:.2f} {H + 2*pad:.2f}'
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" aria-label="MAIS ESPORTE">
<title>MAIS ESPORTE</title>
{MERK.format(k=k)}
<path d="{d}" fill="{kt}"/>
</svg>
'''
    open(f'{uit}/mais-esporte-logo-{naam}.svg', 'w').write(svg)
    beeld = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 52 48" role="img" aria-label="MAIS ESPORTE">
<title>MAIS ESPORTE</title>
{MERK.format(k=k)}
</svg>
'''
    if naam not in ('standaard', 'licht'):
        open(f'{uit}/mais-esporte-beeldmerk-{naam}.svg', 'w').write(beeld)
print('breedte', round(breedte, 2), 'hoogte', H)
