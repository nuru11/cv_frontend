// import {useParams} from "react-router-dom"

// export default function DetailList() {
//     const params = useParams();
//    console.log(`lllllllllllllllllllllllllllllllll ${params}`)
//    console.log(params)
//     return (
//         <div className='flex flex-col gap-2'>
//             prfile {params.listid}
//         </div>
//     )
// }
 
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './styles/DetailPage.css'; // Import your CSS file

// const DetailPage = () => {
//   const  id  = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/tget-images/${id.listid}`);
//         const result = await response.json();
//         if (result.status === 'ok') {
//           setData(result.data);
//         } else {
//           console.error('Error fetching data:', result.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) return <div className="loading">Loading...</div>;
//   if (!data) return <div className="error">No data found</div>;

//   return (
//     <div className="detail-page">
//       <h1 className="title">Details for {data.name} {data.surname}</h1>
      
//       <div className="image-gallery">
//         <h2>Images</h2>
//         <div className="images">
//           <img src={require(`../applicantimagetest/${data.personalimage}`)} alt="Personal" />
//           <img src={require(`../applicantimagetest/${data.fullbodyimage}`)} alt="Full Body" />
//           <img src={require(`../applicantimagetest/${data.passportimage}`)} alt="Passport" />
//         </div>
//       </div>

//       <h2>Personal Information</h2>
//       <div className="info-grid">
//         <p><strong>Name:</strong> {data.name}</p>
//         <p><strong>Surname:</strong> {data.surname}</p>
//         <p><strong>Place of Birth:</strong> {data.placeofbirth}</p>
//         <p><strong>Passport Number:</strong> {data.passportnum}</p>
//         <p><strong>Nationality:</strong> {data.nationality}</p>
//         <p><strong>Marital Status:</strong> {data.martialstatus}</p>
//         <p><strong>Number of Children:</strong> {data.numberofchildren}</p>
//         <p><strong>Religion:</strong> {data.religion}</p>
//         <p><strong>Weight:</strong> {data.weight}</p>
//         <p><strong>Height:</strong> {data.height}</p>
//         <p><strong>Education Attainment:</strong> {data.educationattainment}</p>
//         <p><strong>Position Applied For:</strong> {data.postappliedfor}</p>
//         <p><strong>Contract Period:</strong> {data.contractperiod}</p>
//         <p><strong>Arabic Degree:</strong> {data.arabicdegree}</p>
//         <p><strong>English Degree:</strong> {data.englishdegree}</p>
//         <p><strong>Own Phone Number:</strong> {data.ownphonenum}</p>
//         <p><strong>Contact Phone Number:</strong> {data.contactphonenum}</p>
//         <p><strong>Date of Birth:</strong> {data.dateofbirth}</p>
//         <p><strong>Age:</strong> {data.age}</p>
//         <p><strong>Date of Issue:</strong> {data.dateofissue}</p>
//         <p><strong>Expiration Date:</strong> {data.expireddate}</p>
//         <p><strong>Country:</strong> {data.country}</p>
//         <p><strong>Position:</strong> {data.position}</p>
//         <p><strong>Period:</strong> {data.period}</p>
//         <p><strong>Babysitting:</strong> {data.babysitting ? 'Yes' : 'No'}</p>
//         <p><strong>Cleaning:</strong> {data.cleaning ? 'Yes' : 'No'}</p>
//         <p><strong>Washing:</strong> {data.washing ? 'Yes' : 'No'}</p>
//         <p><strong>Cooking:</strong> {data.cooking ? 'Yes' : 'No'}</p>
//         <p><strong>Eldercare:</strong> {data.eldercare ? 'Yes' : 'No'}</p>
//         <p><strong>Monthly Salary (Saudi):</strong> {data.monthlysalarySaudi}</p>
//         <p><strong>Monthly Salary (Jordan):</strong> {data.monthlysalaryJordan}</p>
//         <p><strong>Experience:</strong> {data.experience.map(exp => (
//           <div key={exp.id}>{exp.projectName} - {exp.duration}</div>
//         ))}</p>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;




/////////////////

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CircularProgress,
//   Alert,
//   Button,
// } from '@mui/material';
// import ShareIcon from '@mui/icons-material/Share';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import imagePlaceholder from "../image_placeholder/download.png";
// import Header from "../screens/header";
// import video from "../video/video.mp4";
// import ReactPlayer from "react-player";
// import thumbnail from "../image_placeholder/skywayimg.jpeg"

// const DetailPage = () => {
//   const id = useParams();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/tget-images/${id.listid}`);
//         const result = await response.json();
//         if (result.status === 'ok') {
//           setData(result.data);
//         } else {
//           console.error('Error fetching data:', result.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) return <CircularProgress />;
//   if (!data) return <Alert severity="error">No data found</Alert>;

//   const handleDownload = () => {
//     console.log("Download clicked");
//   };

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert("Link copied to clipboard!");
//   };

//   const handleSend = () => {
//     console.log("Send clicked");
//   };

//   const handleShareWhatsApp = () => {
//     const url = encodeURIComponent(window.location.href);
//     const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
//     window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
//   };

//   const handleShareTelegram = () => {
//     const url = encodeURIComponent(window.location.href);
//     const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
//     window.open(`https://t.me/share/url?url=${url}&text=${message}`, '_blank');
//   };

//   return (
//     <Container maxWidth={false} style={{ padding: '0 ' }}>
//       <Header />

//       <Container>
//         <Typography variant="h4" gutterBottom>
//           Details for <span style={{ color: "green" }}>{data.name} {data.surname}</span>
//         </Typography>

//         {/* Centering the video and adding top margin with thumbnail */}
//     {data.video && <Container style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
//       <ReactPlayer
//         controls={true}
//         url={require(`../applicantimagetest/${data.video}`)}
//         light={thumbnail} // Add your thumbnail image here
//       />
//     </Container>}

//         <Typography variant="h5" gutterBottom>
//           Images
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={data.personalimage ? require(`../applicantimagetest/${data.personalimage}`) : imagePlaceholder}
//                 alt="Personal"
//               />
//               <CardContent>
//                 <Typography variant="body2">Personal Image</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={data.fullbodyimage ? require(`../applicantimagetest/${data.fullbodyimage}`) : imagePlaceholder}
//                 alt="Full Body"
//               />
//               <CardContent>
//                 <Typography variant="body2">Full Body Image</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={data.passportimage ? require(`../applicantimagetest/${data.passportimage}`) : imagePlaceholder}
//                 alt="Passport"
//               />
//               <CardContent>
//                 <Typography variant="body2">Passport Image</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
//           Personal Information
//         </Typography>
//         <Grid container spacing={2}>
//           {[
//             { label: 'Name', value: data.name, htmlFor: "EFIRSTNAME" },
//             { label: 'Surname', value: data.surname },
//             { label: 'Place of Birth', value: data.placeofbirth },
//             { label: 'Passport Number', value: data.passportnum },
//             { label: 'Nationality', value: data.nationality },
//             { label: 'Marital Status', value: data.martialstatus },
//             { label: 'Number of Children', value: data.numberofchildren },
//             { label: 'Religion', value: data.religion },
//             { label: 'Weight', value: data.weight },
//             { label: 'Height', value: data.height },
//             { label: 'Education Attainment', value: data.educationattainment },
//             { label: 'Position Applied For', value: data.postappliedfor },
//             { label: 'Contract Period', value: data.contractperiod },
//             { label: 'Arabic Degree', value: data.arabicdegree },
//             { label: 'English Degree', value: data.englishdegree },
//             { label: 'Own Phone Number', value: data.ownphonenum },
//             { label: 'Contact Phone Number', value: data.contactphonenum },
//             { label: 'Date of Birth', value: data.dateofbirth },
//             { label: 'Age', value: data.age },
//             { label: 'Date of Issue', value: data.dateofissue },
//             { label: 'Expiration Date', value: data.expireddate },
//             { label: 'Country', value: data.country },
//             { label: 'Position', value: data.position },
//             { label: 'Period', value: data.period },
//             { label: 'Babysitting', value: data.babysitting ? 'Yes' : 'No' },
//             { label: 'Cleaning', value: data.cleaning ? 'Yes' : 'No' },
//             { label: 'Washing', value: data.washing ? 'Yes' : 'No' },
//             { label: 'Cooking', value: data.cooking ? 'Yes' : 'No' },
//             { label: 'Eldercare', value: data.eldercare ? 'Yes' : 'No' },
//             { label: 'Monthly Salary (Saudi)', value: data.monthlysalarySaudi },
//             { label: 'Monthly Salary (Jordan)', value: data.monthlysalaryJordan },
//           ].map((item, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Typography variant="body1">
//                 <strong>{item.label}:</strong> {item.value}
//               </Typography>
//             </Grid>
//           ))}

