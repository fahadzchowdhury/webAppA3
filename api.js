function api()
{
    var searchText = document.getElementById("searchBar").value;
    
    var url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=1&appid=894feb2d11ee12fc21080a731b4b35c4`
    fetch(url1)
    .then(res => res.json())
    .then(data => {
        console.log(data[0].lat);
        lat = data[0].lat;
        lon = data[0].lon;
        
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=894feb2d11ee12fc21080a731b4b35c4&units=metric`;
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

    
    //   .then((data) => {
        //       for(i = 0; i<5; i++){
            //           document.getElementById("day" +(i+1)).innerHTML =  Number(data.list[i].main.temp).toFixed(1)+"&#176;C";
            //           console.log("day" + (i+1)+" temp : "+data.list[i].main.temp )
              
    //       }
}

function showData(data)
{

    var searchText = document.getElementById("searchBar").value;
    // console.log(data);
    var oldContent = document.getElementById("info");
    oldContent.innerHTML = "";
    var newDiv = document.createElement("div");
    newDiv.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-text text-center">
        <h4 class="card-title">${searchText}</h4>
        <h5 class="card-subtitle">Temperature: ${data.main.temp}°C</h5>
        <h5 class="card-text">Feels like: </h5>
            
        </div>
    </div>
    </div>
    `

    oldContent.append(newDiv);
    
}