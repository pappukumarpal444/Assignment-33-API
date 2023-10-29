const loadCountryApi = () =>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayLoadCountry(data))
}

loadCountryApi()

const displayLoadCountry = (countries) =>{
    const showMianDiv = document.getElementById('Country')

    countries.forEach(country => {
        // console.log(country)
     const div = document.createElement('div')
     div.classList.add('design')
     div.innerHTML = `
     <h3>Country: ${country.name.common}</h3>
     <p>Capital:${country.capital}</p>
     <a href="#first" onclick="countryDetails('${country.name.common}')">Show Details</a>
     `
     showMianDiv.appendChild(div)
    })
}


const countryDetails = (name) =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (shows) =>{
    console.log(shows)
    const detailDiv = document.getElementById('show-top')
    detailDiv.innerHTML = `
    <h3>Counrty: ${shows.name.common} </h3>
    <p>Capital: ${shows.capital}</p>
    <p>Population: ${shows.population}</p>
    <img src="${shows.flags.png}" alt="">
    `
}