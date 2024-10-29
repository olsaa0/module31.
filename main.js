var wakeuptime;
var dstime;
var sleeptime;
var noon =12;


function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours>= noon){
        merdian = "PM";
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();
}

setInterval(showCurrentTime, 1000);


function changeImage(){
    var time = new Date().getHours();

    var image = "ds_clock.png";
    var imageHTML = document.getElementById('timeImage');
    if(time == wakeuptime){
        image = "morning.gif";
    }
    else if(time == dstime){
        image = "class.gif";
    }
    else if(time == sleeptime){
        image = "night.gif";
    }

    imageHTML.src = image;

}

function updateClock(){
    var wakeUpTime = document.getElementById('wakeUpTimeSelector');

    wakeuptime = wakeUpTimeSelector.value;

    var dsTimeSelector = document.getElementById('classTimeSelector');

    dstime = dsTimeSelector.value;

    var sleepTimeSelector = document.getElementById('sleepTimeSelector');

    sleeptime = sleepTimeSelector.value;
}

var saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', updateClock);