import { useNavigate } from "react-router-dom";
import errorImg from "../assets/errorPage.svg";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main className="errorPage">
      <img src={errorImg} />
      <h1>404 Page Not Found</h1>
      <div className="home">
        <label htmlFor="returnHome">Click here to return home: </label>
        <button id="returnHome" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </main>
  );
}
