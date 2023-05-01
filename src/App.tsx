import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import List from "./components/List";

function App() {
  return (
    <div className="w-screen h-screen flex">
      <UserForm />
      <List />
    </div>
  );
}

export default App;
