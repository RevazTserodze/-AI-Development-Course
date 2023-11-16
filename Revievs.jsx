import React from "react";

function Revievs({id}) {
  return (
    <div id={id} className="container-fluid" style={{ display: "block", textAlign: "center", justifyContent: "center", marginTop:'110px' }}>
      <div className="row">
        <div className="col-12">
          <h1 style={{ fontFamily: 'Roboto' }}>Here Is Our Top (AI) Students</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img style={{width:'91px'}} src='https://cdn-icons-png.flaticon.com/128/11757/11757089.png' alt="AI Icon" />
        </div>
      </div>
    </div>
  )
}

export default Revievs;
