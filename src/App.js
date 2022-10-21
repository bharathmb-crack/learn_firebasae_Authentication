import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        createEmail,
        createPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

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
            setSignInEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setSignInPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </div>
      <div>
        <p>
          {" "}
          <span className="large-text">Logged user name:</span>
          {user?.email}
        </p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default App;
