let formulario = document.querySelector ("form")

formulario.addEventListener ("submit", function (event) {
    event.preventDefault ();
    let formularioAFormData = new FormData (formulario)
    let tablaIntegrantes = document.getElementById ("tablaIntegrantes")
    let insertarFilaRef = tablaIntegrantes.insertRow (0)
    let nuevaCelda =  insertarFilaRef.insertCell (0)
    nuevaCelda.textContent = formularioAFormData.get ("primerApellido")
    let nuevaCelda1 =  insertarFilaRef.insertCell (1)
    nuevaCelda1.textContent = formularioAFormData.get ("segundoApellido")
    let nuevaCelda2 =  insertarFilaRef.insertCell (2)
    nuevaCelda2.textContent = formularioAFormData.get ("primerNombre")
    let nuevaCelda3 =  insertarFilaRef.insertCell (3)
    nuevaCelda3.textContent = formularioAFormData.get ("segundoNombre")
// Boton Borrar
    let nuevaCelda4 =  insertarFilaRef.insertCell (4)
    let botonBorrar = document.createElement ("button")
    botonBorrar.textContent = "Eliminar"
    nuevaCelda4.appendChild (botonBorrar)
    botonBorrar.addEventListener("click" , (event) => {
        if (confirm ("¿Estas seguro de eliminar este integrante? ")) {
        event.target.parentNode.parentNode.remove ()
    }})
    let td = document.querySelectorAll("td");
    formulario.reset()
    // console.log(td[0]);
})

// Funcion que da color al nombre 
let darColorNombre = (data1,data2) => {
    let promptValues = prompt("¿En caso de querer remarcar el nombre con un color,escribalo en ingles,ej 'blue', 'red',etc?");
    data1.style.backgroundColor=`${promptValues}`
    data2.style.backgroundColor=`${promptValues}`
    // data.style.background="red"
    // console.log(data1);
    // console.log(promptValues)
  };

  //Funcion que evalua nombres
let coincidenciaNombre = (nameOneFirstInt, nameTwoFirstInt, nameOneSecondInt, nameTwoSecondInt) => {
  //evalua coincidencia en primer nombre
  let isNombre = confirm ("¿Desea comprar Nombres?")
  if(isNombre == true) {
    //nombre1-int1 vs nombre1-int2
  if (nameOneFirstInt.textContent == nameOneSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameOneFirstInt.textContent} `);
    darColorNombre(nameOneFirstInt,nameOneSecondInt);
    //nombre1-int1 vs nombre2-int2
  }  if (nameOneFirstInt.textContent == nameTwoSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameOneFirstInt.textContent} `),
    darColorNombre(nameOneFirstInt,nameTwoSecondInt);
      //nombre2-int1 vs nombre1-int2
  }  if (nameTwoFirstInt.textContent == nameOneSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameTwoFirstInt.textContent} `);
    darColorNombre(nameTwoFirstInt,nameOneSecondInt);
     //nombre2-int1 vs nombre2-int2
  }  if (nameTwoFirstInt.textContent == nameTwoSecondInt.textContent) {
    alert(`Hubo coincidencia en el nombre ${nameTwoFirstInt.textContent} `);
    darColorNombre(nameTwoFirstInt,nameTwoSecondInt);
    //si no encuentra nada
  } else {
    alert("No hubo coincidencias en el nombre");
  }}
};

//Funcion que da color al apellido
let darColorApellido = (data1,data2) => {
    let promptValues = prompt("¿En caso de querer remarcar el apellido con un color,escribalo en ingles,ej 'blue', 'red',etc?");
    data1.style.backgroundColor=`${promptValues}`
    data2.style.backgroundColor=`${promptValues}`
    // data.style.background="red"
    // console.log(data1);
    // console.log(promptValues)
  };

//Funcion que evalua apellido
let  coincienciaApellido= (apellidoOneFirstInt, apellidoTwoFirstInt, apellidoOneSecondInt, apellidoTwoSecondInt)=>{
    
    
        if (apellidoOneFirstInt.textContent == apellidoOneSecondInt.textContent) {
            alert(`Hubo coincidencia en el apellido ${apellidoOneFirstInt.textContent} `);
            darColorApellido(apellidoOneFirstInt,apellidoOneSecondInt);
          }  if (apellidoOneFirstInt.textContent == apellidoTwoSecondInt.textContent) {
            alert(`Hubo coincidencia en el apellido ${apellidoOneFirstInt.textContent} `),
            darColorApellido(apellidoOneFirstInt,apellidoTwoSecondInt);
          }  if (apellidoTwoFirstInt.textContent == apellidoOneSecondInt.textContent) {
            alert(`Hubo coincidencia en el apellido ${apellidoTwoFirstInt.textContent} `);
            darColorApellido(apellidoTwoFirstInt,apellidoOneSecondInt);
          }  if (apellidoTwoFirstInt.textContent == apellidoTwoSecondInt.textContent) {
            alert(`Hubo coincidencia en el apellido ${apellidoTwoFirstInt.textContent} `);
            darColorApellido(apellidoTwoFirstInt,apellidoTwoSecondInt);
            //si no encuentra nada
          } else {
            alert("No hubo coincidencias en el apellido");
        };
    }
//Boton comparar
let boton = document.querySelector('button')
boton.addEventListener("click",()=>{
    let td = document.querySelectorAll("td");
    // console.log(td[0]);
    coincienciaApellido(
        td[0],
        td[1],
        td[4],
        td[5]
      );
      coincidenciaNombre(
        td[2],
        td[3],
        td[6],
        td[7]
        
      );
})