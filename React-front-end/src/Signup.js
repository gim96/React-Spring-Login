import { BrowserRouter as Router, Route } from "react-router-dom";

import { useState } from "react";

function Signup() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRepass] = useState("");

  function register() {}

  return (
    <div>
      <center>
        <div
          style={{ paddingTop: "10%", backgroundColor: "silver", width: "40%" }}
        >
          <table align="center" cellPadding="5" width="40%">
            <tr>
              <td align="center">
                <h4>Sign up</h4>
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
                <input type="text" class="form-control" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
            </tr>

            <tr>
              <td>
                <input type="text" class="form-control" />
              </td>
            </tr>

            <tr>
              <td>Re-enter Password</td>
            </tr>

            <tr>
              <td>
                <input type="text" class="form-control" />
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
                  value="Signup"
                  onClick={register}
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

export default Signup;
