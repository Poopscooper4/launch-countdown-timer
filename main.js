let daynum = document.getElementById("daynum")

let hournum = document.getElementById("hournum")

let minnum = document.getElementById("minnum")

let secnum = document.getElementById("secnum")



let days = prompt("Enter day")
let hour = prompt("Enter hours")
let min = prompt("Enter minutes")
let sec = prompt("Enter seconds")

// console.log(days , hour , min ,sec);

if (days === "" || hour === "" || min === "" || sec === "") {
    alert("Error try again")
}else if(days === Number || hour === Number || min === Number || sec === Number){
    alert("you have to type numbers");
}


function timernumbers(time) {
    let spanday = document.createElement("span")
    spanday.innerText = days
    spanday.className = "Nstyle"
    daynum.appendChild(spanday)

    let spanhour = document.createElement("span")
    spanhour.innerText = hour
    spanhour.className = "Nstyle"
    hournum.appendChild(spanhour)

    let spanmin = document.createElement("span")
    spanmin.innerText = min
    spanmin.className = "Nstyle"
    minnum.appendChild(spanmin)

    let spansec = document.createElement("span")
    spansec.innerText = sec
    spansec.className = "Nstyle"
    secnum.appendChild(spansec)
}

timernumbers()


function timer(time) {
    setTimeout
}

// do {
//     let days = prompt("Enter day")
//     let hour = prompt("Enter hours")
//     let min = prompt("Enter minutes")
//     let sec = prompt("Enter seconds")
// } while (days === "" || hour === "" || min === "" || sec === "");



