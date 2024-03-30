import {
    //   Collapse,
      Navbar,
    //   NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    //   UncontrolledDropdown,
    //   DropdownToggle,
    //   DropdownMenu,
    //   DropdownItem,
    //   NavbarText,
    } from 'reactstrap';
    
    //import 'bootstrap/dist/css/bootstrap.min.css'; 
    
    function Header(args) {
    //   const [isOpen, setIsOpen] = useState(false);
    
    //   const toggle = () => setIsOpen(!isOpen);
    
      return (
        <div>
          <Navbar color="light">
            <NavbarBrand href="/">catnip.nu</NavbarBrand>
              <Nav tabs >
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Account
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Preferences
                  </NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
      );
    }
    
    export default Header;