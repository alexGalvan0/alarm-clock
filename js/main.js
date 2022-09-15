const clockTime = document.getElementById('clockTime'); // time displayed on page
const AddAlarmBtn = document.getElementById('AddAlarmBtn'); //btn to add alarm
const alarmAdded = document.getElementById('alarmAdded'); // alarm added displayed
const AlarmInput = document.getElementById('AlarmInput'); //input field to add alarm
const AlarmContainer = document.getElementById('AlarmContainer') // alarm container default hidden untill alarm added


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


//Getting time returning times object
function getTime(){
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

    const times = {     
                        'date':date,
                        'day': day,
                        'dateDay': dateDay,
                        'month': month,
                        'year': year,
                        'hour': hour,
                        'minutes': minutes,
                        'seconds':seconds
                  }
    return times
}

//Add time to the webpage 
function setTime(){
    clockTime.textContent = `${days[getTime()['day']]}, ${months[getTime()['month']]} ${getTime()['dateDay']}, ${getTime()['year']}  ${getTime()['hour']}:${getTime()['minutes']}:${getTime()['seconds']}`
}
// Updates time on webpage each second


//Alarm functionality



function getAlarm() {
    const alarmSelected = AlarmInput.value
    return alarmSelected
}


AddAlarmBtn.addEventListener('click',() => {
    if (new Date(getTime()['date'] /1000) - new Date(getAlarm())/1000 > 0 ){
        alert('Alarm time has already passed')
        AlarmContainer.classList.add('hidden')
    } else {
        AlarmContainer.classList.remove('hidden')
        alarmAdded.textContent = getAlarm()
        alarmAdded.style.textDecoration = 'none';
    }
})

function checkAlarm() {
    if (new Date(getTime()['date'] /1000) - new Date(getAlarm())/1000 == 1 ){
        alarmAdded.style.textDecoration = 'line-through';
        alert('Wake Up!')
    }
}

setInterval(checkAlarm, 1000)
setInterval(setTime,1000)
