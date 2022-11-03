const MonthsDom = document.getElementById("Months") 
const DaysDom = document.getElementById("Days")
const HoursDom = document.getElementById("Hours")
const MinutesDom = document.getElementById("Minutes")
const SecondsDom = document.getElementById("Seconds")

function CountDown() {

    const Semester = new Date("23 January 2023 15:30")
const Now = new Date()

    const TotalSeconds = (Semester - Now) / 1000
    const Seconds = Math.floor(TotalSeconds % 60)
    const Minutes = Math.floor(TotalSeconds / 60) % 60
    const Hours = Math.floor(TotalSeconds / 3600) % 24
    const Days = Math.floor(TotalSeconds / 86400) % 30
    const Months = Math.floor(TotalSeconds / 86400 / 30)

   
    MonthsDom.innerHTML = formatTime(Months) 
    DaysDom.innerHTML =  formatTime(Days)
    HoursDom.innerHTML = formatTime(Hours)
    MinutesDom.innerHTML = formatTime(Minutes)
    SecondsDom.innerHTML = formatTime(Seconds)
}

CountDown()

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

setInterval(CountDown, 1000)
