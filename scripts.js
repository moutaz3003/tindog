let mycity;
let mycountry;
let mytemperature;  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
let feelsLike;  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
let mywrittenForecast;
let mainForecast;
let icon;
let mymin1;
let mymax1;
let mymin2;
let mymax2;
let mymin3;
let mymax3;
let mymin4;
let mymax4;
let mymin5;
let mymax5;
let mymin6;
let mymax6;

function fahrenheitConverter(temp){
  let tempInFahrenheit = Math.round( ((temp - 273) * (9/5)) + 32 ) ;
  return tempInFahrenheit;
}

function celsiusConverter(temp){
  let tempInCelsius = Math.round(temp - 273);
  return tempInCelsius;
}

//**************************Auto-Complete text field************************

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","England","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Northern Ireland","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Scotland","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","UAE","UK","USA","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Wales","Yemen","Zambia","Zimbabwe", "Kabul", "Tirana", "Tirane","Algiers","La Vella","Luanda","Saint John's","Buenos Aires","Yerevan","Canberra","Vienna","Baku","Nassau","Manama","Dhaka","Bridgetown","Minsk","Brussels","Belmopan","Porto Novo","Thimphu","La Paz","Sucre","Sarajevo","Gaborone","Brasilia","Bandar Seri Begawan","Sofia","Ouagadougou","Gitega","Phnom Penh","Yaounde","Ottawa","Praia","Bangui","N'Djamena", "Santiago","Beijing","Bogota","Moroni","Kinshasa","Brazzaville","San Jose","Yamoussoukro","Zagreb","Havana","Nicosia","Prague","Copenhagen","Djibouti","Roseau","Santo Domingo","Dili","Quito","Cairo","San Salvador","London","Malabo","Asmara","Tallinn","Mbabana","Addis Ababa","Palikir","Suva","Helsinki","Paris","Libreville","Banjul","Tbilisi","Berlin","Accra","Athens","Saint George's","Guatemala City","Conakry","Bissau","Georgetown","Port au Prince","Tegucigalpa","Budapest","Reykjavik","New Delhi","Jakarta","Tehran","Baghdad","Dublin","Jerusalem","Rome","Kingston","Tokyo","Amman","Nur-Sultan","Nairobi","Tarawa Atoll","Pristina","Kuwait City","Bishkek","Vientiane","Riga","Beirut","Maseru","Monrovia","Tripoli", "Sydney", "Melbourne", "Adelaide", "Gold Coast", "Maffra", "Darwin", "Perth", "Tasmania","Alexandria", "Aswan", "Luxor", "Hurghada", "Vaduz","Vilnius","Luxembourg","Antananarivo","Lilongwe","Kuala Lumpur","Male","Bamako","Valletta","Majuro","Nouakchott","Port Louis","Mexico City","Chisinau","Monaco","Ulaanbaatar", "Marseille", "Toulouse", "Montpellier", "Saint Etienne", "Lyon", "Dresden", "Stuttgart", "Dortmund", "Wolfsburg", "Leipzig", "Halstatte", "Salzburg","Podgorica","Rabat", "Agadir", "Casablanca", "Maputo","Nay Pyi Taw","Windhoek","Nauru", "Eindhoven", "Kathmandu","Amsterdam","Wellington","Managua","Niamey","Abuja","Lagos","Pyongyang","Skopje","Belfast","Oslo","Muscat","Islamabad","Melekeok","Panama City","Port Moresby","Asuncion","Lima","Manila","Warsaw","Lisbon","Doha","Bucharest","Moscow","Kigali","Saint Peteresburg","Basseterre","Castries","Cannes","Kingstown","Bordeaux","Nice","Apia","San Marino","Sao Tome","Riyadh","Edinburgh","Glasgow","Aberdeen","Dakar","Belgrade","Victoria","Freetown","Singapore","Bratislava","Ljubljana","Honiara","Mogadishu","Pretoria","Bloemfontein","Cape Town","Seoul","Juba","Madrid","Colombo","Barcelona","Valencia","Mallorca","Sevilla","Canary Islands","Gran Canaria","Corfu","Kos","Khartoum","Paramaribo","Sao Paulo","Belo Horizonte","Manaus","Jeddah","Mecca","Stockholm","Bern","Damascus","Taipei","Dushanbe","Dodoma","Bangkok","Lome","Nuku'alofa","Port of Spain","Tunis","Ankara","Antalya","Istanbul","Izmir","Afyonkarahisar","Ashgabat","Funafuti","Kampala","Kiev","Abu Dhabi","London","Washington","Montevideo","Tashkent","Port Vila","California","Texas","Las Vegas","Nevada","Santa Monica","Santa Barbara","San Francisco","New Jersey","New York","Michigan","Kentucky","Vancouver","Vatican City","Caracas","Ottawa","Ontario","Alberta","Calgary","Hanoi","Cardiff","Swansea","Sana'a","Lusaka","Harare","Waterford", "Limerick","Galway","Kerry","Cork","Carlow","Sligo","Letterkenny","Donegal","Liverpool","Wicklow","Leitrim","Monaghan","Wexford","Manchester","Leeds","Newcastle","Lincolnshire"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);



