let todo = document.querySelector("#addtodo");
let overlay = document.querySelector("#overlay-t");
let save = document.querySelector("#save")

todo.addEventListener("click", () => {
  console.log(todo)
  overlay.classList.remove("d-none")
});
save.addEventListener("click", () => {
  
  overlay.classList.add("d-none")
});

