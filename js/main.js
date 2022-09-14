const clockTime = document.getElementById('clockTime');
const hourPicker = document.getElementById('hourPicker');
const minPicker = document.getElementById('minPicker');
const AddAlarm = document.getElementById('AddAlarm')
const clockContainer = document.getElementById('clockContainer');
const amPms = document.getElementsByClassName('amPm');
const alarmAdded = document.getElementById('alarmAdded');
const currentAlarmContainer = document.getElementById('currentAlarmContainer')


const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
 ]

const months = [
    'January',
    'Februray',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
   ]


//adding hours to choose from 
for (let h=1; h<13; h++){
    const hourChoices = document.createElement('option')
    hourChoices.textContent = h;
    hourPicker.appendChild(hourChoices)
}

//add minutes to choose from 
for (let m=1; m<60; m++){
    const minChoices = document.createElement('option')
    
    minChoices.textContent = m;
    minPicker.appendChild(minChoices)
}

function getAlarm() {
    let hourPicked = hourPicker.options[hourPicker.selectedIndex].value
    let minPicked = minPicker.options[minPicker.selectedIndex].value
    
    for(amPm of amPms){
        if(amPm.checked){
           var partDayPicked = amPm.value;

        }
    }
    const alarmInfo = [hourPicked, minPicked,partDayPicked]
    return getAlarm
}


function setTime(){
    let date = new Date()
    
    let day = date.getDay();

    let dateDay = date.getDate()
    if (dateDay.toString().length == '1'){
        dateDay = `0${dateDay}`
    }

    let month = date.getMonth();
    let year = date.getFullYear();


    let hour = date.getHours();
    if (hour.toString().length == '1'){
        hour = `0${hour}`
    }

    let minutes = date.getMinutes();
    if (minutes.toString().length == '1'){
        minutes = `0${minutes}`
    }

    let seconds = date.getSeconds();
    if (seconds.toString().length == '1'){
        seconds = `0${seconds}`
    }
    
    
    clockTime.textContent = `${days[day]}, ${months[month]} ${dateDay}, ${year} ${hour}:${minutes}:${seconds}`


}
setInterval(setTime,1000)

AddAlarm.addEventListener('click',() => {
    currentAlarmContainer.classList.remove('hidden')
})