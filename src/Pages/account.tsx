import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Account() {
  const User = JSON.parse(localStorage.getItem("user")!);
  return (
    <>
      <div>
        <Container>
          <div
            style={{ border: "1px solid #ddd", width: "30pc" }}
            className="p-3"
            id="myAccount"
          >
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src={User?.data?.image}
                  alt=""
                  style={{ width: "5pc", height: "5pc", borderRadius: "10pc" }}
                />
                <span className="d-flex flex-column mx-3">
                  <p style={{ fontWeight: "bolder" }}>{User?.data?.userName}</p>
                  <p>{User?.data?.Email}</p>
                </span>
              </div>
              <Link to={"/myAccount/profile"}>
                <div
                  className="btn btn-success d-flex align-items-center"
                  style={{ height: "40px" }}
                >
                  Edit
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Outlet />
    </>
  );
}

export default Account;
