let nome = '"Zelda"';
let nivel = 'Ferro';
let xp = 1500;

if (xp < 1000) {
  nivel = 'Ferro';
} else if (xp < 2000) {
  nivel = 'Bronze';
} else if (xp < 5000) {
  nivel = 'Prata';
} else if (xp < 7000) {
  nivel = 'Ouro';
} else if (xp < 8000) {
  nivel = 'Platina';
} else if (xp < 9000) {
  nivel = 'Ascendente';
} else {
  nivel = 'Imortal';
}

console.log(' O Herói de nome ' + nome + ' está no nível de ' + nivel);