// background.js: 배경화면을 랜덤으로 설정

const backgroundDiv = document.querySelector("#background-div");
const IMAGE_COUNT = 6;

// 랜덤으로 img 폴더 안의 이미지 선택(0 ~ IMAGE_COUNT-1)
const randomNum = Math.floor(Math.random() * IMAGE_COUNT);

// 이미지 element 생성
const imageElement = document.createElement("img");
// 이미지 src 설정(랜덤 이미지)
imageElement.src = `img/background-${randomNum}.jpg`;
// backgroundDiv에 child로 삽입
backgroundDiv.appendChild(imageElement);

console.log(`background-${randomNum} 배경화면이 설정되었습니다.`);