# Rock, Paper, Scissors Game 🪨🧻✂️

A classic Rock, Paper, Scissors game built from scratch using vanilla JavaScript, HTML5, and CSS3. The project features state management tracking scores, round numbers, and dynamically updating UI elements based on gameplay outcomes.

## 🚀 Live Demo

Check out the live preview here: [Live Demo Link](https://induvarman.github.io/rock-paper-scissors-game/index.html)

---

## ✨ Features

* **Interactive Gameplay:** Clickable UI buttons for user choice selection.
* **Smart State Tracking:** Tracks player score, computer score, and round numbers in real-time.
* **Automated Match End:** The game plays up to 5 points. Once a champion is declared, the board automatically resets for a fresh match.
* **Dynamic UI Updates:** Immediate text and DOM feedback representing wins, losses, ties, and final match results.

---

## 🛠️ Tech Stack & Concepts Applied

* **HTML5 & CSS3:** Semantic markup and layout structure.
* **Vanilla JavaScript:** * **DOM Manipulation:** Dynamically altering `.textContent` to update scores and game states.
    * **Event Handling:** Listening for button interactions using structured `e.target` and `e.currentTarget` event objects.
    * **Array Methods:** Leveraging `.forEach()` to attach event listeners efficiently across button arrays.
* **Git & GitHub Workflow:** Developed using dedicated feature branches (`ui` branch) to maintain a clean, stable `main` branch code history.

---

## 📐 Architecture & Readability Focus

This project was built following the professional software engineering paradigm: **"Make it work, make it right."**

1.  **Phase 1 (Survival Mode):** Focused on mapping out the core conditional game logic, state manipulation, and event passing to get a minimum viable product working.
2.  **Phase 2 (Architecture Mode):** Refactored monolithic code blocks into distinct, descriptive helper functions (e.g., `declareChampion()`, `resetGame()`) to maximize code readability, maintainability, and ensure single-responsibility practices.

---

## 📬 Contact / Author

Created by [Induvarman](https://github.com/induvarman) — feel free to connect or review the source code!