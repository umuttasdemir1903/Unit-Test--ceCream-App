import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";

function App() {
  return (
<div>
    <Toaster position="top-right"/>
      {/* Çeşitler */}
      <Scoops />
      {/* Soslar */}
      <Toppings />
      {/* Form */}
      <Form />
    </div>
  );
}

export default App;
