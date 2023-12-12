import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import PlantList from '../PlantList/PlantList';

import './App.css';

function App() {
  return (
    <main className="App">
      <header>
        <Link to="/"> Main Page </Link>
        <Link to="/"> SignIn </Link>
      </header>
      <div>
        <Routes>
          <Route>path="/" element={<PlantList/>}</Route>
          <Route>path="/AuthPage" element={<AuthPage/>}</Route>
        </Routes>
      </div>
      
    </main>
  );
}

export default App;
