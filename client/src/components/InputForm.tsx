import { useState } from "react";
import expenseService from "../service/expenseService";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const [expense, setExpense] = useState({
    id: "",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setExpense({ ...expense, [e.target.name]: value });
  };

  const addExpense = (e: any) => {
    e.preventDefault();
    expenseService
      .addExpense(expense)
      .then((response: any) => {
        console.log(response);
        navigate("/expenses");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const reset = (e: any) => {
    e.preventDefault();
    setExpense({
      id: "",
      amount: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="bg-white flex max-w-2xl shadow border-b rounded-2xl mx-auto h-max">
      <div className="p-8 items-center w-full">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Enter your Expense</h1>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between h-14 w-full my-4">
            <label
              htmlFor=""
              className="block text-slate-600 text-lg font-normal"
            >
              Amount
            </label>

            <input
              type="number"
              className="h-10 w-24 border rounded-lg mt-2 p-2"
              name="amount"
              value={expense.amount}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <div className="flex flex-row items-center justify-between h-14 w-full my-2">
            <label
              htmlFor=""
              className="block text-slate-600 text-lg font-normal"
            >
              Category
            </label>

            <select
              id=""
              className="h-10 w-36 border rounded-lg mt-2 p-2"
              name="category"
              value={expense.category}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="food">Food</option>
              <option value="stationary">Stationary</option>
              <option value="travel">Travel</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-between h-14 w-full my-4">
            <label
              htmlFor=""
              className="block text-slate-600 text-lg font-normal mb-8"
            >
              Description
            </label>

            <textarea
              className="h-20 w-96 border rounded-lg mt-2 px-4 py-2"
              name="description"
              value={expense.description}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>
          <div className="flex flex-row items-center h-14 w-full mt-28">
            <button
              className="bg-teal-500 rounded-3xl px-4 py-2 mr-8 text-white border-0 font-bold"
              onClick={addExpense}
            >
              Add Expense
            </button>
            <button
              className="bg-red-500 rounded-3xl px-4 py-2 text-white border-0 font-bold"
              onClick={reset}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
