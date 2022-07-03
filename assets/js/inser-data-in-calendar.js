/* eslint-disable no-param-reassign */
const insertDataInCalendar = async (jsonData, calendar, total) => {
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

export default insertDataInCalendar;
