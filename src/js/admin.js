// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { users } from './data.js';
import { index, edit, deleteUser } from './operations.js'

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnEdit = document.getElementById("btn-edit")
let idParaEditar

index(users, tbody)

form.addEventListener('submit', function (event) {
    if (idParaEditar === undefined) {
        edit(name, lastName, email, users)
    } else {
        for (const user of users) {
            if (user.id == idParaEditar) {
                user.name = name.value
                user.lastName = lastName.value
                user.email = email.value
            }
        }

        idParaEditar = undefined
    }

    form.reset()
    index(users, tbody)
    event.preventDefault()
})

table.addEventListener('click', function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id")
        deleteUser(users, idParaEliminar)
        index(users, tbody)
    }

    if (event.target.classList.contains("btn-primary")) {
        idParaEditar = event.target.getAttribute("data-id")
        //vamos a buscar al usuario en la base de datos de manera declarativa
        const userFound2 = users.find(user => user.id == idParaEditar)
        //pintar los datos nuevamente en el formulario
        name.value = userFound2.name
        lastName.value = userFound2.lastName
        email.value = userFound2.email
    }
})