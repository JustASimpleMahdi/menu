const navbarMenuEl = document.querySelector("#navbar-menu")
const burgerIconEl = navbarMenuEl.querySelector(".burger-icon")
const liHasMenuArray = navbarMenuEl.querySelectorAll("li:has(>ul)")

const deviceHasHover = window.matchMedia("(hover: hover)").matches

if (!deviceHasHover) {
    liHasMenuArray.forEach((li, index) => {
        li.addEventListener("click", () => {
            li.classList.add("active")
            liHasMenuArray.forEach((li, i) => {
                if (i !== index) {
                    li.classList.remove("active")
                }
            })
        })
    })
}

burgerIconEl.addEventListener("click", () => {
    const isActive = navbarMenuEl.classList.contains("active")
    if (isActive) {
        liHasMenuArray.forEach((li) => {
            li.classList.remove("active")
        })
    }
    navbarMenuEl.classList.toggle("active", !isActive)
})

document.addEventListener("click", (e) => {
    if (navbarMenuEl.contains(e.target)) return
    navbarMenuEl.classList.remove("active")
    if (!deviceHasHover) {
        liHasMenuArray.forEach((li) => {
            li.classList.remove("active")
        })
    }
})
