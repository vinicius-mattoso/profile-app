// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// Import bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Import Profile foto 
import foto_perfil from './static/images/foto_perfil.png'

// Import pages
import { Home, About, ReactProject, MachineLearningProjects, Projects } from './pages';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <div className="NavBar">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="https://www.linkedin.com/in/vinicius-mattoso/">
                <img
                  src={foto_perfil}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="https://www.linkedin.com/in/vinicius-mattoso/">Vinicius Mattoso Reis da Silva</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/projects">Interests</Nav.Link>
                  <NavDropdown title="Projects" id="basic-nav-dropdown" href='/projects'>
                    <NavDropdown.Item href="/projects/ReactProject"> React </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2"> Reservoir Simulation </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/projects/MachineLearningProjects"> Machine Learning </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4"> Deep Learning   </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <br />
        <br />
        <div clasName="App_pages">
          <Switch>
            {/* Home Route */}
            <Route path="/home">
              <Home />
            </Route>
            {/* About Route */}
            <Route path="/about">
              <About />
            </Route>
            {/* About Route */}
            <Route path="/projects">
              <Projects />
            </Route>
            {/* React Projects Route */}
            <Route path="/projects/ReactProject">
              <ReactProject />
            </Route>
            <Route path="/projects/MachineLearningProjects">
              <MachineLearningProjects />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
