import { FC } from "react";

import Divider from "../imgs/pattern-divider-desktop.svg";
import Dice from "../imgs/icon-dice.svg";

const QuoteCard: FC = () => {
  return (
    <section className="Quote">
      <p className="Quote__Title">Advice #117</p>
      <p className="Quote__Text">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        doloremque delectus nihil sit amet."
      </p>
      <img src={Divider} alt="" className="Quote__Divider" />
      <div className="diceCon">
        <img src={Dice} alt="" className="Quote__Dice" />
      </div>
    </section>
  );
};

export default QuoteCard;
