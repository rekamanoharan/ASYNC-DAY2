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
    // console.log(country)
    return `
    <div class="card col-lg-4 col-sm-12 col-md-4 col">
        <div class="card-header">
            <h5>${country.name.common}</h5>
           
        </div>
        <img src="${country.flags.png}" />
        <div class="card-body">
            <div class="card-text"><h4>Capital:${country.capital}</h4></div>
            <div class="card-text"><h4>Region:${country.region}</h4></div>
            <div class="card-text"><h4>Country Code:${country.cca3}</h4></div>
        </div>
        <button class="btn btn-primary" onclick="weatherData(${country.latlng[0]},${country.latlng[1]})">Click for Weather</button>
    </div>`
    
}
function weatherData(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d61373bd0b8df15a61886d5e16d5b258`)
.then((response)=>{
    console.log(response)
    return response.json()
}).then((response)=>{
    console.log(response)
    alert('temperature: '+ JSON.stringify(response.main.temp)+ '\n' + 'humidity: '+ JSON.stringify(response.main.humidity)+ '\n' + 'Pressure: '+ JSON.stringify(response.main.pressure))
    // alert("temperature:",response.main.temp)

})}

loadCountryAPI()
