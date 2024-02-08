//for buttons
let todo = document.querySelector("#addtodo");
let overlay = document.querySelector("#overlay-t");
let save = document.querySelector("#save");

//for overlay input
let ovltext = document.querySelector("#ovl-text");
let ovldesc = document.querySelector("#ovl-desc");
let ovlsel = document.querySelector("#ovl-sel");

//for innerHTML
let card = document.querySelector(".todolist");

todo.addEventListener("click", () => {
  console.log(todo);
  overlay.classList.remove("d-none");
});
save.addEventListener("click", () => {
  let newdata = {
    text: ovltext.value,
    desc: ovldesc.value,
    priority: ovlsel.value,
  };

  console.log(newdata); //works fine

  let todos = localStorage.getItem("data");
  todos = todos === null ? [] : JSON.parse(todos);

  todos.push(newdata);
  console.log(todos);

  localStorage.setItem("data", JSON.stringify(todos));

  overlay.classList.add("d-none"); //remove popup
  writetodo();
});
let pri = null;
function writetodo() {
  let tododata = localStorage.getItem("data");
  tododata = JSON.parse(tododata);

  let dataw = tododata.map((value) => {
    if (value.priority == "!") {
      pri = "green";
    } else if (value.priority == "!!") {
      pri = "blue";
    } else {
      pri = "red";
    }
    return `<div class="tdl-element">
        <div class="tdl-text">
            <div class="temp">
                <h2 class="tdl-title">${value.text}</h2>
                <span class="priority" style="background-color: ${pri};">${value.priority}</span>
            </div>
            <p class="tdl-desc">${value.desc}</p>
        </div>
        <div class="tdl-icon">
            <button type="button"><i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    </div>`;
  });
  dataw = dataw.join(" ");
  card.innerHTML = dataw;
}
