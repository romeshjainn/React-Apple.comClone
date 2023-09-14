import React, { useState } from "react";

export const Missile = () => {
  const [launched, setLaunched] = useState("");
  const [tColor, setTColor] = useState("white");
  const [pColor, setPColor] = useState("white");
  const [cColor, setCColor] = useState("white");
  const [mColor, setMColor] = useState("white");

  const [tunnelOff, setTunnelOff] = useState("off");
  const [powerOff, setPowerOff] = useState("off");
  const [countdownOff, setCountdownOff] = useState("off");
  const [missileOff, setMissileOff] = useState("off");

  const [isActive, setActive] = useState({
    openTunnel: false,
    enablePower: false,
    startCountdown: false,
    launch: false,
  });

  const changeBtnT = () => {
    if (!isActive.openTunnel) {
      setActive((prevState) => ({
        ...prevState,
        openTunnel: true,
      }));
      setTunnelOff("on");
      setTColor("red");
      setPowerOff("off");
      setPColor("white");
      setCountdownOff("off");
      setCColor("white");
      setMissileOff("off");
      setMColor("white");
      setLaunched("");
    } else {
      setTunnelOff("off");
      setTColor("white");
    }
  };

  const changeBtnP = () => {
    if (!isActive.enablePower && isActive.openTunnel) {
      setActive((prevState) => ({
        ...prevState,
        enablePower: true,
      }));
      setPowerOff("on");
      setPColor("red");
      setCountdownOff("off");
      setCColor("white");
      setMissileOff("off");
      setMColor("white");
      setLaunched("");
    }
  };

  const changeBtnC = () => {
    if (!isActive.startCountdown && isActive.enablePower) {
      setActive((prevState) => ({
        ...prevState,
        startCountdown: true,
      }));
      setCountdownOff("on");
      setCColor("red");

      setMissileOff("off");
      setMColor("white");
      setLaunched("");
    }
  };

  const changeBtnM = () => {
    if (
      !isActive.launch &&
      isActive.startCountdown &&
      isActive.enablePower &&
      isActive.openTunnel
    ) {
      setActive((prevState) => ({
        ...prevState,
        launch: true,
      }));
      setMissileOff("on");
      setMColor("red");
      setLaunched("Missile is launched");
    }
  };

  // const greet = () => {
  //   if (isActive.openTunnel == true) {
  //     setTunnelOff("off");
  //     setTColor("white");
  //   }
  //   console.log("hello ali");
  // };

  return (
    <div style={{ backgroundColor: "yellow", padding: "1rem" }}>
      <div>
        <button style={{ backgroundColor: tColor }} onClick={changeBtnT}>
          Open Tunnel
        </button>
        <button style={{ backgroundColor: pColor }} onClick={changeBtnP}>
          Enable Power
        </button>
        <button style={{ backgroundColor: cColor }} onClick={changeBtnC}>
          Start Countdown
        </button>
        <button style={{ backgroundColor: mColor }} onClick={changeBtnM}>
          Launch Missile
        </button>
      </div>
      <div>
        <button onClick={changeBtnT}>{tunnelOff}</button>
        {/* <button
          onClick={function (event) {
            changeBtnT();
            greet();
          }}
        >
          {tunnelOff}
        </button> */}
        <button onClick={changeBtnP}>{powerOff}</button>
        <button onClick={changeBtnC}>{countdownOff}</button>
        <button onClick={changeBtnM}>{missileOff}</button>
      </div>
      <h6>{launched}</h6>
    </div>
  );
};
