/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import '../css/style.css';
import jsonData from '../../data/data.json';

const calendar = document.querySelector('.calendar');
const total = document.querySelector('.value');

const insertDataInCalendar = async () => {
  jsonData.forEach(({ amount, day }) => {
    const el = document.createElement('div');
    el.setAttribute('class', 'calendar_cell');
    el.innerHTML = `
      <div class="graph_value invisible">$${amount}</div>
      <div class="calendar_graphic" style="height: ${amount >= 100 ? 100 : Number(amount)}%;}"></div>
      <p class="day">${day}</p>
    `;

    calendar.appendChild(el);
  });

  const totalValue = jsonData.reduce((acc, { amount }) => acc + Number(amount), 0);

  total.innerHTML = `$${totalValue}`;
};

insertDataInCalendar();

function mouseOver(el) {
  el.querySelector('.graph_value').classList.remove('invisible');
  el.querySelector('.calendar_graphic').classList.add('active');
}

function mouseLeave(el) {
  el.querySelector('.graph_value').classList.add('invisible');
  el.querySelector('.calendar_graphic').classList.remove('active');
}

const graphCells = document.querySelectorAll('.calendar_cell');
graphCells.forEach((el) => el.addEventListener('mouseover', () => {
  mouseOver(el);
}));

graphCells.forEach((el) => el.addEventListener('mouseleave', () => {
  if (!el.isClicked) {
    mouseLeave(el);
  }
}));

graphCells.forEach((el) => el.addEventListener('click', () => {
  graphCells.forEach((elem) => elem.isClicked = false);
  el.isClicked = false;
  const calendarGraphic = el.querySelector('.calendar_graphic');
  if (calendarGraphic.classList.contains('is_clicked')) {
    calendarGraphic.classList.remove('is_clicked');
    el.isClicked = false;
  } else {
    calendarGraphic.classList.add('is_clicked');
    el.isClicked = true;
  }
}));
