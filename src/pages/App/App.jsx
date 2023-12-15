import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
// import AuthPage from '../AuthPage/AuthPage';
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
      <TopNav/>
      <main class="container text-center">
        <div class="row">
          <aside class="col-md-2">
            <h1>This is the Filter</h1>
          </aside>
          <body class="col-md-10">
             <body>
              <h1>this is the body</h1>
            </body>
            <Routes>
              <Route path="/" element={<PlantList />} />
              {/* <Route path="/AuthPage" element={<AuthPage />} /> */}
            </Routes>
          </body>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
