import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";
import OurProduct from "./components/OurProduct";
//import LoginPage from "./components/LoginPage";
import Kontak from "./components/Kontak";

export default function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/LoginPage" element={<LoginPage />} /> */}

        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Tentang-Kami" element={<About />} />
                <Route path="/Produk-Kami" element={<OurProduct />} />
                <Route path="/Kegiatan" element={<News />} />
                <Route path="/Kontak" element={<Kontak />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </>
  );
}
