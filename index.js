const search = document.querySelector(".search-weather")
const appBody = document.querySelector(".weather-info")
const button = document.querySelector(".search")
const icon = document.querySelector(".weather-icon")

const getWeather = async () =>{
    try{
    appBody.textContent = "Loading..."
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=95d6912656274e08934185757230212&q=${search.value}&aqi=no`,{mode: 'cors'})
    let parsedResponse = await response.json()
    console.log(parsedResponse);
    currentWeather = parsedResponse.current.condition.text
    currentIcon = parsedResponse.current.condition.icon
    currentTempF = parsedResponse.current.temp_f
    appBody.style.color = "";
    appBody.textContent = currentWeather + " " + currentTempF + "°F"
    icon.src = currentIcon
    
    

    } catch(err){
        appBody.textContent = "Try Something Else"
        appBody.style.color = "red"
        console.error("Something went wrong", err)
    }
}
button.addEventListener("click",() => {
getWeather();
})


