import { Container , Nav , Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
    return ( <Navbar bg="dark" className="nb-4" style={{height:"3.75 rem"}}>
<Container>
    <h2>
        <Link className="link-light text-decoration-none" to={"/"}>
        ChatApp
        </Link>
        </h2>
        <span> Logged in as Mhmd</span>
        <Nav>
<Stack direction="horizontal" gap={"3"}>
<Link className="link-light text-decoration-none" to={"/Login"}>
        Login
        </Link>
        <Link className="link-light text-decoration-none" to={"/Register"}>
        Register
        </Link>
</Stack>
        </Nav>
</Container>
    </Navbar> );
}
 
export default NavBar;