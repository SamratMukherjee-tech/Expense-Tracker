import { useSelector, useDispatch } from "react-redux";
function App() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const addIncome = () => {
    dispatch({ type: "income", amount: 3 });
  };
  const addExpense = () => {
    dispatch({ type: "expense", amount: 3 });
  };
  return (
    <div>
      {balance}
      <button onClick={addIncome}>Income</button>
      <button onClick={addExpense}>Expense</button>
    </div>
  );
}

export default App;
