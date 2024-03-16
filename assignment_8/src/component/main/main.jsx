import { useState } from "react";
import Products from "../Products/Products";
import Cart from "../cart/cart";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function Main() {
  // Want to cook:
  const [cook, setCook] = useState([]);
  const wantToCookHandel = (product) => {
    const fin = cook.find((val) => val.id === product.id);
    if (!fin) {
      toast.success("Wow so easy !");
      setCook([...cook, product]);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl">Our Recipes</h1>
      <p className="w-7/12 mx-auto leading-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      <div className="grid grid-cols-5 gap-x-3">
        <div className="col-span-3">
          <Products wantToCookHandel={wantToCookHandel}></Products>
        </div>
        <div className="col-span-2">
          {cook.map((val,index) => <Cart key={index} cook={val}></Cart>)}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Main;
