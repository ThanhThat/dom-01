// <!-- Nhap vao o input => hien thi ra nhung gi vua nhap -->

const $ = document.querySelector.bind(document);

const inputElm = $('input[name="textVal"]');
const result = $(".result");

inputElm.focus();

inputElm.addEventListener("input", function () {
  result.innerText = this.value;
});
