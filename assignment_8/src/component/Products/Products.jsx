import { useState } from "react";
import { useEffect } from "react";
import Product from "../product/product";


function Products({wantToCookHandel}) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      const data = await fetch(`data.json`);
      const jsonData = await data.json();
      setApiData(jsonData);
    };
    dataLoad();
  }, []);
  console.log(apiData);

  return (
    <div className="grid text-start grid-cols-2 gap-4">
      {apiData.map((val,i) => <Product key={i} wantToCookHandel={wantToCookHandel} product={val}></Product>)}
    </div>
  );
}

export default Products;
