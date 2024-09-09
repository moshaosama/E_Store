import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const Navigation = useNavigate();
  const error = JSON.parse(localStorage.getItem("error")!);

  async function handleSignup() {
    fetch("http://localhost:3000/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: name,
        Email: Email,
        Password: Password,
        passwordCheck: passwordCheck,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data?.status === "Internal Server Error") {
          localStorage.setItem("error", JSON.stringify(data));
        } else if (data?.status === "OK") {
          localStorage.removeItem("error");
          Navigation("/Login");
        }
        window.location.reload();
      });
  }
  return (
    <>
      <div id="signUpForm">
        <Container className="bg-success p-5 rounded my-5">
          <p className="h4 text-dark text-center">Login</p>
          <Form className="bg-light p-4 rounded">
            <p>
              <Form.Label>userName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please Enter your userName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </p>
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Please Enter your Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </p>
            <p>
              <Form.Label>Password Check</Form.Label>
              <Form.Control
                type="password"
                placeholder="Please Enter your passwordCheck"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordCheck(e.target.value)
                }
              />
            </p>
            <div>
              {localStorage.getItem("error") ? (
                <p className="text-danger h6">{error?.message}</p>
              ) : null}
              <div
                className="btn btn-outline-success d-flex justify-content-center"
                style={{ margin: "0px 0px 0px 55pc" }}
                onClick={handleSignup}
                id="SignUpBtn"
              >
                SignUp
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
