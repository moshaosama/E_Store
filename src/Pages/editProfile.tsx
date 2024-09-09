import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {}

function EditProfile(props: Props) {
  const {} = props;
  const user = JSON.parse(localStorage.getItem("user")!);
  const Navigation = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const handleEdit = () => {
    fetch(`http://localhost:3000/updateProfile/${user?.data?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: Name,
        email: Email,
      }),
    })
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("Token");
        Navigation("/Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div id="EditProfile">
        <h1>Update Profile</h1>
        <img
          src={user?.data?.image}
          alt=""
          width={"150px"}
          className="rounded"
        />

        <Form className="my-4">
          <div className="d-flex">
            <p>
              <Form.Label>userName</Form.Label>
              <Form.Control
                id="inputName"
                placeholder={user?.data?.userName}
                onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                  setName(el?.target.value)
                }
                style={{ width: "110%" }}
              />
            </p>
            <p className="mx-5">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="inputEmail"
                placeholder={user?.data?.Email}
                onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(el?.target.value)
                }
                style={{ width: "120%" }}
              />
            </p>
          </div>
        </Form>

        <div className="btn btn-success" onClick={handleEdit}>
          Submit
        </div>
      </div>
    </>
  );
}

export default EditProfile;
