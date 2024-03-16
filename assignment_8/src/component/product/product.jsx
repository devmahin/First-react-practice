import { FaFire } from "react-icons/fa";
import { TfiTimer } from "react-icons/tfi";
function Product({product,wantToCookHandel}) {
  // console.log(product)
  const {preparing_time,short_description,recipe_name,recipe_image,calories,ingredients} = product;
    return (
        <div>
            <div className="border-solid border-gray-200 rounded-2xl p-5">
        <div className="p-0">
          <img className="w-full object-cover h-64 rounded-2xl" src={recipe_image} alt="" />
        </div>

        <div>
          <h2>{recipe_name.slice(0,24) + ".."}</h2>
          <p>{short_description}</p>
          <hr />
          
          <h4 className="text-start">Ingredients: {ingredients.length}</h4>

          <ul className=" list-inside pl-0 text-start">
            {ingredients.map((val,index) => <li key={index}>{val}</li>)}
          </ul>

          <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
          <TfiTimer />
            <p>{preparing_time}</p>
          </div>

          <div className="flex items-center gap-x-4">
          <FaFire />
            <p>{calories}</p>
          </div>
          </div>

            <button onClick={() => wantToCookHandel(product)} className="btn bg-[#0be58a]  rounded-full px-12">
            Want to Cook
            </button>

        </div>
      </div>
        </div>
    );
}

export default Product;