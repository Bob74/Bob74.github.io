/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var nbTentatives = 6; // Au-delà de 6 essais infructueux, la partie est perdue !

// On boucle tant que le joueur n'a pas trouvé ou que ses tentatives ne sont pas épuisées
while (nbTentatives > 0) {
    // On considère que la saisie du joueur est toujours un nombre valide.
    var nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
    
    // On test si la solution a été trouvée
    if (nombre === solution) {
        break; // Si c'est le cas, on quitte la boucle
    }
    else if (nombre > solution) {
        console.log(String(nombre) + " est trop grand");
    }
    else {
        console.log(String(nombre) + " est trop petit");
    }
    
    // Tentative passée
    nbTentatives--;
}

// Si le joueur a trouvé, alors on a quitté la boucle avant d'arriver à 0
if (nbTentatives > 0) {
    alert("Bravo ! La solution était " + String(solution));
    console.log("Bravo ! La solution était " + String(solution));
}
else {
    alert("Perdu... La solution était " + String(solution));
    console.log("Perdu... La solution était " + String(solution));
}
