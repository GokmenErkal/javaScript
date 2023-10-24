let myName = prompt("İsminiz: ")

let username = document.querySelector("#myName");
let clock = document.querySelector("#myClock");


username.innerHTML = myName;

clock.innerHTML = date()

function date() {

    let date = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    return (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${days[date.getDay()]}`)
}
