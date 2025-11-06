function lisaaTehtava() {
    const input =document.getElementById("tehtavalnput");
    const teksti = input.value.trim()
    if (teksti === "") return;

    const tehtava = document.createElement("div");
    tehtava.className = "task";
    tehtava.draggable = true;
    tehtava.textContent = teksti;
    tehtava.id = "id" + Date.now();
    tehtava.addEventListener("dragstart", drag);

    document.getElementById("sprintti").appendChild(tehtava);
    input.value = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.getElementById(data);
    event.target.closest(".column").querySelector(".task-list").appendChild(element);
}