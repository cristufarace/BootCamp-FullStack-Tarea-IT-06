//Punto 1 del ejercicio  
console.log(document.title);

//Punto 3 del ejercicio - primer parte
let h2 = document.querySelectorAll("h2");
let dt = document.querySelectorAll("dt");
let dd = document.querySelectorAll("dd");

let textoAMostrar = [
  "-----\n",
  h2[0].innerHTML,
  ":",
  dd[2].textContent.toLocaleUpperCase(),
  dd[3].textContent.toLocaleUpperCase(),
  dd[0].textContent, //primer nombre primer integrante
  dd[1].textContent, //segundo nombre primer integrante
  "\n",
  h2[1].innerHTML,
  ":",
  dd[6].textContent.toLocaleUpperCase(),
  dd[7].textContent.toLocaleUpperCase(),
  dd[4].textContent, //primer nombre segundo integrante
  dd[5].textContent, //segundo nombre segundo integrante
  "\n-----",
]
  // .split(" ")
  .join(" ")
  .replace("  ", " ")
  .replace("  ", " ")
  .replace("  ", " ")
  .replace("  ", " ");
console.log(textoAMostrar);

// Punto 4 del ejercicio  
let promptFunction = (data1,data2) => {
    let promptValues = prompt("¿En caso de querer remarcar el nombre con un color,escribalo en ingles,ej 'blue', 'red',etc?");
    data1.style.backgroundColor=`${promptValues}`
    data2.style.backgroundColor=`${promptValues}`
    // data.style.background="red"
    console.log(data1);
    console.log(promptValues)
  };

  //Punto 3 del ejercicio - segunda parte
let coinciencia = (nameOneFirstInt, nameTwoFirstInt, nameOneSecondInt, nameTwoSecondInt) => {
  //evalua coincidencia en primer nombre
  if (nameOneFirstInt.textContent == nameOneSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameOneFirstInt.textContent} `);
    promptFunction(nameOneFirstInt,nameOneSecondInt);
  } else if (nameOneFirstInt.textContent == nameTwoSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameOneFirstInt.textContent} `),
    promptFunction(nameOneFirstInt,nameTwoSecondInt);
  } else if (nameTwoFirstInt.textContent == nameOneSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameTwoFirstInt.textContent} `);
    promptFunction(nameTwoFirstInt,nameOneSecondInt);
  } else if (nameTwoFirstInt.textContent == nameTwoSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameTwoFirstInt.textContent} `);
    promptFunction(nameTwoFirstInt,nameTwoSecondInt);
    //si no encuentra nada
  } else {
    alert("No hubo coincidencias");
  }
};

coinciencia(
  dd[0],
  dd[1],
  dd[4],
  dd[5]
);

//Punto 5 del ejercicio
