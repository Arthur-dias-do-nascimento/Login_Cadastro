const login = document.querySelector(".container-form-login")
const cadastro = document.querySelector(".container-form-cadastro")
const img = document.querySelector(".container-img img")
const links = [...document.querySelectorAll(".link p > a")]

const VisibleCadastro = () => {
    login.classList.remove("hidden")
    cadastro.classList.add("hidden")

    img.setAttribute("src", "assets/img/background-login.png")
}

const VisibleLogin = () => {
    login.classList.add("hidden")
    cadastro.classList.remove("hidden")

    img.setAttribute("src", "assets/img/background-sign-up.png")
}

links.forEach(element => {
    element.addEventListener("click", (event) => {
        if (event.target.id == "login") {
            VisibleCadastro()
        } else if (event.target.id == "cadastro") {
            VisibleLogin()
        }
    })
})