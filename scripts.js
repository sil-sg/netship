
const btnMenu = document.querySelector(".btn-menu")

btnMenu.onclick = () => toggleMenu()

function toggleMenu() {
    const menu = document.querySelector(".menu")
    const bgBlur = document.querySelector(".blur")
    
    menu.classList.toggle("active")
    bgBlur.classList.toggle("active")
    btnMenu.classList.toggle("active")
    
}

// '≡' : '×'