const myModal = document.getElementById('Modal')
const myInput = document.getElementById('Input')

function activeModal(){
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })

}
