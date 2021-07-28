const bday = document.querySelector("#bday");
const result = document.querySelector(".result");
const form = document.querySelector(".form");



form.addEventListener("submit", (e) => {
  e.preventDefault();

const date = bday.value;  
console.log(date); // yyyy-mm-dd
let day= date.slice(8);
let month= date.slice(5, 7);
let year= date.slice(0,4);
console.log(day); //dd
console.log(month); //mm
console.log(year); //yyyy

//FORMATS
const formatZero = year + month + day;
const formatOne = month + day + year;
const formatTwo = day + month + year;
const formatThree = month + day + year.slice(2);
console.log(formatZero);
console.log(formatOne);
console.log(formatTwo);
console.log(formatThree);
//Reversed Formats
const reversedZero = formatZero.split("").reverse().join("");
const reversedOne = formatOne.split("").reverse().join("");
const reversedTwo = formatTwo.split("").reverse().join("");
const reversedThree = formatThree.split("").reverse().join("");


  if (formatZero===reversedZero || formatOne===reversedOne || formatTwo===reversedTwo || formatThree===reversedThree) {
    result.innerText = "Your Birthday is Palindrome";
 
  } else {
    result.innerText = "Your Birthday is not Palindrome";
  }
});