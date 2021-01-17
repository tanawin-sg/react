// rest parameters
function howManyArgs(...args){
  console.log(args);
}

howManyArgs(1);
howManyArgs(1,2);
howManyArgs(1,2,3);

function multiply(multiple,...array){       // parameter ธรรมดา กับ array
  for(var i = 0; i < array.length; i++ ){
    array[i] *= multiple;
  }
  console.log(array);
}

multiply(2,100,200);
