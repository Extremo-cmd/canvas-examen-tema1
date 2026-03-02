// Obtener el canvas y su contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ================= FUNCIONES =================

// Cielo
function dibujarCielo() {
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, 400, 200);
}

// Suelo
function dibujarSuelo() {
    ctx.fillStyle = "#228B22";
    ctx.fillRect(0, 200, 400, 200);
}

// Sol
function dibujarSol() {
    ctx.beginPath();
    ctx.arc(320, 60, 30, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
}

// Casa
function dibujarCasa() {
    // Base
    ctx.fillStyle = "#FF6347";
    ctx.fillRect(120, 200, 100, 80);

    // Techo
    ctx.beginPath();
    ctx.moveTo(120, 200);
    ctx.lineTo(170, 160);
    ctx.lineTo(220, 200);
    ctx.closePath();
    ctx.fillStyle = "#8B0000";
    ctx.fill();

    // Puerta
    ctx.fillStyle = "#654321";
    ctx.fillRect(160, 230, 20, 50);
}

// Árbol
function dibujarArbol(x, y) {
    // Tronco
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(x, y, 20, 50);

    // Copa (3 círculos)
    ctx.beginPath();
    ctx.arc(x + 10, y - 10, 20, 0, Math.PI * 2);
    ctx.arc(x - 5, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
}

// ================= ESCENA PRINCIPAL =================

function dibujarEscena() {
    dibujarCielo();
    dibujarSuelo();
    dibujarSol();
    dibujarCasa();

    // Árboles
    dibujarArbol(40, 220);
    dibujarArbol(300, 230);
    dibujarArbol(350, 225);
}

// Ejecutar dibujo
dibujarEscena();