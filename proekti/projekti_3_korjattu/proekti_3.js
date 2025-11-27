function lisaaMerkki(merkki) {
    document.getElementById("tulos").value += merkki;
}

function tyhjennaKaikki() {
    document.getElementById("tulos").value = "";
}

function poistaMerkki() {
    let tulos = document.getElementById("tulos").value;
    document.getElementById("tulos").value;
    document.getElementById("tulos").value = tulos.slice(0, -1);
}

function laske() {
    try {
        let lauseke = document.getElementById("tulos").value;
        let tulos = eval(lauseke);
        document.getElementById("tulos").value = tulos;
    } catch(error) {
        document.getElementById("tulos").value = "Virhe!";
    }
}