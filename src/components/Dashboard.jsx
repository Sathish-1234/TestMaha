import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../Header';

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error('Please select a file to upload!');
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('documents', file);
    });

    try {
      const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadedFiles((prev) => [...prev, ...data.files]);
        toast.success('File(s) uploaded successfully!');
      } else {
        toast.error('Failed to upload file(s).');
      }
    } catch (error) {
      toast.error('An unexpected error occurred while uploading.');
    }
  };

  const handleDownload = async (fileName) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_FOS_CLIENT_API}/download/${fileName}`
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        toast.success(`Downloading ${fileName}...`);
      } else {
        toast.error('Failed to download the file.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred while downloading.');
    }
  };

  return (
    <div>
      <Header />
      <div className="dashboard container mt-5">
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="row">
          {/* Upload Section */}
          <div className="col-md-6">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">Upload Documents</h5>
                <form onSubmit={handleUpload} className="mt-3">
                  <div className="mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="fileUpload"
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Upload Files
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Uploaded Files List */}
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Uploaded Documents</h5>
                {uploadedFiles.length === 0 ? (
                  <p className="text-muted text-center mt-3">No files uploaded yet.</p>
                ) : (
                  <ul className="list-group mt-3">
                    {uploadedFiles.map((file, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>{file.fileName}</span>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleDownload(file.fileName)}
                        >
                          Download
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
