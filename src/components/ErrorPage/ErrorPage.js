import React from 'react';

const BigDesktopError = () => {
  const errorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '50px',
    color: 'red',
    fontWeight: 'bold',
  };

  const errorMessageStyle = {
    marginBottom: '20px',
  };

  const errorDescriptionStyle = {
    fontSize: '24px',
  };

  const errorImageStyle = {
    width: '100%', // Set image width to 100% for mobile view
    height: 'auto', // Keep aspect ratio
    maxWidth: '400px', // Limit maximum image width for desktop view
    maxHeight: '200px', // Limit maximum image height for desktop view
    marginBottom: '20px',
  };

  return (
    <div style={errorContainerStyle}>
      <img
        src="https://i.ibb.co/W6tgcKQ/softcodeon.gif"
        alt="Error"
        style={errorImageStyle}
      />
      <div style={errorMessageStyle}>Oops! Something went wrong.</div>
      <div style={errorDescriptionStyle}>
        We apologize for the inconvenience.
      </div>
      <div style={errorDescriptionStyle}>
        Please try again later or contact support.
      </div>
    </div>
  );
};

export default BigDesktopError;