//           <Grid item xs={12}>
//             <Typography variant="h6">Experience:</Typography>
//             {data.experience.map(exp => (
//               <Typography key={exp.id} variant="body2">
//                 {exp.name} - {exp.link} - {exp.overview} Years
//               </Typography>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Buttons at the bottom with margin */}
//         <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
//           <Grid item>
//             <Button variant="contained" color="primary" onClick={handleDownload}>
//               Download
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="secondary" onClick={handleCopyLink}>
//               Copy Link
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="default" onClick={handleSend}>
//               Send
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="success"
//               startIcon={<WhatsAppIcon />}
//               onClick={handleShareWhatsApp}
//             >
//               Share on WhatsApp
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               variant="contained"
//               color="info"
//               startIcon={<TelegramIcon />}
//               onClick={handleShareTelegram}
//             >
//               Share on Telegram
//             </Button>
//           </Grid>
//         </Grid>

//       </Container>
//     </Container>
//   );
// };

// export default DetailPage;




///////////////////////

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Alert,
  Button,
  Box,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import imagePlaceholder from "../image_placeholder/download.png";
import Header from "../screens/header";
import ReactPlayer from "react-player";
import thumbnail from "../image_placeholder/skywayimg.jpeg";
import html2pdf from 'html2pdf.js';


import goldagent from "../images/goldagent.jpeg" 
import hudud from "../image_placeholder/hudud.jpeg"
import skywayimg from "../image_placeholder/skywayimg.jpeg"
import skywaylogo from "../image_placeholder/skywaylogo.jpeg"
import barakaimg from "../image_placeholder/barakaimg.jpeg"
import bodyimg from "../images/images.jpeg"
import ouragentlogo from "../images/ouragentlogo.jpeg"
import assawsan from "../image_placeholder/assawsan.jpeg"
import Barcode from 'react-barcode';

import smallapplicantimage from "../image_placeholder/smallapplicantimage.jpeg"
import saudiforeignaffairslogo from "../image_placeholder/saudiforeignaffairslogo.png"


import DeleteIcon from '@mui/icons-material/Delete'; 
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';


