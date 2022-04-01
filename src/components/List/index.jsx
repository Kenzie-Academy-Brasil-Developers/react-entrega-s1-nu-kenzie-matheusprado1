import "./styles.css";
import Button from "../Button";
import { FaTrash } from "react-icons/fa";
import noItem from "./NoItem.png";

const List = ({ listTransactions, excludeItem, className }) => {
  return listTransactions.length === 0 ? (
    <div className="noneInList">
      {" "}
      <h1>Você ainda não possui lançamentos</h1>{" "}
      <img src={noItem} alt="NoItemImage" className="noItem"></img>
    </div>
  ) : (
    <div className="scroll">
      <div className={className}>
        {listTransactions.map(
          (itemList, index) =>
            itemList.description && (
              <ul
                className={
                  itemList.transaction === "Entrada" ? "debit" : "credit"
                }
              >
                <li key={index}>
                  <h2>{itemList.description}</h2>
                </li>
                <li key={index}>
                  <span>{`R$ ${itemList.price
                    .toFixed(2)
                    .replace("-", "")}`}</span>
                </li>
                <li key={index}>
                  <span className="type">{itemList.transaction}</span>
                </li>
                <Button
                  onClick={() => excludeItem(itemList)}
                  className="delete"
                >
                  <FaTrash />
                </Button>
              </ul>
            )
        )}
      </div>
    </div>
  );
};

export default List;
