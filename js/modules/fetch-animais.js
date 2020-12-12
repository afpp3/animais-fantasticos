import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('numero-animal');
    divAnimal.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return divAnimal;
  }

  function fillAnimals(animal) {
    const numerosGrid = document.querySelector(target);
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => {
        fillAnimals(animal);
      });

      animateAnimalsNumbers();
    } catch (err) {
      console.log(err);
    }
  }

  return createAnimals();
}
