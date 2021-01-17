//Multi-line String
const str = 'In ES6 '
'Multi-line is okey';
const str2 = `Test 
Multi Line`;

console.log(str);
console.log(str2);

//Expresstion interpolation
const firstname = 'Robot';
const lastname = "TrippleX";
const date = new Date();
const great = 'Hello ' + firstname + ' ' + lastname + ', how are you ' + date; //old
const great2 = `Hello ${firstname + ' ' + lastname}, how are you ${date}`;

console.log(great);
console.log(great2);

