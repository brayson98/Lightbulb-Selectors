// Write your code here

// let count = 0;

// function toggleLightBulb() {
//     const elements = document.querySelectorAll('#row .lightbulb');
//     elements.forEach(element => {
//         element.classList.toggle('active');
//     });

//     const output = document.querySelector('.subtitle');
//     count++;
//     output.innerHTML = `You've clicked the lightbulb ${count} times`;
// }

let bulb1 = document.querySelector("#lightbulb1")
let bulb2 = document.querySelector("#lightbulb2")
let bulb3 = document.querySelector("#lightbulb3")
let subtitle = document.querySelector(".subtitle")
let count = 0;

bulb1.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lightbulb ${count} times`;
    this.classList.toggle("active")
})
bulb2.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lightbulb ${count} times`;
    this.classList.toggle("active")
})
bulb3.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lightbulb ${count} times`;
    this.classList.toggle("active")
})