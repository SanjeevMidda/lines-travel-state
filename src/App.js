import "./index.css";
import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      <header>
        <h3>PIN</h3>
      </header>
      <div className="container">
        <Line color="blue" zIndex={5} />
        <Line color="pink" zIndex={4} />
        <Line color="grey" zIndex={3} />
        <Line color="green" zIndex={2} />
        <Line color="beige" zIndex={1} />
      </div>
    </div>
  );
}

export default App;
