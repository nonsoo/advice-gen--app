import { FC, useState } from "react";

import "./css/layout.css";
import Quote from "./Components/QuoteCard";

import axios from "axios";

const App: FC = () => {
  const [QuoteRes, setQuoteRes] = useState<any>(null);

  const genQuote = async (): Promise<void> => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setQuoteRes(res.data.slip);
  };

  return (
    <div className="App">
      <Quote
        quoteText={QuoteRes.advice}
        quoteId={QuoteRes.id}
        getQuote={genQuote}
      />
    </div>
  );
};

export default App;
