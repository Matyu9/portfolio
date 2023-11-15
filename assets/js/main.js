const input = document.getElementById('cmd');
const fieldToUpdate = document.getElementById('cmd-results-input');
let commands = [];
input.value = '';
input.focus();


fetch('assets/js/json/cmd.json')
    .then(response => {
        if (!response.ok){
            throw new Error('Erreur de chargements du fichier json');
        }
        return response.json();
    })
    .then(data =>{
        commands = data;
    })
    .catch(error => {
        console.log('Une erreur est survenue ! ', error)
    });


function ajusterTaille(input) {
    // Récupérer la longueur du texte
    let longueurTexte = input.value.length;

    // Ajuster la largeur de l'input en fonction de la longueur du texte
    input.style.width = (longueurTexte * 10) + 'px'; // Vous pouvez ajuster le facteur multiplicatif selon vos besoins
}

function ajouterCommande(cmd){
    const element = document.createElement('div');

    const cmdName = document.createElement('p');
    cmdName.setAttribute('class', 'command');
    cmdName.innerHTML = `<span class="green">matyu@deb:~$</span> ${cmd}`;

    const cmdResult = document.createElement('p');
    cmdResult.setAttribute('class', 'result')
    try {
        cmdName.innerHTML = commands.cmd;
    } catch (error) {

    }

    element.appendChild(cmdName);

    fieldToUpdate.appendChild(element);
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
    window.scrollBy(0, 1000);
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        ajouterCommande(input.value)
        input.value = '';
    }
});