const DetailPage = () => {
  const id = useParams();
  const [data, setData] = useState(null);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [fileName, setFileName] = useState("E776062468");

  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [editData, setEditData] = React.useState({});


  const [base64Image, setBase64Image] = useState(null);

  // const xx = data.experience ? JSON.parse(data.experience) : "";
  
  // Menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://skywayapi.ntechagent.com/detail/tget-images/${id}`);
        const result = await response.json();
        if (result.status === 'ok') {
          setData(result.data); // Ensure this is an array
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = (row) => {
    setEditData(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {

    if (editData.applicationNo && !editData.applicationNo.startsWith('E')) {
      editData.applicationNo = 'E' + editData.applicationNo; // Prepend 'E' if it doesn't start with 'E'
    }


    try {
      const response = await fetch(`https://skywayapi.ntechagent.com/tget-images/${editData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });
      const result = await response.json();

      if (result.status === 'ok') {
        // Update data in state immediately
        setData((prev) => ({
          ...prev,
          ...result.data, // Use the updated data directly
        }));
        handleClose();
      } else {
        console.error('Error updating data:', result.message);
        alert(`Update failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('An error occurred while updating data.');
    }
  };


  const handleMenuOptionClick = (option, event) => {
    event.stopPropagation(); // Prevents navigation when the menu option is clicked
    // handleMenuClose();
    if (option === 'copy-link') {
      // Construct the detail page URL
      const link = `${window.location.origin}/list/${selectedRow._id}`;
      
      // Copy the link to the clipboard
      navigator.clipboard.writeText(link)
        .then(() => {
          console.log('Link copied to clipboard:', link);
          alert('Link copied to clipboard!'); // Optional: give feedback to the user
        })
        .catch(err => {
          console.error('Failed to copy link:', err);
        });
    } else if (option === 'detail') {
      // navigate(`/list/${selectedRow._id}`);
    } else if (option === 'send') {
      // Implement send functionality here
      console.log('Send option for:', selectedRow);
    }
  };

  const [styles, setStyles] = useState({
    styleOne: false,
    styleTwo: false,
    styleThree: false,
    styleFour: false,
    styleFive: false,
    // styleFive: false,
    all: false,
  });


  const today = new Date();
  // Format the date as MM/DD/YYYY
  const formattedTodayDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;




   // Get today's date
  //  const today = new Date();

   // Define arrays for day and month names
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
   // Get the required date parts
   const dayName = dayNames[today.getDay()];
   const monthName = monthNames[today.getMonth()];
   const dayNumber = today.getDate();
   const year = today.getFullYear();



  const handleStyleChange = (event) => {
    const { name, checked } = event.target;

    // If "All" checkbox is checked, set all styles to true
    if (name === 'all') {
      setStyles({
        styleOne: checked,
        styleTwo: checked,
        styleThree: checked,
        styleFour: checked,
        styleFive: checked,
        // styleFive: checked,
        all: checked,
      });
    } else {
      // If any style is unchecked, uncheck "All"
      if (checked) {
        setStyles((prev) => ({ ...prev, [name]: checked }));
      } else {
        setStyles((prev) => ({ ...prev, [name]: checked, all: false }));
      }
    }
  };


//   const downloadCV = () => {
//     const element = document.getElementById("embassycvContent");
//     const options = {
//         margin: 0.2,
//         marginBottom: 0,
//         filename: 'Embassy.pdf',
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf()
//         .from(element)
//         .set(options)
//         .save();
// }

const pdfRef = useRef();

const downloadCV = () => {
  const element = pdfRef.current;

  // Configuration for html2pdf
  const config = {
    filename: 'Embassy.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, logging: true, dpi: 300, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'letter', orientation: 'Portrait' }
  };

  html2pdf()
    .from(element)
    .set(config)
    .toPdf()
    .get('pdf')
    .then(pdf => {
      const totalPages = pdf.internal.getNumberOfPages();
      const phoneNumber = `${dayName}, ${monthName} ${dayNumber}, ${year}`; // Replace with your phone number
      const email = "www.ntechagent.com | +251 911 454176 | ntechagent@gmail.com"; // Replace with your email

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.setTextColor(5);

        // Set positions
        const pageYPosition = pdf.internal.pageSize.getHeight() - 10; // Y position for footer
        const leftXPosition = 3; // X position for left side text
        const rightXPosition = pdf.internal.pageSize.getWidth() - 22; // Base position for page number
        const centerXPosition = pdf.internal.pageSize.getWidth() / 2; // Center position

        // Add phone number on the left
        pdf.text(`${phoneNumber}`, leftXPosition, pageYPosition);

        // Add email in the center   
        pdf.text(` ${email}`, centerXPosition, pageYPosition, { align: 'center' });

        // Add page number and total pages to the footer on the right
        pdf.text(`Page ${i} of ${totalPages}`, rightXPosition, pageYPosition);
        // pdf.text(`of ${totalPages}`, rightXPosition - 20, pageYPosition); // Adjust to fit
      }
    })
    .save();
};

// const downloadCV = () => {
//   const element = pdfRef.current;

//   // Configuration for html2pdf
//   const config = {
//     filename: 'Embassy.pdf',
//     margin: { top: 10, bottom: 20, left: 10, right: 10 }, // Adjust margins here
//     image: { type: 'jpeg', quality: 0.98 },
//     html2canvas: { scale: 2, logging: true, dpi: 300, letterRendering: true },
//     jsPDF: { unit: 'mm', format: 'a4', orientation: 'Portrait' }
//   };

//   html2pdf()
//     .from(element)
//     .set(config)
//     .toPdf()
//     .get('pdf')
//     .then(pdf => {
//       const totalPages = pdf.internal.getNumberOfPages();

//       for (let i = 1; i <= totalPages; i++) {
//         pdf.setPage(i);
//         pdf.setFontSize(10);
//         pdf.setTextColor(150);
//         // Adjust the footer position as needed
//         const pageHeight = pdf.internal.pageSize.getHeight();
//         const yPosition = pageHeight - 15; // Set a better position for the footer text

//         // Add page number and total pages to the footer
//         pdf.text(`Page ${i}`, pdf.internal.pageSize.getWidth() - 30, yPosition);
//         pdf.text(`of ${totalPages}`, pdf.internal.pageSize.getWidth() - 50, yPosition);
//       }
//     })
//     .save();
// };



  const downloadMultipleCVs = async () => {

    


        const pdfElements = [
          { elementId: styles.styleTwo ? 'cvContent1' : "", filename: `${`${data.name} ${data.email} Bela Hodod` || 'Default_Name'}_CV_Style1.pdf` },
          {  elementId: styles.styleOne ? 'cvContent2' : "", filename: 'Golden agen.pdf' },
          { elementId: styles.styleFour ? 'cvAssawsanahContent' : "", filename: 'Baraka.pdf' },
          { elementId: styles.styleThree ? 'cvBarakaContent' : "", filename: 'Skyway.pdf' },
          {elementId: styles.styleFive ? "embassy" : "", filename: "Embassycv.pdf"}
            
            
        ];
    
        const downloadPromises = pdfElements.map(({ elementId, filename }) => {
            const element = document.getElementById(elementId);
            const options = {
                margin: 0.5,
                marginBottom: 0,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                // jsPDF: { unit: 'in', format: [8.5, 10.99],  /*format: 'letter',*/ orientation: 'portrait' }
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
    
            return html2pdf().from(element).set(options).save();
        });
    
        // Wait for all downloads to complete
        await Promise.all(downloadPromises);
    }


    const url = window.location.href;
  const createdAt = url.split('_')[1]; // This gets the timestamp after the underscore

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(payload.isAdmin || false); // Set admin status
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://skywayapi.ntechagent.com/detail/tget-images?createdAt=${createdAt}`);
        const result = await response.json();
        if (result.status === 'ok') {
          console.log('Fetched dataaaaaaa:', result.data); // Log the fetched data
          setData(result.data);

          if (result.data.personalImageUrl) {
            console.log('Fetched personal imageeeeeeeeee', result.data.personalImageUrl)
            const base64 = await toBase64(result.data.personalImageUrl);
            setBase64Image(base64);
            console.log('Fetched personalllll', base64Image)
          }
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [createdAt]);

  const toBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     try {
  //       const payload = JSON.parse(atob(token.split('.')[1]));
  //       setIsAdmin(payload.isAdmin || false); // Set admin status
  //     } catch (error) {
  //       console.error("Token decoding failed:", error);
  //     }
  //   }


   

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:4000/tget-images/${id.listid}`);
  //       const result = await response.json();
  //       if (result.status === 'ok') {
  //         setData(result.data);
  //       } else {
  //         console.error('Error fetching data:', result.message);
  //       }
  //     } catch (error) {
  //         console.error('Fetch error:', error);
  //     } finally {
  //         setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  if (loading) return <CircularProgress />;
  if (!data) return <Alert severity="error">No data found</Alert>;

  const handleDownload = () => {
    console.log("Download clicked");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleSend = () => {
    console.log("Send clicked");
  };

  const handleInstall = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome")) {
      window.open("https://chrome.google.com/webstore/detail/your-chrome-extension-id", "_blank");
    } else if (userAgent.includes("Firefox")) {
      window.open("https://addons.mozilla.org/addon/nuratech-tools/", "_blank");
    } else {
      alert("This extension is only available for Chrome and Firefox.");
    }
  };

  const handleShareWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handleShareTelegram = () => {
    const url = encodeURIComponent(window.location.href);
    const message = encodeURIComponent(`Check out this page: ${window.location.href}`);
    window.open(`https://t.me/share/url?url=${url}&text=${message}`, '_blank');
  };

  
  
  // Usage
  // const base64Image = toBase64(data.personalImageUrl);
   
  

  return (
    <Container maxWidth={false} style={{ padding: '0 ' }}>
      <Header />

      <Container>
        <Typography variant="h4" gutterBottom>
          Details for <span style={{ color: "green",  }}>{data.name} {data.surname}</span>
        </Typography>

        {/* Centering the video and adding top margin with thumbnail */}
        {/* {data.video && (
          <Container style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <ReactPlayer
              controls={true}
              url={data.videoUrl}
              light={thumbnail} // Add your thumbnail image here
            />
          </Container>
        )} */}

        {/* <Typography variant="h5" gutterBottom>
          Images
        </Typography> */}
        <Grid container spacing={1}>
        <Grid container spacing={2}>
  <Grid item xs={12} sm={4}>
    <Card>
      <CardMedia
        component="img"
        height="550"  // Increased height for Personal Image
        image={data.personalImageUrl || imagePlaceholder}
        alt="Personal"
      />
      <CardContent>
        <Typography variant="body2">Personal Image </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Card>
      <CardMedia
        component="img"
        height="550"  // Increased height for Full Body Image
        image={data.fullBodyImageUrl || imagePlaceholder}
        alt="Full Body"
      />
      <CardContent>
        <Typography variant="body2">Full Body Image</Typography>
      </CardContent>
    </Card>
  </Grid>
  {/* Uncomment if you need the passport image */}
  {/* <Grid item xs={12} sm={4}>
    <Card>
      <CardMedia
        component="img"
        height="300"  // Increased height for Passport Image
        image={data.passportImageUrl || imagePlaceholder}
        alt="Passport"
      />
      <CardContent>
        <Typography variant="body2">Passport Image</Typography>
      </CardContent>
    </Card>
  </Grid> */}

  {data.video && (
    <Grid item xs={12} sm={4}>
      <Card>
        <Container style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <ReactPlayer
            controls={true}
            url={data.videoUrl}
            light={thumbnail} // Add your thumbnail image here
            width="100%"  // Make the video responsive
            height="510px"  // Increased height for the video
          />
        </Container>
        <CardContent>
          <Typography variant="body2">Video</Typography>
        </CardContent>
      </Card>
    </Grid>
  )}
</Grid>
</Grid>

        <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: 'Name', value: data.name, htmlFor: "EFIRSTNAME", id: "EFIRSTNAME"   },
            { label: 'Middle Name', value: data.middleName, htmlFor: "EFATHER", id: "EFATHER"   },
            { label: 'Surname', value: data.surname, htmlFor: "ESURNAME", id: "EFAMILY" },
            { label: 'Applicant No', value: data.applicationNo, id: "applicantNo" },
            { label: 'Sex', value: data.sex, htmlFor: "Sex", id: "Sex" },
            { label: 'Place of Birth', value: data.placeofbirth, htmlFor: "EPLACEOFBIRTH", id: "BIRTH_PLACE" },
            { label: 'Passport Number', value: data.passportnum, htmlFor: "EPASSPORTNUM", id: "PASSPORTnumber" },
            { label: 'passport Issue Place', value: data.passportIssuePlace, htmlFor: "passportIssuePlace", id: "passportIssuePlace" },
            { label: 'Nationality', value: data.currentNationality, htmlFor: "ENATIONALITY", id: "NATIONALITY" },
            { label: 'Marital Status', value: data.martialstatus, htmlFor: "EMARTIALSTATUS", id: "SOCIAL_STATUS" },
            { label: 'Number of Children', value: data.numberofchildren, htmlFor: "ENUMBEROFCHILDREN", id: "ENUMBEROFCHILDREN" },
            { label: 'Religion', value: /*data.religion*/ "Islam", htmlFor: "ERELIGION", id: "RELIGION" },
            { label: 'Weight', value: data.weight + " km", htmlFor: "EWEIGHT", id: "EWEIGHT"  },
            { label: 'Height', value: data.height + " cm" , htmlFor: "EHEIGHT", id: "EHEIGHT" },
            { label: 'Education Attainment', value: data.educationattainment, htmlFor: "EEDUCATION", id: "DEGREE" },
            { label: 'Position Applied For', value: data.postappliedfor, htmlFor: "EPOSITION", id: "EPOSITION" },
            
            { label: 'Contract Period', value: data.contract, htmlFor: "ECONTRACTPERIOD", id: "ECONTRACTPERIOD" },
            { label: 'Arabic Degree', value: data.arabicdegree, htmlFor: "EARABICDEGREE", id: "EARABICDEGREE" },
            { label: 'English Degree', value: data.englishdegree, htmlFor: "EENGLISHDEGREE", id: "EENGLISHDEGREE" },
            { label: 'Own Phone Number', value: data.ownphonenum, htmlFor: "EOWNPHONENUM", id: "EOWNPHONENUM" },
            { label: 'Contact Phone Number', value: data.contactphonenum, htmlFor: "ECONTACTPHONENUM", id: "ECONTACTPHONENUM" },
            { label: 'Date of Birth', value: data.dateofbirth, htmlFor: "BIRTH_DATE", id: "BIRTH_DATE" },
            { label: 'Age', value: data.age, htmlFor: "EAGE", id: "EAGE" },
            { label: 'Date of Issue', value: data.dateofissue, htmlFor: "EDATEOFISSUE", id: "PASSPORT_ISSUE_DATE" },
            { label: 'Expiration Date', value: data.expireddate, htmlFor: "PASSPORT_EXPIRY_DATe", id: "PASSPORT_EXPIRY_DATe" },
            // { label: 'Country', value: data.country, htmlFor: "ECOUNTRY", id: "ECOUNTRY" },
            // { label: 'Position', value: data.position, htmlFor: "EPOSITION", id: "EPOSITION" },
            // { label: 'Period', value: data.period, htmlFor: "EPERIOD", id: "EPERIOD" },
            { label: 'Babysitting', value: data.babysitting ? 'Yes' : 'No', htmlFor: "EBABYSITTING", id: "EBABYSITTING" },
            { label: 'Cleaning', value: data.cleaning ? 'Yes' : 'No', htmlFor: "ECLEANING", id: "ECLEANING" },
            { label: 'Washing', value: data.washing ? 'Yes' : 'No', htmlFor: "EWASHING", id: "EWASHING" },
            { label: 'Cooking', value: data.cooking ? 'Yes' : 'No', htmlFor: "ECOOKING", id: "ECOOKING" },
            { label: 'Eldercare', value: data.eldercare ? 'Yes' : 'No', htmlFor: "EELDERCARE", id: "EELDERCARE" },
            { label: 'Monthly Salary (Saudi)', value: data.monthlysalarySaudi, htmlFor: "EMONTHLYSALARYSAUDI", id: "EMONTHLYSALARYSAUDI" },
            { label: 'Monthly Salary (Jordan)', value: data.monthlysalaryJordan, htmlFor: "EMONTHLYSALARYJORDAN", id: "EMONTHLYSALARYJORDAN" },
            { label: 'visa Type', value: data.visaType, id: "VisaKind" },

            { label: 'Home Address', value: data.sponsorAddress, id: "ADDRESS_HOME" },

            // { label: 'Address', value: "4086,32273 الدمام, طيبة انس بن سالم", id: "ADDRESS_HOME" },
            
            { label: 'Sponsor Address', value: data.sponsorAddress, id: "SPONSER_ADDRESS" },

            // { label: 'Sponsor Address', value: "MATAR ALZHRANI", id: "SPONSER_NAME" },

            { label: 'Passport Type', value: "Normal", id: "PASSPORType" },
            { label: 'Isussing Country', value: data.passportIssuePlace, id: "PASSPORT_ISSUE_PLACE" },
            { label: 'Email', value: "skywayagencyoffice@gmail.com", id: "Personal_Email" },
            { label: 'Comming Through', value: "By Air", id: "COMING_THROUGH" },   
            { label: 'Email', value: "skywayagencyoffice@gmail.com", id: "emailLabel" },    
            { label: 'Sponsor Id NO', value: data.visaNo, id: "SPONSER_NUMBER" },  
            { label: 'Sponsor Phone', value: data.sponsorPhone, id: "SPONSER_PHONE" },
            { label: 'porpose', value: data.visaType, id: "porpose", htmlFor: "porpose" },
            
            

            // { label: 'toggle', value: "0", htmlFor: "EMONTHLYSALARYJORDAN" , id: "No"},
          ].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <label htmlFor={item.htmlFor}>
                <Typography variant="body1">
                  <strong>{item.label}:</strong> <label id={item.id}>{item.value}</label>
                  {item.id === "applicantNo" && isAdmin ? <Button variant="contained" color="primary" onClick={() => handleEdit(data)}>
        Add 
      </Button> : ""}
                </Typography>
              </label>
            </Grid>
          ))}

          

          <Grid item xs={12}>
            <Typography variant="h6">Experience:</Typography>
            {data.experience && JSON.parse(data.experience).map(exp => (
              <Typography key={exp.id} variant="body2">
                {exp.name} - {exp.link} - {exp.overview} Years
              </Typography>
            ))}

            {/* {data.experience.map(i => i.name)}dfsdfs */}

            {/* {data.experience}dfsd */}

            {/* {JSON.parse(data.experience).map(exp => exp.name)} - aaa */}
           
            {/* {JSON.parse(data.experience).map(exp => () => exp.link)} - bbb */}
            {/* {xx.map(exp => exp.name)}bbb */}

            {/* {Array.isArray(data.experience) && data.experience.length > 0 ? (
  data.experience.map((exp, index) => (
    <Typography key={index} variant="body2">
      {exp.name} - {exp.link} - {exp.overview} Years
    </Typography>
  ))
) : (
  <Typography variant="body2">No experience data available.</Typography>
)} */}
           
          </Grid>
        </Grid>

      {isAdmin && <Container margin={100} >

    <Box sx={{ boxShadow: 3, borderRadius: 2, mt: 4, p: 3 }}>
          <Typography variant="h6" gutterBottom>
              Select Styles
          </Typography>
          <FormControlLabel
              control={
                  <Checkbox
                      checked={styles.all}
                      onChange={handleStyleChange}
                      name="all"
                  />
              }
              label="All"
          />
          <FormControlLabel
              control={
                  <Checkbox
                      checked={styles.styleOne}
                      onChange={handleStyleChange}
                      name="styleOne"
                      // disabled={age < 21}
                  />
              }
              label="Golden agent"
          />
          <FormControlLabel
              control={
                  <Checkbox
                      checked={styles.styleTwo}
                      onChange={handleStyleChange}
                      name="styleTwo"
                      // disabled={age < 21}
                  />
              }
              label="Bela Hodod"
          />
          <FormControlLabel
              control={
                  <Checkbox
                      checked={styles.styleThree}
                      onChange={handleStyleChange}
                      name="styleThree"
                      // disabled={age < 18} // Disable if age is less than 18
                  />
              }
              label="Assawsanah"
          />
          <FormControlLabel
              control={
                  <Checkbox
                      checked={styles.styleFour}
                      onChange={handleStyleChange}
                      name="styleFour"
                      // disabled={age < 21}
                  />
              }
              label="Baraka"
          />


        
      </Box>
      </Container>}

        {/* Buttons at the bottom with margin */}
        {isAdmin && <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
        {data.personalImageUrl && data.visaNo && data.sponsorName && data.applicationNo && data.name && data.middleName && data.surname && data.religion && data.dateofbirth && data.placeofbirth && data.currentNationality && data.sex && data.martialstatus && data.religion && data.educationattainment && data.postappliedfor && data.visaType && data.passportIssuePlace && data.dateofissue && data.passportnum && data.expireddate && <Grid item>
            <Button variant="contained" color="primary" onClick={downloadCV}>
              Download Embassy Application
            </Button>
          </Grid>}

          <Grid item>
            <Button variant="contained" color="primary" onClick={downloadMultipleCVs}>
              Download CV
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handleCopyLink}>
              Copy Link
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={handleInstall}>
              Send
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              onClick={handleShareWhatsApp}
            >
              Share on WhatsApp
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="info"
              startIcon={<TelegramIcon />}
              onClick={handleShareTelegram}
            >
              Share on Telegram
            </Button>
          </Grid>
        </Grid>}

        {/* {!isAdmin && <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>

          
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleDownload}>
              Download
            </Button>
          </Grid>
         
        </Grid>} */}

      </Container>


      <Container>
     

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Entry</DialogTitle>
        <DialogContent>
         
          <TextField
            margin="dense"
            name="applicationNo"
            label="Applicant Number"
            fullWidth
            variant="outlined"
            value={editData.applicationNo || ''}
            onChange={handleInputChange}
          />
          {/* Add more fields as necessary */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Display other data as needed */}
     
    </Container>


      



       <div style={{ display: 'none' }}>


        {/* next content */}


        <div id="cvContent1">
        <div className="container">
                {/* Page 1 */}
                {/* <div>
<form onSubmit={this.submitImage}>
  <input
    type="file"
    accept="image/*"
    onChange={this.onInputChange}
  />
  <button type="submit">Submit</button>
</form>
{this.state.allImage == null
  ? ""
  : this.state.allImage.map((data, index) => (
      <img
        key={index}
        alt=""
        src={require(`.../images/${data.image}`)}
        height={100}
        width={100}
      />
    ))}
</div> */}
                <div style={{ pageBreakAfter: 'always' }}> 
                    <div className="header">
                    
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={data.personalImageUrl || imagePlaceholder} // Get the last image

