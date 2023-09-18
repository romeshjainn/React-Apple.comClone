import React, { useState } from "react";
import { BetaComponent } from "./BetaComponent";

export const PapaComponent = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <BetaComponent myEmail={email} />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};
