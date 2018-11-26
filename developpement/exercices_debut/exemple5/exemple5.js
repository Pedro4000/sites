
var weekDays = new Array();
var yearMonth = new Array();

weekDays[0] = 'Dimanche';
weekDays[1] = 'Lundi';
weekDays[2] = 'Mardi';
weekDays[3] = 'Mercredi';
weekDays[4] = 'Jeudi';
weekDays[5] = 'Vendredi';
weekDays[6] = 'Samedi';

yearMonth[8]='Septembre';


var today = new Date();
document.write('Nous Sommes le '+weekDays[today.getDay()]+' '+today.getDay()+' '+yearMonth[today.getMonth()]+' '+today.getFullYear());