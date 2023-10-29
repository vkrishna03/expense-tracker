const ExpenseRecord = ({ expense, deleteExpense }: any) => {
  return (
    <tr key={expense.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-neutral-500 font-semibold">
          {expense.amount}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-neutral-500 font-semibold">
          {expense.category}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-neutral-500 font-semibold">
          {expense.description}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-neutral-500 font-semibold flex items-right justify-end">
          <a
            href="#"
            className="text-emerald-400 hover:text-emerald-700 hover:underline px-4"
          >
            Edit
          </a>
          <a
            href="#"
            className="text-neutral-900 hover:text-red-600 hover:underline px-4"
            //   onClick={ deleteExpense(e,expense.id)}
          >
            Delete
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseRecord;
