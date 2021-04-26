console.log("hello world!!");

/**
 * formの送信時に実行する関数。
 * input form の入力内容を取得してそれをTODOリストに加える
 */
function handleFormSubmit() {
  const input = document.getElementById("task-input");
  const inputValue = input.value; // 厳密には instanceof で input要素であるかのチェックを入れるべき
  const todosEl = document.getElementById("todos");
  const todoEl = createTodoElement(inputValue);
  todosEl.appendChild(todoEl);
  input.value = ""; // input のリセット
}

/**
 * TODO要素を作る関数
 * @param {*} inputValue TODO文字列
 * @returns TODO要素
 */
function createTodoElement(inputValue) {
  const todoEl = document.createElement("li");
  const checkBoxEl = document.createElement("input");
  const labelEl = document.createElement("label");
  labelEl.innerText = inputValue;
  checkBoxEl.type = "checkbox";
  todoEl.appendChild(checkBoxEl);
  todoEl.appendChild(labelEl);
  return todoEl;
}
