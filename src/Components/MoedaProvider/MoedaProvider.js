import React, { useEffect, useState } from "react";
import axios from "axios";
import Calculadora from "../Calculadora/Calculadora";
import MoedaContext from "../MoedaContext/MoedaContext";

const MoedaProvider = ({ children }) => {
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    try {
      const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
      setMoedas(Object.keys(response.data.rates));
    } catch (error) {
      console.error("Erro ao obter dados de conversão:", error);
    }
  }

  return (
    <MoedaContext.Provider value={moedas}>
      <Calculadora />
    </MoedaContext.Provider>
  );
};

export default MoedaProvider;