import React from "react";
import './Info.css'; // Create a CSS file (Info.css) for animations

function Info() {
  return (
    <div style={{ marginTop: '50px' }} className="container-fluid">
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-lg-5 col-md-6 col-sm-12 animated fadeInLeft"> {/* Added animated fadeInLeft class */}
          <p style={{ color: 'rgb(138, 98, 239)', fontSize: '25px' }}>
            Artificial Intelligence (AI) refers to the development of computer systems capable of performing tasks that typically require human intelligence. These tasks can include learning, reasoning, problem-solving, understanding natural language, and even perceiving the environment through vision or speech.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 animated fadeInRight"> {/* Added animated fadeInRight class */}
          <img
            style={{
              marginTop: '20px',
              borderRadius: '300px',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
            }}
            className="img-fluid"
            src="https://img.freepik.com/premium-photo/purple-robot-with-tablet-3d-render_878763-229.jpg"
            alt="AI Robot"
          />
        </div>
      </div>
    </div>
  )
}

export default Info;


