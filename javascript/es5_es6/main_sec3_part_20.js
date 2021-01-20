// Funtion & Arrow Function
// 1 Function
var greet1 = function (firstname, lastname) {
  return firstname + ' ' + lastname
}
console.log(greet1("Tanawin", "Sangjan"));

// 2 Arrow Function
var greet2 = (firstname, lastname) => {
  return firstname + ' ' + lastname
}
console.log(greet2("Tanawin", "Sangjan"));

var greet3 = (firstname, lastname) => firstname + ' ' + lastname
console.log(greet3("Tanawin", "Sangjan"));

//========================================================
var person1 = {
  name: "Luna2",

  handleMessage: function(message, handler){
    handler(message);
  },
  greet: function() {
      var _this = this; // ตัวแก้ this ของ obj ใหญ่
      this.handleMessage("Hi", function (message) {
          console.log(message + " " + _this.name); 
          //console.log(message + " " + this.name);  
          // ** this มันจะเรียกฟังก์ชั่นตัวเอง แก้ด้วยประกาศตัวแปลมาเก็บ this ไว้นอกฟังก์ชั่น
      });
  },

  
  handleMessage2: (message, handler) => {
   handler(message);
  },
  greet2: function () {
      this.handleMessage2("Hi", (message) => {
          console.log(message + " => " + this.name); 
      });
  }
};

person1.greet();
person1.greet2();