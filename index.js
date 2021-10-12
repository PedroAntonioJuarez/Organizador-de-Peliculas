const peliculas = [];
const escritos = [];

let formValues = document.getElementById("formValues");

const myForm = (event) => {
    event.preventDefault();

    let idNumber = peliculas.length + 1;
    let name = document.getElementById("Nombre");
    let año = document.getElementById("año");


    peliculas.push({nombre: name.value, anio: año.value, id: idNumber})


    escritos.push(
      `<ul>
        <li><h3>${name.value}</h3></li>
        <li><h2>${año.value}</h2></li>
      </ul>`);

    let idCurrent = escritos.length - 1;

    contadorPelis()

    escritura(idCurrent)
}

let escritura = (parametro) => formValues.innerHTML += escritos[parametro]


let contadorPelis = () => {
      if( peliculas.length === 5){
      alert('Tienes Buen Gusto')}
    }