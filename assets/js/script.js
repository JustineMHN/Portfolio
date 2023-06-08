let section = document.querySelectorAll("section");
h4_portfolio = section[6].querySelectorAll("h4");
for (let index = 0; index < h4_portfolio.length; index++) {
  h4_portfolio[index].style.color = "#d82c2e";
}

var div_travelAgency = document.getElementById("portfolio_travel");
var travelAgency_img = document.getElementById("travelAgency");


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


