import WantCook from "../wantCook/WantCook";
import CurrentCook from "../currentCook/CurrentCook";
import Total from "../total/Total";

const Cart = ({ product ,currentlyCookHandel,curren}) => {
  // console.log(product)

  
  return (
    <div className="border-solid rounded-lg border-2 border-gray-300">
      <div className="w-4/5 mx-auto">
        <h1>Want to cook: {product.length}</h1>
        <hr />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-gray-600 font-bold">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>

            <tbody>
              {product.map((val, index) => (
                <WantCook
                  products={val}
                  currentlyCookHandel={currentlyCookHandel}
                  productsIndex={index}
                  key={index}
                ></WantCook>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* \Currently cooking: 02 */}
      <div className="w-4/5 mx-auto">
        <h1>Currently cooking: {curren.length}</h1>
        <hr />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody className="">
            {curren.map((val, index) => (
              <CurrentCook productCur={val} curIndex={index} key={index}></CurrentCook>
            ))}
          </tbody>
        </table>
      </div>
            <div>
            <Total currentTotal={curren} ></Total>
            </div>

    </div>
  );
};

export default Cart;
