
  

const timer = (resetTimer=false) => {
  let sec = 0;
  let pad = (val) => { return val > 9 ? val : "0" + val; }
  let timerId = setInterval(() => {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
  }, 1000);
  if (resetTimer){
    clearInterval(timerId);
  }
}


export default timer;