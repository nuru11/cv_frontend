import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const CVDownload = () => {
    const [htmlContent, setHtmlContent] = useState('');

    // Fetch the HTML content from content.html
    const fetchHtmlContent = async () => {
        try {
            const response = await fetch('./content.html'); // Use relative path
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const text = await response.text();
            setHtmlContent(text);
        } catch (error) {
            console.error('Error fetching HTML content:', error);
        }
    };

    const downloadCV = async () => {
        if (!htmlContent) {
            console.error('HTML content is not loaded yet.');
            return;
        }

        const element = document.createElement('div');
        element.innerHTML = htmlContent;

        const options = {
            margin: 0.5,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Use html2pdf to generate the PDF from the created element
        html2pdf().from(element).set(options).save();
    };

    return (
        <div>
            <button type="button" onClick={fetchHtmlContent}>
                Load CV Content
            </button>
            <button type="button" onClick={downloadCV}>
                Download CV as PDF
            </button>
        </div>
    );
};

export default CVDownload;