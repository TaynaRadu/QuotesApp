import { useEffect, useState } from "react";

import "./App.css";

type Quote = {
  text: string;
  author: string;
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote | undefined>();

  const handleButtonClick = () => {
    const index = Math.floor(Math.random() * quotes.length);
    const { text, author } = quotes[index];
    setQuote({ text, author });
  };

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div className="container">
      <div className="quote">
        <p className="text">
          {!quote
            ? "Clique no botao para gerar uma fala interessante..."
            : quote.text}
        </p>

        <p className="author">{!quote ? "" : quote.author}</p>

        <button className="button" id="quoteBtn" onClick={handleButtonClick}>
          Gerar citacao
        </button>
      </div>
    </div>
  );
}

export default App;
