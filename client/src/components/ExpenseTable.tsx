import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import expenseService from "../service/expenseService";
import ExpenseRecord from "./ExpenseRecord";

const ExpenseTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await expenseService.getAllExpenses();
        setExpenses(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteExpense = (e: any, id: number) => {
    e.preventDefault();
    expenseService.deleteExpense(id).then((res: any) => {
      if (expenses) {
        setExpenses((prevElement: any) => {
          return prevElement.filter((expense: any) => expense.id !== id);
        });
      }
    });
  };

  return (
    <>
      <div className="justify-center items-center p-8">
        <div className="h-12 m-8">
          <button
            className="bg-teal-500 rounded-3xl px-4 py-2 mr-8 text-white border-0 font-bold"
            onClick={() => {
              navigate("/add");
            }}
          >
            Add Expense
          </button>
        </div>
        <div className="flex shadow border-b rounded-sm m-4 p-8">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="w-3/12 text-left font-semibold text-neutral-800 uppercase tracking-wider py-3 px-6">
                  Amount
                </th>
                <th className="w-3/12 text-left font-semibold text-neutral-800 uppercase tracking-wider py-3 px-6">
                  Category
                </th>
                <th className="w-4/12 text-left font-semibold text-neutral-800 uppercase tracking-wider py-3 px-6">
                  Description
                </th>
                <th className="w-2/12 text-right font-semibold text-neutral-800 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-slate-100">
                {expenses.map((expense: any) => (
                  <ExpenseRecord
                    expense={expense}
                    key={expense.id}
                    deleteExpense={deleteExpense}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ExpenseTable;
