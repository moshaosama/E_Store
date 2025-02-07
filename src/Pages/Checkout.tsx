import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaRegCreditCard } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [, setSession] = useState<any>();
  const [Carts, setCart] = useState(JSON.parse(localStorage.getItem("Cart")!));
  const token = localStorage.getItem("Token");
  const user = JSON.parse(localStorage.getItem("user")!);
  const Navigation = useNavigate();

  const Stripe = loadStripe(
    "pk_test_51PtbHPRtL4n1EJlVxLFPJva6QZEsUW7TzZiLzpng6AQ6za8ggvGnGE0RQj2csBO8RlCbDOiSpAmUe0FmknMT7RuG00yZwcvxuV"
  );
  const Cart = JSON.parse(localStorage.getItem("Cart")!);

  const deleteCart = (id: any) => {
    const Carts = JSON.parse(localStorage.getItem("Cart")!);
    localStorage.setItem(
      "Cart",
      JSON.stringify(Carts.filter((el: any) => el?.id !== id))
    );
    setCart(Carts); //// Rendering Page when Cart is Changed//
  };

  return (
    <>
      <div
        className="d-flex justify-content-between"
        id="FormCheckOut"
        style={{ padding: "0px 7pc" }}
      >
        <div className="w-50 m-4" id="PersonalDet">
          <Container>
            <div className="my-5">
              <Container>
                <ol type="1">
                  <li>
                    <h6 style={{ fontWeight: "bolder" }}>Personal Details</h6>
                  </li>
                  <Form>
                    <div
                      className="d-flex justify-content-betwen my-3"
                      id="Form1"
                    >
                      <p>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          id="FirstName"
                          type="text"
                          placeholder={user.data.userName}
                          style={{ width: "190%" }}
                        />
                      </p>
                      <p
                        style={{ margin: "0px 0px 0px 13pc" }}
                        id="FormLastName"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          id="lastName"
                          type="text"
                          placeholder="Osama"
                          style={{ width: "190%" }}
                        />
                      </p>
                    </div>
                    <div
                      className="d-flex justify-content-betwen my-3 "
                      id="Form2"
                    >
                      <p>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          id="emailAddress"
                          type="text"
                          placeholder={
                            user ? user.data.Email : "john@gmail.com"
                          }
                          style={{ width: "190%" }}
                        />
                      </p>
                      <p style={{ margin: "0px 0px 0px 13pc" }} id="FormPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          id="Phone"
                          type="text"
                          placeholder="+20 1004365707"
                          style={{ width: "190%" }}
                        />
                      </p>
                    </div>
                    <li>
                      <h6 style={{ fontWeight: "bolder" }}>
                        {" "}
                        Shipping Details
                      </h6>
                    </li>
                    <p className="my-3">
                      <Form.Label>Street Address</Form.Label>
                      <Form.Control
                        id="streetAddress"
                        type="text"
                        placeholder="123 Boulevard Rd, Beverley Hills"
                        style={{ width: "106%" }}
                      />
                    </p>
                    <div
                      className="d-flex justify-content-between my-3"
                      id="Form3"
                    >
                      <p>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          id="City"
                          type="text"
                          placeholder="Berlin"
                          style={{ width: "121%" }}
                        />
                      </p>
                      <p style={{ margin: "0px 0pc 0px 2pc" }} id="FormCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          id="Country"
                          type="text"
                          placeholder="Germany"
                          style={{ width: "131%" }}
                        />
                      </p>
                      <p style={{ margin: "0px 0pc 0px 3.3pc" }} id="FormZip">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          id="ZipCode"
                          type="text"
                          placeholder="224421"
                          style={{ width: "122%" }}
                        />
                      </p>
                    </div>
                    <li>
                      <h6 style={{ fontWeight: "bolder" }}>Payment Method</h6>
                    </li>
                    <div className="d-flex justify-content-between my-3">
                      <p
                        style={{ border: "1px solid #ccc" }}
                        className="w-100 mx-2 rounded p-2"
                      >
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <Form.Label for="Credit Card">
                            <div className="d-flex align-items-center">
                              <p>
                                <FaRegCreditCard />
                                <span className="mx-2">Credit Card</span>
                              </p>
                            </div>
                          </Form.Label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="CheckOut"
                            id="Credit Card"
                          />
                        </div>
                      </p>
                      <p
                        style={{ border: "1px solid #ccc" }}
                        className="w-100 mx-2 rounded p-2"
                        id="RazorPay"
                      >
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <Form.Label for="RazorPay">
                            <div className="d-flex align-items-end">
                              <p>
                                <FaRegCreditCard />
                              </p>
                              <p className="mx-2">RazorPay</p>
                            </div>
                          </Form.Label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="CheckOut"
                            id="RazorPay"
                          />
                        </div>
                      </p>
                    </div>
                    <div className="d-flex flex-row-reverse justify-content-between">
                      <div
                        className="btn btn-success"
                        onClick={() => {
                          fetch(
                            `http://localhost:3000/checkout/session_checkout/${user?.data._id}`,
                            {
                              method: "GET",
                              headers: token
                                ? { Authorization: token }
                                : undefined,
                            }
                          )
                            .then((res) => {
                              return res.json();
                            })
                            .then((data) => {
                              setSession(data);
                            }),
                            Stripe.then(() => {});
                          Navigation("/myAccount/Orders");
                          window.location.reload();
                        }}
                        id="ConOrder"
                      >
                        Confirm Order
                      </div>
                      <div className="btn btn-success" id="ConShip">
                        Continue Shipping
                      </div>
                    </div>
                  </Form>
                </ol>
              </Container>
            </div>
          </Container>
        </div>
        <div
          className="d-flex justify-content-start m-5 rounded d-flex flex-column"
          id="OrderSummary"
          style={{
            border: "1px solid #bbb",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
            width: "40%",
          }}
        >
          <div>
            <h6 className="m-4" style={{ fontWeight: "bolder" }}>
              Order Summary
            </h6>
          </div>
          <div className="m-4 rounded" style={{ backgroundColor: "#eee" }}>
            {Carts?.length > 0 ? (
              <>
                <Row style={{ overflowY: "scroll", height: "15pc" }}>
                  {Cart?.map((el: any) => {
                    return el?.data?.cart?.data?.map((el2: any) => {
                      return (
                        <>
                          <Col lg="12" key={el2?._id}>
                            <Card className="my-1">
                              <Card.Body className="d-flex align-items-center">
                                <div className="d-flex justify-content-between w-100">
                                  <div className="d-flex">
                                    <Card.Img
                                      src={el2?.image}
                                      className="w-25"
                                    />
                                    <Card.Title className="mx-4">
                                      <div
                                        className="d-flex"
                                        style={{ margin: "-10px" }}
                                      >
                                        <div>
                                          <p className="h6">{el2?.name}</p>
                                          <p
                                            style={{
                                              fontSize: "10px",
                                              color: "#bbb",
                                              width: "7pc",
                                            }}
                                          >
                                            Item Price ${el2?.price}
                                          </p>
                                        </div>
                                      </div>
                                    </Card.Title>
                                  </div>
                                  <div
                                    className="btn btn-danger bg-light"
                                    style={{ border: "0" }}
                                    onClick={() => {
                                      deleteCart(el?.id);
                                    }}
                                  >
                                    <RiDeleteBin6Line className="text-danger" />
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </>
                      );
                    });
                  })}
                </Row>
              </>
            ) : (
              <div className="d-flex justify-content-center flex-column p-5">
                <div className="text-center">
                  <RiShoppingBag4Line />
                </div>
                <div className="text-center">
                  <p>No Item Added Yet!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
