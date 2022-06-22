import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import NavLinkTest from "./NavLinkTest";
import Router1 from "./Router1";
import Router2 from "./Router2";
import Test from "./Test";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/router1/:param" element={<Router1 />} />
          <Route path="/router2" element={<Router2 />}>
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="/navlink" element={<NavLinkTest />} />
          <Route path="/navlink2" element={<NavLinkTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
