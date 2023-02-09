let count = document.querySelectorAll(".count");
let countArry = Array.from(count)

countArry.map((value)=>{
    //number collect from user 
let countEndNumber = value.dataset.countend
//cunting calculation
let countingNum = 0
let counterUp = () =>{
    countingNum++
    value.innerHTML = countingNum
    if(countingNum == countEndNumber){
        clearInterval(timing);
    }
}
// input timing value
let timingNumber = value.dataset.time
let timing = setInterval(()=>{
    counterUp()
}, timingNumber)
})

