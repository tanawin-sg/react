// Funtion & Arrow Function
// 1 Function
var greet1 = function(firstname,lastname){
  return firstname + ' ' + lastname
}
console.log(greet1("Tanawin","Sangjan"));

// 2 Arrow Function
var greet2 = (firstname,lastname) => {
  return firstname + ' ' + lastname
}
console.log(greet2("Tanawin","Sangjan"));

var greet3 = (firstname,lastname) => firstname + ' ' + lastname
console.log(greet3("Tanawin","Sangjan"));

//========================================================

