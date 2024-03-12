import React from 'react';
import ConversionProvider, { useConversion } from './Components/ConversionCalculator/ConversionCalculator';

const App = () => {
  const { rates, convertCurrency } = useConversion();

  return (
    <ConversionProvider>
      <div>
        <h1>Currency Converter</h1>
        <form>
          <input type="number" placeholder="Amount" />
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* Add more currencies here */}
          </select>
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* Add more currencies here */}
          </select>
          <button type="submit">Convert</button>
        </form>
        {/* Display the result here */}
      </div>
    </ConversionProvider>
  );
};

export default App;
