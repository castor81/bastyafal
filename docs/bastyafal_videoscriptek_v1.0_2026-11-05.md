# BÁSTYAFAL – Videóscriptek (v1.0 · 2026-11-05)

Kaland a hálón · Védd a hálót · Bástya Gimnázium, Bástyavár · BástyaKupa

Ez a dokumentum minden játékba épülő videó teljes forgatókönyvét tartalmazza: célt, helyet a játékban, snitt-listát, hangot, magyar feliratot (időkóddal), nóri narrációt és kész generálási promptot (angolul, mert a videógenerátorok így működnek a legjobban). Az angol prompt blokkja egyben másolható.

## Közös szabályok minden videóra

- Formátum: 16:9, 720p vagy 1080p, 24–30 fps, MP4 (H.264). Hosszt lásd videónként.
- Szereplők: arc nélkül. Csak hátulról, kézként vagy sziluettként látszik diák. Így nem lesz felismerhető senki, és a nézők a saját csapatukat képzelhetik oda.
- Szöveg a képen: soha. A képernyőkön csak elvont formák, gyűrűk, sávok. A feliratot a játék rakja rá (HTML-felirat), így magyar és javítható.
- Világ: sötét, ciánkék + magenta neon, régi téglafalas iskola, ívesablakos e-sport terem. Kitalált iskola: nincs valós intézmény, jelvény, zászló, logó.
- Hang: eredeti hangszeres zene, nincs ének. Nincs beszéd a videóban; a narrációt (ha kell) a játék játssza le külön, vagy a Nóra-sorok feliratként szerepelnek.
- Hangulat: feszült, de nyugodt. Nincs erőszak, nincs ijesztgetés. Iskolai közönségnek való.
- Támadó: soha nem látszik, nem kap arcot, nevet vagy országot. Csak a hatás látszik.
- Fájlnevek: `bastyafal_v0_intro.mp4`, `bastyafal_v1_uzenet.mp4`, `bastyafal_v2_hivas.mp4`, `bastyafal_v3_adas.mp4`, `bastyafal_v4_visszajatszas.mp4`, `bastyafal_v5_zaras_arany.mp4` (és `_ezust`, `_tanulopalya`).
- Méretkorlát a beépítéshez: videónként lehetőleg 3 MB alatt (a demó egyetlen oldal, 16 MB a teljes határ). Átkódolás: `ffmpeg -i be.mp4 -vf scale=960:540 -c:v libx264 -crf 28 -preset veryfast -c:a aac -b:a 64k ki.mp4`.

---

## V0 – Intro: „Védd a hálót” (15 mp) – elkészült

Hely: a játék legelején, a belépés után. Már megvan: `1d75ca49-B_styafal_Intro.mp4`. Az alábbi script a feliratozáshoz és az esetleges újragyártáshoz kell.

Cél: bemutatni a világot (Bástyavár, e-sport hét) és a címet.

Snittek:
1. 0–4 mp: a régi téglás városka estében, a gimnázium ívesablakos épülete, neonfény ég az ablakokban.
2. 4–9 mp: e-sport terem, csapat hátulról, közös készülődés, egy telefon felvillan.
3. 9–13 mp: hálózati vonalak futnak át a városon, egy pont vörösen villan, a vonalak védőfalat (bástyafalat) formálnak.
4. 13–15 mp: a BÁSTYAFAL cím és a „Védd a hálót” jelmondat.

Felirat (a játék rakja rá):
- 00:00–00:04 „Bástyavár. A BástyaKupa hete.”
- 00:04–00:09 „A csapat készül. Minden rendben látszik.”
- 00:09–00:13 „De a háló nem alszik.”
- 00:13–00:15 „BÁSTYAFAL – Védd a hálót.”

Hang: lassan induló szintetizátor-pulzus, 100 BPM, a cím pillanatában egy mély, tiszta hang.

