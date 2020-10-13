export class Api {


   async paisesAll() {
      const url = await fetch(`https://restcountries.eu/rest/v2/all`)
      const data = await url.json()
      return data;
   }

   async paisesRegion(region) {
      const url = await fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      const data = await url.json()
      return data;
   }

   async obtenerPaises() {
      await this.paisesAll().then((resp) => {
         resp.forEach((pais, index) => {
            if (index < 7) {
               return pais
            }
         });

      })
   }
}

