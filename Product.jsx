import React, { useEffect, useState } from "react";
import './ProductOne.css'; 

function Product({id}) {
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

    observer.observe(document.getElementById("product-container"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{marginTop:'120px'}} className="container" id="product-container">
      <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className={`col-lg-4 col-md-10 col-sm-10 ${isVisible ? 'lazy-load animated-container' : 'fade-in'}`}>
          <img style={{ borderRadius: '50px' }} className="img-fluid" src="https://media.licdn.com/dms/image/D4D12AQFJmFW3vbyLFg/article-cover_image-shrink_720_1280/0/1692798532019?e=2147483647&v=beta&t=h5IKuIGAtjbTJzl2epBoREy3HXNRiD9gRHVQ666fRIo" alt="Product" />
        </div>
        <div className={`col-lg-7 col-md-12 col-sm-10 ${isVisible ? 'lazy-load animated-container' : 'fade-in'}`}>
          <p style={{ margin: '45px', fontSize: "25px", color: "purple" }}>
            introducing our cutting-edge website product, meticulously crafted to meet your specific needs. With a team of skilled developers and designers, we've poured over 7 years of expertise into creating a seamless and user-friendly experience. From sleek interfaces to robust functionality, our product is tailored to elevate your online presence. Explore a world of possibilities with our meticulously engineered solution, designed to drive results and leave a lasting impression on your audience
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
