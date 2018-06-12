Date.dateDiff = function(datepart, fromdate, todate) {
  datepart = datepart.toLowerCase();
  var diff = todate - fromdate;
  var divideBy = {y:31556926000,
                  w:604800000,
                   d:86400000,
                   h:3600000,
                   m:60000,
                   s:1000 };

  return Math.floor( diff/divideBy[datepart]);
}

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}
//Set the two dates
var start  = new Date(2018, 4, 2, 19, 22, 35);
var d1 = document.querySelector("#el_d1")
var h1 = document.querySelector("#el_h1")
var m1 = document.querySelector("#el_m1")
var s1 = document.querySelector("#el_s1")

setInterval(update, 1000);

function update() {
  var now = new Date();
  var seconds = Date.dateDiff("s", start, now)
  var sec = Date.dateDiff("s", start, now) % 60;
  var min = Date.dateDiff("m", start, now) % 60;
  var h = Date.dateDiff("h", start, now) % 24;
  var d = Date.dateDiff("d", start, now);

    s1.innerText = Math.floor(sec).pad();
    m1.innerText = Math.floor(min).pad();
    h1.innerText = Math.floor(h).pad();
    d1.innerText = Math.floor(d).pad();

}
update();