/>

</div>

                      <div className="wider-image-parent">
                      <img src={hudud} alt="Wider" className="wider-image" /></div>  
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{data.name} {data.middleName}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{data.surname}</div>
<div>اسم العائلة</div>
<div>PLACE Of Birth</div>
<div>{data.placeofbirth}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div>{data.age}</div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div>{data.passportnum}</div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div>{data.dateofbirth}</div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div>{data.dateofissue}</div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div>{data.expireddate}</div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>{data.nationality}</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}>{data.martialstatus}</div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}>{data.numberofchildren}</div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div>{data.religion}</div>
<div>الديانة</div>
<div>WEIGHT</div>
<div>{data.weight} km</div>
<div>الوزن</div>
<div>HEIGHT</div>

<div>{data.height} cm</div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>{data.educationattainment}</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>{data.postappliedfor}</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}> {data.monthlysalarySaudi} SAR</div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>{data.contractperiod}</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}>{data.arabicdegree}</div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}>{data.englishdegree}</div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={data.fullBodyImageUrl || imagePlaceholder} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.ownphonenum}</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.contactphonenum}</div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>



                    <div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div>
<div>
            </div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div>
<div>
              </div>
<div>وعدد سنوات الخبرة</div>
</div>

                    {/* {projectInfo.project.map(i => 
                        
<>
<div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
<div>{i.name}</div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
<div>{i.overview}</div>
<div>وعدد سنوات الخبرة</div>
</div>

</>



                    )} */}
                   




                    <div className="specific-exp-atitle-sec">
                        <div>تربية الاطفال</div>
                        <div>النظافة</div>
                        <div>الغسيل</div>
                        <div>الطبخ</div>
                        <div>العناية بالمسنين</div>
                    </div>
                    <div className="specific-exp-etitle-sec">
                        <div>BABY SITTING</div>
                        <div>CLEANING</div>
                        <div>WASHING</div>
                        <div>COOKING</div>
                        <div>ELDER CARE</div>
                    </div>
                    <div className="exp-trueorfalse-sec">
                        <div>{data.babysitting ? "YES" : "NO"}</div>
                        <div>{data.cleaning ? "YES" : "NO"}</div>
                        <div>{data.washing ? "YES" : "NO"}</div>
                        <div>{data.cooking ? "YES" : "NO"}</div>
                        <div>{data.eldercare ? "YES" : "NO"}</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                
