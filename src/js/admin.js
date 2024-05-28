import '../scss/styles.scss'
import '../scss/auth.scss'
import * as bootstrap from 'bootstrap'
const URL = "http://localhost:3000/users"

const tbody = document.querySelector('tbody')
const form = document.querySelector("form")
const userName = document.querySelector("#name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
let idCache

index()

form.addEventListener('submit', async (event) => {
    //ACA DEBEMOS LLAMAR A LA FUNCION QUE SE ENCARGA DE GUARDAR

    if (idCache === undefined) {
        console.log("no existe");
    } else {
        update(idCache, userName, lastName, email)
    }
    event.preventDefault()
    await index()

})

tbody.addEventListener('click', async function (event) {
    // ACA DEBEMOS LOCALIZAR A LOS ESCUCHADORES DE EVENTOS

    if (event.target.classList.contains("btn-danger")) {
        const id = event.target.getAttribute('data-id')
        await deleteItem(id)
        await index()
    }

    if (event.target.classList.contains("btn-warning")) {
        idCache = event.target.getAttribute('data-id')
        const categoryFound = await find(idCache)
        //find: es el mètodo buscar
        userName.value = categoryFound.userName
        lastName.value = categoryFound.lastName
        email.value = categoryFound.email
    }
})



async function index() {
    const response = await fetch(URL)
    const data = await response.json()

    tbody.innerHTML = ""
    data.forEach(element => {
        tbody.innerHTML += `
            <td>${element.id}</td>
            <td>${element.userName}</td>
            <td>${element.lastName}</td>
            <td>${element.email}</td>
            <td>
                <button type="button" data-id=${element.id} class="btn btn-warning">Edit</button>
                <button type="button" data-id=${element.id} class="btn btn-danger">Delete</button>
            </td>
        `
    })
}


async function find(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA BUSCAR UNA CATEGORIA
    const response = await fetch(`${URL}/${id}`)
    const data = await response.json()
    return data
}

async function update(idCache, userName, lastName, email) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ACTUALIZAR UNA CATEGORIA
    const updateCategory = {
        userName: userName.value,
        lastName: lastName.value,
        email: email.value
    }

    await fetch(`${URL}/${idCache}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateCategory)
    })

    

}

async function deleteItem(id) {
    //ACA DEBEMOS PROGRAMAR LA PETICION PARA ELIMINAR UNA CATEGORIA
    await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

}