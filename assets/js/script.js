let section = document.querySelectorAll("section");
h4_portfolio = section[6].querySelectorAll("h4");
for (let index = 0; index < h4_portfolio.length; index++) {
  h4_portfolio[index].style.color = "#d82c2e";
}

var div_travelAgency = document.getElementById("portfolio_travel");
var travelAgency_img = document.getElementById("travelAgency");

//mouseOver(travelAgency_img, div_travelAgency, 'span', 'Travel Agency')

portfolio_section = section[5];
let portfolio_item = document.getElementsByClassName("portfolio_item");

//It allows to display the content name of each portfolio img when the mouse over on the image.
for (let index = 0; index < portfolio_item.length; index++) {
  var mouseOver = () => {
    var img = portfolio_item[index].childNodes[1].querySelector("img");
    img.onmouseover = () => {
      var span = document.createElement("span");
      span.textContent = img.id;
      S(span).color = "#1c1c1c";
      S(span).backgroundColor = "#fff";
      S(span).position = "absolute";
      S(span).top = "50%";
      S(span).marginLeft = "-60%";
      S(span).fontSize = "1.2rem";
      S(span).fontWeight = "600";
      portfolio_item[index].appendChild(span);
    };
    img.onmouseout = () => {
      portfolio_item[index].removeChild(
        portfolio_item[index].querySelector("span")
      );
    };
  };
  mouseOver();
}

var themes = document.querySelectorAll(".theme-color div");

for (let index = 0; index < themes.length; index++) {
  const theme = themes[index];
  theme.style.backgroundColor = theme.className;

  theme.onclick = () => {
    for (let i = 0; i < document.styleSheets.length; i++) {
      const ss = document.styleSheets[i];

      if (ss.href == location.origin + "/assets/css/style.css") {
        document.styleSheets[i].cssRules[1].style.setProperty(
          "--main-color",
          theme.className
        );
        if (localStorage.getItem("themeColor")) {
          localStorage.setItem("themeColor", theme.className);
          document.styleSheets[i].cssRules[1].style.setProperty(
            "--main-color",
            localStorage.getItem("themeColor")
          );
          console.log(localStorage.getItem("themeColor"));
        } else {
          localStorage.setItem("themeColor", theme.className);
          document.styleSheets[i].cssRules[1].style.setProperty(
            "--main-color",
            localStorage.getItem("themeColor")
          );
        }
      }
    }
  };
}

window.navigator.geolocation.getCurrentPosition(
  (position) => {
    var coordonnees = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
      accuracy: position.coords.accuracy,
    };
    console.log(coordonnees);
  },
  (error) => {
    console.log(error);
  },
  {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 6000,
  }
);

/* MAP */
// Initialize and add the map
function initMap() {
  // The location of polone
  const varsovie = { lat: 52.219258300838405, lng: 21.011828490135947 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: varsovie,
  });
  // The marker, positioned at varsovie
  const marker = new google.maps.Marker({
    position: varsovie,
    map: map,
  });
}

window.initMap = initMap;

/* var watch = window.navigator.geolocation.watchPosition(
    (position)=>{
        var coordonnees = {
            longitude : position.coords.longitude,
            latitude : position.coords.latitude,
            accuracy : position.coords.accuracy
        } 
        console.log(coordonnees)
    },
    (error)=>{
        console.log(error)
    }
) */
//window.navigator.geolocation.clearWatch(watch)
