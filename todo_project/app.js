// local database
const data = [
  {
    id: 1,
    todo: "html",
    status: "completed",
  },
  {
    id: 2,
    todo: "css",
    status: "InCompleted",
  },
  {
    id: 3,
    todo: "javascript",
    status: "completed",
  },
  {
    id: 4,
    todo: "react",
    status: "completed",
  },
  {
    id: 5,
    todo: "nextjs",
    status: "completed",
  },
];

// dom selection
const completeItems = document.getElementById("complete-items");
const incompleteItems = document.getElementById("incomplete-items");
const newTaskContainer = document.getElementById("new-task-container");
const toast = document.getElementById("toast");

// event listener

document.body.onLoad = renderUl();

newTaskContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  const todo = e.target.task.value;
  const result = InsertTask(todo);

  if (result) {
    renderUl();
    toast.style.transform = "translateX(0%)";
    setTimeout(() => {
      toast.style.transform = "translateX(150%)";
    }, 2000);
  }
  e.target.reset();
});

function InsertTask(todo) {
  if (!todo) return false;

  const newTask = {
    id: createUniqueId(data),
    todo: todo,
    status: "InCompleted",
  };

  data.push(newTask);
  return true;
}

function createUniqueId(data) {
  // let maxId = 0;

  // data.forEach((todo) => {
  //   if (todo.id > maxId) {
  //     maxId = todo.id;
  //   }
  // });

  const maxId = data.reduce(function (acc, cur) {
    if (cur.id > acc) {
      return cur.id;
    } else {
      return acc;
    }
  }, 0);

  return maxId + 1;
}

function filterByStatus(data, status) {
  return data.filter((task) => task.status === status);
}

function displayTask(targetElement, tasks) {
  let list = "";

  tasks.forEach((task) => {
    list += `<div >
              <input style="cursor:pointer" type="checkbox" ${
                task.status === "completed" ? "checked" : ""
              } onclick="changeStatus(${task.id})" />
              <span>${task.todo}</span>
            </div>`;
  });

  targetElement.innerHTML = list;
}

function renderUl() {
  const completeTask = filterByStatus(data, "completed");
  const IncompleteTask = filterByStatus(data, "InCompleted");

  displayTask(completeItems, completeTask);
  displayTask(incompleteItems, IncompleteTask);
}

function changeStatus(id) {
  const selectedTodo = data.find((todo) => todo.id === id);
  selectedTodo.status === "InCompleted"
    ? (selectedTodo.status = "completed")
    : (selectedTodo.status = "InCompleted");

  renderUl();
}
