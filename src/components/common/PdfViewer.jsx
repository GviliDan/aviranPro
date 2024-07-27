import React from 'react';

const PDFViewer = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="/aviranPdf.pdf" 
        className="w-full h-full"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
