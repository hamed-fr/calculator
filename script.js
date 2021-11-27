let displayBox = document.querySelector(".display")
let list = document.querySelectorAll(".show-display")
function showDisplay (event){
    let x = event.target.innerText;
    if (displayBox.innerHTML == 0){
    return displayBox.innerHTML = x;}
    return displayBox.innerHTML += x;
}
function calculate (){
    let result = displayBox.innerHTML;
    displayBox.innerHTML = eval(result)
}
function allClear (){
    displayBox.innerHTML = 0
}
function clear (){
   let text = displayBox.innerText;
    if (text.length === 1){
        displayBox.innerHTML = 0;
    } else {
        displayBox.innerHTML = text.substring(0, text.length - 1)
    }
}
list.forEach(item =>{
 item.addEventListener("click", showDisplay)
})
document.querySelector(".calculate").addEventListener("click", calculate)
document.querySelector(".all-clear").addEventListener("click", allClear)
document.querySelector(".clear-last").addEventListener("click", clear)

