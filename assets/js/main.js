import '../css/style.css';
import jsonData from '../../data/data.json';

const calendar = document.querySelector('.calendar');
const total = document.querySelector('.value');

const insertDataInCalendar = async () => {
  jsonData.forEach(({ amount, day }) => {
    const el = document.createElement('div');
    el.setAttribute('class', 'calendar_cell');
    el.innerHTML = `
      <div class="calendar_graphic" style="height: ${Number(amount)}%;}"></div>
      <p class="day">${day}</p>
    `;

    calendar.appendChild(el);
  });

  const totalValue = jsonData.reduce((acc, { amount }) => acc + Number(amount), 0);

  total.innerHTML = `$${totalValue}`;
};

insertDataInCalendar();
