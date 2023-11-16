import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({id}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [registeredEmails, setRegisteredEmails] = useState([]);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registeredEmails.includes(formData.email)) {
      alert('Email already registered!');
      return;
    }
    setRegisteredEmails([...registeredEmails, formData.email]);
    setRegistrationComplete(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    console.log('Form submitted:', formData);
  };

  const handleReturn = () => {
    setRegistrationComplete(false);
  };

  return (
    <div id={id} className="container" style={{ marginTop: '100px' }}>
      <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 style={{ fontFamily: 'monospace' }}>Register Here</h2>
          {!registrationComplete ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          ) : (
            <div>
              <p>Thank you for registering!</p>
              <p>
                Our customer support team will provide more information via email soon.
              </p>
              <button style={{marginTop:'20px',}} className="btn btn-primary" onClick={handleReturn}>
                Return to Registration Form
              </button>
            </div>
          )}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img
            style={{marginTop:'20px', borderRadius: '7px' }}
            src="https://imageio.forbes.com/specials-images/imageserve/64213c10fc7ed6f0a3eb47ae/The-Intersection-Of-AI-And-Human-Creativity--Can-Machines-Really-Be-Creative-/960x0.jpg?height=473&width=711&fit=bounds"
            alt="AI and Human Creativity"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
