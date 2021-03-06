
// Need create random icons from the 16 display boxes

function shuffle(array) {
  /*
  Code reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  */
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let gameIcons =
  ["far fa-paper-plane",
    "fas fa-anchor",
    "fab fa-500px",
    "fab fa-accusoft",
    "fas fa-air-freshener",
    "fab fa-angellist",
    "fab fa-android",
    "fab fa-apple"
  ];
gameIcons = gameIcons.concat(gameIcons);

let randomClassGenerator = () => {
  gameIcons = shuffle(gameIcons);
  let boxes = [];
  for (let i = 1; i <= 16; i++) {
    boxes.push(
      {
        "id": i,
        "class": gameIcons[i - 1],
        "open": false
      })
  }
  return boxes;
}

const boxes = () => randomClassGenerator();

export default boxes;