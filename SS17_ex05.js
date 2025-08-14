let form = document.getElementById(`form`);
// console.log(form);

form.addEventListener(`submit`, function (event) {
  event.preventDefault();
  //  console.log(`A`);
  let emailValue = form.email.value;
  let passwordValue = form.password.value;
  if (emailValue === `huanrose@gmail.com` && passwordValue === "123456") {
    alert(`Đăng nhập thành công`);
  } else {
    alert(`Đăng nhập thất bại`);
  }
  //   console.log(emailValue);
  //   console.log(passwordValue);
});
