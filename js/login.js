// login.js: 로그인, 로그아웃 구현

const loginForm = document.querySelector("#logged-out");
const loginInput = loginForm.querySelector("input");
const userDiv = document.querySelector("#logged-in");
const userId = userDiv.querySelector("h3");
const logoutButton = userDiv.querySelector("button");

const HIDDEN_CLASS = "hidden";

// 로그인 이벤트
function handleLoginSubmit(event) {
    // 로그인 버튼 클릭(form 제출) 시 브라우저 새로고침 방지
    event.preventDefault();

    const userId = loginInput.value;

    /* ID 저장 */
    // localStorage에 userId 저장
    window.localStorage.setItem("userId", userId);
    console.log("You are logged in.")
    // loginInput 입력창 비우기
    loginInput.value = "";

    // localStorage 상태에 따라 화면 업데이트
    checkLoginStatus();
}

loginForm.addEventListener("submit", handleLoginSubmit);

// 로그아웃 이벤트
function handleLogoutClick() {
    // localStorage에서 userId 키 값 삭제
    window.localStorage.removeItem("userId");
    console.log("You are logged out.")

    // localStorage 상태에 따라 화면 업데이트
    checkLoginStatus();
}

logoutButton.addEventListener("click", handleLogoutClick);

// login.js 실행 시 항상 로그인 여부 체크
function checkLoginStatus() {
    /* 로그아웃한 상태 */
    // localStroage에 userId 키 값이 존재하지 않음(null)
    if (window.localStorage.getItem("userId") === null) {
        // loginForm은 나타내기
        loginForm.classList.remove(HIDDEN_CLASS);
        // userDiv는 숨기기
        userDiv.classList.add(HIDDEN_CLASS);
    }
    /* 로그인한 상태 */
    // localStorage에 userId 키 값이 존재
    else {
        // loginForm은 숨기기
        loginForm.classList.add(HIDDEN_CLASS);
        // userDiv는 나타내기
        userDiv.classList.remove(HIDDEN_CLASS);
        // localStorage에 저장된 userId 표시하기
        const savedId = window.localStorage.getItem("userId");
        userId.innerText = `👤 ${savedId}`;
    }
}

checkLoginStatus();