<div>
<img
className="passport-image"
alt=""
src={data.passportImageUrl || imagePlaceholder} 

/>

</div>
</div>
            </div>
        </div>



{/* next content */}



<div id="cvContent2">
        <div className="container">
                {/* Page 1 */}
                {/* <div>
<form onSubmit={this.submitImage}>
  <input
    type="file"
    accept="image/*"
    onChange={this.onInputChange}
  />
  <button type="submit">Submit</button>
</form>
{this.state.allImage == null
  ? ""
  : this.state.allImage.map((data, index) => (
      <img
        key={index}
        alt=""
        src={require(`.../images/${data.image}`)}
        height={100}
        width={100}
      />
    ))}
</div> */}
                <div style={{ pageBreakAfter: 'always' }}> 
                    <div className="header">
                    
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={data.personalImageUrl || imagePlaceholder} // Get the last image

/>

</div>

                      <div className="wider-image-parent">
                      <img src={goldagent} alt="Wider" className="wider-image" /></div>  
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{data.name} {data.middleName}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{data.surname}</div>
<div>اسم العائلة</div>
<div>PLACE Of Birth</div>
<div>{data.placeofbirth}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div>{data.age}</div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div>{data.passportnum}</div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div>{data.dateofbirth}</div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div>{data.dateofissue}</div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div>{data.expireddate}</div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>{data.nationality}</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}>{data.martialstatus}</div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}>{data.numberofchildren}</div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div>{data.religion}</div>
<div>الديانة</div>
<div>WEIGHT</div>
<div>{data.weight} km</div>
<div>الوزن</div>
<div>HEIGHT</div>

<div>{data.height} cm</div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>{data.educationattainment}</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>{data.postappliedfor}</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}> {data.monthlysalarySaudi} SAR</div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>{data.contractperiod}</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}>{data.arabicdegree}</div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}>{data.englishdegree}</div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={data.fullBodyImageUrl || imagePlaceholder} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.ownphonenum}</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.contactphonenum}</div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>



                    <div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div>
