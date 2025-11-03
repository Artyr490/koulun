let oikeaLuku;
let arvauskerrat;
let voitot = 0;
let haviot = 0;

const numerotDiv = document.getElementById("numerot");
const vastaus = document.getElementById("vastaus");
const info = document.getElementById("info");
const voitotSpan = document.getElementById("voitot");
const haviotSpan = document.getElementById("haviot");

function luoNumerot() {
    numerotDiv.innerHTML = "";
    for (let i = 1; i <=10; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.classList.add("nappi");
        btn.onclick = () => tarkistaArvaus(i, btn);
        numerotDiv.appendChild(btn);
    }
}

function aloitaUudelleen() {
    oikeaLuku = Math.floor(Math.random() * 10) + 1;
    arvauskerrat = 3;
    vastaus.innerText = "Valitse numero alta:";
    luoNumerot();
}
function tarkistaArvaus(arvaus, nappi) {
    arvauskerrat--;


if (arvaus === oikeaLuku) {
    vastaus.innerHTML = `Oikein! Luku oli ${oikeaLuku}.`;
    voitot++;
    voitotSpan.innerHTML = voitot;
    disabloiKaikki();
} else {
    nappi.disabled = true;

    if (arvaus < oikeaLuku) {
        info.innerHTML = "Oikea luku on suurempi.";
        disabloiPienemmat(arvaus);
    } else {
        info.innerHTML = "Oikea luku on pienempi.";
        disabloiSuuremmat(arvaus);}
    }

    if (arvauskerrat === 0) {
        vastaus.innerHTML = `Hävisit! Oikea luku oli ${oikeaLuku}.`;
        haviot++;
        haviotSpan.innerHTML = haviot;
        disabloiKaikki();
    }
  }

function disabloiKaikki() {
    const napit = document.querySelectorAll(".nappi");
    napit.forEach(n => {
        if(parseInt(n.innerHTML) <=r) n.disabled = true;
    });
}

function disabloiPienemmat(r) {
    const napit = document.querySelectorAll(".nappi");
    napit.forEach(n => {
        if(parseInt(n.innerHTML) <=r)n.disabled = true;
    });
}

function disabloiSuuremmat(r) {
    const napit = document.querySelectorAll(".nappi");
    napit.forEach(n => {
        if (parseInt(n.innerHTML) >= r) n.disabled = true;
    });
}

aloitaUudelleen();