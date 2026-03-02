const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// =======================
// FONDO - CIELO
// =======================
function dibujarCielo() {
  const gradiente = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradiente.addColorStop(0, "#ff6a5c");
  gradiente.addColorStop(1, "#1f1f2e");

  ctx.fillStyle = gradiente;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// =======================
// SOL
// =======================
function dibujarSol() {
  ctx.fillStyle = "#ffd166";
  ctx.beginPath();
  ctx.arc(400, 120, 60, 0, Math.PI * 2);
  ctx.fill();
}

// =======================
// MONTAÑAS
// =======================
function dibujarMontanas() {
  ctx.fillStyle = "#3a3a4f";

  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 300, 260);
    ctx.lineTo(150 + i * 300, 120);
    ctx.lineTo(300 + i * 300, 260);
    ctx.closePath();
    ctx.fill();
  }
}

// =======================
// RÍO
// =======================
function dibujarRio() {
  ctx.fillStyle = "#3aaed8";
  ctx.beginPath();
  ctx.moveTo(300, 450);
  ctx.quadraticCurveTo(400, 300, 500, 450);
  ctx.lineTo(600, 450);
  ctx.quadraticCurveTo(450, 260, 300, 450);
  ctx.closePath();
  ctx.fill();
}

function reflejosRio() {
  ctx.strokeStyle = "rgba(255,255,255,0.6)";
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(330 + i * 20, 360 + i * 10);
    ctx.lineTo(360 + i * 20, 360 + i * 10);
    ctx.stroke();
  }
}

// =======================
// EDIFICIO CENTRAL
// =======================
function edificioCentral() {
  ctx.fillStyle = "#222";
  ctx.fillRect(350, 200, 100, 180);

  ctx.fillStyle = "#ff4655";
  ctx.fillRect(390, 230, 20, 40);
  ctx.fillRect(390, 290, 20, 40);
}

// =======================
// PLATAFORMA VALORANT
// =======================
function plataforma() {
  ctx.fillStyle = "#2b2b3a";
  ctx.beginPath();
  ctx.arc(650, 380, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#ff4655";
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(650, 380, 20 + i * 4, 0, Math.PI * 2);
    ctx.stroke();
  }
}

// =======================
// NUBES
// =======================
function nube(x, y) {
  ctx.fillStyle = "#fff";
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(x + i * 20, y, 18, 0, Math.PI * 2);
    ctx.fill();
  }
}

// =======================
// EJECUCIÓN
// =======================
dibujarCielo();
dibujarSol();
dibujarMontanas();
dibujarRio();
reflejosRio();
edificioCentral();
plataforma();

nube(120, 80);
nube(250, 60);
nube(520, 90);