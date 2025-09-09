<!-- Fancy Title with Typing Effect -->
<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=40&duration=3000&pause=500&color=00F7D3&center=true&vCenter=true&width=800&lines=🎮+Simon+Game+3D+Edition;Memory+Challenge+with+Animations;Built+with+HTML+%2B+CSS+%2B+JavaScript" alt="Typing SVG">
</h1>

---

<p align="center">
  <img src="https://img.shields.io/badge/HTML-5-orange?logo=html5&style=for-the-badge">
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3&style=for-the-badge">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&style=for-the-badge">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge">
</p>

<p align="center">
  <img src="https://media.giphy.com/media/fAnzw6YK33jMwzp5wp/giphy.gif" width="500" alt="3D Simon Game Demo">
</p>

---

## 📌 Features  
✨ **3D Inspired Buttons** – glowing hover effect & pressed animation  
✨ **Dynamic Difficulty** – sequence grows each round  
✨ **Smooth Animations** – flashes & sounds with every step  
✨ **Game Over Shake** – animated red flash + restart  

---

## 🛠️ Tech Stack  
**Frontend:** HTML, CSS, JavaScript  

---

## 📂 Project Structure  
Simon-game/
│── README.md
│── simon.html
│── simon.css
│── simon.js
│
├── assets/
│   └── demo.gif        # Gameplay demo (optional)
│
└── sounds/
    ├── green.mp3
    ├── red.mp3
    ├── yellow.mp3
    └── blue.mp3
## 📊 Game Flow

          +--------------------+
          |   User Presses Key |
          +---------+----------+
                    |
             Start New Game
                    |
          +---------v----------+
          |   Show Sequence    |
          +---------+----------+
                    |
          +---------v----------+
          | User Repeats Steps |
          +---------+----------+
                    |
     +--------------+--------------+
     |                             |
 Correct Sequence           Wrong Sequence
     |                             |
     v                             v
 Next Level                Game Over + Restart
graph TD
   A[Start Game 🎬] --> B[Show Random Sequence ✨]
   B --> C[User Repeats Steps 🖱️]
   C -->|Correct| D[Next Level 🚀]
   C -->|Wrong| E[Game Over 💥]
   E --> A


---

## ▶️ How to Run  
1. Clone this repository:  
   ```bash
   git clone https://github.com/sshashank011/Simon-game.git
   cd Simon-game


