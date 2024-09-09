import { Container, Nav, Navbar } from "react-bootstrap";
import { CiSettings } from "react-icons/ci";
import { FaUnlock } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { LiaStackExchange } from "react-icons/lia";
import { MdDashboard, MdOutlineAccountCircle } from "react-icons/md";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Account from "./account";
import Orders from "./myOrders";
import EditProfile from "./editProfile";
import ChangePassword from "./ChangePassword";

function MyProfile() {
  const Navigation = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    Navigation("/Login");
    window.location.reload();
  };
  return (
    <>
      {/* Links Dashboard */}
      <Container className="p-5 m-5" id="myProfile">
        <div className="d-flex" id="Profile">
          <div className="w-25">
            <Navbar id="LinksProfile">
              <Nav className=" d-flex flex-column">
                <Nav.Link className="my-1">
                  <Link
                    to={"dashboard"}
                    className="text-decoration-none text-dark"
                  >
                    <MdDashboard />
                    <span className="mx-2" style={{ fontWeight: "bolder" }}>
                      Dashboard
                    </span>
                  </Link>
                </Nav.Link>

                <Nav.Link className="my-1">
                  <Link
                    to={"Orders"}
                    className="text-decoration-none text-dark"
                  >
                    <GoListUnordered />
                    <span className="mx-2" style={{ fontWeight: "bolder" }}>
                      My Orders
                    </span>
                  </Link>
                </Nav.Link>
                <Nav.Link className="my-1">
                  <Link
                    to={"Account"}
                    className="text-decoration-none text-dark"
                  >
                    <MdOutlineAccountCircle />
                    <span className="mx-2" style={{ fontWeight: "bolder" }}>
                      My Account
                    </span>
                  </Link>
                </Nav.Link>
                <Nav.Link className="my-1">
                  <Link
                    to={"profile"}
                    className="text-decoration-none text-dark"
                  >
                    <CiSettings />
                    <span className="mx-2" style={{ fontWeight: "bolder" }}>
                      Update Profile
                    </span>
                  </Link>
                </Nav.Link>
                <Nav.Link className="my-1">
                  <Link
                    to={"changePassword"}
                    className="text-decoration-none text-dark"
                  >
                    <LiaStackExchange />
                    <span className="mx-2" style={{ fontWeight: "bolder" }}>
                      Change Password
                    </span>
                  </Link>
                </Nav.Link>
                <Nav.Link className="my-1" onClick={handleLogout}>
                  <FaUnlock />
                  <span className="mx-2" style={{ fontWeight: "bolder" }}>
                    Logout
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
          <div className="mx-5">
            <Routes>
              <Route path="" element={<Account />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="Orders" element={<Orders />}></Route>
              <Route path="Account" element={<Account />}></Route>
              <Route path="Profile" element={<EditProfile />}></Route>
              <Route path="changePassword" element={<ChangePassword />}></Route>
              {/* <Route path="Order/:id" element={<Details />}></Route> */}
            </Routes>
          </div>
        </div>
      </Container>
      {/*///////////////////// */}
    </>
  );
}

export default MyProfile;
