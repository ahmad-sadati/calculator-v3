const display = document.querySelector(".display");
const operators = ["-", "+", "*", "/", "="];
const numPad = document.querySelector(".numPad");
const operatorsArea = document.querySelector(".operators");
let myNums = "";
for (let index = 0; index <= 9; index++) {
  myNums += 
        `<div class="col">
              <button class="btn btn-primary w-100" onclick="getNum(${index})">${index}</button>
        </div>`
        ;
}
let myOperators = "";
operators.forEach((val) => {
  myOperators += 
            `<div class="col">
              <button class="btn btn-primary w-100" onclick="operate('${val}')">${val}</button>
            </div>`
            ;
});
numPad.innerHTML = myNums;
operatorsArea.innerHTML = myOperators;
