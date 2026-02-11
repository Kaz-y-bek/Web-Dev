const input = document.querySelector("input");
const addBtn = document.querySelector(".add");
const list = document.getElementById("list");

addBtn.addEventListener("click", function () {
    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const span = document.createElement("span");
    span.textContent = "✖";
    span.style.position = "absolute";
    span.style.right = "10px";
    span.style.cursor = "pointer";

    li.appendChild(span);
    list.appendChild(li);

    input.value = "";
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
