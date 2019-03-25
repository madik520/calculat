const btnNumber = document.querySelectorAll('.number');
const btnOperation = document.querySelectorAll('.operation');
const btnClear = document.querySelector('.clear');
const btnResult = document.querySelector('.result');
const btnDot = document.querySelector('.dot');

let text = document.getElementById("text");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryOperation = "";


for(let i = 0; i < btnNumber.length; i++){
  let btns = btnNumber[i];
  btns.addEventListener("click", (e) => {
    addNumber(e.target.textContent);
  });
}

for(let j = 0; j < btnOperation.length; j++){
  let btns = btnOperation[j];
  btns.addEventListener("click", (e) => {
    operation(e.target.textContent);
  });
}

btnClear.addEventListener('click', clear);
btnDot.addEventListener('click', dot);


function addNumber(number){
  if(MemoryNewNumber){
    text.value = number;
    MemoryNewNumber = false;
  }else{
    if(text.value === ''){
      text.value = number;
    }else{
      text.value += number;
    }
  }
}

function operation(op){
  let LocalMemory = text.value;
  if(MemoryNewNumber && MemoryOperation !== '='){
    text.value = MemoryCurrentNumber;
  }else {
    MemoryNewNumber = true;
    if(MemoryOperation === "+"){
      MemoryCurrentNumber += parseFloat(LocalMemory);
    }else if(MemoryOperation === "-"){
      MemoryCurrentNumber -= parseFloat(LocalMemory);
    }else if(MemoryOperation === "*"){
      MemoryCurrentNumber *= parseFloat(LocalMemory);
    }else if(MemoryOperation === "/"){
      MemoryCurrentNumber /= parseFloat(LocalMemory);
    }else{
      MemoryCurrentNumber = parseFloat(LocalMemory);
    }
    text.value = MemoryCurrentNumber;
    MemoryOperation = op;
  };
}

function dot(argument){
  let LocalMemoryDot = text.value;

  if(MemoryNewNumber){
    LocalMemoryDot = '0.';
    MemoryNewNumber = false;
  }else {
    if(LocalMemoryDot.indexOf('.') === -1){
      LocalMemoryDot += '.';
    };
  };
  text.value = LocalMemoryDot;
}

function clear(id){
    text.value = "";
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryOperation = "";
}