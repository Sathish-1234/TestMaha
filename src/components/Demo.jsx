import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';

// Component for each test box
const TestOptionContainer = ({ testName, testId, imageUrl, onClick }) => (
  <div className="col-md-4 col-sm-6 col-12 mb-4">
    <div
      className="card border-light shadow-sm"
      style={{ cursor: 'pointer', borderRadius: '10px' }}
      onClick={() => onClick(testId)}
    >
      <img
        src={imageUrl}
        alt={testName}
        className="card-img-top"
        style={{
          height: '200px',
          objectFit: 'cover',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{testName}</h5>
      </div>
    </div>
  </div>
);

const Demo = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (for example, checking localStorage)
    const user = localStorage.getItem('email');
    if (!user) {
      // Redirect to login if not authenticated
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) return null;

  // Test data
  const testData = [
    { testName: 'Blood Test', testId: 'blood-test', imageUrl: 'https://via.placeholder.com/300?text=Blood+Test' },
    { testName: 'X-Ray', testId: 'x-ray', imageUrl: 'https://via.placeholder.com/300?text=X-Ray' },
    { testName: 'MRI Scan', testId: 'mri-scan', imageUrl: 'https://via.placeholder.com/300?text=MRI+Scan' },
    { testName: 'Ultrasound', testId: 'ultrasound', imageUrl: 'https://via.placeholder.com/300?text=Ultrasound' },
    { testName: 'ECG', testId: 'ecg', imageUrl: 'https://via.placeholder.com/300?text=ECG' },
    { testName: 'CT Scan', testId: 'ct-scan', imageUrl: 'https://via.placeholder.com/300?text=CT+Scan' },
  ];

  // Handle click on test box
  const handleBoxClick = (testId) => {
    navigate(`/dashboard/${testId}`);
  };

  return (
    <div>
    <Header/>
    
    <div
      className="container-fluid"
      style={{
        backgroundImage: 'url(https://via.placeholder.com/1500x900?text=Background+Image)',
        backgroundSize: 'cover',
        height: '100vh',
        padding: '0',
      }}
    >
      <div className="container py-5">
        <h1 className="text-center text-white mb-4">Medical Test Options</h1>
        <div className="row">
          {testData.map((test) => (
            <TestOptionContainer
              key={test.testId}
              testName={test.testName}
              testId={test.testId}
              imageUrl={test.imageUrl}
              onClick={handleBoxClick}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Demo;