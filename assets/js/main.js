const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ======================================
// FONDO
// ======================================
function dibujarCielo() {
  const gradiente = ctx.createLinearGradient(0, 0, 0, 200);
  gradiente.addColorStop(0, "#9adcf7");
  gradiente.addColorStop(1, "#87CEEB");
  ctx.fillStyle = gradiente;
  ctx.fillRect(0, 0, canvas.width, 200);
}

function dibujarAguaFondo() {
  ctx.fillStyle = "#b5e3f2";
  ctx.fillRect(0, 200, canvas.width, 60);
}

function dibujarPasto() {
  ctx.fillStyle = "#4CAF50";
  ctx.fillRect(0, 260, canvas.width, 240);
}

// ======================================
// COLINAS (INTEGRAN EL RÍO)
// ======================================
function dibujarColinaSuperior() {
  ctx.fillStyle = "#5cb85c";
  ctx.beginPath();
  ctx.moveTo(0, 260);
  ctx.quadraticCurveTo(200, 230, 400, 260);
  ctx.quadraticCurveTo(550, 300, canvas.width, 260);
  ctx.closePath();
  ctx.fill();
}

function dibujarColinaInferior() {
  ctx.fillStyle = "#4CAF50";
  ctx.beginPath();
  ctx.moveTo(0, 380);
  ctx.quadraticCurveTo(200, 420, 400, 380);
  ctx.quadraticCurveTo(550, 350, canvas.width, 390);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fill();
}

// ======================================
// RÍO
// ======================================
function dibujarRio() {
  ctx.fillStyle = "#7ec8e3";
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.quadraticCurveTo(150, 260, 300, 320);
  ctx.quadraticCurveTo(450, 380, canvas.width, 350);
  ctx.lineTo(canvas.width, 420);
  ctx.quadraticCurveTo(450, 450, 300, 400);
  ctx.quadraticCurveTo(150, 360, 0, 380);
  ctx.closePath();
  ctx.fill();
}

function dibujarReflejosRio() {
  ctx.strokeStyle = "rgba(255,255,255,0.5)";
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(50 + i * 80, 340 + i * 6);
    ctx.lineTo(130 + i * 80, 350 + i * 6);
    ctx.stroke();
  }
}

// ======================================
// NUBES
// ======================================
function dibujarNube(x, y) {
  ctx.fillStyle = "white";
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(x + i * 20, y, 18, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ======================================
// ÁRBOL
// ======================================
function dibujarTronco() {
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(240, 170, 40, 120);
}

function dibujarCopa() {
  ctx.fillStyle = "#f2a1c7";
  for (let i = 0; i < 14; i++) {
    ctx.beginPath();
    ctx.arc(
      260 + Math.random() * 90 - 45,
      150 + Math.random() * 70 - 35,
      25,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
}

// ======================================
// FLORES
// ======================================
function dibujarFlor(x, y) {
  ctx.fillStyle = "#ff69b4";
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(
      x + Math.cos(i * 1.2) * 6,
      y + Math.sin(i * 1.2) * 6,
      4,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fill();
}

function dibujarFlores() {
  for (let i = 0; i < 20; i++) {
    dibujarFlor(
      Math.random() * canvas.width,
      300 + Math.random() * 180
    );
  }
}

// ======================================
// EJECUCIÓN (ORDEN IMPORTANTE)
// ======================================
dibujarCielo();
dibujarAguaFondo();

dibujarPasto();
dibujarColinaSuperior();

dibujarRio();
dibujarReflejosRio();

dibujarColinaInferior();

dibujarNube(60, 60);
dibujarNube(200, 40);
dibujarNube(360, 70);

dibujarTronco();
dibujarCopa();

dibujarFlores();