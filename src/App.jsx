import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Blog from "./components/Blog";
import Testimonial from "./components/testimonials";
import DownloadApp from "./components/Download";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollup";
import Tour from "./components/Tour";
import Offers from "./components/Offers";
import Offers2 from "./components/offers2";
import Backpacking from "./components/Backpacking";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Blog />
      <Offers />
      <Tour />
      <Offers2 />
      <Backpacking />
      <Testimonial />
      <DownloadApp />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
