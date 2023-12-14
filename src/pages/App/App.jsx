import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import PlantList from '../PlantList/PlantList';
import TopNav from '../../components/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';
import Filter from '../../components/Filter/Filter';


function App() {
  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();

  // Example of programmatically navigating to a different route
  const handleNavigate = () => {
    navigate('/AuthPage');
  };

  return (
    <>
      <main className="App">
        hell
        <header>
          <Link to="/">Main Page</Link>
          <Link to="/AuthPage">SignIn</Link>
          {/* Example of using the navigate function on a button click */}
        </header>
        <div>
          <Routes>
            <Route path="/" element={<PlantList />} />
            <Route path="/AuthPage" element={<AuthPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
