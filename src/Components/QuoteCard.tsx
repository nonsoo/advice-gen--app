import { FC } from "react";

import Divider from "../imgs/pattern-divider-desktop.svg";
import Dice from "../imgs/icon-dice.svg";

interface Props {
  quoteText: string;
  quoteId: number;
  getQuote: () => Promise<void>;
}
const QuoteCard: FC<Props> = ({ quoteText, getQuote, quoteId }) => {
  return (
    <section className="Quote">
      <p className="Quote__Title">Advice #{quoteId}</p>
      <p className="Quote__Text">"{quoteText}"</p>
      <img src={Divider} alt="" className="Quote__Divider" />
      <div className="diceCon" onClick={() => getQuote()}>
        <img src={Dice} alt="" className="Quote__Dice" />
      </div>
    </section>
  );
};

export default QuoteCard;
