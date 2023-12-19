import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { auth, signInWithGoogle, SignOutOfGoogle } from '../../firebase';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SignInButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? (
        <Dropdown>
          <Dropdown.Toggle>
            <span class="fw-bold text-light">Menu</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>
              <h6 class="dropdown-header">Welcome, {user.displayName}!</h6>
            </Dropdown.Header>
            <Dropdown.Item onClick={SignOutOfGoogle}>
              Sign Out
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="link-no-underline" to="/Favorites">
                <h7 class="text-dark">Favorites</h7>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> 
      ) : (
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}
