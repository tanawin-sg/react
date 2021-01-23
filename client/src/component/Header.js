import React,{ Component } from "react";

//Functional compnent
/*
const Header = () => {
    return <h1>HEADER2</h1> //jsx
} */

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { date : new Date()};
        //setInterval( () => this.tick() ,1000); //ทุกๆ 1 วิเรียก tick เพื่อSetค่า
        console.log('constructor');
    }

    componentDidMount(){
        this.TimerID = setInterval( () => this.tick() ,1000); // setInterval มีการ return TimerID มาให้เรา เอาไว้ให้หยุด
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        //console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        clearInterval(this.TimerID);
        //console.log('componentWillUnmount');
    }

    // method สำหรับเปลี่ยนข้อมูลใน state
    tick(){
        //this.state = { date : new Date()}; // ทำแบบนี้เปลี่ยนข้อมูลใน state ไม่ได้
        this.setState( {date : new Date()} ); // แสดงเวลาล่าสุด แต่ยังไม่เพิ่มทีละวิ
        // ** เรียก setState จะเรียก Render อัตโนมัติ
    }

   render (){
       return (
           <div>{this.state.date.toLocaleTimeString()}</div>
       )
   }
}

export default Header;