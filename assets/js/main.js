const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// =====================
// CIELO
// =====================
function cielo() {
    const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
    g.addColorStop(0, "#ff4655");
    g.addColorStop(1, "#0f1923");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// =====================
// SOL
// =====================
function sol() {
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(650, 100, 50, 0, Math.PI * 2);
    ctx.fill();
}

// =====================
// MONTAÑAS
// =====================
function montanas() {
    ctx.fillStyle = "#1c252e";
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(i * 250, 300);
        ctx.lineTo(125 + i * 250, 150);
        ctx.lineTo(250 + i * 250, 300);
        ctx.closePath();
        ctx.fill();
    }
}

// =====================
// RÍO
// =====================
function rio() {
    ctx.fillStyle = "#3aaed8";
    ctx.beginPath();
    ctx.moveTo(0, 380);
    ctx.quadraticCurveTo(300, 300, 800, 380);
    ctx.lineTo(800, 450);
    ctx.lineTo(0, 450);
    ctx.closePath();
    ctx.fill();
}

function reflejos() {
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(100 + i * 80, 380);
        ctx.lineTo(140 + i * 80, 380);
        ctx.stroke();
    }
}

// =====================
// EDIFICIOS
// =====================
function edificio(x) {
    ctx.fillStyle = "#2b2b3a";
    ctx.fillRect(x, 230, 80, 140);

    ctx.fillStyle = "#ff4655";
    for (let i = 0; i < 4; i++) {
        ctx.fillRect(x + 30, 250 + i * 25, 20, 15);
    }
}

// =====================
// PLATAFORMA
// =====================
function plataforma() {
    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.arc(400, 360, 45, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#ff4655";
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(400, 360, 15 + i * 6, 0, Math.PI * 2);
        ctx.stroke();
    }
}

// =====================
// NUBES
// =====================
function nube(x, y) {
    ctx.fillStyle = "#ffffff";
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(x + i * 25, y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
}

// =====================
// EJECUCIÓN
// =====================
cielo();
sol();
montanas();
rio();
reflejos();

edificio(150);
edificio(300);
edificio(500);

plataforma();

nube(100, 80);
nube(300, 60);
nube(520, 90);