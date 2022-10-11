const bookMarkNav = document.querySelectorAll('[data-target]')
const featuresContent = document.querySelectorAll('[data-content]')
const headNav = document.querySelectorAll('.head_nav')
const whatIsBookMark = document.querySelectorAll('.whatIsBookMark')
const upperFooter = document.querySelector('.upper__footer')
const input = document.querySelector('input')
const contactUs = document.querySelector('.contactUs')
const navToggle = document.querySelector('.nav__toggle')
const navList = document.querySelector('.nav__list')
const navSection = document.querySelector('.nav__section')


window.addEventListener('scroll', () => {
    navSection.classList.toggle('navColorActive', scrollY > 30)
    
})
navToggle.addEventListener('click', () => {
    let status = navToggle.getAttribute('aria-controls')
    navSection.classList.toggle('navActive')
    if(status == 'close'){
        navToggle.setAttribute('aria-controls', 'open')   
    }else{
        navToggle.setAttribute('aria-controls', 'close')
    }

})

bookMarkNav.forEach(marknav => {
    marknav.addEventListener('click', (e) => {
        const target = document.querySelector(marknav.dataset.target)
        featuresContent.forEach(content => {
            content.classList.remove('active')
        })
        target.classList.add('active')
        activeTab(e.target.innerHTML)
    })
})
function activeTab(tab) {
    bookMarkNav.forEach(marknav =>{
        if(marknav.innerHTML == tab ){
            marknav.classList.add('active')
        } else{
            marknav.classList.remove('active')
        }
    }) 
}
whatIsBookMark.forEach(Mark => {
    Mark.addEventListener('click', () => {
        console.log(Mark)
        Mark.classList.toggle('Active')
        Mark.classList.toggle('fagsActive')
        Mark.classList.toggle('colorActive')
        Mark.classList.toggle('srokeActive')
    })
})

contactUs.addEventListener('click', (e) => {
    if('contact us' == e.target.innerHTML){
        contactUs.classList.add('buttonActive')
    }
    return notValid()
})
function notValid(){
    let value = input.value
    if(value === "" || !value.includes('@') || value.includes('/') || !value.includes('@ = 1' + '. = 1')){
        upperFooter.classList.add('showErrorIcon')
        upperFooter.classList.add('errorMessage')
        upperFooter.classList.add('errorBox')
        upperFooter.classList.add('buttonActive')
        return false
    } else {upperFooter.classList.remove('showErrorIcon')
    upperFooter.classList.remove('errorMessage')
    upperFooter.classList.remove('errorBox')
    upperFooter.classList.remove('buttonActive')
    return true
}
}



 