import react from "react";
import "./SectionA.css";
import appleSaluteImg from "./assets/imgSalute.png"
export const SectionA = () => {
  return (
    <section>
      <h2>Save on Mac or iPad for college</h2>
      <h3>Plus a gift card upto $150</h3>
      <button>Shop now &gt;</button>
      <img className="img" src={appleSaluteImg} alt="" />
    </section>
  );
};


