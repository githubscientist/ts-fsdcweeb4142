import { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  render() {
    let name: string = 'krish';
    let age: number = 25;

    return (
      <>
        <Header name={ name } age={ age } />
      </>
    )
  }
}

export default App;