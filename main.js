let daynum = document.getElementById("daynum")

let hournum = document.getElementById("hournum")

let minnum = document.getElementById("minnum")

let secnum = document.getElementById("secnum")


let spanday = document.getElementById("spanday")

let spanhour = document.getElementById("spanhour")

let spanmin = document.getElementById("spanmin")

let spansec = document.getElementById("spansec")



let days;
let hour; 
let min; 
let sec; 

function againpromt() {
    do {
        sec = prompt("Enter seconds")
    } while (isNaN(Number(sec)));

    do {
        min = prompt("Enter minutes")
    } while (isNaN(Number(min)));

    do {
        hour = prompt("Enter hours")
    } while (isNaN(Number(hour)));

    do {
        days = prompt("Enter day")
    } while (isNaN(Number(days)));

    return sec , min , hour , days;

    console.log(sec);
}

againpromt()


let countdown =  setInterval(() => {

    spansec.innerText = sec

    spanmin.innerText = min

    spanhour.innerText = hour

    spanday.innerText = days

    if(sec <= 0 && (min > 0 || hour > 0 || days > 0)){
        sec = "60"
        min--
    }else if (min <= 0 && (hour > 0 || days > 0))  {
        min = "60"
        hour--
    }else if (hour < 0 && days > 0) {
        hour = 23
        days--
    }
    
    sec--

    if (days <= 0 && (hour <= 0 && sec <= "0" && min <= 0)) {
        clearInterval(countdown)
        alert("countdown is finished")
        
        }

}, 1000);
setInterval()




