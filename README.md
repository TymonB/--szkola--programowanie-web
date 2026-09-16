# MB3 — wzorcowe rozwiązanie

Gotowa wersja zadania praktycznego z mini-bloku **MB3 · Szybka powtórka
HTML / CSS / JavaScript**. Pokazuje, co ma powstać na wyjściu.

To **jeden gotowy stan projektu**, bez historii Gita i bez podziału na commity —
uczniowie budują to samo krokami 1–9 z opisu zadania, commitując po każdym kroku.

## Uruchomienie

Otwórz `index.html` w przeglądarce. Nic nie trzeba instalować.
W VS Code najwygodniej przez rozszerzenie **Live Server**.

## Pliki

| Plik | Zawartość |
|---|---|
| `index.html` | struktura semantyczna, nawigacja z kotwicami, formularz |
| `style.css` | model pudełkowy, flexbox, stany `:hover` i `:focus`, ciemny motyw |
| `script.js` | lista z tablicy, obsługa formularza, przełącznik motywu |

## Co sprawdzić po otwarciu

| Element | Oczekiwane zachowanie |
|---|---|
| Menu | kliknięcie przewija stronę do właściwej sekcji, płynnie |
| Lista umiejętności | widoczna, choć w `index.html` `<ul>` jest **pusty** |
| Formularz — puste pola | czerwony komunikat pod formularzem |
| Formularz — poprawne dane | zielone potwierdzenie z imieniem i tematem, pola czyszczone |
| Konsola (`F12`) | obiekt z danymi formularza, **zero błędów** |
| Przycisk motywu | przełącza kolory strony i zmienia własny napis |
| Wąskie okno | nawigacja i lista zawijają się do kolejnej linii |

## Rozwiązania warte uwagi

**Lista jest generowana, nie wpisana.** W `index.html` stoi pusty
`<ul id="lista-umiejetnosci">`, a `script.js` tworzy `<li>` pętlą `for...of`.
Sprawdź w zakładce **Elements** — elementy są, choć w pliku ich nie ma.
Ten sam mechanizm wróci jako `map()` w React.

**`textContent`, nie `innerHTML`.** Komunikat pod formularzem zawiera imię wpisane
przez użytkownika. Gdyby wstawiać je przez `innerHTML`, ktoś mógłby wpisać w pole
kod i ten kod by się wykonał — to podatność XSS. Wracamy do tego w bloku LB6.

**`event.preventDefault()`.** Bez tej linii przeglądarka przeładowałaby stronę
przy wysyłce formularza i reszta funkcji nigdy by się nie wykonała.

**`classList.toggle`** zwraca `true` lub `false` — dzięki temu przycisk wie,
czy ma teraz pokazywać napis „Ciemny motyw”, czy „Jasny motyw”.

**Składnia jest celowo klasyczna.** Zwykłe `function`, pętla `for...of`,
łączenie napisów plusem. Funkcje strzałkowe, `map()` i szablony napisów
pojawią się w MB4 — wtedy ten sam kod przepiszemy krócej.
