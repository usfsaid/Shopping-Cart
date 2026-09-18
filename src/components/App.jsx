import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import NavBar from "./Header/NavBar";
import ShoppingCardProvider from "../context/ShoppingCardContext";

const App = () => {
  return (
    <>
      <ShoppingCardProvider>
        <NavBar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCardProvider>
    </>
  );
};

export default App;
