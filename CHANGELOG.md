# Változásnapló

## v3.1.0 · 2026-11-09
- Játékos saját becenevet adhat belépéskor (ajánlott név előtöltve, max. 20 karakter, szerveroldali tisztítás és ütközéskezelés).
- A telefon szavazási nézete a kijelzővel azonos tartalmú: teljes opciószövegek, történet-buborék, kérdés, epizód/döntés, csapatjel; eredménynél százalékos megoszlás, következmény, jelzés, Nóra tanácsa, háttérváltozók, a záró képernyőn tanulság és útvonal.
- Várakozás közben „Mi történik most?" tájékoztató doboz: csatlakozók száma, forgó tippek, videó alatt élő felirat, fázisok közti magyarázat.

## v3.0.2 · 2026-11-09
- A házigazda-belépéshez egyelőre nincs kód: a „Házigazda nézet” gomb azonnal indít. A kód-követelmény a szerveren kapcsolható (`bf_config`: `host_code_required` = `true`), ilyenkor a kódmező automatikusan megjelenik. Kód nélküli módban a játékmenet-létrehozás korlátozott (max. 100 / 10 perc).

## v3.0.1 · 2026-11-09
- Javítás: hiányzó mobil viewport és doctype pótolva; a játékos nézet valódi telefonon teljes képernyős, nagy gombokkal.

## v3.0 · 2026-11-09 – élő mód saját háttérrel (éles fejlesztés)
- Élő mód Supabase-en (KM-dev, `bf_` táblák), a claude.ai artifact adatbázisa helyett; a játékosoknak nem kell fiók.
- Házigazda-kódos belépés; 6 jegyű csatlakozókód; a QR a Vercel-címre mutat (`#jatek/KÓD`).
- Szerveroldali szavazat-ellenőrzés, token-védett RPC-k, megőrzési szabály (7 nap).
- Terheléspróba-szkript, architektúra-dokumentum.

## v2.4 · 2026-11-06
- Indítóképernyő: bemutató klip és mozgó emblémaminta a link megnyitásakor.

## v2.3 · 2026-11-06
- Kivetítő mód fekvő képre, kiber-minta háttér, V6 script.
