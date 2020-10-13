const modeBtn = document.getElementById('modeBtn');
const fondo = document.getElementById('fondo');
const elements = document.getElementsByClassName('mode')


const changeMode = () => {

   for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.toggle('dark')
   }
   fondo.classList.toggle('darkBackGround')

}
modeBtn.addEventListener("click", changeMode);