import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm";
import NavBar from "./components/NavBar";
import ExpenseTable from "./components/ExpenseTable";

const App = () => {
  return (
    <>
      <div className="bg-slate-100 h-screen rounded">
        <header>
          <NavBar />
        </header>
        <main>
          <Router>
            <Routes>
              <Route index element={<ExpenseTable />} />
              <Route path="/add" element={<InputForm />} />
              <Route path="/expenses" element={<ExpenseTable />} />
              {/* <Route path="/" element={<InputForm />} /> */}
            </Routes>
          </Router>
        </main>
      </div>
    </>
  );
};

export default App;
