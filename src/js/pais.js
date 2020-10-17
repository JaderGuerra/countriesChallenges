import { Api } from './api.js';
import './mode.js'
//import { themesMode } from './mode.js'

//document.addEventListener('DOMContenteLoaded', () => themesMode())

const query = new URLSearchParams(window.location.search)
const params = query.get('name')
const detalles = document.getElementById('detalles');

const api = new Api()



api.paisDetails(params).then((resp) => {
   let html = ''

   resp.forEach(paises => {

      html = `
            <div  id='card' class="details__card mode">

               <div class="details__header">
                  <img class='details__img' loading="lazy" src="${paises.flag}" alt="">
               </div>

               <div class="details__body">

                  <div class="details__datas">               
                     <h3 class="details__name">${paises.name}</h3>
                     <li class="details__li">Native Name: <small>${paises.nativeName}</small></li>
                     <li class="details__li">Population: <small>${paises.population}</small></li>
                     <li class="details__li">Region: <small>${paises.region}</small></li>
                     <li class="details__li">Sub Region: <small>${paises.subregion}</small></li>
                     <li class="details__li">Capital: <small>${paises.capital}</small></li>
                  </div>   

                  <div class='details__datos'>
                     <li class="details__li">Top Level Domain: <small>${paises.topLevelDomain[0]}</small></li>
                     <li class="details__li">Currencies: <small>${paises.currencies[0].name}</small></li>
                     <li class="details__li">Languages: <small>${paises.languages[0].name} </small></li>
                  </div>    
                  <div class='details__btns'>
                     <h4 class="datails__tituloBtns">Border Countries:</h4>          
                        
                        <button class="details__btnPaises btn1">${paises.borders[0]}</button>
                        <button class="details__btnPaises btn2">${paises.borders[1]}</button>
                        <button class="details__btnPaises btn3">${paises.borders[2]}</button>        
                        
                  </div >    
               </div >  
            </div >
         `;
      detalles.innerHTML += html
   });
})
