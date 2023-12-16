import React, { useState, useEffect } from 'react';
import './SignIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, signInWithGoogle, SignOutOfGoogle } from '../../firebase';

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
        <div class="dropdown">
          <button type="button" data-bs-toggle="dropdown" class="btn btn-primary dropdown-toggle">
                <span class="fw-bold text-light">
                        Menu
                </span>
          </button>
          <div class="dropdown-menu">
            <ul class="dropdown-header">
              <li> <h6 class="dropdown-header">Welcome, {user.displayName}!</h6></li> 
              <li> <button class="dropdown-item" onClick={SignOutOfGoogle}>Sign Out</button></li>
            </ul>
          </div>
        </div>
      ) : (
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        
      )}
    </div>
  );
}
