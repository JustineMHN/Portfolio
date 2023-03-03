
let section = QSAd('section')
h4_porrtfolio = section[6].querySelectorAll('h4')
for (let index = 0; index < h4_porrtfolio.length; index++) {
    h4_porrtfolio[index].style.color  = "#d82c2e"
    
}

var div_travelAgency = O('portfolio_travel')
var travelAgency_img = O('travelAgency')

//mouseOver(travelAgency_img, div_travelAgency, 'span', 'Travel Agency')

portfolio_section = section[5]
let portfolio_item = C('portfolio_item')

//It allows to display the content name of each portfolio img when the mouse over on the image.
for (let index = 0; index <portfolio_item.length; index++) {
     var mouseOver = ()=>{
        var img =  portfolio_item[index].childNodes[1].querySelector('img')
        img.onmouseover = ()=>{
            var span = document.createElement('span')
            span.textContent = img.id
            S(span).color = '#1c1c1c'
            S(span).backgroundColor = '#fff'
            S(span).position = 'absolute'
            S(span).top = '50%'
            S(span).marginLeft = '-60%'
            S(span).fontSize = '1.2rem'
            S(span).fontWeight = '600'
            portfolio_item[index].appendChild(span)
        }
        img.onmouseout = () =>{
            portfolio_item[index].removeChild( portfolio_item[index].querySelector('span'))
        } 
    }
    mouseOver()
}

var themes = document.querySelectorAll('.theme-color div')

for (let index = 0; index < themes.length; index++) {
    const theme = themes[index];
    theme.style.backgroundColor = theme.className

    theme.onclick = ()=>{
        document.styleSheets[15].cssRules[1].style.setProperty('--main-color', theme.className)
        if(localStorage.getItem('themeColor')){
            localStorage.setItem('themeColor', theme.className); 
            console.log(localStorage.getItem('themeColor'))
        }else{
            localStorage.setItem('themeColor', theme.className); 
        }
    };   
} 

if(localStorage.getItem('themeColor')){
    document.styleSheets[15].cssRules[1].style.setProperty('--main-color', localStorage.getItem('themeColor'));
}
window.navigator.geolocation.getCurrentPosition(
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
    },
    {
        enableHighAccuracy : true,
        timeout : 2000,
        maximumAge : 6000
    }
)

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

/* MAP */
/* const latitude = 6.3602950;
const longitude = 2.5112382; */
// Initialize and add the map
function initMap() {
    // The location of agblangandan
    const agblangandan = { lat:  6.3602950, lng: 2.5112382 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: agblangandan,
    });
    // The marker, positioned at agblangandan
    const marker = new google.maps.Marker({
      position: agblangandan,
      map: map,
    });
  }
  window.initMap = initMap;