import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
export const SecureRoute = ({ component: Component, ...rest }) => {
  const userSingin = useSelector((state) => state.userSingin);
  const { userInfo } = userSingin;
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? <Component {...props}></Component> : <Redirect to="/" />
      }
    ></Route>
  );
};
