import react from "react";
import logo from "./assets/logo.png";
import "./Header.css";
import circle from "./assets/circle.png";
import circlecheck from "./assets/circlecheck.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerA">
        <div className="headerA-divA">
          <img src={logo} />
          <h4>Prevent</h4>
        </div>
        <div className="headerA-divB">
          <p>Have an account?</p>
          <h5>LOG IN</h5>
        </div>
      </div>
      <div className="headerB">
        <button>
          <img className="header-imgs" src={circlecheck} />
          <p>PERSONAL INFO</p>
        </button>
        <button>
          <img className="header-imgs" src={circlecheck} />
          <p>ELIGIBILITY</p>
        </button>
        <button>
          <img className="header-imgs" src={circle} />
          <p>YOUR HEALTH</p>
        </button>
        <button>
          <img className="header-imgs" src={circle} />
          <p>COMMITMENT</p>
        </button>
      </div>
    </header>
  );
};
