function tarkistaLomake() {
  const nimi = document.getElementById("nimi").value.trim();
  const salasana = document.getElementById("salasana").value.trim();
  const kayttajat = document.getElementsByName("kayttaja");
  const aine = document.getElementById("aine").value;
  const palaute = document.getElementById("palaute").value.trim();

  const virhe = document.getElementById("virhe");
  virhe.innerHTML = "";

  let radioValittu = false;
  for (let i = 0; i < kayttajat.length; i++) {
    if (kayttajat[i].checked) {
      radioValittu = true;
      break;
    }
  }

  if (nimi === "" || salasana === "" || !radioValittu || aine === "" || palaute.length === 0) {
    virhe.innerHTML = "Täytä kaikki kentät!";
    return false;
  }

  alert("Lomake lähetetty onnistuneesti!");
  return true;
}