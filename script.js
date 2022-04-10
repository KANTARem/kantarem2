const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nava')[0]
const main = document.getElementsByClassName('main')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

toggleButton.addEventListener('click', () => {
  main.classList.toggle('active')
})