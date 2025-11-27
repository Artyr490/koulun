function haeKayttaja() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const d = data.results[0];
        const kayttajaDiv = document.getElementById("kayttaja");
        kayttajaDiv.innerHTML = `
        <img src="${d.picture.large}" alt="Käyttäjän kuva">
        <p><strong>${d.name.title} ${d.name.first} ${d.name.last}</strong></p>
        <p>${d.location.street.number} ${d.location.street.name}</p>
        <p>${d.location.poscode} ${d.location.city}</p>
        <p>${d.location.state}, ${d.location.country}</p>
        <p>${d.email}</p>
        <p>${d.phone}</p>
        `;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("kayttaja").innerHTML = "Virhe tietojen haussa.";
    });
}
