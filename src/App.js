import "./App.css";
import MainContext from "./Provider/MainContex";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="min-h-screen">
      <MainContext>
        <Nav />
      </MainContext>
    </main>
  );
}

export default App;
