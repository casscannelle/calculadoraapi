import React, { useContext, useState } from "react";
import { Paper, TextField, FormControl, Select, Button } from "@mui/material";
import axios from "axios";
import { MoedaContext } from "../MoedaContext/MoedaContext";
import "./Calculadora.css";

const Calculadora = () => {
  const moedas = useContext(MoedaContext);
  const [conversionRate, setConversionRate] = useState(null);

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState(0);
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valorAtual, setValorAtual] = useState(0);

  function convert(e) {
    e.preventDefault(); 

    if (!text1.trim()) {
      alert("Digite um valor válido.");
      return;
    }

    if (valor1 && valor2 && !isNaN(parseFloat(text1))) {
      if (valor1 !== valor2) {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${valor1}`)
          .then(response => {
            const rate = response.data.rates[valor2];
            const valorConvertido = rate * parseFloat(text1);
            setText2(valorConvertido.toFixed(2));
            setValorAtual(valorConvertido.toFixed(2));
          })
          .catch(error => {
            console.error("Error fetching conversion rate:", error);
            alert("Erro ao obter a taxa de conversão. Tente novamente.");
          });
      } else {
        alert("Valores inválidos. Verifique se os valores são diferentes.");
      }
    } else {
      alert("Valor inválido. Verifique se o valor digitado é um número.");
    }
  }

  return (
    <div>
      <Paper elevation={3} className="calculadora">
        <h3>Converta valores</h3>
        <form onSubmit={convert}>
          <div>
            <FormControl variant="outlined" className="dropdown">
              <Select native value={valor1} onChange={(e) => setValor1(e.target.value)}>
                <option value="">Selecione uma moeda</option>
                {moedas.map((moeda, index) => (
                  <option key={index} value={moeda}>{moeda}</option>
                ))}
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Valor"
              autoComplete="off"
              name="input"
            />
            <FormControl variant="outlined" className="dropdown">
              <Select native value={valor2} onChange={(e) => setValor2(e.target.value)}>
                <option value="">Selecione uma moeda</option>
                {moedas.map((moeda, index) => (
                  <option key={index} value={moeda}>{moeda}</option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <Button type="submit" className="button" variant="contained" color="primary" onClick={convert}>Converter</Button>
          </div>
          <div>
            <TextField
              variant="outlined"
              value={valorAtual}
              onChange={(e) => setText2(e.target.value)}
              autoComplete="off"
            />
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Calculadora;