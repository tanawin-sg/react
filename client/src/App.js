import React ,{ Component } from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";

//class component
class App extends Component {
  render(){
    return (
    <div>
        <Header />
        <Footer />
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
