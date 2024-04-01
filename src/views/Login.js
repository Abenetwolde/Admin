
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { setUser } from "../redux/authSlice";
// import { setUser } from "./redux/authSlice";

// import { setUser } from "redux/auth";


const Login = () => {
  const buttonStyle = {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'lightblue', // Example background color
    border: 'none', // Example border style
    padding: '10px 20px', // Example padding
    borderRadius: '5px', // Example border radius
    cursor: 'pointer', // Example cursor style
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit', // Inherits color from parent
  };

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dsjjjjjjjjjj")

    try {
      const response = await axios.post('http://172.30.30.121:4000/auth/login', { username, password });
console.log(response.data)
      if (response.data) {
        dispatch(setUser(response.data.User));
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate("/admin/index");
      } else {
        // setError('Invalid credentials');
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (

    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form"  onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    // type="email"
                    autoComplete="new-email"
                    value={username}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
              <Button  type="submit" className="my-4" style={buttonStyle}>
  {/* <Link to="/admin/index" style={linkStyle}> */}
    Sign in
 
</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};

export default Login;
