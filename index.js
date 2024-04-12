const vysledek = document.querySelector('.vysledek');
const mince = document.querySelector('.mince');

const padlOrel = Math.random() < 0.5;

if (padlOrel) {
  vysledek.textContent = 'Padl orel';
  mince.classList.add('mince--orel');
} else {
  vysledek.textContent = 'Padla panna';
  mince.classList.add('mince--panna');
}
