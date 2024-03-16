import WantCook from "../wantCook/WantCook";

const Cart = ({product}) => {
    // console.log(product)

  return (
    <div className="border-solid rounded-lg border-2 border-gray-300">
      <div className="w-4/5 mx-auto">
        <h1>Want to cook: </h1>
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
                
            {product.map((val,index) => <WantCook products={val} productsIndex={index} key={index}></WantCook>)}
           
            </tbody>
          </table>
        </div>
      </div>
   

      {/* \Currently cooking: 02 */}
      <div className="w-4/5 mx-auto">
        <h1>Currently cooking: 02</h1>
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
            {/* row 1 */}
            <tr className="">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>600 calories</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* total  */}
      <div>
        <p>Total Time = 45 minutes</p>
        <p>Total Calories = 1050 calories</p>
      </div>
    </div>
  );
};

export default Cart;
