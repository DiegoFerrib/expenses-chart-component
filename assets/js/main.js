import '../css/style.css';
import jsonData from '../../data/data.json';
import insertDataInCalendar from './inser-data-in-calendar';
import addEvents from './add-events';

const calendar = document.querySelector('.calendar');
const total = document.querySelector('.value');
const displayWidth = window.innerWidth;

insertDataInCalendar(jsonData, calendar, total);

addEvents(displayWidth);
