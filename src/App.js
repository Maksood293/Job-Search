import { useDispatch, useSelector } from "react-redux";
import { singout } from "./actions/userAction";
import "./App.scss";
import { Button } from "./components/Button/Button";
import Logo from "./assets/MyJobs1.svg";
import HomePage from "./screens/HomePage/HomePage";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import { SecureRoute } from "./components/SecureRoute/SecureRoute";
import { JobsPage } from "./screens/JobsPage/JobsPage";
import icon from "./assets/awesome-caret-down.svg";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userSingin = useSelector((state) => state.userSingin);
  const { userInfo } = userSingin;
  const [logOut, setLogOut] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
           <Link to="/"> <img src={Logo} alt="Logo" /></Link>  
          </div>
          <div>
            {userInfo ? (
              <>
                <div className="name" onClick={() => setLogOut((prev) => !prev)}>
                  <p>{userInfo?.name.slice(0, 1)}</p>
                  <img
                    src={icon}
                    alt="icon"
                    className={logOut ? "upper-icon" : null}
                    
                  />
                </div>
                {logOut ? (
                  <Button variant="white" onClick={() => dispatch(singout())}>
                    Logout
                  </Button>
                ) : null}
              </>
            ) : (
              <Button variant="outline">
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </header>
        <main>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" exact component={Login}></Route>
          <SecureRoute
            component={JobsPage}
            exact={true}
            path="/jobs"
            title="Posted Jobs"
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
