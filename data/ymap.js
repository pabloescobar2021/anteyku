function loadYandexMap() {
  return new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve(window.ymaps);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=1858a1e0-3bda-4b30-bf3e-228eb597ac6b&lang=ru_RU";
    script.onload = () => resolve(window.ymaps);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const ymaps = await loadYandexMap();
    ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: [43.601332, 39.739636],
        zoom: 17
      });

      const myPlacemark = new ymaps.Placemark(
        [43.601332, 39.739636],
        {
          hintContent: 'CтройСтруктураГрупп',
          balloonContent: 'Мы находимся здесь'
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../images/logomap.png',
          iconImageSize: [60, 60],
          iconImageOffset: [-30, -60]
        }
      );

      map.geoObjects.add(myPlacemark);
    });
  } catch (err) {
    console.error("Ошибка загрузки Яндекс.Карт", err);
  }
});
