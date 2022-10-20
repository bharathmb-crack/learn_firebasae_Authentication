import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h3> Register </h3>
        <input type="text" placeholder="Email..." />
        <input type="text" placeholder="Password..." />
        <button>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input type="text" placeholder="Email..." />
        <input type="text" placeholder="Password..." />
        <button>Login</button>
      </div>
      <div>
        <div>
          <span>
            <p>Logged user name:</p> loged name here
          </span>
          <button>sign out</button>
        </div>
      </div>
    </div>
  );
}

export default App;
