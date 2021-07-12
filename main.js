'use strict';

const subway = document.querySelector('#subwayName');
const submitBtn = document.querySelector('#login_submit');

submitBtn.addEventListener('click', () => {
  const subwayValue = subway.value;
  if (subwayValue === "") {
    alert("지하철, 정류장을 입력해주세요");
  } else {
    alert("환영합니다.");
  }
})
