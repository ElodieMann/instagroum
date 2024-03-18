import React, { useState } from "react";
import styles from "./LoginSignup.module.scss";

const LoginSignup = ({ handleLogin, handleSignup }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    fullname: "",
  });

  const onChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleSignup(user);  
    } else {
      handleLogin(user);
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={styles.loginSignupContainer}>
      <h2 className={styles.title}>Instastar</h2>
      <form onSubmit={onSubmit}>
        {isSignup && (
          <div>
            <input
              type="text"
              value={user.fullname}
              onChange={(e) => onChange("fullname", e.target.value)}
              placeholder="Fullname"
              required
              className={styles.inputField}
            />
          </div>
        )}
        <div>
          <input
            type="text"
            value={user.username}
            onChange={(e) => onChange("username", e.target.value)}
            placeholder="Username"
            required
            className={styles.inputField}
          />
        </div>
        <div>
          <input
            type="password"
            value={user.password}
            onChange={(e) => onChange("password", e.target.value)}
            placeholder="Password"
            required
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.button}>
          {isSignup ? "Signup" : "Login"}
        </button>
        <div className={styles.divider}>OR</div>
        <button type="button" onClick={toggleForm} className={styles.button}>
          {isSignup ? "Go to Login" : "Signup!"}
        </button>
      </form>
    </div>
  );
};

export default LoginSignup;
