// https://api.unsplash.com/search/photos?query=overcast&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k

// http://api.weatherapi.com/v1/current.json?key=77f064492296495fa03130641231802&q=london
// http://api.weatherapi.com/v1/current.json?key=77f064492296495fa03130641231802&q=london


let inputValue = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");




const SearchValueAPI = (inputValue) =>{
    return `http://api.weatherapi.com/v1/forecast.json?key=77f064492296495fa03130641231802&q=${inputValue}&days=8&aqi=no&alerts=no`;
}

const image_URL = (inputValue) =>{
    return `https://api.unsplash.com/search/photos?query=${inputValue}&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;
}


imageGenerator(image_URL("sunset"))


const randomNum = (rand) => {
    return Math.floor(rand * Math.random());
}

const timeNow = () => {
    let newTime = new Date()
    return newTime.toDateString();
}

let convertDate = (date) =>{
    let newTime = new Date(date)
    return newTime.toDateString();
}

function imageGenerator(url){
    fetch(url).then((res) => {return res.json()}).then((data)=>{
    let randNum = randomNum(data.results.length)
    document.body.style.backgroundImage = `url(${data.results[randNum].urls.regular})`;
})
}

function dataExtractor(url){
    fetch(url).then((res)=>{
        return res.json();
    }).then(async data=>{

       await imageGenerator(image_URL(data.current.condition.text));

        const mainTemp = document.querySelector(".mainTextDetails div h1");

        mainTemp.innerText = data.current.temp_c;

        const placeName = document.querySelector(".mainTextDetails div h2");

        placeName.innerText = data.location.name;

        const currentDate = document.querySelector(".mainTextDetails div h3");

        currentDate.innerText = timeNow();

        const imgWeather = document.querySelector(".mainTextImg img");

        imgWeather.src = data.current.condition.icon;
        imgWeather.alt = data.current.condition.text;

        const imgWeatherName = document.querySelector(".mainTextImg h3");

        imgWeatherName.innerText = data.current.condition.text;

        const country = document.getElementById("country");

        country.innerText = data.location.country;


        const region = document.getElementById("region");

        region.innerText = data.location.region;


        const timezone = document.getElementById("timezone");

        timezone.innerText = data.location.tz_id;

        const cloudy = document.getElementById("cloudy");

        cloudy.innerText = `${data.current.cloud}%`;


        const humidity = document.getElementById("humidity");

        humidity.innerText = `${data.current.humidity}%`;

        const wind = document.getElementById("wind");

        wind.innerText = `${data.current.wind_kph}Km/h`;



        

    })
}




searchBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    let value = inputValue.value;
    dataExtractor(SearchValueAPI(value));
})


