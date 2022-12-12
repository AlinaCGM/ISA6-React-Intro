import "./App.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Hero />
      <SignUp />
      <Services />
    </div>
  );
}

export default App;