<div>
            </div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div>
<div>
              </div>
<div>وعدد سنوات الخبرة</div>
</div>

                    {/* {projectInfo.project.map(i => 
                        
<>
<div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
<div>{i.name}</div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
<div>{i.overview}</div>
<div>وعدد سنوات الخبرة</div>
</div>

</>



                    )} */}
                   




                    <div className="specific-exp-atitle-sec">
                        <div>تربية الاطفال</div>
                        <div>النظافة</div>
                        <div>الغسيل</div>
                        <div>الطبخ</div>
                        <div>العناية بالمسنين</div>
                    </div>
                    <div className="specific-exp-etitle-sec">
                        <div>BABY SITTING</div>
                        <div>CLEANING</div>
                        <div>WASHING</div>
                        <div>COOKING</div>
                        <div>ELDER CARE</div>
                    </div>
                    <div className="exp-trueorfalse-sec">
                        <div>{data.babysitting ? "YES" : "NO"}</div>
                        <div>{data.cleaning ? "YES" : "NO"}</div>
                        <div>{data.washing ? "YES" : "NO"}</div>
                        <div>{data.cooking ? "YES" : "NO"}</div>
                        <div>{data.eldercare ? "YES" : "NO"}</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                
<div>
<img
className="passport-image"
alt=""
src={data.passportImageUrl || imagePlaceholder} 

/>

</div>
</div>
            </div>
        </div>



{/* next content */}


<div id="cvBarakaContent">
        <div className="container">
                {/* Page 1 */}
                {/* <div>
<form onSubmit={this.submitImage}>
  <input
    type="file"
    accept="image/*"
    onChange={this.onInputChange}
  />
  <button type="submit">Submit</button>
</form>
{this.state.allImage == null
  ? ""
  : this.state.allImage.map((data, index) => (
      <img
        key={index}
        alt=""
        src={require(`.../images/${data.image}`)}
        height={100}
        width={100}
      />
    ))}
</div> */}
                <div style={{ pageBreakAfter: 'always' }}> 
                    <div className="header">
                    
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={data.personalImageUrl || imagePlaceholder} // Get the last image

/>

</div>

                      <div className="wider-image-parent">
                      <img src={skywaylogo} alt="Wider" className="wider-image" /></div>  
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{data.name} {data.middleName}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{data.surname}</div>
<div>اسم العائلة</div>
<div>PLACE Of Birth</div>
<div>{data.placeofbirth}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div>{data.age}</div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div>{data.passportnum}</div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div>{data.dateofbirth}</div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div>{data.dateofissue}</div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div>{data.expireddate}</div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>{data.nationality}</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}>{data.martialstatus}</div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}>{data.numberofchildren}</div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div>{data.religion}</div>
<div>الديانة</div>
<div>WEIGHT</div>
<div>{data.weight} km</div>
<div>الوزن</div>
<div>HEIGHT</div>

<div>{data.height} cm</div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>{data.educationattainment}</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>{data.postappliedfor}</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}> {data.monthlysalaryJordan}$</div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>{data.contractperiod}</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}>{data.arabicdegree}</div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}>{data.englishdegree}</div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={data.fullBodyImageUrl || imagePlaceholder} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={assawsan} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.ownphonenum}</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.contactphonenum}</div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>



                    <div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div>
<div>
            </div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div>
<div>
              </div>
<div>وعدد سنوات الخبرة</div>
</div>

                    {/* {projectInfo.project.map(i => 
                        
<>
<div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
<div>{i.name}</div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
<div>{i.overview}</div>
<div>وعدد سنوات الخبرة</div>
</div>

</>



                    )} */}
                   




                    <div className="specific-exp-atitle-sec">
                        <div>تربية الاطفال</div>
                        <div>النظافة</div>
                        <div>الغسيل</div>
                        <div>الطبخ</div>
                        <div>العناية بالمسنين</div>
                    </div>
                    <div className="specific-exp-etitle-sec">
                        <div>BABY SITTING</div>
                        <div>CLEANING</div>
                        <div>WASHING</div>
                        <div>COOKING</div>
                        <div>ELDER CARE</div>
                    </div>
                    <div className="exp-trueorfalse-sec">
                        <div>{data.babysitting ? "YES" : "NO"}</div>
                        <div>{data.cleaning ? "YES" : "NO"}</div>
                        <div>{data.washing ? "YES" : "NO"}</div>
                        <div>{data.cooking ? "YES" : "NO"}</div>
                        <div>{data.eldercare ? "YES" : "NO"}</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                
<div>
<img
className="passport-image"
alt=""
src={data.passportImageUrl || imagePlaceholder} 

/>

</div>
</div>
            </div>
        </div>



{/* four content */}



<div id="cvAssawsanahContent">
        <div className="container">
                {/* Page 1 */}
                {/* <div>
<form onSubmit={this.submitImage}>
  <input
    type="file"
    accept="image/*"
    onChange={this.onInputChange}
  />
  <button type="submit">Submit</button>
</form>
{this.state.allImage == null
  ? ""
  : this.state.allImage.map((data, index) => (
      <img
        key={index}
        alt=""
        src={require(`.../images/${data.image}`)}
        height={100}
        width={100}
      />
    ))}
</div> */}
                <div style={{ pageBreakAfter: 'always' }}> 
                    <div className="header">
                    
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={data.personalImageUrl || imagePlaceholder} // Get the last image

/>

</div>

                      <div className="wider-image-parent">
                      <img src={barakaimg} alt="Wider" className="wider-image" /></div>  
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{data.name} {data.middleName}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{data.surname}</div>
<div>اسم العائلة</div>
<div>PLACE Of Birth</div>
<div>{data.placeofbirth}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div>{data.age}</div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div>{data.passportnum}</div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div>{data.dateofbirth}</div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div>{data.dateofissue}</div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div>{data.expireddate}</div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>{data.nationality}</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}>{data.martialstatus}</div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}>{data.numberofchildren}</div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div>{data.religion}</div>
<div>الديانة</div>
<div>WEIGHT</div>
<div>{data.weight} km</div>
<div>الوزن</div>
<div>HEIGHT</div>

<div>{data.height} cm</div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>{data.educationattainment}</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>{data.postappliedfor}</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}> {data.monthlysalarySaudi} SAR</div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>{data.contractperiod}</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}>{data.arabicdegree}</div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}>{data.englishdegree}</div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={data.fullBodyImageUrl || imagePlaceholder} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.ownphonenum}</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}>{data.contactphonenum}</div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>



                    <div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div>
