/* mostrar menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*ocultar menu*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* sacar para menu mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //cuando se hace click en cada nav__link, se deja de mostrar el menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* sombra de header */
const shadowHeader = () => {
    const header = document.getElementById('header')
    // cuando el scroll es más grande que 50vh de altura..
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* email */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
     e.preventDefault()

     //serviceID - templateID - #form - publicKey
     emailjs.sendForm('service_tyzaxga','template_g3z3s5p','#contact-form','8RDlacxnq2gpHfCdM')
     .then(() => {
        //shoe sent message
        contactMessage.textContent = 'Message sent successfully✅'

        //remove message after five seconds
        setTimeout (() => {
            contactMessage.textContent = ''
        }, 5000)

        //clear input fields
        contactForm.reset()

     }, () => {
        //shoe error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
     })
}

contactForm.addEventListener('submit', sendEmail)