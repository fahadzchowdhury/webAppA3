function api()
{
    var searchText = document.getElementById("searchBar").value;
    
    var url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=1&appid=894feb2d11ee12fc21080a731b4b35c4`
    fetch(url1)
    .then(res => res.json())
    .then(data => {
        // console.log(data[0].lat);
        lat = data[0].lat;
        lon = data[0].lon;
        
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=894feb2d11ee12fc21080a731b4b35c4&units=metric`;
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                alert("No city found.");
                throw new Error("No data weather found.");
            }
            return response.json();
        })
        .then(data => showData(data))
    })

}

function showData(data)
{

    // var searchText = document.getElementById("searchBar").value;
    // console.log(data);
    var currentPlace = document.getElementById("currentCity");
    currentPlace.innerHTML=
    `
        <p>Current Location: ${data.city.name}, ${data.city.country}</p>
    `;
    var oldContent = document.getElementById("info");
    oldContent.innerHTML = "";
    var newDiv = document.createElement("div");
    newDiv.innerHTML = 
    // <h5 class="card-subtitle">Temperature: ${data.main.temp}°C</h5>
    // <h5 class="card-text">Feels like: ${data.list.main[1].feels_like}°C </h5>
    `
    <div class="card" style="width: 16rem;">
    <div class="card-body">
    <div class="card-img">
    <img src="${data.list[0].weather.icon}">
    </div>
    <div class="card-text text-center">
        <h5 class="card-title">Temperature: ${data.list[0].main.temp}</h5>
        <h5 class="card-text">Feels like: ${data.list[0].main.feels_like}°C </h5>
        <h5 class="card-title">Temperature: ${data.list[8].main.temp}</h5>
        <h5 class="card-text">Feels like: ${data.list[8].main.feels_like}°C </h5>
        </div>
    </div>
    </div>
    `;

    oldContent.append(newDiv);
    
}