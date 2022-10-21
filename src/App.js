import React, { useState } from "react";
import "./App.css";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const register = async () => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        createEmail,
        createPassword
      );
      console.log(createUser);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  // const login = async () => {};
  // const logout = async () => {};

  return (
    <div className="App">
      <div className="container">
        <h3> Register </h3>
        <input
          type="text"
          onChange={(event) => {
            setCreateEmail(event.target.value);
          }}
          placeholder="Email..."
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setCreatePassword(event.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>

      <div className="container2">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setCreatePassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setCreatePassword(event.target.value);
          }}
        />
        <button>Login</button>
      </div>
      <div>
        <p>
          {" "}
          <span className="large-text">Logged user name:</span> loged name here
        </p>
        <button>sign out</button>
      </div>
    </div>
  );
}

export default App;
