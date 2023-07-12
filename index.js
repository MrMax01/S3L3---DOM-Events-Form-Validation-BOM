const todoList = [];

const list = () => {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    todoListHTML += `
        <div>
        <p>${todoList[i]}</p>
        <button class="js-delete-btn" onclick ="deleteTODO(${i})">Delete</button>
        </div>`;
  }
  const sectionList = document.querySelector("section");
  sectionList.innerHTML = todoListHTML;
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTask = event.target[0].value;
  addTODO(inputTask);
  document.querySelector("input").value = "";
});

/*Add the task to the array and update the list on the screen*/
function addTODO(task) {
  todoList.push(task);
  list();
}

/*Remove the task to the array and update the list on the screen*/
function deleteTODO(i) {
  todoList.splice(i, 1);
  list();
}

/* linetrough */
const allList = document.querySelectorAll("section div");
allList.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.id.add(index);
    console.log(event.id);
    event.target.classList.toggle("done");
  });
});

function taskDONE(i) {}
