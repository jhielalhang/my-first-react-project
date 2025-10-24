import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about" data-aos="fade-up"><About /></section>
        <section id="contact" data-aos="fade-up"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;