import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="flex-column ">
        <div className="card mt-2 p-2 " style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">Roman Conversor</h5>
            <Form />
            <p className="mt-4">
              Note: characters in ( ) are multiplied by 1000 and values ∈ [1,
              3.999.999]
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="my-3">
            <span>Developed by: </span>
            <a href="https://github.com/EllenSouza">Ellen Almeida</a>
            <span> and </span>
            <a href="https://github.com/keviinsna">Kevin Sena</a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
