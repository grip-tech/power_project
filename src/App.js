import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Products from "./pages/products/Products";
import Solutions from "./pages/solutions/Solutions";
import Resource from "./pages/resource/Resource";
import Support from "./pages/support/Support";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="products" element={<Products/>} />
            <Route path="solutions" element={<Solutions/>} />
            <Route path="resource" element={<Resource/>} />
            <Route path="support" element={<Support/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
