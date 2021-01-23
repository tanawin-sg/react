import React,{ Component } from "react";

//Function component
/*
const ProductItem = (props) => {
  const {ProductName, UnitPrice} = props;
  
  return (
    <div>
      <p>{ProductName}</p>
      <p>{UnitPrice}</p>
    </div>
  )
} */


//เปลี่ยนจาก Functional Component กลายเป็น class component
class ProductItem extends Component {

  constructor(props){
    super(props);
    console.log('constructor' + props.ProductName); 
  }

  render(){
    const {ProductName, UnitPrice} = this.props;
    return (
      <div>
        <p>{ProductName}</p> 
        <p>{UnitPrice}</p>
      </div>
    )
  }
}

export default ProductItem;