/****************************** End Autocomplete*********************************/


//element selection in the DOM
let button = document.querySelector("button");
let innerContainer = document.querySelector(".innerContainer");
let detailedInfo = document.querySelector(".detailedInfo");

let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let country = document.getElementById("country");
let timeAndDate = document.querySelector(".timeAndDate");

//Selecting written forecast message
let writtenForecast = document.querySelector(".writtenForecast");
let iconForecast = document.getElementById("currentIcon");

//Selecting weekdays
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");
let day6 = document.getElementById("day6");
let day7 = document.getElementById("day7");

//Selecting icons for individual days
let iconday1 = document.getElementById("iconday1");
let iconday2 = document.getElementById("iconday2");
let iconday3 = document.getElementById("iconday3");
let iconday4 = document.getElementById("iconday4");
let iconday5 = document.getElementById("iconday5");
let iconday6 = document.getElementById("iconday6");
let iconday7 = document.getElementById("iconday7");

//min and max temperatures for individual days
let min1 = document.getElementById("min1");
let max1 = document.getElementById("max1");
let min2 = document.getElementById("min2");
let max2 = document.getElementById("max2");
let min3 = document.getElementById("min3");
let max3 = document.getElementById("max3");
let min4 = document.getElementById("min4");
let max4 = document.getElementById("max4");
let min5 = document.getElementById("min5");
let max5 = document.getElementById("max5");
let min6 = document.getElementById("min6");
let max6 = document.getElementById("max6");
let min7 = document.getElementById("min7");
let max7 = document.getElementById("max7");


//written forecast for individual days
let dayWrittenForecast1 = document.getElementById("daywrittenForecast1");
let dayWrittenForecast2 = document.getElementById("daywrittenForecast2");
let dayWrittenForecast3 = document.getElementById("daywrittenForecast3");
let dayWrittenForecast4 = document.getElementById("daywrittenForecast4");
let dayWrittenForecast5 = document.getElementById("daywrittenForecast5");
let dayWrittenForecast6 = document.getElementById("daywrittenForecast6");
let dayWrittenForecast7 = document.getElementById("daywrittenForecast7");


let citylookup = document.getElementById("citylookup");




