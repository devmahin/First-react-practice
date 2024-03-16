

const WantCook = ({products,productsIndex,currentlyCookHandel}) => {
    // console.log(products)
    
    const {preparing_time,recipe_name,calories} = products;
    return (
        <>
            <tr className="">
              <th>{productsIndex + 1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
           
                <td className="">
                <button onClick={() =>currentlyCookHandel(products)} className="py-2 px-3 rounded-full cursor-pointer font-bold bg-[#0BE58A] border-none">
                Preparing
              </button>
              </td>
            </tr>
        </>
    );
};

export default WantCook;