Újragyártás-prompt (angol):
```
Cinematic 15-second intro, 16:9. An old red-brick border-fortress town at dusk with an arched-window school building, neon lights glowing in its windows. Cut to a school esports hall: a team of teenagers seen only from behind, hoodies, high-fiving in front of rows of glowing monitors with abstract shapes and no text. One phone lights up. Then a stylised night map of glowing network lines spreading over the town; one point flashes red; the lines form a protective wall like a fortress rampart around the town. Final shot: a clean dark background where the wall silhouette resolves into the empty space for a title. Teal-blue and magenta neon palette, soft bloom, film grain, shallow depth of field. No faces, no legible text or numbers anywhere, no logos, no real institutions. Original instrumental synth score, slow pulse building to one deep clean note at the end. No vocals, no speech.
```

---

## V1 – „Az üzenet” (10 mp) – K1 előtt

Hely: az 1. döntés (K1, ingyen skin üzenet) előtt, a szavazás megnyitása előtt.
Cél: érzékeltetni a csábítást és az időnyomást; a döntés: kattint-e a csapat.
Tanulság (nem mondjuk ki): a „túl jó, hogy igaz legyen” + sürgetés gyanús.

Snittek:
1. 0–3 mp: tágan, hátulról a terem, a csapat örül, taps és mosoly.
2. 3–7 mp: egy diák válla fölött a telefon: élénk, pulzáló forma jelenik meg, vékony gyűrű kezd zsugorodni; a hüvelykujj közelít.
3. 7–10 mp: közelkép: a hüvelykujj megáll a képernyő fölött, a gyűrű zsugorodik. Kimerevítés, majd lassú kifade.

Felirat:
- 00:00–00:03 „Péntek este, BástyaKupa-előszezon. A csapat jókedvű.”
- 00:03–00:07 „Egy üzenet: ingyen skin. Csak most. Csak neked.”
- 00:07–00:10 „A gyűrű fogy. Mit csináltok?”

Hang: vidám 110 BPM szintipulzus, ami 7 mp-re sötét, feszült drónra vékonyodik; halk tömegzsivaj, billentyűkopogás, egy puha értesítési hang 3 mp-nél. Vége: egy kitartott hang.

Generálási prompt (angol):
```
10-second cinematic clip, 16:9, no dialogue. Shot 1 (0-3s): wide shot from behind in a school esports hall in an old red-brick building, arched windows, rows of gaming PCs with abstract glowing screens, blue and magenta neon strips; three students seen only from behind, high-fiving, cheerful; slow push-in. Shot 2 (3-7s): over-the-shoulder close shot of a smartphone held in both hands; the phone lights up with a bright pulsing abstract shape and a thin ring begins to shrink; the thumb moves toward it; cyan phone glow on the hands, magenta rim light; gentle handheld drift. Shot 3 (7-10s): tight close-up of a thumb hovering just above the glowing screen, bokeh hall behind, the ring keeps shrinking, frame holds, then slow fade out. Dark teal and magenta neon look, soft bloom, film grain, shallow depth of field. Students never show faces, only backs and hands, dark hoodies, no logos. No legible letters, numbers, captions or text anywhere, including phone screens. Nothing violent or frightening. Original instrumental audio: upbeat synth pulse around 110 BPM that thins into a low tense drone by 7s and ends on one held note; ambience of a distant crowd, keyboard clicks, a soft phone notification chime at 3s. No vocals.
```
Negatív prompt (ha az eszköz kér): `text, letters, numbers, subtitles, logo, watermark, face close-up, gore, weapons`

Kimenet: `bastyafal_v1_uzenet.mp4`

---

## V2 – „A hívás” (10 mp) – K6 előtt (Villám-mód)

Hely: a K6 döntés (ismeretlen hívó kódot kér) előtt, rögtön a 15–20 mp-es időzítős szavazás előtt.
Cél: a telefonos nyomásgyakorlás megéreztetése.

