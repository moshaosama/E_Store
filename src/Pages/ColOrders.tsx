import { Card, Col } from "react-bootstrap";

import {
  useGetCheckOutByUserQuery,
  useGetCheckOutsQuery,
} from "../api/ProductSlice";
type Props = {
  title: string;
  tags: any;
};

function ColOrders(props: Props) {
  const user = JSON.parse(localStorage.getItem("user")!);
  const { data: CheckOuts } = useGetCheckOutsQuery();
  const { data: checkOutByUser } = useGetCheckOutByUserQuery(user?.data?._id);
  return (
    <>
      <Col lg={"3"}>
        <Card>
          <Card.Body>
            <div className="d-flex align-items-center">
              <div>{props.tags}</div>
              <div className="d-flex flex-column mx-3">
                <span className="h6">{props.title}</span>
                <span>
                  {user?.data?.actor == "admin"
                    ? CheckOuts?.result
                    : checkOutByUser?.result}
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ColOrders;
