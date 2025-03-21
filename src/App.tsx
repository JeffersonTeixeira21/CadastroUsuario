import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App
