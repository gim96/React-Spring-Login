import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      history.push("/dashboard");
    }
  });
  function login() {
    const cred = {
      username: user,
      password: pass,
    };

    axios.post("http://localhost:8080/login/", cred).then((resp) => {
      if (resp.data.length > 0) {
        localStorage.setItem("id", resp.data[0][0]);
        localStorage.setItem("user", resp.data[0][1]);
        localStorage.setItem("role", resp.data[0][2]);
        history.push("/dashboard");
      } else {
        alert("Username or password is wrong.!");
      }
      console.log(resp.data);
    });
  }

  return (
    <div>
      <center>
        <div
          style={{ paddingTop: "10%", backgroundColor: "silver", width: "40%" }}
        >
          <table align="center" cellPadding="5" width="40%">
            <tr>
              <td align="center">
                <h4>User Login</h4>
              </td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
            </tr>
            <tr>
              <td>Username</td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => setUser(e.target.value)}
                  class="form-control"
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
            </tr>

            <tr>
              <td>
                <input
                  type="text"
                  onChange={(e) => setPass(e.target.value)}
                  class="form-control"
                />
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  class="btn btn-dark btn-lg btn-block"
                  value="Login"
                  onClick={login}
                />
              </td>
            </tr>
          </table>
          <br />
          <br />
        </div>
      </center>
    </div>
  );
}
