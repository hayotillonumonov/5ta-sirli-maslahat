const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')

showBtn.addEventListener('click', ()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

overlay.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

closeModal.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})