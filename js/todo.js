// todo.js: To-Do Form, 리스트 구현

const todoForm = document.querySelector("#todo-div form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-div ul");

function addTodoItem(content) {
    /* todo 객체 배열: 불러올 때는 JSON.parse(객체로), 저장할 때는 JSON.stringify(문자열로) */
    // localStorage에 저장된 todo 배열 불러오기
    const savedTodos = JSON.parse(window.localStorage.getItem("todos"));

    const newTodo = {
        "content": content,
        "id": Date.now() // 지금 시간을 ID로 지정
    };

    // 저장된 todo가 없는 경우(null / length=0)
    if (savedTodos === null || savedTodos.length === 0) {
        window.localStorage.setItem("todos", JSON.stringify([newTodo]));
    }
    // 저장된 todo가 하나라도 있는 경우
    else {
        // 새로운 todo를 추가
        savedTodos.push(newTodo);
        // localStorage에 다시 저장
        window.localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
    
    todoInput.value = "";
    displayTodos();
}

// to-do 항목 추가
function handleTodoSubmit(event) {
    event.preventDefault();

    // 입력한 to-do를 localStorage 배열에 추가
    const newTodoContent = todoInput.value;
    addTodoItem(newTodoContent);
}

todoForm.addEventListener("submit", handleTodoSubmit);

function deleteTodo(todoId) {
    // localStorage에서 todos 배열을 불러온 후
    // todoId라는 id 값을 가진 객체를 뺀 배열을 생성 -> localStorage todos에 다시 저장
    const savedTodos = JSON.parse(window.localStorage.getItem("todos"));
    const filteredTodos = savedTodos.filter(item => todoId !== String(item.id));

    window.localStorage.setItem("todos", JSON.stringify(filteredTodos));
    displayTodos();
}

// localStroage에 저장된 모든 todo를 화면에 그리는 함수
function displayTodos() {
    // todoList를 깨끗하게 비우기 (중요!)
    todoList.innerHTML = '';

    // localStorage에 저장된 모든 todo를 가져와서 추가
    const savedTodos = JSON.parse(window.localStorage.getItem("todos"));
    if (savedTodos === null || savedTodos.length === 0) return;

    savedTodos.forEach(item => {
        // 각 item마다 li element 생성 후 ul에 child로 추가
        const liElement = document.createElement("li");
        // element를 삭제할 때 id 값이 필요하므로 id 값 지정
        liElement.id = item.id;

        // li element에 to-do 제목을 나타내는 span element 추가
        const spanElement = document.createElement("span");
        spanElement.innerText = item.content;
        liElement.appendChild(spanElement);

        // li element에 to-do 삭제가 가능한 button element 추가
        const buttonElement = document.createElement("button");
        buttonElement.innerHTML = '<i class="fa-solid fa-trash-can fa-xl"></i>';
        
        // button element에 click 이벤트 추가(delete)
        // button 안에 i 태그가 존재하기 때문에 event.target.parentElement 대신 event.target.closest를 사용해야 함
        buttonElement.addEventListener("click", (event) => {
            deleteTodo(event.target.closest("li").id);
        });
        liElement.appendChild(buttonElement);
        
        todoList.appendChild(liElement);
    })
}

// todo.js 실행 시 항상 to-do list를 화면에 표시
displayTodos();