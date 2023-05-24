import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "pages/MainPage";
import UsersPage from "pages/UsersPage";
import FirstPage from "pages/FirstPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-gap-16 justify-content-center">
        <Link to="/">На главную</Link>
        <Link to="/second">Users</Link>
        <Link to="/third">First Page</Link>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<UsersPage />} />
        <Route path="/third" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
