// Import our custom CSS
import '../scss/auth.scss'
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const URL= "http://localhost:3000/users"
// llamar al formulario

const form = document.getElementById("register-form")

// llamar a los campos de formulario

const userName = document.getElementById("user-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("submit", async (event) => {
    event.preventDefault()// evitar que la pagina se recargue
    const reviewEmail = await checkEmail(email)
    const reviewPassword = checkPassword(password, confirmPassword)
    
    if (reviewEmail === true && reviewPassword === true) {
        await registerUser(userName, lastName, email, password)
        window.location.href = "../auth/login.html"
    }
})

async function checkEmail(email) {
    //traemos a todos los usuarios que tengan el email que se ingresó
    const response = await fetch(`${URL}?email=${email.value}`)
    const data = await response.json()
    console.log(data);

    // se verifica que el email no esté registrado
    if (data.length > 0) {
        return false
    } else {
        return true
    }
}

function checkPassword(password,confirmPassword) {
    if (password.value === confirmPassword.value) {
        return true
    } else {
        return false
    }
}

async function registerUser(userName, lastName, email, password) {
    
    const newUser = {
        userName: userName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }

    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
}

const btnLogout = document.getElementById("btn-logout")

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userSesion")
    window.location.href = "/"
})