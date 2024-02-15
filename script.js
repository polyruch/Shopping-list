const input = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const list = document.getElementById("item-list");

function handleSubmit(e) {
  e.preventDefault();
  const li = document.createElement("li");
  const button = createButton("remove-item btn-link text-red");
  const icon = createIcon("fa-solid fa-xmark");

  button.appendChild(icon);
  li.innerText = input.value;
  li.appendChild(button);
  list.appendChild(li);

  console.log(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

itemForm.addEventListener("submit", handleSubmit);
