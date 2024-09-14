import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Navbar from "./Navbar";
import City from "./City";
import Footer from "./Footer";

import "./Home.css";


function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <>
      {loading && <Loading />}{" "}
      <Navbar />
      <City />
      <Footer />
    </>
  );
}

export default Home;
