document.addEventListener("DOMContentLoaded", function () {
  var map = L.map('map', {
    worldCopyJump: true,  // Позволяет перемещаться вокруг глобуса
  }).setView([0, 0], 2); // Центр карты

  // Добавляем OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Добавляем терминатор (дневная и ночная зона)
  var terminator = L.terminator();
  terminator.addTo(map);

  // Обновляем терминатор каждую секунду
  setInterval(function () {
    terminator.setTime();
  }, 1000);
});
