import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singin } from "../../actions/userAction";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import "./Login.scss";

export const Login = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
 
  const userSingin = useSelector((state) => state.userSingin);
  const { userInfo, error } = userSingin;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(singin(userData.email, userData.password));
    setUserData((prev) => ({ ...prev, email: "", password: "" }));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push("/jobs");
    }
  }, [props.history, userInfo]);

  return (
    <div className="login">
      <Card>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className="login-input">
            <Input
              id="email"
              label="Email address"
              type="text"
              placeholder="Enter your email"
              message={error.email}
              handleChange={handleChange}
              value={userData.email}
            />
            <Input
              id="password"
              label="Password"
              type="text"
              placeholder="Enter your password"
              message={error}
              handleChange={handleChange}
              value={userData.password}
            />
          </div>
          <div className="login-button">
            <Button variant="primary">Login</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
