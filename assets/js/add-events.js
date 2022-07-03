/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const mouseOver = (el) => {
  el.querySelector('.graph_value').classList.remove('invisible');
  el.querySelector('.calendar_graphic').classList.add('active');
};

const mouseLeave = (el) => {
  el.querySelector('.graph_value').classList.add('invisible');
  el.querySelector('.calendar_graphic').classList.remove('active');
};

const greaterThan768 = (graphCells) => {
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
};

const lessThan768 = (graphCells) => {
  graphCells.forEach((el) => el.addEventListener('click', () => {
    graphCells.forEach((elem) => elem.isClicked = false);
    el.isClicked = false;
    const calendarGraphic = el.querySelector('.calendar_graphic');
    if (calendarGraphic.classList.contains('is_clicked')) {
      calendarGraphic.classList.remove('is_clicked');
      el.querySelector('.graph_value').classList.add('invisible');
      el.isClicked = false;
    } else {
      calendarGraphic.classList.add('is_clicked');
      el.querySelector('.graph_value').classList.remove('invisible');
      el.isClicked = true;
    }
  }));
};

// Main function
const addEvents = (displayWidth) => {
  const graphCells = document.querySelectorAll('.calendar_cell');

  if (displayWidth > 768) {
    greaterThan768(graphCells);
  } else {
    lessThan768(graphCells);
  }
};

export default addEvents;
