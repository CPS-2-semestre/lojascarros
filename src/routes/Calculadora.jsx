import React from 'react'

const Calculadora = () => {
  return (
    <div>
      export default function App() {
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
      case "":
        setResultado(n1 n2);
        break;
      case "/":
        setResultado(n2 !== 0 ? n1 / n2 : "Erro: divisão por zero");
        break;
      default:
        setResultado("Operação inválida");
    }
  };
    </div>
  )
}

export default Calculadora
