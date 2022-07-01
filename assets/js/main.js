import '../css/style.css';

const calendar = document.querySelector('.calendar');
const total = document.querySelector('.value');

const fetchData = async () => {
  const data = await fetch('../data/data.json');
  const jsonData = await data.json();
  return jsonData;
};

const insertData = async () => {
  const data = await fetchData();

  data.map((d) => {
    const el = document.createElement('div');
    el.setAttribute('class', 'calendar_cell');
    el.innerHTML = `
      <div class="calendar_graphic" style="height: ${Number(d.amount)}%;}"></div>
      <p class="day">${d.day}</p>
    `;
    return calendar.appendChild(el);
  });

  const totalValue = data.reduce((acc, value) => acc + Number(value.amount), 0);

  total.innerHTML = `$${totalValue}`;
};

insertData();
