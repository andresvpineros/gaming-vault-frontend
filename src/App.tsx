import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  const handleRedirectLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <h1>Gaming Vault</h1>
      <button onClick={handleRedirectLogin} className="start-btn">
        Start
      </button>
    </div>
  );
};

export default App;
