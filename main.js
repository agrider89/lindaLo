
const openModal = '#button-open'
const closeModal ='#button-close'

const open = document.querySelector(openModal)
const close = document.querySelector(closeModal)

const active = 'active'
const modal = document.querySelector('.modal')

open.addEventListener('click', function () {
    modal.classList.add(active)
})

close.addEventListener('click', function() {
    modal.classList.remove(active)

})
