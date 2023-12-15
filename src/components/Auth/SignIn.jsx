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
        <div class="container">
          <div class="row">
            <p class="col">Welcome, {user.displayName}!</p>
            <button class="col" className='sign-out-btn' onClick={SignOutOfGoogle}>
              Sign Out
            </button>
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
