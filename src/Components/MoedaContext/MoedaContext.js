import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoedaContext = createContext();

export const MoedaProvider = ({ children }) => {
  const [moedas, setMoedas] = useState([]);

  useEffect(() => {
    const fetchMoedas = async () => {
      try {
        const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
        const moedas = Object.keys(response.data.rates);
        setMoedas(moedas);
      } catch (error) {
        console.error("Error fetching moedas:", error);
      }
    };

    fetchMoedas();
  }, []);

  return (
    <MoedaContext.Provider value={moedas}>
      {children}
    </MoedaContext.Provider>
  );
};

export default MoedaContext;