import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import dataCategories from "../Components/data";
import { useEffect, useState } from "react";
import { Products } from "../interfcaes";
import "../App.css";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useGetProductsQuery } from "../Features/Products/ProductSLice";
function Home() {
  const [products, setProducts] = useState<Products | null>(null);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    fetch(`http://localhost:3000/Product?page=${page}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts({ Products: data });
      });
  }, [page]);

  const addCart = (id: string) => {
    fetch(`http://localhost:3000/Cart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const dataStored: any = localStorage.getItem("Cart");
        const items: any = dataStored ? JSON.parse(dataStored) : [];

        items.push({ id: Math.random() * 10, data });
        localStorage.setItem("Cart", JSON.stringify(items));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handlePage() {
    setPage(page + 1);
  }

  return (
    <>
      {/*Carousel Image*/}
      <Container className="d-flex" id="Banner">
        <Carousel className="my-3 mx-2 w-75">
          <Carousel.Item>
            <img
              src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688491%2Fsettings%2Fslider-2_o6aezc.jpg&w=1080&q=75"
              alt=""
              style={{ borderRadius: "2pc", height: "20pc" }}
              className="w-100"
            />
            <div className="position-absolute p-5 w-50" style={{ top: "0pc" }}>
              <h1 style={{ fontSize: "2rem " }}>
                The Best Quality Products Guaranted
              </h1>
              <p>The Best Quality Products Guaranted!</p>
              <div className="btn btn-success">Shop Now</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688492%2Fsettings%2Fslider-3_iw4nnf.jpg&w=1080&q=75"
              alt=""
              style={{ borderRadius: "2pc", height: "20pc" }}
              className="w-100"
            />
            <div className="position-absolute p-5 w-50" style={{ top: "0pc" }}>
              <h1 style={{ fontSize: "2rem " }}>
                Best Different Types Of Grocery Store
              </h1>
              <p>
                Quickly aggregate empowered networks after emerging products...
              </p>
              <div className="btn btn-success">Shop Now</div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item className="w-100">
            <img
              src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrscqZJNz%2Fslider-1.webp&w=1080&q=75"
              alt=""
              className="w-100"
            />
            <div className="position-absolute p-5 w-50" style={{ top: "4pc" }}>
              <h1 style={{ fontSize: "2rem " }}>
                The Best Quality Products Guaranted
              </h1>
              <p>The Best Quality Products Guaranted!</p>
              <div className="btn btn-success">Shop Now</div>
            </div>
          </Carousel.Item> */}
        </Carousel>
        {/*///////////////////////////////////////////////*/}
        <div
          className="my-3 p-1 w-50 position-relative rounded"
          style={{ border: "1px solid", height: "20pc" }}
        >
          <div
            className="position-absolute w-100 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "rgb(255 237 213)",
              top: "0px",
              left: "0px",
              height: "2pc",
            }}
          >
            <p className="h6">Latest Super Discount Active Coupon Code</p>
          </div>

          <div style={{ padding: "30px 0pc" }}>
            <Row>
              <Col className="m-3 ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div>
                    <h5>
                      <span className="text-danger">10%</span> Off
                    </h5>
                    <h6>Summer Gift Vouncer</h6>
                  </div>
                  <div>
                    <div className="btn btn-outline-success">Summer 2025</div>
                    <p style={{ fontSize: "10px", width: "8pc" }}>
                      * This coupon apply when shopping more then ₹500
                    </p>
                  </div>
                </div>
              </Col>
              <hr />
              <Col className="m-3 p-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div>
                    <h5>
                      <span className="text-danger">10%</span> Off
                    </h5>
                    <h6>Summer Gift Vouncer</h6>
                  </div>
                  <div>
                    <div className="btn btn-outline-success">Summer 2025</div>
                    <p style={{ fontSize: "10px", width: "8pc" }}>
                      * This coupon apply when shopping more then ₹500
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      {/*///////////////*/}

      {/*Shop Now*/}
      <Container>
        <div
          className="rounded p-3 d-flex justify-content-between align-items-center"
          style={{ backgroundColor: "rgb(255 237 213)" }}
        >
          <div>
            <p className="h5 text-success mx-4">
              100% Natural Quality Organic Product
            </p>
            <p className="mx-4">
              See Our latest discounted products from here and get a special
              discount product
            </p>
          </div>
          <div className="btn btn-success " style={{ height: "40px" }}>
            Shop Now
          </div>
        </div>
      </Container>
      {/*///////////////*/}

      {/*Featured Categories*/}
      <div
        style={{ backgroundColor: "#eee" }}
        className="my-5 py-4"
        id="featuredCategories"
      >
        <Container>
          <div className="text-center">
            <h3>Featured Categories</h3>
            <p>Choose your necessary products from this feature categories.</p>
          </div>
          <div>
            <Row>
              {dataCategories?.map((el) => {
                return (
                  <Col
                    lg="3"
                    md="6"
                    sm="6"
                    key={el?.name}
                    className="my-1"
                    id="Col"
                  >
                    <Card
                      id="Card"
                      style={{
                        cursor: "pointer",
                        width: "17pc",
                      }}
                      key={el?.name}
                    >
                      <Card.Body className="d-flex ">
                        <img style={{ width: "15%" }} src={el?.image} alt="" />
                        <p className="mx-4">{el?.name}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
      {/*/////////////////////////// */}
      {/*Products*/}
      <div style={{ backgroundColor: "#eee" }} className="my-5 py-4">
        <Container>
          <div className="text-center">
            <h3>Popular Products for Daily Shopping</h3>
            <div className="d-flex justify-content-center">
              <p className="w-50">
                See all our popular products in this week. You can choose your
                daily needs products from this list and get some special offer
                with free shipping.
              </p>
            </div>
          </div>
          {products?.Products?.results === 0 ? (
            <>
              <div>
                <h1 className="text-center text-danger">
                  you don't have any Product
                </h1>
              </div>
            </>
          ) : (
            <>
              <div>
                <Row>
                  {products?.Products?.data?.map((el) => {
                    return (
                      <Col lg="2">
                        <Card
                          style={{ cursor: "pointer" }}
                          id="Card"
                          className="m-1"
                        >
                          <div
                            className="w-50 d-flex justify-content-center align-items-center m-1"
                            style={{
                              borderRadius: "10pc",
                              backgroundColor: "#eee",
                              height: "15px",
                              fontSize: "10px",
                              fontWeight: "bolder",
                            }}
                          >
                            <span className="text-success">
                              Stock:{" "}
                              <span className="text-danger">{el?.stock}</span>
                            </span>
                          </div>
                          <Card.Img variant="top" src={el?.image} />
                          <Card.Body>
                            <p
                              style={{
                                fontSize: "15px",
                                color: "rgb(176 160 160)",
                              }}
                            >
                              {el?.name}
                            </p>
                            <Card.Title>
                              <div className="d-flex justify-content-between">
                                <p className="h5">${el?.price}</p>
                                <div
                                  className="btn btn-outline-success"
                                  onClick={() => addCart(el?._id)}
                                >
                                  <IoBagAdd />
                                </div>
                              </div>
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div
                className="btn btn-success d-flex justify-content-end"
                style={{ margin: "10px 0px 0px 66pc" }}
                onClick={handlePage}
              >
                Next
              </div>
            </>
          )}
        </Container>
      </div>
      {/*/////////////////////////// */}

      {/* Delivery*/}
      <Container className="bg-success rounded p-5 ">
        <div className="bg-light rounded p-2 d-flex align-items-center">
          <div className="mx-3">
            <h6>Organic Products and Food</h6>
            <h4>Quick Delivery to Your Home</h4>
            <p>
              There are many products you will find in our shop, Choose your
              daily necessary product from our KachaBazar shop and get some
              special offers. See Our latest discounted products from here and
              get a special discount.
            </p>
            <Link to={"/"} target="blanc">
              <div className="btn btn-success" style={{ borderRadius: "10pc" }}>
                Download now
              </div>
            </Link>
          </div>
          <div>
            <img
              id="Delivery"
              src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688032%2Fsettings%2Fdelivery-boy_rluuoq.webp&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </Container>
      {/*/////////////////////////// */}
    </>
  );
}

export default Home;
