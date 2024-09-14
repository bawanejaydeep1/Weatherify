import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Context";
import './Login.css';

import Loading from './Loading';
import Navbar from './Navbar';
import City from './City';
import Footer from './Footer';


function Logout() {

  const navigate = useNavigate();
  global.ok=0;
  navigate(`/`);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <>
        {loading && <Loading />}
        <Navbar />
        <City />
        <Footer />
    </>
  );
}


export default Logout;
