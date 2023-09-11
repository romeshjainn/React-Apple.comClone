import react from "react";
import logo from "./assets/logo.png";
import circlecheck from "./assets/circlecheck.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerA">
        <img src={logo} />
        <div>
          <p>Have an account?</p>
          <h5>LOG IN</h5>
        </div>
      </div>
      <div className="headerB">
        <button>
          <img src={circlecheck} />
          <p>PERSONAL INFO</p>
        </button>
        <button>
          <img src={circlecheck} />
          <p>ELIGIBILITY</p>
        </button>
        <button>
          <img src={circlecheck} />
          <p>YOUR HEALTH</p>
        </button>
        <button>
          <img src={circlecheck} />
          <p>COMMITMENT</p>
        </button>
      </div>
    </header>
  );
};
