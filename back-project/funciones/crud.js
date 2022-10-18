let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: '',
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const puestoImput = document.querySelector('#puesto');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreImput.value ==='' || puestoImput.value ===''){
        alert('Todos los campos son obligatorios');
        return;
    }

    if (editando){
        //editarEmpleado();
        editando = false;
    }else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreImput.value;
        objEmpleado.puesto = nombreImput.value;

        agregarEmpleado();

    }
}
function agregarEmpleado(){
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();
}

function mostrarEmpleados(){
    const divEmpleados = document.querySelector('.div-empleados');

    listaEmpleados.forEach( empleado =>{
        const {id, nombre, puesto} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${puesto} - `;
        parrafo.dataset.id =id;



        const editarBoton = document.createElement('button');
        // editarBoton.onclick = () => eliminarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        // eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);


        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });

}
// function limpiarHtml(){
//      const divEmpleados = document.querySelector('.div-empleados');
//      while (divEmpleados.firstChild){
//         divEmpleados.removeChild(divEmpleados.firstChild)
//      }   
// }
