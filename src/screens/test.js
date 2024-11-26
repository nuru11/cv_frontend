import React, { useRef, useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';

function App() {
  const [data, setData] = useState(null);
  const printRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://skywayapi.ntechagent.com/detail/tget-images?createdAt=2024-11-04T12:56:09.000Z`);
        const result = await response.json();
        if (result.status === 'ok') {
          console.log('Fetched dataaaaaaa:', result.data);
          setData(result.data);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const generatePdf = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element, { useCORS: true });
    const imgData = canvas.toDataURL('image/jpeg');

    const opt = {
      margin: 1,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        dpi: 192,
        letterRendering: true,
        useCORS: true
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {data ? (
        <div>
          <div>Name: {data.name}</div>
          <div>Image URL: {data.personalImageUrl}</div>
          <div ref={printRef} style={{ width: '100%', padding: '10px', border: '1px solid #ccc' }}>
            <h1>Test HTML2PDF</h1>
            <p>This is a test page to generate a PDF with embedded images.</p>
            <img src={data.personalImageUrl} alt="Sample" style={{ width: '100%', maxWidth: '600px' }} />
            <img src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" alt="Sample" style={{ width: '100%', maxWidth: '600px' }} />
          </div>
          <button onClick={generatePdf} style={{ marginTop: '20px', padding: '10px 20px' }}>
            Generate PDF
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;