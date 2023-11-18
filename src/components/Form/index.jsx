import { useState } from "react";
import toast from "react-hot-toast";


const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClikOrder = () => {
    toast.success('Order successfully confirmed')
  }

  return (
    <div className="my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />
      <div className="terms">
        <p style={{visibility: isHover ? "visible":"hidden"}} className="bg-white rounded  p-2 shadow ">
          Don't forget to check your orders
        </p>
        <label htmlFor="terms" className="lead">
          I chose at least one ice cream and toppings
        </label>
      </div>
      <button
      onClick={handleClikOrder}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-warning  "
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Form;
