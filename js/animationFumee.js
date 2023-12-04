const canvas = document.getElementById('smokeCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
const maxParticles = 100; // Nombre maximal de particules

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 5;
    this.color = 'rgba(200, 200, 200, 0.7)';
    this.speedX = Math.random() * 0.2 - 0.25; // Ajustement de la vitesse horizontale
    this.speedY = Math.random() * -0.2;       // Ajustement de la vitesse verticale
    this.life = 400;                          // Augmentation de la durée de vie
}

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
};

Particle.prototype.update = function () {
    this.x += this.speedX / 8;
    this.y += this.speedY / 2;
    this.life -= 0.2;
    this.radius -= 0.01; // Réduction de la diminution du rayon
};

function createParticles() {
    const x = canvas.width / 2 + 45; // Position fixe au centre du canvas
    const y = 31;    // Position en bas du canvas
    const particleCount = Math.floor(Math.random() * 10) + 1; // Nombre aléatoire de particules à chaque intervalle

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(x, y));
    }

    // Limiter le nombre total de particules
    while (particles.length > maxParticles) {
        particles.shift(); // Supprimer les particules les plus anciennes
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();

        if (particles[i].life <= 0 || particles[i].radius <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

setInterval(function () {
    createParticles();
}, 200); // Délai fixe à 500 millisecondes pour un débit constant

function loop() {
    animate();
    requestAnimationFrame(loop);
}

loop();