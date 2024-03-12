import React from "react";
import MoedaProvider from "./Components/MoedaProvider/MoedaProvider";
import Calculadora from "./Components/Calculadora/Calculadora";

function App() {
  return (
    <MoedaProvider>
      <Calculadora />
    </MoedaProvider>
  );
}

export default App;