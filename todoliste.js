//récuper les éléments html et les mettre en variables
let btn = document.querySelector(".bt");
let input = document.querySelector(".select");
let conteneur = document.querySelector(".list");
let select = document.querySelector(".chxselect");

// création d'une function ou elle englobe l'event du bouton
//pour modifier ce que l'on a commander puis elle est rappeller apres son appendChild
function modifier(modification, li, strickbutton, erasebutton, modification) {
  modification.addEventListener("click", function () {
    console.log("je suis la modif");
    // créer input qui permettra d'ecrire du texte
    let input = document.createElement("input");
    //faire aparaître l'input dans la li
    li.appendChild(input);
    // créer l'evenenemnt qui en tpant entre permettra le lancemnet de  la fonction
    input.addEventListener("keydown", function (e) {
      console.log("je suis l'input");
      // verifier si bien appuyer sur entre
      if (e.key == "Enter") {
        // bien assurer qu'il y a bien une valeur sur l'input
        if (input.value == "") {
          alert("Veuillez remplir le formulaire avant de valider");
        } else {
          console.log(input.value);
          // Mettre un texte intérieur dans la balise li
          li.innerHTML = input.value;
          //les butons on disparu = il faut les rem ettre dans l'event
          li.appendChild(strickbutton);

          li.appendChild(erasebutton);

          li.appendChild(modification);
        }
      }
    });
  });
}

// création d'une function ou elle englobe l'event du effacer
//pour modifier ce que l'on a commander puis elle est rappeller apres son appendChild
function effacer(erasebutton, li) {
  erasebutton.addEventListener("click", function () {
    //action d'effacer
    if (confirm("Vous êtes sûr?")) {
      li.remove();
    }
  });
}

// création d'une function ou elle englobe l'event de rayez
//pour modifier ce que l'on a commander puis elle est rappeller apres son appendChild
function take(strickbutton, li) {
  strickbutton.addEventListener("click", function () {
    //créer une condition qui ce declenche au click (si on appuie sur le bt ça raye sinon non)
    if (li.style.textDecoration == "line-through") {
      console.log("if");
      li.style.textDecoration = "";
    } else {
      console.log("else");
      li.style.textDecoration = "line-through";
    }
  });
}

// création d'une function = qd il y a le passage de la sourris
//permets de changer la couleur et la d'augmenter taille de la police
function moussein(li) {
  li.addEventListener("mouseout", function () {
    li.style.color = " black";
    li.style.fontSize = "100%";
  });
}

// création d'une function = qd il y a le passage de la sourris
//permets de changer la couleur et la de diminuer taille de la police
function mousseout(li) {
  li.addEventListener("mouseover", function () {
    li.style.color = "blue";
    li.style.fontSize = "150%";
  });
}
// création d'une fonction qui lorsque nous choisissons un éléments il change de couleur en fonction
// de l a catégorie choisie
function chcolor(li) {
  if (select.value == "Vegetable") {
    li.style.color = "green";
  }
  if (select.value == "Meat") {
    li.style.color = "red";
  }
}

//créattion de la fonction qui rassemble toutes les autres pour ne faire qu'un rapel
function tout() {
  btn.addEventListener("click", function () {
    //création de l'élémeny li pour la mettre dans le ul
    let li = document.createElement("li");

    // mise en texte du bouton
    li.innerHTML = input.value;

    chcolor(li);

    //ajout de la selection du parents conteneur vers l'enfants li
    conteneur.appendChild(li);

    // creation d'un element bouton
    let strickbutton = document.createElement("button");
    // donner un texte au bouton
    strickbutton.innerHTML = "rayer";

    // le faire apparaitre dans le parent li
    li.appendChild(strickbutton);

    input.value = "";

    //// creer un event sur le bouton qui au click
    //  va changer le style de li pour le rayer
    take(strickbutton, li);

    moussein(li);
    mousseout(li);

    //création du button effacer
    let erasebutton = document.createElement("button");
    //donner du texte au button
    erasebutton.innerHTML = "dell";

    // faire apparaître le button dans la li
    li.appendChild(erasebutton);

    //créer l'action par le click
    effacer(erasebutton, li);
    //créer variable modification
    let modification = document.createElement("button");
    //donner une nom a cette variable
    modification.innerHTML = "Modif";

    //faire apparaître le button dans la li
    li.appendChild(modification);

    modifier(modification, li, strickbutton, erasebutton, modification);

    // créer la function qui au clilk permettra de modifier la li
  });
}

tout();

// declenceh evenement qui va ce declencher au clic
