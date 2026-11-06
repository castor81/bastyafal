# BÁSTYAFAL – Kaland a hálón

Védd a hálót. Vezetett, csapatjáték-formátumú, döntésalapú képzés középiskolásoknak (Kibervédelem alapjai, Információs műveletek alapjai). Fiktív helyszín: Bástyavár, Bástya Gimnázium, BástyaKupa.

NKE HHK Katonai Távoktatási és Vizsgaközpont · v2.2 · 2026-11-06

## Tartalom
- `index.html` – az 5–7 perces demó (egyetlen fájl, a videók beágyazva, magyar felirattal). Szimulált csapatmódban fut, bot-szavazókkal.
- `docs/` – vezetői döntési anyag (PDF v1.3) és a videóscriptek.
- `scripts/` – videónként egy generálási script (angol prompt, magyar felirat időkóddal).
- `videos/` – a demóba épített videók (átkódolt, 960×540).

## Ismert korlátok
- Az élő, több telefonos mód a claude.ai artifact adatbázisát használja; ezen a helyen (Vercel) a szimulált mód működik. Éles osztálytermi használathoz az S2V (Scan2Vote) háttér kell.
- Az ezüst/bronz és tanulópálya záró videó (V5b, V5c) még nincs legenerálva.
- A videók MI-generáltak; éles kiadás előtt jóváhagyás szükséges.
