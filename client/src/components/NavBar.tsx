const NavBar = () => {
  return (
    <div className="flex flex-row h-14 p-8 items-center justify-center bg-white rounded-md opacity-60 shadow">
      <div>
        <a href="/" className="text-teal-500 font-bold text-2xl">
          Expense Tracker
        </a>
      </div>
    </div>
  );
};

export default NavBar;
