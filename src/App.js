import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ProductItem from  './pages/ProductItem';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product-detail" element={<ProductItem/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
