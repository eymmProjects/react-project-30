import "./App.css";
import { QuizCard } from "./components/QuizCard";
import StaticApp from "./travelComponent/StaticApp";
import Accordion from "./components/Accordion";
import { TipCalculator } from "./components/TipCalculator";
import RandomColors from "./RandomColor/RandomColors";
function App() {
  return (
    <div>
      {/* <StaticApp /> */}
      {/* <Accordion /> */}
      {/* <TipCalculator /> */}
      <RandomColors />
    </div>
  );
}

export default App;
