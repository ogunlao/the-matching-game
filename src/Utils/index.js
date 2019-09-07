const frontViewClasses = ["far fa-paper-plane", "fas fa-anchor", ""];

let randomClassGenerator = () =>
  frontViewClasses[Math.floor(Math.random() * frontViewClasses.length)];

let boxes = [];
for (let i = 1; i <= 16; i++) {
  boxes.push({ "id": i, "class": randomClassGenerator() })
}

export default boxes;