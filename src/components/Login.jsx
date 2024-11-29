import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../img.jpg'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const navigate = useNavigate();
  
 const handleLogin=(()=>{

  const setdata=localStorage.setItem('email',email)
    navigate("/dashboard")
 })


 
  return (
    <div >
      <Header />
      <div style={{height:"100vh",flexDirection:'column'}} className="bg-light container-fluid d-flex align-items-center justify-content-center  d-flex align-item-center justify-content-center">
        <div
          className="row shadow-sm border rounded overflow-hidden bg-white"
          style={{ width: '80%', maxWidth: '900px' }}
        >
          <div className="col-md-6 p-5">
            <div className="text-start">
              <h2 className="fw-bold mb-3">Login</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">
                  User Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Enter your Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    placeholder="Type your password here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  >
                    👁️
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className="ms-2">
                    Remember me?
                  </label>
                </div>
                <a href="#" className="text-muted">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Login
              </button>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-block p-0">
            <img
             src={img}
              alt="login visual"
              className="img-fluid"
              style={{ objectFit: 'cover', height: '100%' }}
              loading="lazy" // Lazy load the image
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;