
document.querySelector('.timeBtn').addEventListener('click', function() {
      
    while (document.querySelector('#api_output_container')){
        document.querySelector('#api_super_container').firstChild.remove();
    }

    while (document.querySelector('.clock')){
        document.querySelector('.clock').remove();
    }

//tz lookup to take in coordinates and output IANA standard time zones
const coord = JSON.parse(localStorage.getItem('coordinates'));

const input = tzlookup(coord.lat, coord.lng);
console.log(input);

const apiContainer = document.createElement('div');
apiContainer.setAttribute('id','api_output_container');
apiContainer.setAttribute("style", "justify-content:center");
document.querySelector('#api_super_container').appendChild(apiContainer);

//create element to hold clock
const momentContainer = document.createElement('div');
momentContainer.classList.add('clock');
document.querySelector('#api_output_container').appendChild(momentContainer);

//element for actual clock
const momentText = document.createElement('div');
momentText.classList.add('clockText');
document.querySelector('.clock').appendChild(momentText);

// Takes IANA time zone, and outputs its time every 1000ms
setInterval(()=>{
const month = moment().tz(input).format('dddd, MMM Mo');
const time = moment().tz(input).format('hh:mm:ss a zz');
momentText.innerText = `${month}
${time}`;}, 1000);
});
