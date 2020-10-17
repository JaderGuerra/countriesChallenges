const modeBtn = document.getElementById('modeBtn');
//const fondos = document.getElementsByClassName('fondo');
const fondos = document.getElementById('fondo');
const elements = document.getElementsByClassName('mode')


const btnChangeMode = () => {

   /* background */
   fondos.classList.toggle('darkBackGround')
   if (fondos.classList.contains('darkBackGround')) {
      localStorage.setItem('dark-mode', 'true')
   } else {
      localStorage.setItem('dark-mode', 'false')
   }


   /* elements */
   for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.toggle('dark')

   }
   /* elements */
}





setTimeout(() => {

   if (localStorage.getItem('dark-mode') === 'true') {
      for (let i = 0; i < elements.length; i++) {
         let element = elements[i];
         element.classList.add('dark')
         fondos.classList.add('darkBackGround')
      }
   } else {
      for (let i = 0; i < elements.length; i++) {
         let element = elements[i];
         element.classList.remove('dark')
         fondos.classList.remove('darkBackGround')
      }
   }

}, 300);



//document.addEventListener('DOMContentLoaded', () => themesMode())
// document.addEventListener('load', () => themesMode())
modeBtn.addEventListener('click', btnChangeMode)