/****************************************************************************/
https://api.openweathermap.org/data/2.5/forecast/daily?lat=52.243107099999996&lon=-7.080930899999999&cnt=7&appid=4e97ba0d7abca630150a1baa78f9b2b6
/******** Calling APIs ****************************/
navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longitude;

    console.log("My longtitude right now is: " + longtitude + " and my latitude is: " + latitude);
    console.log(position);

    let key = '4e97ba0d7abca630150a1baa78f9b2b6';
    fetch("https://api.openweathermap.org/data/2.5/forecast/daily?lat="+latitude+"&lon="+longtitude+"&cnt=7&appid="+key)
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      console.log("my current temperature is " + Math.round((data.list[0].temp.day)) + " degrees celsius");  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

      // Changing data in the HTML
      mycity = data.city.name;
      mycountry = data.city.country;
      mytemperature = data.list[0].temp.day;  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      feelsLike = data.list[0].feels_like.day;  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      mywrittenForecast = data.list[0].weather[0].description;
      mainForecast = data.list[0].weather[0].main;
      icon = data.list[0].weather[0].icon;
      let timezone = data.city.timezone;

      console.log("Current forecast: " + mywrittenForecast + " and the time zone is " + timezone);

      city.innerHTML = mycity;
      country.innerHTML = mycountry;
      temperature.innerHTML = celsiusConverter(mytemperature) + "&deg;C" ; //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      writtenForecast.innerHTML = mainForecast + " - " + mywrittenForecast + " - feels like " + celsiusConverter(feelsLike) + "&deg;C"; //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      iconForecast.src = "http://openweathermap.org/img/w/" + icon + ".png";


      if(mywrittenForecast === "light rain"){

      }

      let date = new Date();
      let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let weekdayNumber = date.getDay(); //6
      let today = weekdays[date.getDay()]; //what day of the week is today
      let thisMonth = months[date.getMonth()]; //what month are we in now
      let dayOfMonth = date.getDate();
      let thisYear = date.getFullYear();
      let thisMinute = date.getMinutes();
      if(thisMinute < 10){thisMinute = "0" + thisMinute;}
      else{thisMinute = thisMinute;}
      let thisHour = date.getHours();
      if(thisHour < 10){thisHour = "0" + thisHour;}
      else if(timezone === 10800){
        thisHour += 8;
      }
      else{thisHour = thisHour;}


      timeAndDate.innerHTML = thisHour + ":" + thisMinute + " - " + today + " - " + dayOfMonth + " " + thisMonth + " " + thisYear;


      let firstday = weekdayNumber + 1;
      let secondday = weekdayNumber + 2;
      let thirdday = weekdayNumber + 3;
      let fourthday = weekdayNumber + 4;
      let fifthday = weekdayNumber + 5;
      let sixthday = weekdayNumber + 6;
      let seventhday = weekdayNumber + 7;

    if(firstday > 6){firstday -=7;}
    if(secondday > 6){secondday -=7;}
    if(thirdday > 6){thirdday -=7;}
    if(fourthday > 6){fourthday -=7;}
    if(fifthday > 6){fifthday -=7;}
    if(sixthday > 6){sixthday -=7;}
    if(seventhday > 6){seventhday -=7;}

    console.log(weekdays[3]);
    console.log(thisHour + ":" + thisMinute + " " + today + " - " + dayOfMonth + " " + thisMonth + " " + thisYear);

    day1.innerHTML = "Tomorrow";
    day2.innerHTML = weekdays[secondday];
    day3.innerHTML = weekdays[thirdday];
    day4.innerHTML = weekdays[fourthday];
    day5.innerHTML = weekdays[fifthday];
    day6.innerHTML = weekdays[sixthday];

    let myicon1 = data.list[1].weather[0].icon;
    let myicon2 = data.list[2].weather[0].icon;
    let myicon3 = data.list[3].weather[0].icon;
    let myicon4 = data.list[4].weather[0].icon;
    let myicon5 = data.list[5].weather[0].icon;
    let myicon6 = data.list[6].weather[0].icon;

    iconday1.src= "http://openweathermap.org/img/w/" + myicon1 + ".png";
    iconday2.src= "http://openweathermap.org/img/w/" + myicon2 + ".png";
    iconday3.src= "http://openweathermap.org/img/w/" + myicon3 + ".png";
    iconday4.src= "http://openweathermap.org/img/w/" + myicon4 + ".png";
    iconday5.src= "http://openweathermap.org/img/w/" + myicon5 + ".png";
    iconday6.src= "http://openweathermap.org/img/w/" + myicon6 + ".png";

    mymin1 = data.list[1].temp.min;
    mymax1 = data.list[1].temp.max;
    mymin2 = data.list[2].temp.max;
    mymax2 = data.list[2].temp.max;
    mymin3 = data.list[3].temp.max;
    mymax3 = data.list[3].temp.max;
    mymin4 = data.list[4].temp.max;
    mymax4 = data.list[4].temp.max;
    mymin5 = data.list[5].temp.max;
    mymax5 = data.list[5].temp.max;
    mymin6 = data.list[6].temp.max;
    mymax6 = data.list[6].temp.max;

    min1.innerHTML = celsiusConverter(mymin1);
    max1.innerHTML = celsiusConverter(mymax1) + " / ";
    min2.innerHTML = celsiusConverter(mymin2);
    max2.innerHTML = celsiusConverter(mymax2) + " / ";
    min3.innerHTML = celsiusConverter(mymin3);
    max3.innerHTML = celsiusConverter(mymax3) + " / ";
    min4.innerHTML = celsiusConverter(mymin4);
    max4.innerHTML = celsiusConverter(mymax4) + " / ";
    min5.innerHTML = celsiusConverter(mymin5);
    max5.innerHTML = celsiusConverter(mymax5) + " / ";
    min6.innerHTML = celsiusConverter(mymin6);
    max6.innerHTML = celsiusConverter(mymax6) + " / ";

    dayWrittenForecast1.innerHTML = data.list[1].weather[0].description;
    dayWrittenForecast2.innerHTML = data.list[2].weather[0].description;
    dayWrittenForecast3.innerHTML = data.list[3].weather[0].description;
    dayWrittenForecast4.innerHTML = data.list[4].weather[0].description;
    dayWrittenForecast5.innerHTML = data.list[5].weather[0].description;
    dayWrittenForecast6.innerHTML = data.list[6].weather[0].description;

    })

    .catch(function(error){
      console.log(error);
    })
  });


