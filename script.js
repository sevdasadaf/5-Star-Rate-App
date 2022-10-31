const btn = document.querySelectorAll('.button')
const sumbit_btn = document.getElementById('submit');
const star_count = document.getElementById('star');

btn.forEach(button => {button.addEventListener('click', clicked)})

function clicked (e) {
// e.target.classList.remove('passive') 
// e.target.classList.toggle('active')
// e.target.classList.add('passive')

if(e.target.tagName === 'BUTTON') {
 
  let current_button = e.target;
  let next_button = e.target; 
 
  current_button.classList.toggle('active')
  while (current_button = current_button.previousElementSibling){
       current_button.classList.toggle('active')
  }
   while (next_button = next_button.nextElementSibling) {
      next_button.classList.remove('active')
   }
   
   sessionStorage.setItem("autosave", Number(e.target.value))
}

sumbit_btn.addEventListener('click', submitted) 
function submitted () {
window.location.href = "./pages/submitted.html"

}
}

const star_number = sessionStorage.getItem("autosave")
star_count.innerHTML = `You've selected ${star_number}  out of 5`


  
