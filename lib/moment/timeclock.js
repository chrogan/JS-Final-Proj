

//Take user input and assign to lng and lat variables for time
export function time(coord){

    // if(document.querySelector('.clock')){
        while (document.querySelector('.clock')){
            document.querySelector('.clock').remove();
        }
    // }
    
let lng = coord.lng; 
let lat = coord.lat;
//tz lookup to take in coordinates and output IANA standard time zones
const input = tzlookup(lat,lng);
console.log(input);
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
    var date = new Date();
const month = moment().tz(input).format('dddd, MMM Mo');
const time = moment().tz(input).format('hh:mm:ss a zz');
momentText.innerText = `${month}
${time}`;}, 1000);
// document.querySelector('.clock').setAttribute('style', 'display:none');
// document.querySelector('.clockText').setAttribute('style', 'display:none');
}
