import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import MainPage from 'pages/MainPage';
import SecondPage from 'pages/SecondPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-gap-16 justify-content-center">
        <Link to="/">На главную</Link>
        <Link to="/second">Вторая страница</Link>
      </div>

      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/second" element={ <SecondPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 