import React, { useState, useEffect } from 'react';
import './SignIn.css';
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
        <div class="btn-group">
          <button type="button" data-bs-toggle="dropdown" class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                <span class="fw-bold text-light">
                        Menu
                </span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <h6 class="dropdown-header">Welcome, {user.displayName}!</h6>
            <button type="button" class="dropdown-item" onClick={SignOutOfGoogle}>Sign Out</button>
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
