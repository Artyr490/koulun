const enterButton = document.getElementById("enter");
const syotto = document.getElementById("syotto");
const lista = document.getElementById("lista");

function syotonPituus() {
    return syotto.value.length;
}

function listanPituus() {
    return document.getElementsByTagName("li").length;
}

function teeListaElementti() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(syotto.value));
    lista.appendChild(li);
    syotto.value = "";

li.addEventListener("click", function() {
    li.classList.toggle("valittu");
});

const poista = document.createElement("button");
poista.appendChild(document.createTextNode("X"));
poista.classList.add("poista");
li.appendChild(poista);

poista.addEventListener("click", function() {
    li.classList.add("piilotettu");
    li.style.display = "none";
});
}

function lisaaListallePainalluksenJalkeen() {
    if (syotonPituus() > 0) {
        teeListaElementti();
    }
}

function lisaaListaEnterinJalkeen(event) {
    if (syotonPituus() > 0 && event.key === "Enter") {
    teeListaElementti();
    }
}

enterButton.addEventListener("click", lisaaListallePainalluksenJalkeen);
syotto.addEventListener("keypress", lisaaListaEnterinJalkeen);