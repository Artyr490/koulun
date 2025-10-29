function {
    const luku = parseInt(document.getElementById("luku").value);
    const tulos = document.getElementById("tulos");
    tulos.innerHTML = "";

    if (isNaN(luku) || luku % 2 !== 0 || luku <= 0) {
        tulos.innerHTML = "Syötä positiivinen parillinen luku.";
        return;
    }

    let parilliset = [];
    for (let i = 2; i <= luku; i += 2) {
        parilliset.push(i);
    }

    tulos.innerHTML = "Parilliset luvut: " + parilliset.join(", ");
}