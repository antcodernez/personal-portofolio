import {Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About, Home, Proyects } from "./pages"
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/proyects" element={<Proyects/>}/>
          <Route path="/contact" element={<About/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
