import { Api } from './api.js';
import './mode.js'
const paisesSelect = document.getElementById('paisesSelect');
let divPaises = document.getElementById('paises');

const buscar = document.getElementById('buscar');
const boton = document.getElementById('boton');


const api = new Api()


paisesSelect.addEventListener('input', async () => {
   const regionSeleccionada = paisesSelect.options[paisesSelect.selectedIndex].value;
   if (regionSeleccionada === '') {
      return
   } else {
      let regiones = await api.paisesRegion(regionSeleccionada)
      console.log(regiones);
   }
})

window.addEventListener('load', () => {
   filtrar()
})

const filtrar = () => {
   limpiar()

   divPaises.innerHTML = "";
   let text = buscar.value.toLowerCase();

   api.paisesAll().then((resp) => {
      const filtrado = resp.filter((x) => {
         let paises = x.name.toLowerCase()
         return paises.indexOf(text) !== -1
      })

      filtrado.forEach(paises => {
         let html = '';
         html = `
          <div class="paises__card mode">
          <div class="paises__header">
             <img loading="lazy" src="${paises.flag}" alt="">
          </div>
          <div class="paises__body">
             <h4 class="paises__name">${paises.name}</h4>
             <li class="paises__data">Population: <small>${paises.population}</small></li>
             <li class="paises__data">Region: <small>${paises.region}</small></li>
             <li class="paises__data">Capital: <small>${paises.capital}</small></li>
          </div>
       </div>
          `;
         divPaises.innerHTML += html

      });

   }
   )
}

const limpiar = () => {
   while (divPaises.firstChild) {
      divPaises.removeChild(divPaises.firstChild)
   }
}


boton.addEventListener("click", filtrar);
buscar.addEventListener("keyup", filtrar);
// filtrar()


