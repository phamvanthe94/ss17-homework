let h1 = document.getElementById(`h1`);
let btn1 = document.getElementById(`btn1`);
let btn2 = document.getElementById(`btn2`);
console.log(`h1`);
console.log(`btn1`);
console.log(`btn2`);

btn1.addEventListener(`click`, function () {
  h1.style.visibility = `hidden`;
});

btn2.addEventListener(`click`, function () {
  h1.style.visibility = `visible`;
});
