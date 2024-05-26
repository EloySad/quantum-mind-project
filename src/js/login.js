(function () {
    const userSesion = localStorage.getItem("userSesion")

    if (userSesion != null) {
        window.location.href = "../views/games.html"
    }
})()

const URL = "http://localhost:3000/users"



const form = document.querySelector("form")

const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const user = await checkEmail(email)
    if (user === false) {
        alert("Usuario inexistente")
    } else {
        if (user.password === password.value) {
            alert("Bienvenido")
            localStorage.setItem("userSesion", JSON.stringify(user))
            window.location.href = "../views/games.html"
        } else {
            alert("Contraseña Incorrecta")
        }
    }
})

async function checkEmail(email) {
    //traemos a todos los usuarios que tengan el email que se ingresó
    const response = await fetch(`${URL}?email=${email.value}`)
    const data = await response.json()
    console.log(data);

    // se verifica que el email no esté registrado
    if (data.length === 1) {
        return data[0]
    } else {
        return false
    }
}