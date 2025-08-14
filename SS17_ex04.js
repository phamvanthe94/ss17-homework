let body = document.getElementById(`body`);
let boxChild1 = document.getElementById(`boxChild1`);
let boxChild2 = document.getElementById(`boxChild2`);
let boxChild3 = document.getElementById(`boxChild3`);

// console.log(body);
// console.log(boxChild1);
// console.log(boxChild2);
// console.log(boxChild3);

boxChild1.addEventListener(`mouseover`, function () {
  body.style.backgroundColor = `yellow`;
});

boxChild2.addEventListener(`mouseover`, function () {
  body.style.backgroundColor = `green`;
});

boxChild3.addEventListener(`mouseover`, function () {
  body.style.backgroundColor = `gray`;
});
