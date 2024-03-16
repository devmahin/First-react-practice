import { useState } from "react";
import Products from "../Products/Products";
import Cart from "../cart/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
function Main() {
  // Want to cook:
  const [cook, setCook] = useState([]);
  const wantToCookHandel = (product) => {
    const fin = cook.find((val) => val.recipe_id === product.recipe_id);
    if (!fin) {
      toast.success("Success add !", {
        autoClose: 2000,
      });
      setCook([...cook, product]);
    } else {
      toast.warn("Already exist", {
        autoClose: 2000,
      });
    }
  };
 
  const [curren, setCurrentCook] = useState([])
  function currentlyCookHandel(currenProduct) {
    const fin = curren.find((val) => val.recipe_id === currenProduct.recipe_id);
    if (!fin) {
      setCurrentCook([...curren, currenProduct]);
    }
    const fil = cook.filter(val=> val.recipe_id !== currenProduct.recipe_id)
    setCook(fil);
  
  }


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
          <Cart curren={curren} currentlyCookHandel={currentlyCookHandel} product={cook}></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Main;
