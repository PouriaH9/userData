import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex">
      {/* form */}
      <div className="bg-violet-800 h-full w-1/2">
        <h1 className="text-center text-3xl my-4 text-white">Form</h1>
        <div className="mx-auto w-4/5 h-5/6 border-t-2 border-white"></div>
      </div>

      {/* list */}
      <div className="bg-fuchsia-800 h-full w-1/2">
        <h1 className="text-center text-3xl my-4 text-white">List</h1>
        <div className="mx-auto w-4/5 h-5/6 border-t-2 border-white"></div>
      </div>
    </div>
  );
}

export default App;
