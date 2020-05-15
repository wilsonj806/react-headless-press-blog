import React from "react";
import PrimNav from "./components/PrimNav";
import DumbCard from "./components/DumbCard";
import DumbCardHl from "./components/DumbCard-HL";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <div className="App">
      <PrimNav />
      <section class="intro">
        <DumbCardHl />
        <DumbCardHl />
        <AboutCard />
      </section>
      <section>
        <DumbCard />
        <DumbCard />
        <DumbCard />
      </section>
    </div>
  );
}

export default App;
