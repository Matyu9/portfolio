const input = document.getElementById('cmd');
const fieldToUpdate = document.getElementById('cmd-results-input')
input.value = '';
input.focus();

function ajusterTaille(input) {
    // Récupérer la longueur du texte
    let longueurTexte = input.value.length;

    // Ajuster la largeur de l'input en fonction de la longueur du texte
    input.style.width = (longueurTexte * 10) + 'px'; // Vous pouvez ajuster le facteur multiplicatif selon vos besoins
}

function ajouterCommande(cmd){

}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        ajouterCommande(input.value)
        input.value = '';
    }
});