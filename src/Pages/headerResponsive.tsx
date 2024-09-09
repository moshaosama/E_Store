import { useState } from "react";
import { Card, Col, Container, Offcanvas } from "react-bootstrap";
import dataCategories from "../Components/data";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoPersonSharp } from "react-icons/io5";

function FooterRes() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [, setCart] = useState(JSON.parse(localStorage.getItem("Cart")!));
  const Cart = JSON.parse(localStorage.getItem("Cart")!);
  const User = JSON.parse(localStorage.getItem("user")!);
  const handleShow1 = () => {
    setShow1(true);
  };
  const handleHide1 = () => {
    setShow1(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };
  const handleHide2 = () => {
    setShow2(false);
  };
  const deleteCart = (id: any, _id: any) => {
    fetch(`http://localhost:3000/Cart/${_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });

    const Carts = JSON.parse(localStorage.getItem("Cart")!);
    setCart(Carts);
    localStorage.setItem(
      "Cart",
      JSON.stringify(Carts.filter((el: any) => el?.id !== id))
    ); //// Rendering Page when Cart is Changed//
  };
  const CartAdded = JSON.parse(localStorage.getItem("Cart")!);
  return (
    <>
      <div className="bg-success" id="HeaderButtom">
        <Container>
          <div
            className="d-flex align-items-center justify-content-between"
            id="FooterRes"
          >
            <div>
              <div className="btn btn-success" onClick={handleShow1}>
                <AiOutlineAlignLeft />
              </div>
              <Offcanvas show={show1} onHide={handleHide1}>
                <Offcanvas.Header closeButton className="bg-success">
                  <Offcanvas.Title>
                    <img
                      src="https://kachabazar-store-nine.vercel.app/logo/logo-color.svg"
                      alt=""
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <h5>All Categories </h5>
                  <hr />
                  {dataCategories?.map((el) => {
                    return (
                      <Col key={el?.name} className="my-1">
                        <Card
                          id="Card"
                          style={{
                            cursor: "pointer",
                            width: "17pc",
                          }}
                          key={el?.name}
                        >
                          <Card.Body className="d-flex ">
                            <img
                              style={{ width: "15%" }}
                              src={el?.image}
                              alt=""
                            />
                            <p className="mx-4">{el?.name}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            {/*//////////////////////////// */}
            <div>
              <Link to={"/"}>
                <div>
                  <FaHome className="text-light" />
                </div>
              </Link>
            </div>
            {/*//////////////////////////// */}
            <div>
              <div className="btn btn-success" onClick={handleShow2}>
                <BsCartCheck />
              </div>
              <div style={{ position: "relative" }}>
                <Offcanvas placement="end" show={show2} onHide={handleHide2}>
                  <Offcanvas.Header closeButton className="bg-success">
                    <Offcanvas.Title>
                      <h5>
                        <BsCartCheck className="mx-2" />
                        Shopping Cart
                      </h5>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {Cart ? (
                      <div>
                        {CartAdded?.map((el: any) => {
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
                                                <p className="h6">
                                                  {el2?.name}
                                                </p>
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
                                            deleteCart(
                                              el?.id,
                                              el?.data?.cart?._id
                                            );
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
                        <Link
                          to={User ? "/Checkout" : "/Login "}
                          onClick={handleHide2}
                        >
                          <div
                            className="btn btn-success w-75 mx-4"
                            style={{ position: "absolute", bottom: "10px" }}
                          >
                            Proceed To Checkout
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <h1>Your Cart is empty</h1>
                    )}
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
            {/*//////////////////////////// */}
            <div>
              <Link to={"/myAccount"}>
                <div>
                  <IoPersonSharp className="text-light" />
                </div>
              </Link>
            </div>
            {/*//////////////////////////// */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default FooterRes;
