import React, { useState } from "react";
import { Childssss } from "./9.childssss";

export const Parentssss = () => {
  const [email, setEmail] = useState("gmail.com");

  const [city, setCity] = useState("Delhi");

  return (
    <div>
      <Childssss setEmails={setEmail} setCitys={setCity} />

      <h1>
        {" "}
        hello how {email} {city} are you{" "}
      </h1>
    </div>
  );
};