/*******************Submit button fetches city data by name when clicked*****/
let submit = document.getElementById("submitBtn");
let inputVal = document.getElementById("myInput");
let key = "4e97ba0d7abca630150a1baa78f9b2b6";

inputVal.addEventListener("click", function(){
this.placeholder = "";
});

submit.addEventListener("click", function(){
  //fetching simple current weather API so as to extract coordinates and place them into next API call
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputVal.value+"&appid=4e97ba0d7abca630150a1baa78f9b2b6")
  .then(function(response){return response.json()})
  .then(function(data){
    console.log(data);
    let newLongtitude = data.coord.lon;
    let newLatitude = data.coord.lat;
    console.log(newLongtitude);

    //fetching detailed json that has daily and hourly updates
    fetch("https://api.openweathermap.org/data/2.5/forecast/daily?lat="+newLatitude+"&lon="+newLongtitude+"&cnt=7&appid="+key)
    .then(function (response){ return response.json()})
    .then(function(database){
      console.log(database);

      mycity = database.city.name;
      mycountry = database.city.country;
      mytemperature = database.list[0].temp.day;  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      feelsLike = database.list[0].feels_like.day;  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      mywrittenForecast = database.list[0].weather[0].description; //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      icon = database.list[0].weather[0].icon;
      mainForecast = database.list[0].weather[0].main;
      let timeZone = database.city.timezone;

      console.log("The time zone is: " + timeZone);
      if(mainForecast == "Clouds"){
        document.getElementById("vidbg").src = "imagesandvideos/rain-night.mp4";
      }


      city.innerHTML = mycity;
      country.innerHTML = mycountry;
      temperature.innerHTML = celsiusConverter(mytemperature) + "&deg;C" ; //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      writtenForecast.innerHTML = mainForecast + " - " + mywrittenForecast + " - feels like " + celsiusConverter(feelsLike) + "&deg;C"; //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      iconForecast.src = "http://openweathermap.org/img/w/" + icon + ".png";


      myicon1 = database.list[1].weather[0].icon;
      myicon2 = database.list[2].weather[0].icon;
      myicon3 = database.list[3].weather[0].icon;
      myicon4 = database.list[4].weather[0].icon;
      myicon5 = database.list[5].weather[0].icon;
      myicon6 = database.list[6].weather[0].icon;

      iconday1.src= "http://openweathermap.org/img/w/" + myicon1 + ".png";
      iconday2.src= "http://openweathermap.org/img/w/" + myicon2 + ".png";
      iconday3.src= "http://openweathermap.org/img/w/" + myicon3 + ".png";
      iconday4.src= "http://openweathermap.org/img/w/" + myicon4 + ".png";
      iconday5.src= "http://openweathermap.org/img/w/" + myicon5 + ".png";
      iconday6.src= "http://openweathermap.org/img/w/" + myicon6 + ".png";

      min1.innerHTML = celsiusConverter(database.list[1].temp.min);
      max1.innerHTML = celsiusConverter(database.list[1].temp.max) + " / ";
      min2.innerHTML = celsiusConverter(database.list[2].temp.min);
      max2.innerHTML = celsiusConverter(database.list[2].temp.max) + " / ";
      min3.innerHTML = celsiusConverter(database.list[3].temp.min);
      max3.innerHTML = celsiusConverter(database.list[3].temp.max) + " / ";
      min4.innerHTML = celsiusConverter(database.list[4].temp.min);
      max4.innerHTML = celsiusConverter(database.list[4].temp.max) + " / ";
      min5.innerHTML = celsiusConverter(database.list[5].temp.min);
      max5.innerHTML = celsiusConverter(database.list[5].temp.max) + " / ";
      min6.innerHTML = celsiusConverter(database.list[6].temp.min);
      max6.innerHTML = celsiusConverter(database.list[6].temp.max) + " / ";

      dayWrittenForecast1.innerHTML = database.list[1].weather[0].description;
      dayWrittenForecast2.innerHTML = database.list[2].weather[0].description;
      dayWrittenForecast3.innerHTML = database.list[3].weather[0].description;
      dayWrittenForecast4.innerHTML = database.list[4].weather[0].description;
      dayWrittenForecast5.innerHTML = database.list[5].weather[0].description;
      dayWrittenForecast6.innerHTML = database.list[6].weather[0].description;

      timeAndDate.innerHTML = citythisHour + ":" + citythisMinute + " " + citytoday + " - " + citydayOfMonth + " " + citythisMonth + " " + citythisYear;


      let flashybtn = document.getElementById("fahcheck");

      flashybtn.addEventListener("change", function(){

        if(flashybtn.checked === true){

          writtenForecast.innerHTML = mainForecast + " - " + mywrittenForecast + " - feels like " + fahrenheitConverter(feelsLike) + "&deg;C";
          temperature.innerHTML = fahrenheitConverter(mytemperature) + "&deg;F";
          min1.innerHTML = fahrenheitConverter(mymin1);
          max1.innerHTML = fahrenheitConverter(mymax1) + " / ";
          min2.innerHTML = fahrenheitConverter(mymin2);
          max2.innerHTML = fahrenheitConverter(mymax2) + " / ";
          min3.innerHTML = fahrenheitConverter(mymin3);
          max3.innerHTML = fahrenheitConverter(mymax3) + " / ";
          min4.innerHTML = fahrenheitConverter(mymin4);
          max4.innerHTML = fahrenheitConverter(mymax4) + " / ";
          min5.innerHTML = fahrenheitConverter(mymin5);
          max5.innerHTML = fahrenheitConverter(mymax5) + " / ";
          min6.innerHTML = fahrenheitConverter(mymin6);
          max6.innerHTML = fahrenheitConverter(mymax6) + " / ";

        }

        if(flashybtn.checked === false){

          temperature.innerHTML = celsiusConverter(mytemperature) + "&deg;C";
          min1.innerHTML = celsiusConverter(mymin1);
          max1.innerHTML = celsiusConverter(mymax1) + " / ";
          min2.innerHTML = celsiusConverter(mymin2);
          max2.innerHTML = celsiusConverter(mymax2) + " / ";
          min3.innerHTML = celsiusConverter(mymin3);
          max3.innerHTML = celsiusConverter(mymax3) + " / ";
          min4.innerHTML = celsiusConverter(mymin4);
          max4.innerHTML = celsiusConverter(mymax4) + " / ";
          min5.innerHTML = celsiusConverter(mymin5);
          max5.innerHTML = celsiusConverter(mymax5) + " / ";
          min6.innerHTML = celsiusConverter(mymin6);
          max6.innerHTML = celsiusConverter(mymax6) + " / ";

        }


      });






    })

    })

  .catch(function(error){
    console.log(error);

  })
});

