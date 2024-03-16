const Total = ({ currentTotal }) => {
  // min
  const min = currentTotal.map((val) => val.preparing_time.split(" ")[0]);
  const num = min.reduce((acc, val) => acc + parseInt(val), 0);

  const calories = currentTotal.map((val) => val.calories.split(" ")[0]);
  const totalCalories = calories.reduce((acc, val) => acc + parseInt(val), 0);

  return (
    <div>
      <div className="font-semibold">
        <p>Total Time = {num} minutes</p>
        <p>Total Calories = {totalCalories} calories</p>
      </div>
    </div>
  );
};

export default Total;
