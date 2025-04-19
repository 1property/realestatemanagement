import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="background"></div>
      <div className="content">
        <Header />
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;