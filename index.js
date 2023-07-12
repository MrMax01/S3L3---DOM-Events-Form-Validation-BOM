document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTask = event.target[0].value;
  addTODO(inputTask);
});

document.querySelector("body").addEventListener("keydown", (key) => {
  if (key === "Enter") {
    const inputTask = document.querySelector("#task-name").value;
    addTODO(inputTask);
  }
});

document.querySelectorAll(".js-delete-btn").forEach((elem, index) => {
  elem.addEventListener("click", () => {});
});

function addTODO(task) {
  const sectionList = document.querySelector("section");
  todoList.push(task);
  sectionList.innerHTML += `
        <div>
            <p>${task}</p>
            <button class="js-delete-btn">Delete</button>
        </div>`;
  document.querySelector("input").value = "";
}
