import { Link } from 'react-router-dom';
import SignInButton from '../Auth/SignIn'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from 'react-bootstrap';



// export default function TopNav(params) {
//     return(
//         <nav class="navbar navbar-expand-md fixed-top navbar-light bg-primary">
//             <div class="container-xxl">
//                 <Link class="navbar-brand" to="/">
//                     <span class="fw-bold text-light">
//                         Plant Friend
//                     </span>
//                 </Link>
//                 <SignInButton/>  
//             </div>
//         </nav>
//     )
// }

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