let btn = document.getElementById(`btn`);
let overlay = document.getElementById(`overlay`);
let modalBox = document.getElementById(`modalBox`);
let close = document.getElementById(`close`);

// console.log(btn);
// console.log(close);
// console.log(modal);
// console.log(modalBox);
// console.log(overlay);
btn.addEventListener(`click`, function () {
  overlay.style.display = `block`;
  modalBox.style.visibility = `visible`;
});

close.addEventListener(`click`, function () {
  overlay.style.display = `none`;
  modalBox.style.visibility = `hidden`;
});
