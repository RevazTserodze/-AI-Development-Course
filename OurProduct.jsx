import React from "react";

function OurProduct({id}) {
  return (
    <div id={id} className="container-fluid" style={{ display: "block", textAlign: "center", justifyContent: "center", marginTop:'50px' }}>
      <div className="row">
        <div className="col-12">
          <h1 style={{ fontFamily: 'Roboto' }}>Our Product</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src='https://cdn-icons-png.flaticon.com/128/9580/9580638.png' alt="AI Icon" />
        </div>
      </div>
    </div>
  )
}

export default OurProduct;