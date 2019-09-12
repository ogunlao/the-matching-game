let sec = 0;
let pad = (val) => { return val > 9 ? val : "0" + val; }

const timer = setInterval(() => {
  document.getElementById("seconds").innerHTML = pad(++sec % 60);
  document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
  document.getElementById("hours").innerHTML = pad(parseInt(sec / 3600, 10));
}, 1000);


export default timer;