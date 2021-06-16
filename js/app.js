'use strict'
let salmon = document.getElementById ('salmon');
let hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min) + min);
}


function City (name, mincust,maxcust,avgPercookies) {
    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgPercookies = avgPercookies;
    this.cookiesPerHour=[];
    this.alltotal = 0;
  }
  
City.prototype.generate = function (){
    for (let i=0;i<hour.length;i++){
    let values = getRandomInt(this.mincust,this.maxcust);
    let amount = values * this.avgPercookies
    amount = Math.floor(amount)
    this.alltotal += amount
    this.cookiesPerHour.push(amount)
}

}

City.prototype.render = function () {
let title = document.createElement('h1')
title.textContent = this.name
salmon.appendChild(title)

let list = document.createElement('ul')
salmon.appendChild(list)

for (let i=0;i<hour.length;i++){
    let li = document.createElement('li')
    li.textContent = hour[i] + ':' + this.cookiesPerHour[i] + ' cookies' ;
    list.appendChild(li)

}
let alltotal = document.createElement('li')
alltotal.textContent = 'total : ' + this.alltotal + ' cookies'
list.appendChild(alltotal)

}

 
    

let seattle = new City ('seattle',3 ,32 , 6.3)
//   console.log(seattle.generate);
//   console.log(seattle);
//   document.write(seattle);
seattle.generate();   
seattle.render();
  