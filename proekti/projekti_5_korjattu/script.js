let pelikentta = document.getElementById("pelikentta");
let klikkauksetElem = document.getElementById("klikkaukset");
let aikaElem = document.getElementById("aika");
let voittoElem = document.getElementById("voitto");
let timer;
let klikkaukset = 0;
let aika = 0;
let ekaKortti = null;
let toinenKortti = null;
let lukitseKentta = false;

function aloitaPeli() {
  const tyyppi = document.getElementById("pelityyppi").value;
  let rivit = 4, sarakkeet = 4;

  if (tyyppi === "4x6") { rivit = 4; sarakkeet = 6; }
  if (tyyppi === "6x6") { rivit = 6; sarakkeet = 6; }

  pelikentta.style.gridTemplateColumns = `repeat(${sarakkeet}, 80px)`;
  pelikentta.innerHTML = "";
  voittoElem.textContent = "";
  klikkaukset = 0;
  aika = 0;
  ekaKortti = null;
  toinenKortti = null;
  klikkauksetElem.textContent = "0";
  aikaElem.textContent = "0";
  clearInterval(timer);
  timer = setInterval(() => {
    aika++;
    aikaElem.textContent = aika;
  }, 1000);

  const parienMaara = (rivit * sarakkeet) / 2;
  let ikonit = [];
  for (let i = 0; i < parienMaara; i++) {
    const emoji = String.fromCodePoint(0x1F600 + i); 
    ikonit.push(emoji, emoji);
  }

  ikonit.sort(() => 0.5 - Math.random());

  ikonit.forEach((ikoni) => {
    const kortti = document.createElement("div");
    kortti.classList.add("card");
    kortti.dataset.ikoni = ikoni;
    kortti.textContent = "";
    kortti.addEventListener("click", kaannaKortti);
    pelikentta.appendChild(kortti);
  });
}

function kaannaKortti() {
  if (lukitseKentta || this.classList.contains("flip")) return;

  this.classList.add("flip");
  this.textContent = this.dataset.ikoni;
  klikkaukset++;
  klikkauksetElem.textContent = klikkaukset;

  if (!ekaKortti) {
    ekaKortti = this;
  } else {
    toinenKortti = this;
    lukitseKentta = true;

    if (ekaKortti.dataset.ikoni === toinenKortti.dataset.ikoni) {
      ekaKortti.removeEventListener("click", kaannaKortti);
      toinenKortti.removeEventListener("click", kaannaKortti);
      nollaaValinta();
      tarkistaVoitto();
    } else {
      setTimeout(() => {
        ekaKortti.classList.remove("flip");
        toinenKortti.classList.remove("flip");
        ekaKortti.textContent = "";
        toinenKortti.textContent = "";
        nollaaValinta();
      }, 1000);
    }
  }
}

function nollaaValinta() {
  ekaKortti = null;
  toinenKortti = null;
  lukitseKentta = false;
}

function tarkistaVoitto() {
  const kaikki = document.querySelectorAll(".card");
  const kaikkiFlipatut = document.querySelectorAll(".card.flip");

  if (kaikki.length === kaikkiFlipatut.length) {
    clearInterval(timer);
    voittoElem.textContent = `Voitit! Aika: ${aika} s, Klikkauksia: ${klikkaukset}`;
  }
}