import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Config } from "../../../Config/config";
import "./AdministratorLogin.scss";

function AdministratorLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function sendData() {
    if (username === "" || password === "") return;
    axios
      .post(`${Config.baseUrl}api/loginAdministrator`, {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.status === "error") return setErrorMessage(true);

        localStorage.setItem("adminName", res.data.username);
        setRedirect(true);
      })
      .catch((error) => console.log(error.data));
  }

  return redirect ? (
    <Navigate to="/administratorDashboard" replace={true} />
  ) : (
    <section id="administratorLogin">
      <div className="adminLoginContainer">
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <form>
            <input
              type="text"
              data-testid="adminUsername"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              data-testid="adminPassword"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button onClick={() => sendData()}>Posalji ...</button>
            </div>
          </form>
        </div>
        <div
          style={
            errorMessage
              ? { textAlign: "center", display: "block" }
              : { display: "none" }
          }
        >
          <p>Korisnicko ime ili lozinka nisu tacni!</p>
        </div>
      </div>
    </section>
  );
}

export default AdministratorLogin;
