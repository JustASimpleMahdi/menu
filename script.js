const navbarMenuEl = document.querySelector("#navbar-menu")

const burgerIconEl = navbarMenuEl.querySelector(".burger-icon")

const liHasMenuArray = navbarMenuEl.querySelectorAll("li:has(>ul)")

const hasHover = window.matchMedia("(hover: hover)").matches

if (hasHover) {
    liHasMenuArray.forEach((li) => {
        li.addEventListener("pointerenter", () => {
            li.classList.add("active")
        })
        li.addEventListener("pointerout", () => {
            li.classList.remove("active")
        })
    })
} else {
    liHasMenuArray.forEach((li) => {
        li.addEventListener("click", () => {
            li.classList.toggle("active")
        })
    })
}

burgerIconEl.addEventListener("click", () => {
    navbarMenuEl.classList.toggle("active")
})
