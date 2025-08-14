// Phân tích : 1. Lấy các phần tủ của màn hình máy tính ra
// 2. Cho màn hình hiển thị kết quả bằng cách
// dùng event khi click vào sẽ hiện kết quả bấm trên màn hình bằng .textcontent
// 3.Lấy biểu thức đang hiển thị (ví dụ: 7+2×3)
// Chuyển các ký hiệu ×, ÷ sang dạng JavaScript hiểu được: * và /
// Tính kết quả và hiển thị lại lên ô input
// 4.
const display = document.getElementById(`display`);
// Lấy phần tử display ra JS
// console.log(display);

const buttons = document.querySelectorAll(`.button button`);
// console.log(button);
// Lấy tất cả các button ra JS bằng querySelectorAll
buttons.forEach(function (button) {
  button.addEventListener(`click`, function () {
    const value = button.textContent;
    if (value === `=`) {
      const expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
      // Lấy giá trị người dùng nhập trên màn hình
      // rồi chuyển sang giá trị mà js có thể hiểu
      // "×" -> "*" | "÷" -> "/"

      if (
        expression === `` ||
        /[+\-*/.]$/.test(expression) ||
        expression.includes(`/0`)
      ) {
        display.value = `Lỗi`;
      } else {
        const result = eval(expression);
        display.value = result;
      }
      // Nếu expression  bằng rỗng hoặc biểu thức bằng dấu toán hoặc có phép chia số `0`
      // Thì sẽ báo lỗi
      // Còn không thì dùng hàm tính toán dạng chuỗi eval
      // để tính toán chuỗi
    } else if (value === `C`) {
      display.value = ``;
    }
    // Nếu trường hợp người dùng nhấn vào `C`
    // thì sẽ xóa màn hình
    else {
      display.value = display.value + value;
    }
  });
});
// Dùng vòng lặp forEach để lặp tất cả phần tử trong vòng lặp
// tạo biến có giá trị value bằng giá trị của nút bấm
