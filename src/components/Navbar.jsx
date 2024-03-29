import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const NavBar = () => {


  return (
    <>
    
        <Navbar key={false} expand={false} className="my-3 px-1" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
              className="vw-100 menu-bg"
            >
              <Offcanvas.Header closeButton closeVariant='white' className='p-4'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}/>
              </Offcanvas.Header>
             
              <Offcanvas.Body className='d-flex flex-column'>
                <Nav className="justify-content-center align-items-center flex-grow-1 font-primary"
                  style={{fontSize: '5rem', lineHeight: '4rem'}}>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About me</Nav.Link>
                  <Nav.Link href="#action3">Projects</Nav.Link>
                  <Nav.Link href="#action4">Resume</Nav.Link>
                </Nav>
                <div id='contact' className='d-flex justify-content-end fw-light'>
                  <p className='me-3 text-secondary'>Contact me:</p>
                  <a href="mailto:joserh1912@gmail.com"
                    className='me-3 text-decoration-none text-light'>
                      <FontAwesomeIcon icon={faGoogle} className='me-1'/>
                      Gmail
                  </a>
                  <a href='https://github.com/joserhernandez' 
                    className='me-3 text-decoration-none text-light'>
                       <FontAwesomeIcon icon={faGithub} className='me-1'/>
                      Github
                  </a>
                </div>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     
    </>
  );
}

export default NavBar;