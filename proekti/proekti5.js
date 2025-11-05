
let array = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
let korkeus = 0;
let leveys = 0;
let arvaukset = 0;
let auki = 0;
let arvattu = 0;
let korttimäärä = 0;
let voittocounter = 0;
let vanha1 = [];
let vanha2 = [];
let sec = -1;
let laattavalikoima = [0];

function resetoi() {
  array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  korkeus = 0;
  leveys = 0;
  arvaukset = 0;
  document.getElementById("arvaukset").innerHTML =
    "Arvausten määrä: " + arvaukset;
  auki = 0;
  korttimäärä = 0;
  voittocounter = 0;
  vanha1.length = 0;
  vanha2.length = 0;
  laattavalikoima.length = 0;
  laattavalikoima.push(0);
  for (let l1 = 0; l1 < 6; l1++) {
    for (let l2 = 0; l2 < 6; l2++) {
      document.getElementById("kuva" + l1 + l2).src = "kuvat/0.png";
    }
  }
}

function suuruus() {
  //resetoi();
  alert("Kukkuu");
  let luku = parseInt(document.getElementById("korkeus").value);
  let luku2 = parseInt(document.getElementById("leveys").value);
  let kertoma = luku * luku2;
  if (luku > 6) {
    alert("korkeus on liian iso!");
  } else if (luku2 > 6) {
    alert("leveys on liian iso!");
  } else if (kertoma % 2 != 0) {
    alert("Kokojen kertoma ei ole parillinen!");
  } else {
    korkeus = luku;
    leveys = luku2;
    korttimäärä = (luku * luku2) / 2;
    luo();
  }
  event.preventDefault();
}

function luo() {
  for (l1 = 0; l1 < korttimäärä; l1++) {
    let kortti = Math.floor(Math.random() * 18) + 2;
    let tarkistus = 0;
    for (l2 = 0; l2 < laattavalikoima.length; l2++) {
      if (kortti == laattavalikoima[l2]) {
        tarkistus++;
      }
    }
    if (tarkistus > 0) {
      l1--;
    } else {
      laattavalikoima.push(kortti);
    }
  }
  for (let l1 = 0; l1 < korkeus; l1++) {
    for (let l2 = 0; l2 < leveys; l2++) {
      let kortti = Math.floor(Math.random() * korttimäärä) + 1;
      let tarkistus = 0;
      for (let l3 = 0; l3 < korkeus; l3++) {
        for (let l4 = 0; l4 < leveys; l4++) {
          if (kortti == array[l3][l4]) {
            tarkistus++;
          }
        }
      }
      if (tarkistus > 1) {
        l2--;
      } else {
        array[l1][l2] = kortti;
        document.getElementById("kuva" + l1 + l2).src = "kuvat/1.png";
      }
    }
  }
  sec = -1;
  alert("Peli alkaa!");
}

function arvaa(l1, l2) {
  if (array[l1][l2] == 0) {
  } else if (vanha1[0] == l1 && vanha1[1] == l2) {
  } else {
    if (vanha1.length > 0 && vanha2.length > 0) {
      document.getElementById("kuva" + vanha1[0] + vanha1[1]).src =
        "kuvat/1.png";
      document.getElementById("kuva" + vanha2[0] + vanha2[1]).src =
        "kuvat/1.png";
      vanha1.length = 0;
      vanha2.length = 0;
    }
    if (auki == 0) {
      auki = 1;
      arvattu = array[l1][l2];
      document.getElementById("kuva" + l1 + l2).src =
        "kuvat/kuva" + laattavalikoima[array[l1][l2]] + ".png";
      vanha1.push(l1);
      vanha1.push(l2);
    } else {
      auki = 0;
      arvaukset++;
      document.getElementById("arvaukset").innerHTML =
        "Arvausten määrä: " + arvaukset;
      document.getElementById("kuva" + l1 + l2).src =
        "kuvat/kuva" + laattavalikoima[array[l1][l2]] + ".png";
      if (arvattu == array[l1][l2]) {
        array[l1][l2] = 0;
        array[vanha1[0]][vanha1[1]] = 0;
        vanha1.length = 0;
        voittocounter++;
        if (voittocounter >= korttimäärä) {
          let second1 = pad(++sec % 60);
          let min1 = pad(parseInt(sec / 60, 10) % 60);
          let hour1 = pad(parseInt(sec / 3600, 10));
          alert(
            "Voitit " +
              arvaukset +
              " arvauksella! Aikaa kului: " +
              hour1 +
              ":" +
              min1 +
              ":" +
              second1
          );
        }
      } else {
        vanha2.push(l1);
        vanha2.push(l2);
      }
    }
  }
}

function pad(val) {
  return val > 9 ? val : "0" + val;
}

setInterval(function () {
  let second = pad(++sec % 60);
  let min = pad(parseInt(sec / 60, 10) % 60);
  let hour = pad(parseInt(sec / 3600, 10));
  document.getElementById("aika").innerHTML =
    "Aika: " + hour + ":" + min + ":" + second;
}, 1000);