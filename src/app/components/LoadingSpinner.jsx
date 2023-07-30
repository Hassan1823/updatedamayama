import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-gray-300 border-solid rounded-full animate-spin h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
