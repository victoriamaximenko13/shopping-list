const input = document.querySelector("#input");
const items = document.querySelector(".items");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (input.value != "") {
            const item = document.createElement("div");
            const itemTitle = input.value;
            item.classList.add("item");
            item.textContent = itemTitle;
            items.append(item);
            input.value = "";
            item.addEventListener("click", function () {
                item.classList.toggle("done");
            })
        }
    }
})

