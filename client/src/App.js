import React ,{ Component } from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductItem from "./component/ProductItem";

//class component
class App extends Component {
  render(){
    return (
    <div>
        <Header /> 
        <ProductItem ProductName="IPhone X" UnitPrice="40500" />
        <ProductItem ProductName="IPAD Pro 10.5" UnitPrice="30500" />
        <ProductItem ProductName="IPAD Mini 4" UnitPrice="19500" />
        <Footer company="Tanawin" email="Tanawin@gmail.com" />
    </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <h1>Hello World2</h1>
    </div>
  );
}
*/

export default App;