Snittek:
1. 0–3 mp: sötét tinédzserszoba, szombat este, az asztalon a telefon. Hirtelen felvillan egy pulzáló gyűrű, rezeg.
2. 3–7 mp: egy kar (kapucnis ujj) belép jobbról, a telefon felé nyúl, és egy centivel fölötte megáll. A gyűrű gyorsabban pulzál.
3. 7–10 mp: ujjhegyek közelről a villogó kijelző fölött, enyhén remegnek, majd megállnak. Kifade.

Felirat:
- 00:00–00:03 „Szombat este. Ismeretlen szám hív.”
- 00:03–00:07 „„Sürgős! Mondd a kódot, különben elveszik a fiók!””
- 00:07–00:10 „Van 15 másodpercetek.”

Megjegyzés: a felirat idézi a hívót; hang nincs, a szöveg csak a feliratban van. Így nem kell hangszínt, nemzetiséget vagy nemet adni a támadónak.

Hang: halk szintidrón, ritka szívverés-szerű pulzus 70 BPM, ami 7 mp felé felgyorsul; telefonrezgés fán, halk elektronikus csengés, városzaj, ruhasuhogás; kitartott záróhang.

Generálási prompt (angol):
```
10-second cinematic clip, 16:9, no dialogue. Shot 1 (0-3s): static wide shot of a dim teenager's room in an old-town apartment, brick wall, desk with a closed laptop and a small warm desk lamp, window with deep blue evening light; a smartphone lies face up; its screen suddenly lights with a pulsing abstract ring and it starts vibrating on the wooden desk. Shot 2 (3-7s): close shot of the vibrating phone; a hand and forearm in a dark hoodie sleeve enter from the right, reach toward the phone and stop an inch above it; the ring pulses faster; slow push-in; cyan glow on the hand, soft rim light. Shot 3 (7-10s): tight close-up of fingertips hovering and trembling slightly above the glowing screen, then holding still; blurred magenta bokeh behind; locked-off camera; fade out. Dark teal and magenta accent light, soft bloom, film grain, shallow depth of field. Only a hand and forearm are visible, never a face. Phone screen shows only a pulsing abstract ring, no letters or numbers. No legible text anywhere, no logos. Nothing violent. Original instrumental audio: low synth drone with a sparse heartbeat-like pulse around 70 BPM quickening slightly toward 7s, ending on one held note; ambience of phone vibrating on wood, soft electronic ring tone, faint city hum. No vocals, no speech.
```
Negatív prompt: `text, letters, numbers, subtitles, logo, watermark, face, gore, weapons`

Kimenet: `bastyafal_v2_hivas.mp4`

---

## V3 – „A megszakadt adás” (10 mp) – K7 előtt

Hely: a K7 döntés (a csapat streamfiókja idegen kézbe kerül) előtt.
Cél: a fiókátvétel utáni sokk és a hirtelen düh, amit a csapatnak le kell hűtenie.

Snittek:
1. 0–3 mp: két diák hátulról, egy nagy monitor nyugodt, kék elvont formákat mutat; az egyik hátradől.
2. 3–7 mp: a formák vörös árnyalatú glitchbe törnek; mindketten hirtelen előrehajolnak; vörös villódzás a kapucnikon.
3. 7–10 mp: közelkép egy egéren szorító kéz, a monitor visszatükröződik az asztalon; a kéz megáll. Kifade.

Felirat:
- 00:00–00:03 „A BástyaKupa-adás megy. Minden nyugodt.”
- 00:03–00:07 „Hirtelen más veszi át az adást.”
- 00:07–00:10 „Düh vagy fejvesztés? Döntsetek.”

Hang: feszült mély drón, 3 mp-nél rövid torz villanás, majd ritka pulzus 85 BPM; billentyűkopogás, székcsikorgás, szellőző zúgása; kitartott záróhang.