<div>
            </div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
{/* <div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div> */}
<div>{data.experience && JSON.parse(data.experience).map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div>
<div>
              </div>
<div>وعدد سنوات الخبرة</div>
</div>

                    {/* {projectInfo.project.map(i => 
                        
<>
<div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
<div>{i.name}</div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
<div>{i.overview}</div>
<div>وعدد سنوات الخبرة</div>
</div>

</>



                    )} */}
                   




                    <div className="specific-exp-atitle-sec">
                        <div>تربية الاطفال</div>
                        <div>النظافة</div>
                        <div>الغسيل</div>
                        <div>الطبخ</div>
                        <div>العناية بالمسنين</div>
                    </div>
                    <div className="specific-exp-etitle-sec">
                        <div>BABY SITTING</div>
                        <div>CLEANING</div>
                        <div>WASHING</div>
                        <div>COOKING</div>
                        <div>ELDER CARE</div>
                    </div>
                    <div className="exp-trueorfalse-sec">
                        <div>{data.babysitting ? "YES" : "NO"}</div>
                        <div>{data.cleaning ? "YES" : "NO"}</div>
                        <div>{data.washing ? "YES" : "NO"}</div>
                        <div>{data.cooking ? "YES" : "NO"}</div>
                        <div>{data.eldercare ? "YES" : "NO"}</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                
<div>
<img
className="passport-image"
alt=""
src={data.passportImageUrl || imagePlaceholder} 

/>

</div>
</div>
            </div>
        </div>




        {/* content end */}

        
       





      {/* end embassy cv content */}


      {/* second embassy cv */}



      <div style={{ display: 'none' }}>
                <div className="embassy-cv-main-parent" id="embassycvContent" ref={pdfRef} style={{ minHeight: "auto", backround: "red"}} >
                    <div className='embassy-header'>
                        <div className='embassy-header-first-child' style={{ display: 'flex', flexDirection: 'column', }}>
                            <div style={{ display: 'flex', flexDirection: 'column',  }}>
                                <Barcode
                                       displayValue={false}
                                                value={"E776062468"} height={23} width={1.7} marginBottom={2} />

                                                
                                <span style={{ display: "flex", justifyContent: "space-between", marginLeft: '10px',  }}><span style={{ fontFamily: "serif", fontSize: "8px",  }}>VISA No:</span> <span style={{marginRight: "10px", fontSize: "13px", fontWeight: "bold"}}>{data.visaNo}</span></span>

                                <span style={{ display: "flex", justifyContent: "space-between", marginLeft: '10px',  }}><span style={{ fontFamily: "serif", fontSize: "13px",  }}>sponsor:</span> <span style={{marginRight: "10px", fontSize: "13px"}}>{data.sponsorName}</span></span>
                            </div>
                            
                            <div className="embassy-header-first-child-img-div" style={{marginLeft: "7px"}}>
                            <img
                            style={{marginTop: "10px", width: "150px", height: "150px"}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={base64Image}
                       
                    />
                            </div>
                        </div>

                        {/* <div className='embassy-header-second-child' style={{display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                            <div></div>
                            <div style={{margin: 0, padding: 0, marginLeft: "50px"}}>
                            <img
                            style={{width: "150px", height: "150px",}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={saudiforeignaffairslogo}
                       
                    />
                            </div>
                        </div> */}
                          <div style={{display: "flex", flexDirection: "row", }}>
                          <div className='embassy-header-second-child' style={{display: "flex", flexDirection: "column", justifyContent: "space-between",  }}>
                            <div></div>
                            <div style={{margin: 0, padding: 0, marginLeft: "60px"}}>
                            <img
                            style={{width: "150px", height: "150px",}}
                        className="embassy-header-first-child-img"
                        alt="Personal"
                        src={saudiforeignaffairslogo}
                       
                    />
                            </div>
                        </div>
                        <div className='embassy-header-third-child' style={{fontFamily: "serif",  background: 'none', display: 'flex', flexDirection: "column", paddingLeft: "100px", flexBasis: "70%"  }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Barcode value={"E776062468"} fontWeight={"bold"} height={23} width={1.7} marginBottom={2} />
                                
                            </div>
                            <div style={{ marginTop: "5px", fontFamily: "serif", fontSize: "13px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", background: "none"  }}>
    <div style={{fontFamily: "serif", textAlign: "center" }}>
        EMBASSY OF SAUDI ARABIA
    </div>
    <div style={{fontFamily: "serif", textAlign: "center" }}>
        CONSULAR SECTION
    </div>

    <div style={{ fontFamily: "serif", textAlign: "center", fontSize: "18px", marginTop: "5px", fontWeight: "bold" }}>
        سفارة المملكة العربية السعودية القسم القنصلي
    </div>
</div>

<div style={{fontFamily: "serif",  fontSize: "12px", background: "none", marginTop: "20px", marginLeft: "-18px" }} >SKY WAY FOREIGN EMPLOYMENT AGENT</div>
<div style={{fontFamily: "serif", marginTop: "10px", fontWeight: "bold", marginLeft: "-10px"}}>skywayagencyoffice@gmail.com</div>
</div>
 
    

                           
                        </div>
                    </div>

                    <div className="content-parent" style={{ height: "100%"}}>

                        {/* 1th line */}

                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Full Name</span>
                                        <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>{data.name} {data.middleName} {data.surname}</span>
                                        </div>

                                        <div>الاسم الكامل</div>
                        </div>

                        {/* 2th line */}

                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Mother Name</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div>{data.religion === "Muslim" || data.religion === "islam" ? "الاسلام" : "Non-Muslim"}</div>
                        </div>

                    {/* 3th line */}


                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


                                        
                                            <span style={{fontFamily: "serif",  fontSize: "13px",}}>Date of Birth:</span>
                                            <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.dateofbirth}</span>
                                           


                                            
                                            <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>تاريخ الميلاد</span>
                                      


                                        </div>

                                        <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


           <div style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px"}}>Place of Birth : </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.placeofbirth}</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>مكان الميلاد</span>



</div>
                        </div>

{/* 4th line */}

                        <div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Past Nationality:</span>
     
     


      
      <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الجنسية السابقة      </span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


 <div  style={{display: "flex", justifyContent: "space-between", width: "58%",}}>
<span style={{fontFamily: "serif",  fontSize: "13px",}}>Current Nationality : </span>
<span style={{fontWeight:"bold",fontFamily: "serif",  fontSize: "13px",}}>{data.currentNationality}</span>
</div>




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الجنسية الحالية
</span>



</div>

</div>

{/* 5th line */}

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Sex:</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.sex}</span>
     


      
      <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الجنس</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


<div  style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", }}>Marital Status: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.martialstatus}</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الحالة الاجتماعية
</span>



</div>
</div>


{/* 6th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Sect:</span>
      


  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


<div  style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "7px"}}>Religion: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.religion === "Muslim" || data.religion === "islam" ? "الاسلام" : "Non-Muslim"}</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الديانة</span>



</div>
</div>


{/* 7th line */}

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Qualification:</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.educationattainment}</span>
      
     


      
      <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> المؤهل العلمي</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "47%"}}>


<div style={{display: "flex", justifyContent: "space-between", width: "58%",}}>                         
<span style={{fontFamily: "serif",  fontSize: "13px",}}>Profession: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.postappliedfor}</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> المهنة</span>



</div>
</div>

{/* 8th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black",paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Home address and telephone No. :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> عنوان السكن</div>
                        </div>


{/* 9th line */}

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold", marginLeft: "60px"}}>{data.sponsorCity}</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> </div>
                        </div>

{/* 10th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Business address and telephone No. :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> عنوان العمل ورقم الهاتف
                                        </div>
                        </div>


{/* 11th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold", marginLeft: "60px"}}>{data.sponsorPhone}</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> </div>
                        </div>

{/* 12th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black",paddingBottom: "5px", marginTop: "7px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Purpose Of Travel :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>
     

                                        <div style={{display: "flex", justifyContent: "space-between",  width: "75%",}}>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "work" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "50px", paddingLeft: "7px"}}>Work</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "transit" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "55px", paddingLeft: "7px"}}>Transit</span>

                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "workingvisit" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "50px", paddingLeft: "7px"}}>Visit</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "umrah" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "55px", paddingLeft: "7px"}}>Umrah</span>

                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "residence" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "73px", paddingLeft: "7px"}}>Residence</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "hajj" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "45px", paddingLeft: "7px"}}>Hajj</span>

                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "diplomacy" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "80px", paddingLeft: "7px"}}>Diplomacy</span>
                                        <span style={{fontFamily: "serif",  fontSize: "15px", background: `${data.visaType.toLowerCase() === "other" ? "#88898a" : ""}`, marginTop: "-7px", marginBottom: "-5px", paddingTop: "7px", width: "50px", paddingLeft: "7px"}}>Other</span>

                                        </div>





                                        <div> الغرض
                                        </div>
                        </div>


{/* 13th line */}


