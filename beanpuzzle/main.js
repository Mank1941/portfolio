const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const puzzle = new BeanPuzzle();

// Resize canvas to fit window
// function resizeCanvas() {
//   const padding = 40; // optional, for breathing space
//   canvas.width = window.innerWidth - padding;
//   canvas.height = window.innerHeight * 0.8;
// }
// resizeCanvas();
// window.addEventListener('resize', () => {
//   resizeCanvas();
//   draw();
// });

function drawBean(x, y, value) {
  ctx.beginPath();
  ctx.arc(x, y, 12, 0, Math.PI * 2);

  ctx.fillStyle = value === 0 ? '#b3d5e0' : '#5a4f64'; // 0 = light blue, 1 = muted purple
  ctx.fill();
  
  ctx.strokeStyle = "#3e2a40";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawEnd() {
    // Draw 75% transparent black background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Draw centered text
    const message = "Slot Complete!";
    ctx.font = "bold 46px sans-serif";
    ctx.fillStyle = "#00ff00";
  
    const textWidth = ctx.measureText(message).width;
    const canvasCenterX = canvas.width / 2;
    const canvasCenterY = canvas.height / 2;
  
    ctx.fillText(message, canvasCenterX - textWidth / 2, canvasCenterY);
}

function disableShiftButtons(disabled) {
    const buttons = document.querySelectorAll('.shift-btn');
    buttons.forEach(btn => btn.disabled = disabled);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#eee";
    ctx.font = "20px sans-serif";
    //   ctx.fillText("Slots", 160, 30);

    for (let col = 0; col < 2; col++) {
        for (let row = 0; row < 14; row++) {
            const x = 112 + col * (canvas.width - 24 - 200);
            const y = 50 + row * 30;
            drawBean(x, y, puzzle.slots[col][row]);
        }
    }

    //   ctx.fillText("Messenger", 140, 480);
    for (let i = 0; i < 4; i++) {
        drawBean(250, 50 + (5+i) * 30, puzzle.msg[i]);
    }

    if (puzzle.slot_complete()) {
        drawEnd();
        disableShiftButtons(true);
    } else {
        disableShiftButtons(false);
    }
}

window.draw = draw;
window.puzzle = puzzle;
