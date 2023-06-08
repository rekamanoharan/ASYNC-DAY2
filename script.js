// async function getCountriesData() {
//       try {
//         const url = "https://restcountries.com/v3/all";
//         const response = await fetch(url);
//         const result = await response.json();
//         printData(result);
//       } catch (error) {
//         console.log("ERROR", error);
//       }
//     }
    
//     function printData(data = []) {
//       if (data.length > 0) {
//        const countriesHTML= data.forEach((_d) => getCountry(_d));
//         const container=document.getElementById("countries");
//         container.innerHTML=countriesHTML.join('')
//       }
//     }
    
//     getCountriesData();
var button= document.querySelector('#submit');
const loadCountryAPI = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}


const getCountry = (country) =>{
    console.log(country)
    return `
    <div class="card">
      <h5>${country.name.common}</h5>
        <img src="${country.flags.png}">
        
        <hr>
        <h4>Capital: ${country.capital}</h4>
        <h4>Region: ${country.region}</h4>
        <h4>Country Code: ${country.cca3}</h4>
        <a href="https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=d61373bd0b8df15a61886d5e16d5b258" class="btn btn-primary id="submit">Click for weather</a>
               </div>`
    
}

// button.addEventListener('click', function(){
//     const weatherCountry = (country) =>{
//         console.log(country)
//     fetch('https://api.openweathermap.org/data/2.5/weather?q={country.capital}&appid=d61373bd0b8df15a61886d5e16d5b258')
//     .then(response => response.json())
//     .then(data =>console.log(data))
//     }
// });
loadCountryAPI()
