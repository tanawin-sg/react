//class
class Rectangle{
  constructor(height,width){
    this.height = height;
    this.width = width;
  }

  get color(){  //method get
    return this._color;
  }

  set color(c){
    this._color = c;
  }

  get area(){
    return this.height * this.width;
  }

  static areas(obj){  //static method ares
    return obj.height * obj.width;
  }

}

//การสืบทอด class (Inheritance) จะได้ method มาด้วย
class Square extends Rectangle{
  constructor(width){
    super(width, width); //จะไปเรียก constructor ตัวแม่ ข้างบน
  }
}

const r = new Rectangle(100,200);
console.log(r.height,r.width);
r.color = "RED"; // ถ้ามี = จะไปเรียก SET
console.log(r.color); // ถ้าไม่มี = จะไปเรียก GET
console.log(r.area);
console.log('Static Method '+Rectangle.areas(r));

const s = new Square(100);
s.color = "BLUE";
console.log(s.color);
console.log(s.area);
