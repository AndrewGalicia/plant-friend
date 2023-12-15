import { Link } from 'react-router-dom';
import SignInButton from '../Auth/SignIn'



export default function TopNav(params) {
    return(
        <nav class="navbar navbar-expand-md fixed-top navbar-light bg-primary">
            <div class="container-xxl">
                <Link class="navbar-brand" to="/">
                    <span class="fw-bold text-light">
                        Plant Friend
                    </span>
                </Link>
                <SignInButton/>  
            </div>
        </nav>
    )
}