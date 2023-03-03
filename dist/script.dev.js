"use strict";

var section = QSAd('section');
h4_porrtfolio = section[6].querySelectorAll('h4');

for (var index = 0; index < h4_porrtfolio.length; index++) {
  h4_porrtfolio[index].style.color = "#d82c2e";
}
/* var mouseOver = function(moveactionnode, pnode, cnode, textcontent){
    this.moveactionnode = moveactionnode
    this.pnode = pnode
    this.cnode = cnode
    this.textcontent = textcontent
    this.moveactionnode.onmouseover = ()=>{
        var cnode = document.createElement(this.cnode)
        cnode.textContent = this.textcontent
        S(cnode).color = '#1c1c1c'
        S(cnode).backgroundColor = '#fff'
        S(cnode).position = 'absolute'
        S(cnode).top = '60px'
        S(cnode).marginLeft = '-168px'
        S(cnode).fontSize = '1.2rem'
        S(cnode).fontWeight = '600'
        this.pnode.appendChild(cnode)
    }
    this.moveactionnode.onmouseout = () =>{
        this.pnode.removeChild(this.pnode.Qs(this.cnode))
    }
}

 */


var div_travelAgency = O('portfolio_travel');
var travelAgency_img = O('travelAgency'); //mouseOver(travelAgency_img, div_travelAgency, 'span', 'Travel Agency')

portfolio_section = section[5];
var portfolio_item = C('portfolio_item'); //It allows to display the content name of each portfolio img when the mouse over on the image.

var _loop = function _loop(_index) {
  mouseOver = function mouseOver() {
    var img = portfolio_item[_index].childNodes[1].querySelector('img');

    img.onmouseover = function () {
      var span = document.createElement('span');
      span.textContent = img.id;
      S(span).color = '#1c1c1c';
      S(span).backgroundColor = '#fff';
      S(span).position = 'absolute';
      S(span).top = '50%';
      S(span).marginLeft = '-60%';
      S(span).fontSize = '1.2rem';
      S(span).fontWeight = '600';

      portfolio_item[_index].appendChild(span);
    };

    img.onmouseout = function () {
      portfolio_item[_index].removeChild(portfolio_item[_index].querySelector('span'));
    };
  };

  mouseOver();
};

for (var _index = 0; _index < portfolio_item.length; _index++) {
  var mouseOver;

  _loop(_index);
}