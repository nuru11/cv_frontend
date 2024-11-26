// src/DataDisplay.js
import React, { useEffect, useState } from 'react';

const DataDisplay = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/tt'); // Adjust the URL to your API endpoint
        console.log('Responsessssssssss:', response); // Add this line to log the response object
        const result = await response.json();
        console.log('Responsessssssssss:', result);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <div>llllllss {}</div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`nnnnuru: ${item.surname}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;