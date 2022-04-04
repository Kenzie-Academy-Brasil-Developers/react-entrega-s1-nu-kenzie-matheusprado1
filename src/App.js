import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalPrice from "./components/TotalMoney";
import Button from "./components/Button";
import logo from "./NuKenzie.png";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function addItem(item) {
    setListTransactions([...listTransactions, item]);
  }

  function excludeItem(item) {
    const newList = listTransactions.filter((element) => element !== item);
    setListTransactions(newList);
  }

  function filterType(item) {
    const filteredTypeList = listTransactions.filter(
      (element) => element.transaction === item
    );
    setListTransactions(filteredTypeList);
  }

  return (
    <div className="App">
      <div className="App-header">
        <header>
          <img src={logo} alt="Kenzie logo"></img>
          <Button onClick className="start">
            Início
          </Button>
        </header>
        <main>
          <section>
            <Form addItem={addItem} className="form" />
            <TotalPrice
              listTransactions={listTransactions}
              className="priceDesktop"
            />
          </section>
          <section className="resume">
            <div className="filter">
              <h2>Resumo financeiro</h2>
              <Button onClick={() => filterType("")} className="all">
                Todos
              </Button>
              <Button onClick={() => filterType("Entrada")} className="entries">
                Entrada
              </Button>
              <Button onClick={() => filterType("Despesa")} className="expense">
                Despesa
              </Button>
            </div>
            <List
              listTransactions={listTransactions}
              excludeItem={excludeItem}
              className="list"
            />
            <TotalPrice
              listTransactions={listTransactions}
              className="priceMobile"
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
