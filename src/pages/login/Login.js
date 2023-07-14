import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import { withTheme } from "@emotion/react";


export default function Login() {

  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext)



  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value },
      dispatch);
  }

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick} >
            <input placeholder="Email" required type="email" className="loginInput" ref={email} />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              minLength="6"
              ref={password}
            />
            <button type="submit" disabled={isFetching} className="loginButton">{isFetching ? (<CircularProgress style={{ color: "white" }} />)
              :
              ("Log In")}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (<CircularProgress style={{ color: "white" }} />) : ("Create a New Account")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
