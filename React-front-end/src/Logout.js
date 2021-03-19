import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Logout() {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      localStorage.clear();
      history.push("/login");
    }
  });

  return (
    <div>
      <div>
        <h2>hey , {localStorage.getItem("user")}</h2>
        <a href="/logout">
          <input type="button" class="btn btn-dark " value="Logout" />
        </a>
      </div>
    </div>
  );
}
