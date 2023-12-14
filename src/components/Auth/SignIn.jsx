import './SignIn.css'
import {signInWithGoogle, SignOutOfGoogle} from "../../firebase"

export default function SignInButton() {
    return (
        <div>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with google</button>
            
           
        </div>
    )
}