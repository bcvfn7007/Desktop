let modal = document.getElementById("modal")
let error = document.getElementById("error")

function loginShow() {
    modal.classList.toggle("show")
}

function signIn() {
    let inputLogin = document.getElementById("login")
    let inputPassword = document.getElementById("password")

    console.log(inputLogin.value);
    console.log(inputPassword.value);

    let isAdmin = adminData.filter((admin) => admin.login === inputLogin.value && admin.password === inputPassword.value)
    console.log(isAdmin);

    if (isAdmin.length == 1) {
        localStorage.setItem("username", isAdmin[0].username)
        window.location.href = "/admin/admin.html"
    } else {
        error.classList.add("show")
        inputLogin.value = ""
        inputPassword.value = ""

        setTimeout(() => {
            error.classList.remove("show")
        }, 1500);
    }
}

