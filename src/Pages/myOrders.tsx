import { IoBagHandle } from "react-icons/io5";
import {
  useGetCheckOutByUserQuery,
  useGetCheckOutsQuery,
} from "../api/ProductSlice";
import Table from "react-bootstrap/Table";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";
interface Props {}

function myOrders(props: Props) {
  const {} = props;
  const user = JSON.parse(localStorage.getItem("user")!);
  const { data: CheckOuts, isLoading: checkOutLoading } =
    useGetCheckOutsQuery();
  const { data: checkOutByUser, isLoading: checkOutByUserLoading } =
    useGetCheckOutByUserQuery(user?.data?._id);
  return (
    <>
      {CheckOuts?.result == 0 || checkOutByUser?.result == 0 ? null : (
        <h4 id="myOrders">My Orders</h4>
      )}
      {user?.data?.actor == "admin" ? (
        <div>
          {checkOutLoading ? (
            <ScaleLoader
              color="#4ca067"
              className="d-flex justify-content-center align-items-center"
              style={{ height: "10pc" }}
            />
          ) : (
            <div>
              {CheckOuts?.result == 0 ? (
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{ height: "15pc" }}
                >
                  <IoBagHandle
                    className="text-success"
                    style={{ width: "4pc", height: "4pc" }}
                  />
                  <p>You Have no order Yet!</p>
                </div>
              ) : (
                <div id="myOrdersAdmin">
                  <Table style={{ width: "45pc" }}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>OrderTime</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CheckOuts?.data?.map((el: any) => {
                        return (
                          <>
                            <tr>
                              <td>{(el?._id).slice(20, 24)}</td>
                              <td>{el?.date.slice(0, 10)}</td>
                              <td>payPal</td>
                              <td className="text-danger">Cancel</td>
                              <td>{el?.price}$</td>
                              <td>
                                <Link
                                  to={`/myAccount/dashboard/Orders/${el?._id}`}
                                >
                                  <div className="btn btn-success">Details</div>
                                </Link>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          {checkOutByUserLoading ? (
            <ScaleLoader
              color="#4ca067"
              className="d-flex justify-content-center align-items-center"
              style={{ height: "10pc" }}
            />
          ) : (
            <div>
              {checkOutByUser?.result == 0 ? (
                <div
                  className="d-flex justify-content-center align-items-center flex-column"
                  style={{ height: "15pc", width: "40pc" }}
                >
                  <IoBagHandle
                    className="text-success"
                    style={{ width: "7pc", height: "4pc" }}
                  />
                  <p>You Have no order Yet!</p>
                </div>
              ) : (
                <div id="myOrdersUser">
                  <Table style={{ width: "45pc" }}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>OrderTime</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {checkOutByUser?.data?.map((el: any) => {
                        return (
                          <>
                            <tr>
                              <td>{(el?._id).slice(20, 24)}</td>
                              <td>{el?.date.slice(0, 10)}</td>
                              <td>payPal</td>
                              <td className="text-danger">Cancel</td>
                              <td>{el?.price}$</td>
                              <td>
                                <Link
                                  to={`/myAccount/dashboard/Orders/${el?._id}`}
                                >
                                  <div className="btn btn-success">Details</div>
                                </Link>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default myOrders;
