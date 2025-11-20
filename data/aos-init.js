// Скрипт подключение анимаций появления в пределе обзора

window.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }
});


