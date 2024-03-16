const CurrentCook = ({productCur,curIndex}) => {
    const {preparing_time,recipe_name,calories} = productCur;
    return (
        <>
            <tr className="">
              <th>{curIndex + 1}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
        </>
    );
};

export default CurrentCook;