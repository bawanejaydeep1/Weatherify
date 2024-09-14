import React, { useEffect, useState } from 'react';

import Loading from './Loading';
import Navbar from './Navbar';
import Slider from "./Slider";
import Calender from './Calender';
import Footer from './Footer';

function News() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <Navbar />
      <Slider />
      <Calender />
      <Footer />
    </div>
  );
}

export default News;
