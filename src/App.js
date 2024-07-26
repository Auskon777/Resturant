import HomePage from "./Pages/Home";
import Cart from "./Pages/Cart";
import Deposit from "./Pages/Deposit";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/Cart" Component={Cart} />
          <Route path="/Deposit" Component={Deposit} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
