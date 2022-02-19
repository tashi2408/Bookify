import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bookify</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Place to connect with bookworms" />
      </Helmet>
      <div>HELLO WORLD!!!</div>
    </div>
  );
}

export default App;
