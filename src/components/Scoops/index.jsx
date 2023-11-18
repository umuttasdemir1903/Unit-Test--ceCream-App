import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3033/scoops")
      .then((res) => setScoopData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>İce cream flavours</h1>
      <p>3$ per piece</p>
      <h2 data-testid="total">
        Total Price: {basket.length * 3}
        <span className="text-success">$</span>
      </h2>

      <div className="row gap-5 p-3 justify-content-between ">
        {scoopData.map((scoop, i) => (
          <Card key={i} scoop={scoop} setBasket={setBasket} basket={basket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
