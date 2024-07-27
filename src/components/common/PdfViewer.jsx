import React from 'react';
import samplePdf from '../../assets/pdf/aviranPdf.pdf';

const PDFViewer = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src={samplePdf}
        className="w-full h-full border-none"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer;
