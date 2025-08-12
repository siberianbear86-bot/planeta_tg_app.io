// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.ready();  // Уведомляем Telegram, что app готово
tg.expand();  // Разворачиваем на полный экран

// Функция для запроса данных из API
async function fetchData() {
  try {
    const response = await fetch('https://your-api-url.com/data');  // Замени на URL твоего API
    const data = await response.json();
    document.getElementById('data-container').innerHTML = `
      <p>Данные: ${JSON.stringify(data, null, 2)}</p>  // Отобрази данные как JSON для теста
    `;
  } catch (error) {
    console.error('Ошибка API:', error);
    document.getElementById('data-container').innerHTML = 'Ошибка загрузки данных';
  }
}

// Обработчик кнопки
document.getElementById('load-data').addEventListener('click', fetchData);

// Опционально: Получи данные пользователя из Telegram
console.log('Пользователь:', tg.initDataUnsafe.user);