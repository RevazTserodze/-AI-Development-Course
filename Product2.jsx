import React, { useEffect, useState } from "react";
import "./ProductSecond.css";

function ProductSecond() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(document.getElementById("product-second-container"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div  className={`container animated-container ${isVisible ? 'lazy-load' : ''}`} id="product-second-container">
      <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className={`col-lg-7 col-md-10 col-sm-10`}>
          <p style={{fontSize:'25px',color:'red', }}>After completing our comprehensive course, you'll have gained the knowledge and hands-on experience needed to approach AI projects with confidence. From understanding the fundamentals to applying advanced techniques, our program equips you with the skills to excel in the field of AI.</p>
        </div>
        <div className={`col-lg-4 col-md-10 col-sm-10`}>
          <img style={{borderRadius:'50%'}} className="img-fluid" src="https://img.freepik.com/premium-photo/awardwinning-photo-braincomputer-interface-headset-generative-ai_390829-68.jpg" alt="AI" />
        </div>
      </div>
    </div>
  );
}

export default ProductSecond;
