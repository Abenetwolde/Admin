
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setFirewalls,setSelectedFirewall } from "../../redux/firewallSlice";
// import { setFirewalls, setSelectedFirewall } from "../.../redux/firewallSlice";

const AdminNavbar = (props) => {
  const dispatch = useDispatch();
  const firewalls = useSelector((state) => state.firewall.firewalls);
  const selectedFirewall = useSelector((state) => state.firewall.selectedFirewall);
  const userToken = useSelector(state => state.auth.user);
  const handleFirewallSelect = (firewall) => {
    dispatch(setSelectedFirewall(firewall));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.30.30.121:4000/webserver/get/organization', {
          headers: {
            Authorization: userToken,
          },
        });
        dispatch(setFirewalls(response.data.response));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch, userToken]);
  console.log("selected firwall...........",selectedFirewall)
// Function to fetch data from the API
// const fetchData = async () => {
//   try {
//     // Make API request with headers
//     const response = await axios.get('http://172.30.30.121:4000/webserver/get/organization', {
//       headers: {
//         Authorization: userToken, // Add authorization header here
//       },
//     });
//     // Extract firewall data from the response and update state
//     setFirewalls(response.data.response);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
// console.log("firewalls",firewalls)
// console.log("firewalls",userToken)
// console.log("selected",selectedFirewall)
// // Use useEffect to fetch data when the component mounts
// useEffect(() => {
//   fetchData();
// }, []); 
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <FormGroup className="mb-0">
        <UncontrolledDropdown >
          <DropdownToggle caret>
          {selectedFirewall ? selectedFirewall.hostname : 'Select a Firewall'}
          </DropdownToggle>
          <DropdownMenu style={{ backgroundColor: "white", color: "black" }}>
              {firewalls?.map(firewall => (
                <DropdownItem
                  key={firewall?.kibanaURL}
                  onClick={() => handleFirewallSelect(firewall)}
                >
                  {firewall?.hostname}
                </DropdownItem>
              ))}
            </DropdownMenu>
        </UncontrolledDropdown>
      </FormGroup>
    </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={"https://th.bing.com/th/id/R.7cc6700806813e7b59d4d99246153a31?rik=OAY9pMXChvkauw&pid=ImgRaw&r=0"}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Admin
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={() => localStorage.removeItem("user")}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
