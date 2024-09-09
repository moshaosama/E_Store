import { Container, Row } from "react-bootstrap";

import { FaArrowTurnUp, FaCartShopping } from "react-icons/fa6";
import ColOrders from "./ColOrders";
import { RxUpdate } from "react-icons/rx";
import { FaTruck } from "react-icons/fa";
import Orders from "./Orders";

function Dashboard() {
  return (
    <>
      <div id="Dashboard">
        <Container>
          <h4>Dashboard</h4>
          <div>
            <p className="h5" style={{ fontWeight: "bolder" }}>
              <Row>
                <ColOrders
                  title="Total Orders"
                  tags={
                    <FaCartShopping
                      className="bg-danger p-2 text-light"
                      style={{
                        width: "3pc",
                        height: "2pc",
                        borderRadius: "10pc",
                      }}
                    />
                  }
                />
                <ColOrders
                  title="Pending Orders"
                  tags={
                    <RxUpdate
                      className="bg-warning p-2 text-light"
                      style={{
                        width: "3pc",
                        height: "2pc",
                        borderRadius: "10pc",
                      }}
                    />
                  }
                />
                <ColOrders
                  title="Processing Order"
                  tags={
                    <FaTruck
                      className="bg-primary p-2 text-light"
                      style={{
                        width: "3pc",
                        height: "2pc",
                        borderRadius: "10pc",
                      }}
                    />
                  }
                />
                <ColOrders
                  title="Complete Orders"
                  tags={
                    <FaArrowTurnUp
                      className="bg-success p-2 text-light"
                      style={{
                        width: "3pc",
                        height: "2pc",
                        borderRadius: "10pc",
                      }}
                    />
                  }
                />
              </Row>
            </p>
          </div>
          <Orders />
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