<div style={{borderBottom: "2px solid black",}}>

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Place of Issue :</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.passportissueplace}</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>مكان الاصدار Date of issue: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px", marginRight: "15px"}}>{data.dateofissue}</span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px", }}>تاريخ الاصدار</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Passport No: </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.passportnum}</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>رقم الجواز</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>


<div>


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Date of Expiry :</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.expireddate}</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "15px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>تاريخ الانتهاء</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>

</div>


</div>


{/* 14th line */}



<div style={{borderBottom: "2px solid black",}}>

<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" , borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>تاريخ المغادرة      </span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>تاريخ الوصول</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>مدة الإقامة بالمملكة</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    






</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>









<div>


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between",  borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Duration of stay in the Kingdom :</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Date of arrival :</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date of arrival :</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date of departuer :</span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    






</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}></span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>
</div>












</div>



{/* 15th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>Mode of Payment:</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>طريقة الدفع Payment No: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>رقم الدفع Date: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between",}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
{/* <span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}>Place of Birth : </span> */}
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>تاريخ</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>

{/* 16th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "1px", marginTop: "1px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold"}}>Relationship :</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div> </div>
                        </div>






{/* 17th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid black", paddingBottom: "5px", marginTop: "2px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",}}>Destination:</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "15px",}}>02/11/1997</span> */}



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", }}>المكان المقصود Dealer Name: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>CHORA</span> */}
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

</div>




<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
{/* <span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}>Place of Birth : </span> */}
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>اسم البائع</span>
</div>    


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}



</div>



</div>


{/* 18th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "4px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Dependents traveling in the same passport:</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div>  ايضاحات تخص أفراد العائلة المضافين على نفس جواز السفر    </div>
                        </div>


{/* 19th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", border: "1px solid black",  marginTop: "1px", height: "50px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRight: "1px solid black", height: "100%", width: "35%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>صلة  </span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Relationship</span>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRight: "1px solid black", height: "100%", width: "15%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>تاريخ الميلاد      </span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Date of Birth</span>



  </div>


  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRight: "1px solid black", height: "100%", width: "30%"}}>


  
<span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>الجنس</span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Sex</span>



</div>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%", width: "20%"}}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px",marginRight: "5px"}}>الاسم الكامل      </span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>Full Name</span>



  </div>



</div>


{/* 20th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid black", marginTop: "4px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "50%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Name and address of company or individual in the Kingdom:</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div style={{borderBottom: "1px solid black", marginBottom: "4px", width:"40%", display: "flex", justifyContent: "flex-end"}}> اسم وعنوان الشركه او اسم الشخص وعنوانه بالمملكة                                        </div>
                        </div>



{/* 21th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "1px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "60%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>The undersigned hereby certify that all the information I have provided are correct</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>       أقر انا الموقع أدناه بأن كل المعلومات التي دونتها صحيحة                                        </div>
                        </div>


{/* 22th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "-3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "60%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>I will abide by the lows of the Kingdom during the period of my residence in it. </span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>       وسأكون ملتزمآ يقوانين المملكة أثناء فترة وجودي بها                                        </div>
                        </div>



{/* 23th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "3px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "46%"}}>


  <div>
      <span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date:</span>
      <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{formattedTodayDate}</span>
      </div>
     


      <div style={{display: "flex", alignItems: "center"}}>
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>Signature: </span>
    <hr style={{borderBottom: "1px solid black", flexGrow: "1", marginTop: "13px",   width: "80px"}} />
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التوقيع</span>
</div>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "53%"}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Name : </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>{data.name} {data.middleName} {data.surname}</span>
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> الاسم الكامل</span>



</div>
</div>


{/* 24th line */}




<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>For offical use only:</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>     للاستخدام الرسمي فقط                                        </div>
                        </div>




{/* 25th line */}



<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "3px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "46%"}}>


  <div>
      <span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Visit / Work For :</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span> */}
      </div>
     


      <div style={{display: "flex", alignItems: "center"}}>
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التاريخ    </span>
    {/* <hr style={{borderBottom: "1px solid black", flexGrow: "1", marginTop: "13px",   width: "80px"}} />
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التوقيع</span> */}
</div>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "53%"}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Authorization: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>NIYASA GETANA AREDA</span> */}
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> تفويض</span>



</div>
</div>



{/* 26th line */}


<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Type</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>       زيادة او العمل من أجل                                        </div>
                        </div>



{/* 27th line */}




<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", paddingBottom: "5px", marginTop: "3px"}}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "49.7%"}}>


  <div>
      <span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Date of Birth:</span>
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>02/11/1997</span> */}
      </div>
     


      <div style={{display: "flex", alignItems: "center"}}>
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>نوع </span>
    {/* <hr style={{borderBottom: "1px solid black", flexGrow: "1", marginTop: "13px",   width: "80px"}} />
    <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif"}}>التوقيع</span> */}
</div>



  </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", width: "49.7%"}}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", marginRight: "5px"}}>Duration: </span>
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>NIYASA GETANA AREDA</span> */}
</div>    




<span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}> المدة الزمنية</span>



</div>
</div>


{/* 28th line */}



<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "3px", }}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>رئيس القسم القنصلي</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>      فحص بواسطة                                        </div>
                        </div>




{/* 29th line */}



<div className="first-line" style={{fontFamily: "serif",  fontSize: "8px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent", marginTop: "3px"}}>
                                      <div style={{fontFamily: "serif",  fontSize: "8px",  display: "flex", justifyContent: "space-between", width: "35%"}}>
                                        <span style={{fontFamily: "serif",  fontSize: "13px",}}>Head of consular section</span>
                                        {/* <span style={{fontWeight:"bold", fontSize: "13px", fontFamily: "serif",}}>NIYASA GETANA AREDA </span> */}
                                        </div>

                                        <div  style={{fontFamily: "serif",  fontSize: "13px",}}>     Checked by  </div>
                        </div> 



{/* 30th line */}

{/* <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end",  height: "4%",  }}>
<div className="first-line" style={{fontFamily: "serif",  fontSize: "13px", display: "flex", justifyContent: "space-between", borderBottom: "2px solid transparent",    }}>


<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


  
      <span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold"}}>{dayName}, {monthName} {dayNumber}, {year}</span> */}
      {/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "15px",}}>02/11/1997</span> */}
     

  {/* </div>

  <div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                         
<span style={{fontFamily: "serif",  fontSize: "13px", fontWeight: "bold", marginRight: "5px"}}>www.ntechagent.com | </span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",  marginRight: "5px"}}> <span> </span> +251 911 454176 | <span> </span></span>
<span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>ntechagent@gmail.com</span>
</div>     */}


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

{/* </div>




<div style={{fontFamily: "serif",  fontSize: "13px",  display: "flex", justifyContent: "space-between", }}>


<div style={{display: "flex", justifyContent: "space-between", }}>                          */}
{/* <span style={{fontFamily: "serif",  fontSize: "15px", marginRight: "5px"}}>Place of Birth : </span> */}
{/* <span style={{fontWeight:"bold", fontFamily: "serif",  fontSize: "13px",}}>page 1 of 1</span>
</div>     */}


{/* <span style={{fontWeight:"bold", fontSize: "15px", fontFamily: "serif",}}>مكان الميلاد</span> */}

{/* 

</div>



</div>

</div> */}


{/* 31th line */}
                    </div>
                </div>
            </div>


      {/* second embassy cv end */}
        
</div>


      
    </Container>
  );
};

export default DetailPage;