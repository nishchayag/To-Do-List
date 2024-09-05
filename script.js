const inputBox = document.getElementById(`inputBox`);
const list = document.getElementById("list");
const container = document.getElementById("container");
var itemCount = 0;

document.addEventListener("keydown", appendFun);
function appendFun(e) {
    if (e.key == "Enter") {
        if (inputBox.value != "") {
            console.log(`${inputBox.value} was entered`);
            addToList(`${inputBox.value}`);
            inputBox.value = ``;
        }
    }
    function addToList(val) {
        let item = document.createElement("li");
        item.innerHTML = `${val}`;
        item.style.userSelect = "none";
        list.appendChild(item);
        itemCount++;
        item.setAttribute("id", `item${itemCount}`);
        item.addEventListener("click", () => {
            item.style.textDecoration = "line-through";
            setTimeout(() => {
                item.outerHTML = ``;
            }, 2000)
        })
    }
}