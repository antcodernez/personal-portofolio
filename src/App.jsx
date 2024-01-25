import {Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About, Home, Proyects, Blog , NotFound, Contact} from "./pages"
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Contact/>}/>
          <Route path="/projects" element={<Proyects/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
