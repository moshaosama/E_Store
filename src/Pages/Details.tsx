import { useRef } from "react";
import { useGetCheckOutByIdQuery } from "../api/ProductSlice";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

import { FaCloudDownloadAlt, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const Details = () => {
  const id = useParams();

  const { data } = useGetCheckOutByIdQuery(id?.id);
  const user = JSON.parse(localStorage.getItem("user")!);
  enum shippingCost {
    Num1 = "0",
    Num2 = "10",
  }

  const detailsRef: any = useRef();

  // Call useReactToPrint at the top level
  const handlePrint = useReactToPrint({
    content: () => detailsRef.current,
  });

  return (
    <>
      <Container ref={detailsRef}>
        <div className="bg-success text-light my-4 p-1 rounded">
          <p className="my-2 mx-2">
            Thank You{" "}
            <span className="text-dark" style={{ fontWeight: "bolder" }}>
              {user?.data?.userName}
            </span>{" "}
            , Your order have been received !
          </p>
        </div>
        <div
          style={{ backgroundColor: "rgb(238, 242, 255)" }}
          className="p-4 rounded d-flex justify-content-between align-items-center"
        >
          <div>
            <h4 style={{ fontWeight: "bolder" }}>INVOICE</h4>
            <p style={{ fontWeight: "bolder" }}>
              Status: <span className="text-danger">Cancel</span>
            </p>
          </div>
          <div>
            <img
              src="https://kachabazar-store-nine.vercel.app/logo/logo-color.svg"
              alt=""
              className="my-3"
            />
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgb(238, 242, 255)" }}
          className="p-4 my-1 rounded d-flex justify-content-between align-items-center"
        >
          <div>
            <h6 style={{ fontWeight: "bolder" }}>DATE</h6>
            <p>{data?.data?.date.slice(0, 10)}</p>
          </div>
          <div>
            <h6 style={{ fontWeight: "bolder" }}>INVOICE NO.</h6>
            <p>#{data?.data?._id.slice(20, 24)}</p>
          </div>
          <div className="text-end">
            <h6 style={{ fontWeight: "bolder" }}>INVOICE TO.</h6>
            <p className="m-0" style={{ fontSize: "13px" }}>
              {user?.data?.userName}
            </p>
            <p style={{ fontSize: "13px" }}>
              {user?.data?.Email} +20 01004365707
            </p>
          </div>
        </div>
        <div className="my-3">
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.cart.map((el: any) => {
                return el?.data?.map((el2: any) => {
                  return (
                    <>
                      <tr>
                        <td>{el2?._id.slice(20, 24)}</td>
                        <td>{el2.name}</td>
                        <td>1</td>
                        <td>${el2?.price}</td>
                        <td className="text-danger">${el2?.price}</td>
                      </tr>
                    </>
                  );
                });
              })}
            </tbody>
          </Table>
        </div>
        <div
          style={{ backgroundColor: "rgb(238, 242, 255)" }}
          className="p-4 my-1 rounded d-flex justify-content-between align-items-center"
        >
          <div>
            <h6 style={{ fontWeight: "bolder" }}>Payment Method</h6>
            <p style={{ color: "#aaa" }}>PayPal</p>
          </div>
          <div>
            <h6 style={{ fontWeight: "bolder" }}>Shipping Cost</h6>
            <p style={{ color: "#aaa" }}>
              {data?.data?.price >= 5000 ? (
                <p>${shippingCost.Num1}</p>
              ) : (
                <p>${shippingCost.Num2}</p>
              )}
            </p>
          </div>
          <div>
            <h6 style={{ fontWeight: "bolder" }}>Discount</h6>
            <p style={{ color: "#aaa" }}>$0.00</p>
          </div>
          <div>
            <h6 style={{ fontWeight: "bolder" }}>Total Amount</h6>
            <p
              className="text-danger"
              style={{ fontSize: "30px", fontWeight: "bolder" }}
            >
              {data?.data?.price >= 5000 ? (
                <p>${Number(data?.data?.price) + Number(shippingCost.Num1)}</p>
              ) : (
                <p>${Number(data?.data?.price) + Number(shippingCost.Num2)}</p>
              )}
            </p>
          </div>
        </div>
        <div
          className="p-4 my-1 rounded d-flex justify-content-between align-items-center"
          id="PrindandDownload"
        >
          <a href={detailsRef} download={"detailsRef.pdf"}>
            <div className="btn btn-success">
              Download Invoice <FaCloudDownloadAlt />
            </div>
          </a>
          <div className="btn btn-success" onClick={handlePrint} id="Print">
            Print Invoice <FaPrint />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Details;
