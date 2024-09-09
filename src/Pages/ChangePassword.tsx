import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {}

function ChangePassword(props: Props) {
  const {} = props;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const Token = localStorage.getItem("Token");
  const Navigation = useNavigate();
  const handleUpdatePassword = () => {
    fetch("http://localhost:3000/updatePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Token!}`,
      },
      body: JSON.stringify({
        CurrentPassword: currentPassword,
        newPassword: newPassword,
        passConf: checkNewPassword,
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
      <div id="changePassword">
        <h4>Change Password</h4>
        <Form>
          <p>
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Current Password"
              style={{ width: "40pc" }}
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentPassword(el.target.value)
              }
            />
          </p>
          <p>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setNewPassword(el.target.value)
              }
            />
          </p>
          <p>
            <Form.Label>Check New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Check New Password"
              onChange={(el: React.ChangeEvent<HTMLInputElement>) =>
                setCheckNewPassword(el.target.value)
              }
            />
          </p>
        </Form>
        <div className="btn btn-success" onClick={handleUpdatePassword}>
          Submit
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
