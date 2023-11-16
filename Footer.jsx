import React, { useState } from 'react';
import './Footer.css'; // Import the CSS file for custom styles

const Footer = ({id}) => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email && !formData.message) {
      setErrorMessage('Please enter your email and message.');
      setShowConfirmation(false); // Hide confirmation if it was shown
      return;
    }

    if (!formData.email) {
      setErrorMessage('Please enter your email.');
      setShowConfirmation(false); // Hide confirmation if it was shown
      return;
    }

    if (!formData.message) {
      setErrorMessage('Please enter your message.');
      setShowConfirmation(false); // Hide confirmation if it was shown
      return;
    }

    // Assuming you have a function to handle form submission
    // You can replace this with your actual form submission logic

    // Show confirmation message
    setShowConfirmation(true);

    // Reset form fields and error message
    setFormData({ email: '', message: '' });
    setErrorMessage('');

    // Hide confirmation message after 10 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 10000);

    // Hide error message after 10 seconds
    setTimeout(() => {
      setErrorMessage('');
    }, 10000);
  };

  return (
    <footer id={id} style={{marginTop:'180px',margin:'20px',padding:"20px"}} className="bg-dark text-white py-5">
      <div className="container mx-auto p-0 m-0">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-10 mb-3 ">
            <h5>About Us</h5>
            <p>Through our dedicated efforts and unwavering commitment, our company has had the privilege of assisting over 5 million students in achieving their educational goals. We take immense pride in the positive impact we've made in the lives of these students, providing them with invaluable support and resources on their academic journeys.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <h5>Follow Us On</h5>
            <div className="social-icons">
              <a href="#" rel="noopener noreferrer" className="text-white me-3">
                <img width='30' height='30' src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png' alt="Icon 1" />
              </a>
              <a href="#" rel="noopener noreferrer" className="text-white me-3">
                <img width='30' height='30' src='https://cdn-icons-png.flaticon.com/128/733/733579.png' alt="Icon 2" />
              </a>
              <a href="#" rel="noopener noreferrer" className="text-white">
                <img width='30' height='30' src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt="Icon 3" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-10">
            <h5>Contact Us</h5>
            <p>Email: info.(Ai)DevelopmentCourse@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {errorMessage && (
                <div className="alert alert-danger fade show">
                  {errorMessage}
                </div>
              )}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {showConfirmation && (
              <div className="alert alert-success fade show mt-3">
                We have received your message and we will get in touch soon!
              </div>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy;Company (Ai Development Course). All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