Generálási prompt (angol):
```
10-second cinematic clip, 16:9, no dialogue. Shot 1 (0-3s): medium-wide shot from behind two students sitting at a desk facing a large monitor in a school esports room in an old red-brick building, arched window with dark evening outside, blue and magenta neon strips; the monitor shows calm abstract blue shapes; one student leans back relaxed; slow push-in. Shot 2 (3-7s): closer shot of the monitor as the calm shapes break into a red-tinted glitch distortion; both students lean sharply forward, red flicker over their hoods then it settles; quick small push-in. Shot 3 (7-10s): tight close-up of a hand gripping a computer mouse, the glitching monitor reflected in the desk surface; the hand pauses and holds still; locked-off camera; fade out. Dark teal and magenta neon, soft bloom, film grain, shallow depth of field. Students from behind or hands only, dark hoodies, no logos, no faces. Monitor shows only abstract shapes and bars, no letters or numbers, no legible text anywhere. Nothing violent or frightening. Original instrumental audio: tense low synth drone with a brief distorted stutter at 3s, then a sparse pulse around 85 BPM, ending on one held note; ambience of keyboard clicks, a chair creak, a short electronic glitch burst at 3s. No vocals, no speech.
```
Negatív prompt: `text, letters, numbers, subtitles, logo, watermark, face, gore, weapons`

Kimenet: `bastyafal_v3_adas.mp4`

---

## V4 – „Visszajátszás” (6 mp) – a hurok átvezetője

Hely: minden kritikus döntés után, a következmény-jelenet végén: Nóra „naplója” visszatekeri az időt. Egyszer játszódik le csomópontonként.
Cél: a kudarcot tanulássá fordítani, ne büntetéssé. A hibás opció szürke, a hatás fele megmarad.

Snittek:
1. 0–2 mp: a monitorok vörös glitchje megáll, minden kimerevedik.
2. 2–5 mp: a képen visszafelé gyorsan pörögnek a hálózati vonalak és gyűrűk, mintha egy napló lapozódna, ciánkék fénycsíkok visszafelé futnak; a vörös szín kifakul.
3. 5–6 mp: a kép kitisztul, a nyugodt terem, a rajta lévő döntési pont előtti pillanat.

Felirat:
- 00:00–00:02 „Nóra: „Álljunk meg. Nézzük a naplót.””
- 00:02–00:05 „Visszatekerés…”
- 00:05–00:06 „Új esély. A következmény fele megmarad.”

Hang: visszafelé forgó szintiszúrás (reverse swoosh), alacsony szívverés, a végén tiszta csengés.

Generálási prompt (angol):
```
6-second cinematic transition clip, 16:9, no dialogue. Start: a school esports room in a frozen moment, monitors with red-tinted glitch shapes freeze mid-flicker. Then a rewind effect: glowing cyan network lines, rings and light trails race backwards across the frame like pages of a log being flipped in reverse, the red tint fading to teal. End: the image resolves clean into the calm, same room before the incident, students seen only from behind. Teal-blue and magenta neon palette, soft bloom, film grain. No legible text or numbers, no logos, no faces. Original instrumental audio: reverse-swoosh synth sweep, low heartbeat pulse, ending on a clear bell-like tone. No vocals, no speech.
```
Kimenet: `bastyafal_v4_visszajatszas.mp4`

---

## V5 – „Zárás / Jelvény” (3 változat, egyenként 8 mp)

Hely: a végeredmény-képernyő előtt, a háttérváltozók (Szakértelem, Csapatmunka, Morál) alapján. Három hangulati változat: ARANY, EZÜST/BRONZ, TANULÓPÁLYA. (A „Gyors győzelem, ára van”, „Magányos farkas” és „Összetartó, de tapasztalatlan” végek az EZÜST/TANULÓPÁLYA videót kaphatják, a felirat különbözik.)

