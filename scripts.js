
const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")
const bgBlur = document.querySelector(".blur")
const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach(i => {
    i.addEventListener("click", () => {
        setTimeout(() => {
            menu.classList.remove("active")
            bgBlur.classList.remove("active")
            btnMenu.classList.remove("active")
            
        }, 50)
    }
})

btnMenu.onclick = () => toggleMenu()

function toggleMenu() {
    
    menu.classList.toggle("active")
    bgBlur.classList.toggle("active")
    btnMenu.classList.toggle("active")
    
}

// '≡' : '×'
