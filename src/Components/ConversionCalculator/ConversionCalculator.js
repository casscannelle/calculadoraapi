import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ConversionContext = createContext();

export const useConversion = () => useContext(ConversionContext);

const ConversionProvider = ({ children }) => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://data.fixer.io/api/latest?access_key=9f5d29bfd1190db188acf9bb7257adc1');
        setRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching conversion rates:', error);
      }
    };

    fetchRates();
  }, []);

  const convertCurrency = (amount, from, to) => {
    if (!amount || !from || !to) return;

    return (amount * rates[to]) / rates[from];
  };

  return (
    <ConversionContext.Provider value={{ rates, convertCurrency }}>
      {children}
    </ConversionContext.Provider>
  );
};

export default ConversionProvider;