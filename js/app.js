// IDENTIFICAR LOS ELEMENTOS DEL FORMULARIO
const taskForm = document.querySelector('#taskForm');

const nameInput = document.querySelector('#nombre');

const descriptionInput = document.querySelector('#descripcion');

const dateInput = document.querySelector('#fecha');

const statusInput = document.querySelector('#estado');

const errorMessage = document.querySelector('#errorMessage');

// FUNCIÓN PARA VALIDAR LOS CAMPOS

function validFormFieldInput(data) {

    if (
        data.name === "" ||
        data.description === "" ||
        data.date === "" ||
        data.status === ""
    ) {
        return false;
    }

    return true;
}
// ESCUCHAR EL ENVÍO DEL FORMULARIO

taskForm.addEventListener('submit', function(event) {

    event.preventDefault();

    const data = {
        name: nameInput.value.trim(),
        description: descriptionInput.value.trim(),
        date: dateInput.value,
        status: statusInput.value
    };

    console.log(data);

        // VALIDAR LOS DATOS

    if (!validFormFieldInput(data)) {

        errorMessage.classList.remove('d-none');

    } else {

        errorMessage.classList.add('d-none');

    }

});