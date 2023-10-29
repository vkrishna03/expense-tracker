import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/expenses";

class ExpenseService {
  addExpense(expense: any) {
    // if (expense.amount == 0 && expense.description == "") {
    //   console.log("Enter data!");
    // } else {
    return axios.post(EMPLOYEE_API_BASE_URL + "/create", expense);
    // }
  }

  getAllExpenses() {
    return axios.get(EMPLOYEE_API_BASE_URL + "/getAll");
  }

  deleteExpense(id: number) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/delete/" + id);
  }
}

export default new ExpenseService();
