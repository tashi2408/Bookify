import { Helmet } from "react-helmet";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Connect from "./pages/Connect";

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
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/connect" element={<Connect />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
