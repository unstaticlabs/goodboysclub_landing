import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sponsors } from "./components/Sponsors";
import "./App.css";

import { Route, Routes } from "react-router";
import { TermsOfService } from "./components/TermsOfService";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <>
              <Hero />
              <Sponsors />
              <FAQ />
            </>
          }
        />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
