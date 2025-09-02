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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-80 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Calculadora</h2>
        <input
          type="text"
          placeholder="Número 1"
          className="w-full p-2 mb-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Número 2"
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => calcular("+")}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => calcular("-")}
          >
            -
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => calcular("*")}
          >
            *
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => calcular("/")}
          >
            /
          </button>
        </div>
        <h3 className="text-lg text-gray-200">
          Resultado:{" "}
          <span className="font-semibold text-yellow-400">{resultado}</span>
        </h3>
      </div>
    </div>
  );
};

export default Calculadora;
