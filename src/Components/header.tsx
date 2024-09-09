import { Container, Navbar, Nav, Form, Dropdown } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";

import "../App.css";
import dataCategories from "./data.tsx";
import { Link, useNavigate } from "react-router-dom";
import { FaUnlock } from "react-icons/fa";

import Carts from "../Pages/Carts.tsx";

function Header() {
  const User = JSON.parse(localStorage.getItem("user")!);
  const Navigation = useNavigate();
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header?.classList.toggle("Sticky", window.scrollY > 0);
  });

  return (
    <>
      {/* Header1  */}
      <div style={{ backgroundColor: "#eee", height: "2pc" }} id="Header">
        <Container>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ height: "2pc" }}
          >
            <div className="d-flex align-items-center">
              <FiPhoneCall />
              <h1
                style={{ fontSize: "12px", height: "0.5pc" }}
                className="mx-2"
              >
                We are available 24/7, Need help?
                <a
                  className="text-success text-decoration-none"
                  style={{ fontWeight: "bolder" }}
                >
                  +20 1004365707
                </a>
              </h1>
            </div>
            {/* Links  */}
            <div style={{ height: "3pc" }}>
              <Navbar style={{ fontSize: "12px" }}>
                <Nav>
                  <div className="d-flex align-items-center">
                    <Nav.Link style={{ fontWeight: "bolder" }}>
                      About Us
                    </Nav.Link>
                    <span style={{ fontWeight: "bolder" }}>|</span>
                    <Nav.Link style={{ fontWeight: "bolder" }}>
                      Contact Us
                    </Nav.Link>
                    <span style={{ fontWeight: "bolder" }}>|</span>
                    <Nav.Link style={{ fontWeight: "bolder" }}>
                      <Link
                        to={User ? "/Account" : "/Login"}
                        className="text-decoration-none text-dark"
                      >
                        myAccount
                      </Link>
                    </Nav.Link>
                    <span style={{ fontWeight: "bolder" }}>|</span>
                    <Nav.Link style={{ fontWeight: "bolder" }}>
                      {User ? (
                        <div
                          className="text-decoration-none text-dark"
                          onClick={() => {
                            Navigation("/Login");
                            localStorage.removeItem("user");
                            localStorage.removeItem("Token");
                            window.location.reload();
                          }}
                        >
                          <FaUnlock /> Logout
                        </div>
                      ) : (
                        <Link
                          to={"/Login"}
                          className="text-decoration-none text-dark"
                        >
                          <IoPersonOutline
                            onClick={() => {
                              window.location.reload();
                            }}
                          />
                          Login
                        </Link>
                      )}
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar>
            </div>
          </div>
        </Container>
      </div>
      {/* /////////  */}

      {/* Header 2  */}
      <header className="bg-success w-100">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <Navbar>
                <Navbar.Brand onClick={() => Navigation("/")}>
                  <img
                    src="/logo-light_hls14v (1).svg"
                    alt="This is Brand"
                    style={{ width: "8pc", cursor: "pointer" }}
                  />
                </Navbar.Brand>
              </Navbar>
            </div>
            <div>
              <Form>
                <Form.Control
                  type="text"
                  style={{ width: "50pc" }}
                  placeholder="Search for products(e.g. fish, apple, oil)"
                />
              </Form>
            </div>
            <div>
              <Navbar>
                <Nav>
                  <Nav.Link>
                    <HiOutlineBellAlert
                      className="text-light w-100 mx-2"
                      style={{ fontSize: "25px" }}
                    />
                  </Nav.Link>
                  <Nav.Link style={{ display: "contents" }}>
                    <Carts />
                  </Nav.Link>
                  <Nav.Link>
                    {User ? (
                      <img
                        src={User?.data?.image}
                        alt=""
                        className="w-75"
                        style={{
                          borderRadius: "10pc",
                          height: "2pc",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <Link to={"/Login"} className="text-decoration-none">
                        <IoPersonOutline
                          className="text-light w-100 mx-2"
                          style={{ fontSize: "25px" }}
                        />
                      </Link>
                    )}
                  </Nav.Link>
                </Nav>
              </Navbar>
            </div>
          </div>
        </Container>
        <div className="bg-light" id="linksHeaders">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                {/* Category ang Pages and About Us*/}
                <div>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{ border: "none" }}
                      className="bg-light text-dark"
                    >
                      Categories
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        overflowY: "scroll",
                        height: "15pc",
                        width: "20pc",
                      }}
                      className="p-3"
                    >
                      {dataCategories?.map((el) => {
                        return (
                          <>
                            <div
                              className="d-flex align-items-center my-2"
                              key={el?.name}
                            >
                              <img
                                style={{ width: "20px", height: "20px" }}
                                src={el?.image}
                                alt=""
                              />
                              <Dropdown.Item className="Categories">
                                {el?.name}
                              </Dropdown.Item>
                            </div>
                          </>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div>
                  <Navbar>
                    <Nav>
                      <Nav.Link>About Us</Nav.Link>
                      <Nav.Link>Contact Us</Nav.Link>
                    </Nav>
                  </Navbar>
                </div>
                <div>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{ border: "none" }}
                        className="bg-light text-dark"
                      >
                        Pages
                      </Dropdown.Toggle>
                      {/*  */}
                    </Dropdown>
                  </div>
                </div>
              </div>
              {/* ///////////////////////*/}
              <div>
                <div>
                  <Navbar>
                    <Nav>
                      <Nav.Link>Privacy Policy</Nav.Link>
                      <Nav.Link>Terms & Conditions</Nav.Link>
                    </Nav>
                  </Navbar>
                </div>
              </div>
            </div>
          </Container>
          <hr className="m-0" />
        </div>
      </header>
      {/* ///////  */}
    </>
  );
}

export default Header;
