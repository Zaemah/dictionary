import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/valeria-markish"
            target="_blank"
            rel="noreferrer"
          >
            Emmah Zanele Mpofu
          </a>
          , is{" "}
          <a
            href="https://github.com/valeria-markish/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionaryy-react-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;