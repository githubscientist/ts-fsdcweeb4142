import Header from "./components/Header";

function App() {
  let name: string = 'Krish';
  let age: number = 25;

  return (
    <>
      <Header name={name} age={age} />
    </>
  )
}

export default App;