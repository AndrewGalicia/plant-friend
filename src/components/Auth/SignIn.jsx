import {auth, provider, signInWithGoogle} from "../../firebase"

export default function SignIn() {
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}