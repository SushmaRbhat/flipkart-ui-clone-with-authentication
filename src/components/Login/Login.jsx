import React, { useContext, useState } from "react";
import "./Login.scss";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { TextField } from "@mui/material";
import { AppContext } from "../../context/context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const { openLoginModal } = state;

  const login = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //setOpen(false);
        dispatch({ type: "SET_LOGIN_MODAL", payload: false });
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} !`);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };
  const register = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "SET_LOGIN_MODAL", payload: false });
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div className="left-container">
        <h3>Login</h3>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="right-container">
        <form className="form-container">
          <div className="input-field">
            <TextField
              label="Enter Email"
              variant="standard"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="primary"
              fullWidth
            />
          </div>
          <div className="input-field">
            <TextField
              label="Enter Password"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </div>
          <button className="sign-in" type="submit" onClick={login}>
            Submit
          </button>
          <div className="register-btn">
            <button onClick={register}>
              New to Flipkart? Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
