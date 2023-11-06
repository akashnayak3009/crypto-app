import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