### V5a – ARANY ŐRSZEM
Snittek: reggeli fény a téglás városon; a hálózati vonalak aranyló védőfalat (bástyafalat) formálnak; a csapat hátulról együtt áll, kezek összecsapnak; az épület ablakaiban zöldes-arany fény.
Felirat:
- 00:00–00:03 „A BástyaKupa véget ért. A háló biztonságban maradt.”
- 00:03–00:08 „Arany Őrszem. Ti védtétek meg.”
Hang: felemelő, melegebb szintiszáll, tiszta záróakkord.

Prompt:
```
8-second cinematic closing clip, 16:9, no dialogue. Dawn light over an old red-brick border-fortress town with a school building; glowing network lines spread over the town and form a golden protective rampart wall around it; a team of teenagers seen only from behind stands together in the school esports hall, hands joining in a high-five; warm gold and teal light, soft bloom, film grain. No faces, no legible text or numbers, no logos, no real institutions. Original uplifting instrumental synth score resolving to a clear major chord. No vocals, no speech.
```

### V5b – EZÜST / BRONZ (és „ára van” végek)
Snittek: szürkület, a fal nagyrészt áll, de egy-két rés még halványan villog; a csapat hátulról, fáradtan, de együtt; egy kéz bezár egy ablakot a képernyőn.
Felirat:
- 00:00–00:04 „A háló nagyrészt kitartott. Maradtak rések.”
- 00:04–00:08 „Ezüst/Bronz Őrszem. Következő alkalommal jobban megy.” (a konkrét fokozat a játékból érkezik)
Hang: mérsékelt, kicsit melankolikus szintiszőnyeg, nyitott záróakkord.

Prompt:
```
8-second cinematic closing clip, 16:9, no dialogue. Twilight over an old red-brick border-fortress town; a glowing teal protective rampart wall of network lines stands mostly complete but with two small gaps that flicker faintly; inside the school esports hall a team of teenagers seen only from behind sits tired but together; one hand closes a window on a monitor showing only abstract shapes. Teal and amber light, soft bloom, film grain. No faces, no legible text or numbers, no logos. Original calm slightly wistful instrumental score ending on an open chord. No vocals, no speech.
```

### V5c – TANULÓPÁLYA
Snittek: éjszaka; a vonalak szétszórtak, a fal romos; Nóra naplója (elvont lapozó formák) fénylik a monitoron; a csapat hátulról újra összeül; a nap első fénye az ablakon.
Felirat:
- 00:00–00:04 „Ez most nem sikerült. A napló viszont megvan.”
- 00:04–00:08 „Tanulópálya. Próbáljátok újra!”
Hang: halk, reményteli zongora-szintiszálak, nyugodt záróhang.

Prompt:
```
8-second cinematic closing clip, 16:9, no dialogue. Night in an old red-brick border-fortress town; glowing network lines are scattered and the protective wall is partly crumbled; on a monitor in the school esports hall abstract page-like shapes glow like a log book; a team of teenagers seen only from behind gathers around it again; the first light of dawn appears in the arched window. Dark teal with a hint of warm sunrise, soft bloom, film grain. No faces, no legible text or numbers, no logos. Original quiet hopeful instrumental score with soft synth pads and a gentle piano-like tone, ending on a calm held note. No vocals, no speech.
```

---

## Beépítési jegyzet (a demóhoz)

| Videó | Hol játszódik | Hossz |
|---|---|---|
| V0 | belépés után, a cím előtt | 15 mp |
| V1 | K1 előtt | 10 mp |
| V2 | K6 előtt | 10 mp |
| V3 | K7 előtt | 10 mp |
| V4 | kritikus kudarc után, a hurok elején | 6 mp |
| V5a/b/c | végeredmény előtt | 8 mp |

Ezek összesen kb. 3 perc, ami egy 60 perces órában elfér. Ha az idő szorít, V1–V3 kihagyható („Kihagyás” gomb van), a játék így is végigmegy.

Ha a legenerált fájlokat ide csatolod, a megfelelő fájlnevekkel, beépítem őket a demóba időzített magyar felirattal együtt.
