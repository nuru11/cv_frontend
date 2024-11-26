import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const UploadPdf = () => {
    const cvRef = useRef();

    const downloadAndUploadCV = async () => {
        const element = cvRef.current;
        const options = {
            margin: 1,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        const pdfBlob = await html2pdf().from(element).set(options).output('blob');

        // Prepare the form data for upload
        const formData = new FormData();
        formData.append('pdf', pdfBlob, 'CV.pdf');

        // Upload the PDF blob using fetch
        try {
            const response = await fetch('http://localhost:4000/uploadpdf', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Upload success:', result);
            } else {
                console.error('Error uploading file:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <button onClick={downloadAndUploadCV}>Download and Upload CV</button>
            <div ref={cvRef} style={{ display: 'none' }}>
                {/* Your CV content here */}
                <h1>Curriculum Vitae</h1>
                {/* Add more CV content, such as personal info, education, etc. */}
            </div>
        </div>
    );
}

export default UploadPdf;