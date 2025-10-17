 //document.getElementById("count-el").innerHTML=5
 
 //let myage=18
 //console.log(myage)
 let firstbatch=5
 let secondbatch=7
 let count = firstbatch+ secondbatch
 console.log(count)
 let myage=18
 let homedogratio=25
 let mydog = myage * homedogratio
 console.log(mydog)
 let hello=5
 hello +=1
  console.log(hello)

let bonuspoints=50
 console.log(bonuspoints)

bonuspoints+=50
 console.log(bonuspoints)

bonuspoints-=75
 console.log(bonuspoints)

bonuspoints+=45
 console.log(bonuspoints)

 let count1=0
 function increment(){
    count1 +=1
    console.log(count1)
 }
function countdown(){
    console.log(5)
        console.log(4)
     console.log(3)
    console.log(2)
    console.log(1)

}
countdown()
countdown()
let lap1=34
let lap2=37
let lap3=39

function sum(){
    console.log(lap1+lap2+lap3)

}

sum()
let lapscompleted=0
function laps()
{
    lapscompleted+=1
        console.log(lapscompleted)

}
laps()
laps()
laps()

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(saveEl)
 let cnt=0
 function increment(){
    cnt+=1
    countEl.innerText = cnt
 }
 function save(){
    let countsr=cnt+ " - "
    saveEl.textContent +=countsr
    countEl.textContent=0
    cnt=0

 }

 let username="per"
 let message = "you have new notifications"
 messagetouser=message+","+username
 console.log(messagetouser)
 let welcomeEl=document.getElementById("welcome")
 let greetings="hi how are you"
 let Name="minahil"
welcomeEl.innerText=greetings + Name
welcomeEl.innerText +="🙌"

let firstname="mn"
let lastname="abb"
let fullname=firstname+lastname
console.log(fullname)

function hi(){
    console.log("hi there,linda!")
}
hi()
 
let mypoints=3
function add3points(){
    mypoints += 3
}
function remove1point(){
    mypoints -= 1

}
add3points()
add3points()
add3points()
remove1point()
remove1point()

console.log(mypoints)

let errorparagreph=document.getElementById("error")
console.log(errorparagreph)
function purchase(){
console.log("the button is clicked")
errorparagreph.innerText="Something went wrong,please try again"
}
let no1=8
let no2=3
document.getElementById("num1-el").textContent=no1
document.getElementById("num2-el").textContent=no2
let sumEL= document.getElementById("sum-el")
console.log(sumEL)
function add(){
sumEL.textContent ="sum:" + (no1 +no2)
}
function subtract(){
sumEL.textContent ="sum:" + (no1 -no2)
}
function divide(){
sumEL.textContent ="sum:" + (no1/no2)
}
function multiply(){
sumEL.textContent ="sum:" + (no1*no2)
}

let age =22
if (age>21)
{
            console.log("you cannot enter the night club!")

}
else{
            console.log("selcome!")

}
let age1=100
if (age1<100){
            console.log("you are not eligible")

}
else if(age1 === 100){
            console.log("here is your birthday card from king")

}
else{
            console.log("not eligible, you have gotten one!")

}

let firstcard=10
let secondcard=11
let cards=[firstcard,secondcard]
let sum2 = firstcard +secondcard
let hasblackjack=false
let isalive = true
let message1  = ""
let messageEl=document.getElementById("message1-el")
let summEl=document.getElementById("sum2-el")

let cardEL=document.getElementById("cards-el")

console.log(summEl)
function startGame(){
    renderGame()
}
function  renderGame(){ 
    cardEL.textContent="Cards: " + cards[0] + " " + cards[1] 
    summEl.textContent="Sum: " + sum2
if (sum2<=20){
   message1=("do you want to draw a new card? 😊")

}
else if (sum2 === 21){
        message1=("wohoo! you'hv got blackjet!😍")
hasblackjack=true
}
else{
        message1=("you'r out of game!😒")
isalive=false
}
messageEl.textContent=message1
}

function Card(){
    console.log("Drawing a new card from the door")
let card=8
sum2 += card
 renderGame()
}


