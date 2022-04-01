import "./styles.css";

const TotalPrice = ({ listTransactions, className }) => {
  const price = listTransactions.reduce(
    (accumulator, listTransactions) => accumulator + listTransactions.price,
    0
  );

  return (
    <div className={className}>
      <p>Valor total:</p>
      <p> {`R$ ${price.toFixed(2)}`} </p>
    </div>
  );
};

export default TotalPrice;
