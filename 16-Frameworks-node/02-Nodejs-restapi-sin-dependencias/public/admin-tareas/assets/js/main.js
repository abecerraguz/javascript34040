let tareas = [];


const getTareas = async () => {
    const res = await fetch("http://localhost:3000/tareas/asignadas");
    const data = await res.json();
    data.forEach( element => {
        tareas.push(element)
    });
};

const actualizarTarea=()=>{
    let tituloActualizado = document.querySelector('#titulo').value
    let descripcionActualizado = document.querySelector('#descripcion').value
    let num = document.querySelector('form button').getAttribute("id")
    console.log('XXXX',num)
    fetch(`http://localhost:3000/tareas?id=${num}`, {
      method: "PUT",
      body: JSON.stringify({
        titulo: `${tituloActualizado}`,
        descripción: `${descripcionActualizado}`
      })
    }).then(()=>{
        $('#exampleModal').modal('toggle');
        window.location.reload();
    })
}

const editarTareas = async (num) => {
    $('#exampleModal').modal('toggle');
    const res = await fetch(`http://localhost:3000/tareas`);
    const data = await res.json();
    console.log('Salida de data en edit--->', data )
    document.querySelector('#titulo').value = data[num-1].titulo;
    document.querySelector('#descripcion').value = data[num-1].descripción;
    document.querySelector('form button').setAttribute( 'id',num );
    document.querySelector('#titleModal').innerHTML = "Editar tarea"
    console.log('Salida de tareas', data[num-1].titulo)
};

const addTareaModal = () => {
    $('#modalAddTarea').modal('toggle');  
}

const addTarea = async (num) => {
    let tituloActualizadoAdd = document.querySelector('#tituloAdd').value
    let descripcionActualizadoAdd = document.querySelector('#descripcionAdd').value
    fetch(`http://localhost:3000/tareas`, {
      method: "POST",
      body: JSON.stringify({
        titulo: `${tituloActualizadoAdd}`,
        descripción: `${descripcionActualizadoAdd}`
      })
    }).then(()=>{
        $('#modalAddTarea').modal('toggle');
        window.location.reload();
    })
}


// const mensajeModal = async (num) => {
//     $('#modalMensaje').modal('toggle');
    
// }

const eliminarTarea = async (id) => {
    // console.log('Salidaaaaaaa')
    await fetch(`http://localhost:3000/tareas?id=${id}`, {
      method: "DELETE",
    }).then(()=>{
        // mensajeModal()
        window.location.reload();
    })
};

const imprimir = async () => {
    try {
        await getTareas()
        //await editarTareas()
        let printTareas = document.querySelector('#printTareas')
        
        // console.log('Salida de button-->', buttonEditar)
        let numEdit = 0
        tareas.forEach( (element,index) => {
            numEdit++
            printTareas.innerHTML += `<tr>
            <td class="whiteSpace">${element.titulo}</td>
            <td>${element.descripción}</td>
            <td class="whiteSpace">
                <div class="containerButton">
                <button  onclick=editarTareas(${numEdit}) id="${numEdit}" type="button" class="btn btn-warning btn-sm d-block me-2"><i class="fa-solid fa-pen-to-square me-1"></i>Editar</button>
                <button  onclick=eliminarTarea(${numEdit}) id="${numEdit}" type="button" class="btn btn-danger btn-sm d-block"><i class="fa-solid fa-trash-can me-1"></i>Eliminar</button>

                </div>
            </td>
          </tr>`
        });

    } catch (error) {
        console.log(error);
    }
}

imprimir()