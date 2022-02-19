import { FC } from "react";

import "./css/layout.css";
import Quote from "./Components/QuoteCard";

const App: FC = () => {
  return (
    <div className="App">
      <Quote />
    </div>
  );
};

export default App;
