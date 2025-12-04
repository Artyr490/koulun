function tallennaTiedot() {
  const tiedot = {
    etunimi: document.getElementById("etunimi").value,
    sukunimi: document.getElementById("sukunimi").value,
    osoite: document.getElementById("osoite").value,
    postinumero: document.getElementById("postinumero").value,
    kaupunki: document.getElementById("kaupunki").value,
    puhelin: document.getElementById("puhelin").value,
    sahkoposti: document.getElementById("sahkoposti").value
  };

  let kayttajat = JSON.parse(localStorage.getItem("kayttajat")) || [];

  kayttajat.push(tiedot);

  localStorage.setItem("kayttajat", JSON.stringify(kayttajat));

  naytaTiedot();
}

function naytaTiedot() {
  const data = localStorage.getItem("kayttajat");

  if (data) {
    const kayttajat = JSON.parse(data);
    const tulostus = document.getElementById("tulostus");
    tulostus.innerHTML = "";

    kayttajat.forEach((tiedot, index) => {
    tulostus.innerHTML += `
    <div class="kayttajat">
    <h3>Käyttäjät ${index + 1}</h3>
      <p><strong>Etunimi:</strong> ${tiedot.etunimi}</p>
      <p><strong>Sukunimi:</strong> ${tiedot.sukunimi}</p>
      <p><strong>Osoite:</strong> ${tiedot.osoite}</p>
      <p><strong>Postinumero:</strong> ${tiedot.postinumero}</p>
      <p><strong>Postitoimipaikka:</strong> ${tiedot.kaupunki}</p>
      <p><strong>Puhelin:</strong> ${tiedot.puhelin}</p>
      <p><strong>Sähköposti:</strong> ${tiedot.sahkoposti}</p>
      </div>
      <h3>
    `;
    });
  }
}


