import { useEffect, useState } from "react";
import axios from "axios";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3033/toppings")
      .then((res) => setToppingData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // checkbox tickli ise sepete ekler
  // tick kalddırılırsa sepetten çıkarır
  const handleChange = (e, topping) => {
    e.target.checked
      ? // eğer eleman tickli ise sepete ekler
        setBasket([...basket, topping])
      : // tick'i kaldırdığımızda sepetten çıkarır.
        setBasket(basket.filter((i) => i.name !== topping.name));
  };
  return (
    <div className="container my-5">
      <h1>Toppings </h1>
      <p>2$ per piece</p>
      <h2 data-testid="total">
        Toppings Price: {basket.length * 2}
        <span className="text-success">$</span>
      </h2>

      <div className="row gap-3 mt-4">
        {toppingData.map((topping, i) => (
          <div
            className="d-flex flex-column align-items-center me-3"
            style={{ width: "150px" }}
            key={i}
          >
            <img className="img-fluid" src={topping.imagePath} />
            <label htmlFor={topping.name} className="text-nowrap">
              {topping.name}
            </label>
            <input
              className="form-check-input"
              onChange={(e) => handleChange(e, topping)}
              type="checkbox"
              id={topping.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
