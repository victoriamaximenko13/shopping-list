const input = document.querySelector("#input");
const items = document.querySelector(".items");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (input.value == "") {
            return
        }
        const item = document.createElement("div");
        item.classList.add("item");
        item.textContent = input.value;
        items.append(item);
        input.value = "";
        item.addEventListener("click", function () {
            item.classList.toggle("done");
        })
    }
})

