// Выносим переменную и функцию во внешний контекст
const music = document.getElementById('bg-music');

function playMusic() {
    if (music && music.paused) {
        music.play().catch(err => console.log("Нужно взаимодействие пользователя"));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (music) music.volume = 0.2;
    // Запуск по любому клику в начале
    document.addEventListener('click', playMusic, { once: true });
});

function toggleMusic() {
    const btn = document.querySelector('.music-control');
    if (!music) return;

    if (music.paused) {
        music.play();
        if (btn) btn.innerText = "🔊"; 
    } else {
        music.pause();
        if (btn) btn.innerText = "🔇";
    }
}