import React, { useState } from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Container, Form, Button } from "react-bootstrap";
import "./LoginPage.css";
// import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
      window.location.href = "/dashboard";
    } else {
      console.log(email, password);
      alert("Email/Password is Incorrect! Please try again!");
    }
  };
  return (
    <>
      <MainScreen title="Login" />
      <div className="Container">
  <div className="Form">
    <div className="Logo"></div>
    <Form onSubmit={submitHandler}>
      <Form.Group className="Form__group mb-3" controlId="formBasicEmail">
        <Form.Label className="Form__label">Email address</Form.Label>
        <Form.Control className="Form__control" type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="Form__group mb-3" controlId="formBasicPassword">
        <Form.Label className="Form__label">Password</Form.Label>
        <Form.Control className="Form__control" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button className="Button" variant="primary" type="submit">Submit</Button>
    </Form>
  </div>
</div>

    </>
  );
};

export default LoginPage;
