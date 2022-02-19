import { Helmet } from "react-helmet";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bookify</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Place to connect with bookworms" />
      </Helmet>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
