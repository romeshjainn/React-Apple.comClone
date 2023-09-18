import { Component } from "react";

class Misile extends Component {
  state = {
    Output: "Your missile could not be lauched",
    text: "Off",
    text1: "Off",
    text2: "Off",
    text3: "Off",
  };

  changeText = (text) => {
    this.setState({ text });
  };
  changeText1 = (text1) => {
    this.setState({ text1 });
  };

  changeText2 = (text2) => {
    this.setState({ text2 });
  };

  changeText3 = (text3) => {
    this.setState({ text3 });
  };

  change = () => {
    this.setState.Output == "Your missile has been lauched successfully";
  };

  // ({this.state.text}==="On" && {this.state.text1}==="On" &&
  //             {this.state.text2}==="On" && {this.state.text3}==="On")? this.change():"";
  //             <p>Output: {this.state.Output}</p>

  render() {
    return (
      <div>
        <div className="first">
          <span>Open Tunnel</span>
          <button
            onClick={() => {
              this.changeText("On");
            }}
          >
            {" "}
            {this.state.text}{" "}
          </button>
        </div>
        <div className="second">
          <span> Enable power</span>
          <button
            onClick={() => {
              this.changeText1("On");
            }}
          >
            {" "}
            {this.state.text1}{" "}
          </button>
        </div>
        <div className="third">
          <span> Start countdown</span>
          <button
            onClick={() => {
              this.changeText2("On");
            }}
          >
            {" "}
            {this.state.text2}{" "}
          </button>
        </div>
        <div className="fourth">
          <span> Launch Missile</span>
          <button
            onClick={() => {
              this.changeText3("On");
            }}
          >
            {" "}
            {this.state.text3}{" "}
          </button>
        </div>
        {/* <div>
            if({this.state.OpenTunnel}===true && {this.state.OpenTunnel}===true && {this.state.OpenTunnel}===true && {this.state.OpenTunnel}===true)
{
console.log("Your missile has been lauched successfully");
 }
 else
 {
console.log("Your missile could not be lauched");    
}
</div> */}
        <div>
          ({this.state.text}==="On" && {this.state.text1}==="On" &&
          {this.state.text2}==="On" && {this.state.text3}==="On")?
          this.change():"";
          <p>Output: {this.state.Output}</p>
        </div>
      </div>
    );
  }
}

export default Misile;
