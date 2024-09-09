import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const error = JSON.parse(localStorage.getItem("error")!);

  const Navigation = useNavigate();
  function handleLogin() {
    fetch("http://localhost:3000/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: Password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data?.status === "Failed") {
          localStorage.setItem("error", JSON.stringify(data));
        } else if (data?.status === "OK") {
          localStorage.removeItem("error");
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("Token", data?.Token);
          Navigation("/myAccount/dashboard");
        }
        window.location.reload();
      });
  }
  return (
    <>
      <div id="FormLogin">
        <Container className="bg-success p-5 rounded my-5">
          <p className="h4 text-dark text-center">Login</p>
          <Form className="bg-light p-4 rounded">
            <p>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please Enter your Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </p>
            <p>
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Please Enter your Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </p>

            <div className="d-flex justify-content-between align-items-center">
              <Link to={"/SignUp"}>
                <div className="btn btn-outline-success ">
                  Create a New Account
                </div>
              </Link>
              {localStorage.getItem("error") ? (
                <p className="text-danger h4">{error?.message}</p>
              ) : null}
              <div className="btn btn-outline-success" onClick={handleLogin}>
                Login
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;
