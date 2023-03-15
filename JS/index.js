let hamburgerIsOpen= false

function openHamburger() {
    let hamburgerNavContainer = document.getElementById("hamburger-nav")

    if (hamburgerIsOpen) {
        hamburgerNavContainer.style.display = 'none'
        hamburgerIsOpen = false;
    } else {
        hamburgerNavContainer.style.display = 'block'
        hamburgerIsOpen = true;
    }
}