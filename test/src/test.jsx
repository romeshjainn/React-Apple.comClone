import react from "react";
import { useState } from "react";
import "./Test.css"
export const Test = () => {
  const [profile, setProfile] = useState({
    myName: "hello"
  });

    <div className="div">
      <input type="text" value={profile.myName} />
    </div>;
};
