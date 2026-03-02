const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ===============================
// FONDO
// ===============================
function dibujarCielo() {
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, 200);
}

function dibujarAgua() {
  ctx.fillStyle = "#9ad0ec";
  ctx.fillRect(0, 200, canvas.width, 80);
}

function dibujarPasto() {
  ctx.fillStyle = "#4CAF50";
  ctx.fillRect(0, 280, canvas.width, 220);
}

// ===============================
// NUBES (CÍRCULOS)
// ===============================
function dibujarNube(x, y) {
  ctx.fillStyle = "white";
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(x + i * 20, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ===============================
// ÁRBOL
// ===============================
function dibujarTronco() {
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(230, 180, 40, 120);
}

function dibujarCopa() {
  ctx.fillStyle = "#f2a1c7";
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.arc(250 + Math.random() * 80 - 40, 160 + Math.random() * 60 - 30, 25, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ===============================
// FLORES
// ===============================
function dibujarFlor(x, y) {
  ctx.fillStyle = "#ff69b4";
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(x + Math.cos(i) * 6, y + Math.sin(i) * 6, 4, 0, Math.PI * 2);
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
      320 + Math.random() * 160
    );
  }
}

// ===============================
// EJECUCIÓN
// ===============================
dibujarCielo();
dibujarAgua();
dibujarPasto();

dibujarNube(60, 60);
dibujarNube(200, 40);
dibujarNube(350, 70);

dibujarTronco();
dibujarCopa();

dibujarFlores();