
//Take user input and assign to lng and lat variables for time
// let lng = ; 
// let lat = ;

//tz lookup to take in coordinates and output IANA standard time zones
// const input = tzlookup(lng,lat);

//create element to hold clock
const momentContainer = document.createElement('div');
momentContainer.classList.add('clock');
document.querySelector('#navbarOutput').appendChild(momentContainer);
//element for actual clock
const momentText = document.createElement('div');
momentText.classList.add('clockText');
document.querySelector('.clock').appendChild(momentText);

// Takes IANA time zone, and outputs its time every 1000ms
setInterval(()=>{
const month = moment().tz('America/Los_Angeles').format('dddd, MMM Mo');
const time = moment().tz('America/Los_Angeles').format('hh:mm:ss a zz');
momentText.innerText = `${month}
${time}`;}, 1000);

