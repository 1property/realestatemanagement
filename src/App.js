import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <HashRouter>
      <div className="background"></div>
      <div className="content">
        <Header />
        <Layout />
      </div>
    </HashRouter>
  );
}

export default App;