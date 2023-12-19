import { Link } from 'react-router-dom';
import SignInButton from '../Auth/SignIn'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';


export default function TopNav(params) {
    return(
       <Navbar expand="md" className='bg-primary navbar-light fixed-top'>
        <Container>
            <NavbarBrand>
                <Link to="/">
                    <span class="fw-bold text-light">Plant Friend</span>
                </Link>
            </NavbarBrand>
            <SignInButton/>
        </Container>
       </Navbar>
    )
}