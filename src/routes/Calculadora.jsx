import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Digite números válidos!");
      return;
    }

    switch (operacao) {
      case "+":
        setResultado(n1 + n2);
        break;
      case "-":
        setResultado(n1 - n2);
        break;
      case "*":
        setResultado(n1 * n2);
        break;
      case "/":
        setResultado(n2 !== 0 ? n1 / n2 : "Erro: divisão por zero");
        break;
      default:
        setResultado("Operação inválida");
    }
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input
        type="text"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={() => calcular("+")}>+</button>
        <button onClick={() => calcular("-")}>-</button>
        <button onClick={() => calcular("*")}>*</button>
        <button onClick={() => calcular("/")}>/</button>
      </div>
      <h3>Resultado: {resultado}</h3>
    </div>
  );
};

export default Calculadora;
