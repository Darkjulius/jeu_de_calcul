let section = document.querySelector("section");
let nb1 = document.querySelector(".nb1");
let nb2 = document.querySelector(".nb2");
let operation = document.querySelector(".operation");
let message = document.querySelector(".message");
let submit = document.querySelector(".submit");
let score = document.querySelector(".score");
let link = document.querySelector(".link");
let compteur = 0;

// Gestion des nombres aléatoires entre 0 et 11.

let random1 = (Math.random() * 11) << 0;
let random2 = (Math.random() * 11) << 0;

// J'affecte les valeurs des variables random1 et random2 aux variables nb1 et nb2.
nb1.innerHTML = random1;
nb2.innerHTML = random2;

submit.addEventListener("click", verificationCalcul);
function verificationCalcul() {
  let response = document.querySelector(".reponse").value;

  // Si la réponse est correcte: Le style green est appliqué avec le message Bonne réponse Sinon le style red est appliqué avec le message Mauvaise réponse. Si la réponse est Bonne : Génération aléatoire de nouveaux nombres.
  if (random1 + random2 == response) {
    message.style.background = "green";
    message.innerHTML = "Bonne réponse";

    random1 = (Math.random() * 11) << 0;
    random2 = (Math.random() * 11) << 0;

    nb1.innerHTML = random1;
    nb2.innerHTML = random2;
    compteur += 1; // Incrémente +1 à chaque bonnes réponses.
  } else {
    message.style.background = "red";
    message.innerHTML = "Mauvaise réponse";
    section.innerHTML = "";
    score.innerHTML = `<span>Nombre de bonnes réponses consécutives: ${compteur}</span><br>`;
    link.style.display = "block";
  }
}
