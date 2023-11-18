import React from "react";

const Card = ({ scoop, basket, setBasket }) => {
  // Filter metodunu kullanarak bir üründen sepette kaç adet olduğunu bulduk.
  const found = basket.filter((item) => item.name === scoop.name);
  const amount = found.length;

  // Sepette bulunan belirli isimdeki bütün ürünleri azaltır
  const handleReset = () => {
    const updatedBasket = [...basket];

    // Eğer sepette bu üründen varsa, bir tane azalt, ancak sıfırın altına düşmesini engelle
    const index = updatedBasket.findIndex((item) => item.name === scoop.name);
    if (index !== -1) {
      updatedBasket.splice(index, 1);
      setBasket(updatedBasket);
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center mt-2"
      style={{ width: "120px" }}
    >
      <img alt="çeşit" className="img-fluid" src={scoop.imagePath}  />
      <label className="lead">{scoop.name}</label>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-danger" onClick={handleReset}>
          -
        </button>
        <span className="fs-2">{amount}</span>
        <button
          className="btn btn-success"
          onClick={() => setBasket([...basket, scoop])}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
