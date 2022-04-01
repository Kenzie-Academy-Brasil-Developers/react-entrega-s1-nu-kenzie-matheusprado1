import "./styles.css";
import Button from "../Button";
import { useState } from "react";

const Form = ({ addItem, className }) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [transaction, setTransaction] = useState("Entrada");

  return (
    <div className={className}>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>Descrição</p>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
        <div className="typeValue">
          <div className="value">
            <p>Valor</p>
            <input
              type="number"
              placeholder="R$"
              onChange={(event) => setPrice(Number(event.target.value))}
            />
          </div>
          <div className="type">
            <p>Tipo de valor</p>
            <select
              name="options"
              onChange={(event) => setTransaction(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Saída</option>
            </select>
          </div>
        </div>
        <Button
          className="add"
          onClick={() =>
            transaction === "Entrada"
              ? addItem({
                  description,
                  transaction,
                  price,
                })
              : addItem({
                  description,
                  transaction,
                  price: -price,
                })
          }
        >
          Inserir valor
        </Button>
      </form>
    </div>
  );
};

export default Form;