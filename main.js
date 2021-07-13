'use strict';

const onClickRememberMe = () => {
  const locationDir = document.querySelector('#locationName');
  setCookie(locationDir.value);
}

const setCookie = (location) => {
  let rememberData = {
    where: location 
  };
  
  localStorage.setItem(REMEMBER_LOCAL, JSON.stringify(rememberData));
}

const getCookie = () => {
  const getData = localStorage.getItem(REMEMBER_LOCAL);
  if (getData === null) {
    return null;
  }
  
  const parseData = JSON.parse(getData);
  return parseData.where;
}

const submitBtn = document.querySelector('#login_submit');

submitBtn.addEventListener('click', () => {
  if (subwayValue === "") {
    alert("지하철, 정류장을 입력해주세요");
  } else {
    alert("환영합니다.");
  }
})