//******************************Fahrenheit checkbox ********************//

let flashybtn = document.getElementById("fahcheck");

flashybtn.addEventListener("change", function(){

  if(flashybtn.checked === true){

    writtenForecast.innerHTML = mainForecast + " - " + mywrittenForecast + " - feels like " + fahrenheitConverter(feelsLike) + "&deg;F";
    temperature.innerHTML = fahrenheitConverter(mytemperature) + "&deg;F";
    min1.innerHTML = fahrenheitConverter(mymin1);
    max1.innerHTML = fahrenheitConverter(mymax1) + " / ";
    min2.innerHTML = fahrenheitConverter(mymin2);
    max2.innerHTML = fahrenheitConverter(mymax2) + " / ";
    min3.innerHTML = fahrenheitConverter(mymin3);
    max3.innerHTML = fahrenheitConverter(mymax3) + " / ";
    min4.innerHTML = fahrenheitConverter(mymin4);
    max4.innerHTML = fahrenheitConverter(mymax4) + " / ";
    min5.innerHTML = fahrenheitConverter(mymin5);
    max5.innerHTML = fahrenheitConverter(mymax5) + " / ";
    min6.innerHTML = fahrenheitConverter(mymin6);
    max6.innerHTML = fahrenheitConverter(mymax6) + " / ";

  }

  if(flashybtn.checked === false){

    writtenForecast.innerHTML = mainForecast + " - " + mywrittenForecast + " - feels like " + celsiusConverter(feelsLike) + "&deg;C";
    temperature.innerHTML = celsiusConverter(mytemperature) + "&deg;C";
    min1.innerHTML = celsiusConverter(mymin1);
    max1.innerHTML = celsiusConverter(mymax1) + " / ";
    min2.innerHTML = celsiusConverter(mymin2);
    max2.innerHTML = celsiusConverter(mymax2) + " / ";
    min3.innerHTML = celsiusConverter(mymin3);
    max3.innerHTML = celsiusConverter(mymax3) + " / ";
    min4.innerHTML = celsiusConverter(mymin4);
    max4.innerHTML = celsiusConverter(mymax4) + " / ";
    min5.innerHTML = celsiusConverter(mymin5);
    max5.innerHTML = celsiusConverter(mymax5) + " / ";
    min6.innerHTML = celsiusConverter(mymin6);
    max6.innerHTML = celsiusConverter(mymax6) + " / ";

  }


});

let dayinfo = document.querySelectorAll(".day");

for(let i = 0; i < dayinfo.length; i++){
    dayinfo[i].addEventListener("click", function(){
    innerContainer.classList.remove("swing-top-fwd");

    // innerContainer.classList.add("fadeSlowly");
    detailedInfo.classList.add("slide-fwd-center");
    // detailedInfo.classList.add("appearSlowly");

});
}

// const options = {
//   appId: 'plQ8XT7L8MCL',
//   apiKey: '4660028f73d367f9c1e6a1f7ac36e2f1',
//   container: document.querySelector("#input-styling-address input")
//   // ...
// };
//
// let placesAutocomplete = places({
//   appId: 'plQ8XT7L8MCL',
//   apiKey: '4660028f73d367f9c1e6a1f7ac36e2f1',
//   container: document.querySelector("#input-styling-address input")
//   });
// places(options);
