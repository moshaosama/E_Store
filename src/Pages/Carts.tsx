import { Button, Card, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
function Carts() {
  const [Show, setShow] = useState(false);
  const [, setCart] = useState(JSON.parse(localStorage.getItem("Cart")!));
  const [Sum, setSum] = useState(0);
  const User = JSON.parse(localStorage.getItem("user")!);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
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
    localStorage.setItem(
      "Cart",
      JSON.stringify(Carts.filter((el: any) => el?.id !== id))
    );
    setCart(Carts); //// Rendering Page when Cart is Changed//
  };
  const CartAdded = JSON.parse(localStorage.getItem("Cart")!);
  useEffect(() => {
    const Carts = JSON.parse(localStorage.getItem("Cart")!);
    Carts?.map((el: any) => {
      el?.data?.cart?.data?.map((el2: any) => {
        setSum(Sum + el2?.price);
      });
    });
  }, [Carts]);

  return (
    <>
      <Button
        className="bg-success d-flex align-items-center"
        style={{ border: "0" }}
        onClick={handleShow}
      >
        <HiOutlineShoppingCart
          className="text-light w-100 mx-2"
          style={{ fontSize: "25px" }}
        />
      </Button>

      <Offcanvas placement="end" show={Show}>
        <div style={{ cursor: "pointer", backgroundColor: "#eee" }}>
          <Offcanvas.Header closeButton onClick={handleHide}>
            <Offcanvas.Title>
              <span className="mx-2">
                <FaCartShopping />
              </span>
              Shopping Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
        </div>
        <Offcanvas.Body className="position-relative">
          <Row>
            {CartAdded?.map((el: any) => {
              return el?.data?.cart?.data?.map((el2: any) => {
                return (
                  <>
                    <Col lg="12" key={el2?._id}>
                      <Card className="my-1">
                        <Card.Body className="d-flex align-items-center">
                          <div className="d-flex justify-content-between w-100">
                            <div className="d-flex">
                              <Card.Img src={el2?.image} className="w-25" />
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
                                deleteCart(el?.id, el?.data?.cart?._id);
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
          <Container>
            <Link
              to={User ? "/Checkout" : "/Login "}
              onClick={() => handleHide()}
            >
              <div
                className=" btn btn-success position-fixed text-center d-flex align-items-center justify-content-between"
                style={{ bottom: "10px", width: "18%" }}
              >
                <div className="d-flex align-items-center">
                  <p style={{ fontWeight: "bolder" }} className="my-1">
                    Proceed To Checkout
                  </p>
                </div>
              </div>
            </Link>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carts;
