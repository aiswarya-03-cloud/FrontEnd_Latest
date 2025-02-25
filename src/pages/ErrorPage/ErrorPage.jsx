import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h1>404 - Page Not Found !</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-accent" onClick={() => navigate(user.home_route)}>
                Navigate to Home
            </button>
    </div>
  );
}    