# 🫘 Bean Puzzle Game

A browser-based puzzle game inspired by a real-world bean sorting board seen online, where your goal is to correctly separate color-coded beans using shift mechanics.

![screenshot](ref.png) <!-- (Optional: add a real image file later) -->

---

## 🎮 How to Play

Your objective is to **separate the beans** so that:

- One slot (column) contains all **0s** (*🩵 blue-white beans*)
- The other contains all **1s** (*💜 purple beans*)

### Game Mechanics

- The game board consists of:
  - **Two vertical slots** (each with 14 beans)
  - **A messenger row** (4 beans that cycle between the slots)
- Each slot has **Shift Up** and **Shift Down** buttons
- Shifting transfers a bean between a slot and the messenger

---

## 🕹️ Controls

| Button        | Action                              |
|---------------|--------------------------------------|
| Gen Beans     | Randomly generate a new puzzle       |
| Shuffle       | Shuffle the current beans            |
| Slot 0 ↑ / ↓  | Shift beans in Slot 0 up or down     |
| Slot 1 ↑ / ↓  | Shift beans in Slot 1 up or down     |

When you successfully solve the puzzle, the game detects the solution and disables further inputs with a visual "Slot Complete!" message.

---

## 🎨 Design

The visual style uses a **gothic pixel-art-inspired color palette**, with dark backgrounds and soft, moody colors:

- **0s** → Pale blue-white (`#b3d5e0`)
- **1s** → Muted purple-gray (`#5a4f64`)
- Backgrounds and UI elements evoke a **midnight puzzle board** aesthetic.

---

## 📁 Folder Structure

