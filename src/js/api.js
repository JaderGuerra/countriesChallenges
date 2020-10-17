export class Api {


   async paisesAll() {
      const url = await fetch(`https://restcountries.eu/rest/v2/all`)
      const data = await url.json()
      return data;
   }

   async paisDetails(pais) {
      const url = await fetch(`https://restcountries.eu/rest/v2/name/${pais}`)
      const data = await url.json()
      return data;
   }



   async paisesRegion(region) {
      const url = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
      const dataRegion = await url.json()
      return dataRegion
   }
}

