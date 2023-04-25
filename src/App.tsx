import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="w-screen h-screen flex">
      <Form />
      <List />
    </div>
  );
}

export default App;
