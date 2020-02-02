import './style.css';

const defaultJediText = 'Choose Warrior';

// paragraphs in planets

const tatooine = document.querySelector('#js-tatooine');
const alderaan = document.querySelector('#js-alderaan');
const naboo = document.querySelector('#js-naboo');

// Jedi box

const jediDisplay = document.querySelector('#js-jediDisplay');
const jediButton = document.querySelector("#js-jediButton");
const jediPlus = document.querySelector('#js-jediPlus');

// choose menu and plus buttons
const chooseMenu = document.querySelector('#js-choosePlanet');
const addTatooine = document.querySelector('#js-addTatooine');
const addAlderaan = document.querySelector('#js-addAlderaan');
const addNaboo = document.querySelector('#js-addNaboo');

// choosing of Jedi

const jediChoose = () => {
    let personID = Math.floor(Math.random() * 50) + 1;
    fetch(`https://swapi.co/api/people/${personID}`)
    .then(jedi =>  {
        if(jedi.ok) {
            return jedi.json()
        } else {
            throw new Error('Something went wrong!')
        }
    })
    .then(jedi => {
        let knight = jedi.name;
        jediDisplay.innerText = knight;
    })
    .catch(error => {
        jediDisplay.innerText = `Error, try again!`;
    })
}

jediButton.addEventListener('click', jediChoose);

// adding class to choose menu - jedi

const showChooseJedi = () => {
    if(jediDisplay.innerText !== defaultJediText) {
        chooseMenu.classList.toggle('displayChooseJedi');
    }
}
jediPlus.addEventListener('click', showChooseJedi);

// adding name of Jedi to planet - only one shows, got to append next paragraph

const jediChooseTatooine = () => {
    const addedJedi = jediDisplay.innerText;
    let newParagraph = document.createElement('p');
    newParagraph.innerText = addedJedi;
    tatooine.append(newParagraph);
    showChooseJedi();
    jediDisplay.innerText = defaultJediText;
    
}

const jediChooseAlderaan = () => {
    const addedJedi = jediDisplay.innerText;
    let newParagraph = document.createElement('p');
    newParagraph.innerText = addedJedi;
    alderaan.append(newParagraph);
    showChooseJedi();
    jediDisplay.innerText = defaultJediText;
    
}

const jediChooseNaboo = () => {
    const addedJedi = jediDisplay.innerText;
    let newParagraph = document.createElement('p');
    newParagraph.innerText = addedJedi;
    naboo.append(newParagraph);
    showChooseJedi();
    jediDisplay.innerText = defaultJediText;
    
}

// events for plus buttons of planets

addTatooine.addEventListener('click', jediChooseTatooine);
addAlderaan.addEventListener('click', jediChooseAlderaan);
addNaboo.addEventListener('click', jediChooseNaboo);
