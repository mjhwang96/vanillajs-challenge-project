# vanilla.js Challenge Project
노마드코더 vanilla.js 챌린지의 졸업 프로젝트로 구현한 HTML/JavaScript/CSS 프로젝트

## GitHub Pages
[GitHub Pages 링크](https://mjhwang96.github.io/vanillajs-challenge-project/)

## 📂 프로젝트 구조
```text
vanilljs-challenge-project/
├─ css/
│  ├─ fonts/
│  │  ├─ style.css
├─ img/
│  ├─ background-0.jpg
│  ├─ background-1.jpg
│  ├─ background-2.jpg
│  ├─ background-3.jpg
│  ├─ background-4.jpg
│  ├─ background-5.jpg
├─ js/
│  ├─ background.js
│  ├─ clock.js
│  ├─ login.js
│  ├─ todo.js
│  ├─ weather.js
├─ index.html
└─ README.md
```

## 💻 코드 설명 (JavaScript)

### 1. DOM 요소 선택
```javascript
const firstItem = document.querySelector(".item");
```
- 기능: CSS 선택자(.class, #id, tag)와 일치하는 첫 번째 HTML 요소를 선택
- 용도: 특정 클래스, ID, 태그를 가진 요소를 조작

### 2. 랜덤 정수
```javascript
cont IMAGE_COUNT = 5;
const randomNum = Math.floor(Math.random() * IMAGE_COUNT); // 0~4 중 랜덤 정수
```
- `Math.random()`: 0 이상 1 미만의 난수 생성
- `* IMAGE_COUNT`: 0 ~ (IMAGE_COUNT-1)로 확장
- `Math.floor()`: 소수점 버리고 정수만 얻음

### 3. JS로 HTML element 생성 및 DOM에 추가
```javascript
const imageElement = document.createElement("img");
imageElement.src = `img/background-${randomNum}.jpg`;
backgroundDiv.appendChild(imageElement);
```
1. `document.createElement("img")`
- 기능: 새로운 `<img>` HTML 요소를 동적으로 생성

2. `imageElement.src = OOO.jpg`
- 기능: 이미지의 경로(src)를 해당 경로의 이미지로 설정

3. `backgroundDiv.appendChild(imageElement)`
- 기능: 생성한 이미지 요소를 backgroundDiv의 자식 요소로 추가

### 4. 한 자리 숫자 앞에 0을 채우기
```javascript
const padNum = num.toString().padStart(2, '0');
```
- 기능: 숫자(num)를 문자열로 변환한 뒤 길이가 2가 되도록 왼쪽에 `0`을 채움
- 목적: 시계, 날짜, 분/초 등 두 자리 숫자 표시 (5 → "05")

#### 동작 예시
```javascript
console.log(padZero(3));  // "03"
console.log(padZero(12)); // "12"
```

### 5. 현재 시간
```javascript
const today = new Date();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
```

#### 설명
1. `new Date()`
- 기능: 현재 날짜와 시간을 나타내는 `Date` 객체 생성

2. `today.getHours()`
- 기능: `today` 객체에서 **현재 시간(0~23)**을 가져옴

3. `today.getMinutes()`
- 기능: `today` 객체에서 **현재 분(0~59)**을 가져옴

4. `today.getSeconds()`
- 기능: `today` 객체에서 **현재 초(0~59)**를 가져옴

### 6. 실시간 시계 구현
```javascript
getClock(); // 현재 시계(시:분:초)를 나타내는 함수
setInterval(getClock, 1000);
```

#### 설명
1. `getClock()`
- 기능: 페이지가 로드될 때 시계를 즉시 표시
- 목적: 1초 후부터 실시간 시계가 표시되는 이슈 방지

2. `setInterval(getClock, 1000)`
- 기능: `getClock` 함수를 **1초(1000ms)마다 반복 실행**
- 목적: 시계를 **실시간으로 업데이트**

### 7. 폼(form) 제출 이벤트
```javascript
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
});
```
- 기능: 폼(form) 제출 시 **페이지가 새로고침되는 기본 동작**을 막음
- 목적: JS 로그인 처리 후 페이지 새로고침 없이 이후 동작이 진행되도록 함

### 8. localStorage 
1. 중요사항
- 코드에서 삭제 함수를 호출하거나 사용자가 직접 브라우저에서 삭제하지 않으면 영구적으로 저장됨
- 모든 값은 문자열(String)으로 저장 → 객체, 배열 저장 시 `JSON.stringify`, `JSON.parse` 필요
  - `JSON.stringify`: JavaScript **객체나 배열** → JSON **문자열**로 변환
  - `JSON.parse`: JSON **문자열**을 → JavaScript **객체나 배열**로 변환

2. `setItem(key, value)`
- 기능: 특정 key에 value(값)을 저장
```javascript
localStorage.setItem("userId", "joy");
```

3. `getItem(key)`
- 기능: 저장된 key의 value(값)을 가져옴
```javascript
const userId = localStorage.getItem("userId");
```

4. `removeItem(key)`
- 기능: 특정 key에 저장된 값을 삭제
```javascript
localStorage.removeItem("userId");
```

4. `clear`
- 기능: localStorage에 저장된 모든 데이터 삭제
```javascript
localStorage.clear();
```

### 9. classList - add / remove
1. 목적
- 화면 표시 / 숨김 처리
- 상태에 따른 스타일 변경 (로그인 전/후, 활성/비활성 등)

2. `element.classList.add("className")`
- 기능: element 요소에 CSS 클래스 추가

3. `element.classList.remove("className")`
- 기능: element 요소에서 CSS 클래스 제거

### 10. innerText
```javascript
element.innerText = "안녕하세요"; // 안녕하세요
element.innerText = "<b>안녕하세요</b>"; // <b>안녕하세요</b>
```
- 기능: 입력한 텍스트 그대로 화면에 표시되고
- 특징: HTML 태그를 해석하지 않음

### 11. innerHTML
```javascript
element.innerHTML = "<b>안녕하세요</b>";
```
- 기능: element 안의 HTML 코드 전체를 변경하거나 가져옴
- 특징: HTML 태그를 실제 요소로 해석

### 12. Array
1. `push()`
```javascript
array.push(value);
```
- 기능: 배열의 맨 뒤에 요소를 추가
- 반환값: 요소가 추가된 후의 배열 길이(length)

2. `filter()`
```javascript
array.filter(callback);
```
- 기능: 조건을 만족하는 요소만 모아서 **새로운 배열로 반환**
- 특징: **원본 배열은 변경되지 않음**

#### 동작 예시
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

##### 중요사항
- `filter`는 반드시 `true` 또는 `false`라는 값을 **return**해야 한다.
- `{}`을 사용했는데 `return`이 없으면 실제로는 아래와 같이 동작.
```javascript
// 코드 실행
item => {item * 2}
// 내부 동작 → 조건문이 false로 평가되어 빈 배열이 return됨
item => {
    return undefined;
}
```

3. `forEach()`
```javascript
array.forEach(callback);
```
- 기능: 배열의 모든 요소를 하나씩 순회하며 함수 실행

#### 동작 예시
```javascript
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => {
    console.log(fruit);
})
```

##### 중요사항
- `forEach`는 반환값을 사용하지 않아서 `return`이 필요하지 않음.
- callback 함수가 `return`을 하지 않아도 정상 동작.