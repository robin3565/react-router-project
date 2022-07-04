import React from 'react'
import { useNavigate } from "react-router-dom"

const Aboutpage = () => {

    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate('/');
    };

  return (
    <div>
      <h1>AboutPage</h1>
      <button onClick={goToHomepage}>Go to Home-page</button>
    </div>
  )
}

export default Aboutpage;
