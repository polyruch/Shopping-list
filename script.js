const input = document.getElementById("item-input");
const itemForm = document.getElementById("item-form");
const list = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const filterInput = document.getElementById("filter");

function checkEmpty() {
  if (list.childElementCount == 0) {
    filterInput.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    filterInput.style.display = "block";
    clearBtn.style.display = "block";
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const li = document.createElement("li");
  const button = createButton("remove-item btn-link text-red");
  const icon = createIcon("fa-solid fa-xmark");

  if (input.value) {
    button.appendChild(icon);
    li.innerText = input.value;
    li.appendChild(button);
    list.appendChild(li);
    input.value = "";
    checkEmpty();
  }
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

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  checkEmpty();
}

function handleFilter(e) {
  const textToFilter = e.target.value.toLowerCase();
  const liItems = document.querySelectorAll("li");
  liItems.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(textToFilter) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function clearAll() {
  if (confirm("Are you sure you want to delete all tasks ?")) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    checkEmpty();
  }
}

itemForm.addEventListener("submit", handleSubmit);
list.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
filterInput.addEventListener("input", handleFilter);
checkEmpty();
