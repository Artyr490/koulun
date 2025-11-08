function pelaa(pelaajanValinta) {
  const vaihtoehdot = ['kivi', 'paperi', 'sakset'];
  const koneenValinta = vaihtoehdot[Math.floor(Math.random() * 3)];
  let tulos = '';

  if (pelaajanValinta === koneenValinta) {
    tulos = `Tasapeli! Molemmat valitsivat ${pelaajanValinta}.`;
  } else if (
    (pelaajanValinta === 'kivi' && koneenValinta === 'sakset') ||
    (pelaajanValinta === 'paperi' && koneenValinta === 'kivi') ||
    (pelaajanValinta === 'sakset' && koneenValinta === 'paperi')
  ) {
    tulos = `Voitit! ${pelaajanValinta} voittaa ${koneenValinta}.`;
  } else {
    tulos = `Hävisit! ${koneenValinta} voittaa ${pelaajanValinta}.`;
  }

  document.getElementById('tulos').innerText = tulos;
}