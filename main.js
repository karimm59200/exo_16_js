let nbNotes =0;
let noteMax=0;
let noteMin= 20;
let sommeNote=0;
let moyenne =0;

nbNotes = Number(prompt("saisir le nombre de notes:"))

let affichageNote = document.getElementById('affichageNote');

affichageNote.innerHTML += `<h3> la série contiend ${nbNotes} notes:</h3>`

let message = "";

for (let index = 0; index < nbNotes; index++) {
  
  let noteTmp = Number(prompt(`Merci de saisir la note n°${index} (sur 20) :`));
  
  sommeNote += noteTmp;
  
  if(noteTmp > noteMax){
    noteMax = noteTmp;
  }
  
  if(noteTmp < noteMin){
    noteMin = noteTmp;
  }
  message = `
  <ul>
  <li>En note ${index +1}, vous avez saisi ${noteTmp}/20.</li>
  </ul>`
  affichageNote.innerHTML += message;

}

moyenne = Math.round(sommeNote/nbNotes)

console.log("Ma note max est :"+noteMax);
console.log("Ma note min est :"+noteMin);
console.log("Ma moyenne est :"+moyenne);



// for (let index = 0; index < nbNotes; index++) {
//   noteTmp = 0;
//   noteTmp=0;3
//  affichageNote.innerHTML +=
// `<ul>
// <li>En note ${index +1}, vous avez saisi ${noteTmp}/20.</li>
// </ul>`

// }