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

  localStorage.setItem("kayttaja", JSON.stringify(tiedot));

  naytaTiedot();
}

function naytaTiedot() {
  const data = localStorage.getItem("kayttaja");

  if (data) {
    const tiedot = JSON.parse(data);
    const tulostus = document.getElementById("tulostus");

    tulostus.innerHTML = `
      <p><strong>Etunimi:</strong> ${tiedot.etunimi}</p>
      <p><strong>Sukunimi:</strong> ${tiedot.sukunimi}</p>
      <p><strong>Osoite:</strong> ${tiedot.osoite}</p>
      <p><strong>Postinumero:</strong> ${tiedot.postinumero}</p>
      <p><strong>Postitoimipaikka:</strong> ${tiedot.kaupunki}</p>
      <p><strong>Puhelin:</strong> ${tiedot.puhelin}</p>
      <p><strong>Sähköposti:</strong> ${tiedot.sahkoposti}</p>
    `;
  }
}

window.onload = naytaTiedot;