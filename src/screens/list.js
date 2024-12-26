// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete'; 
// import IconButton from '@mui/material/IconButton';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Header from "../screens/header"

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'surname', label: 'Surname', minWidth: 100 },
//   { id: 'currentNationality', label: 'Nationality', minWidth: 170 },
//   { id: 'postappliedfor', label: 'Position', minWidth: 170 },
  
//   // { id: 'country', label: 'Country', minWidth: 170 },
//   { id: 'createdAt', label: 'Created At', minWidth: 170 },
  
//   { id: 'actions', label: 'Actions', minWidth: 100 },
// ];

// export default function StickyHeadTable() {

//   const initialPersonalInfo = { name: '', middleName: "", email: '', phone: '', about: '', surname: "", placeOfBirth: "", passportNo: "",passportIssuePlace: "", nationality: "ETHIOPIA", maritalStatus: "", numberOfChildren: "", religion: "", weight: "", height: "", educationAttainment: "", postAppliedFor: "", contractPeriod: "2", arabicDegree: "", englishDegree: "", ownPhoneNumber: "", contactPhoneNumber: "", monthlysalarySaudi: "", monthlysalaryJordan: "", idno: "", sex: "", visaNo: "", passportType: "", placeOfIssue: "", emptyfield: false, dateOfBirth: "", age:"", country: "", position: "", period: ""}
//       const initialSponsorInfo = {visaNo: "", sponsorId: "", sponsorAdress: "", nationalId: "", email: "", sponsorName: "", sponsorPhone: "", agent: "", sponsorArabic: '', visaType: "", fileNo: "", wakala: "", signedUp: "", biometricId: "", contract: "", stickerVisa: "", currentNationality: "", laborId: "", sponsorInformationEmptyfield: false}
//     const [personalInfo, setPersonalInfo] = React.useState(initialPersonalInfo);
//     const [sponsorInformation, setSponsorInfo] = React.useState(initialSponsorInfo);


//     const [dateOfIssue, setDateOfIssue] = React.useState('');
//   const [dateOfExpiry, setDateOfExpiry] = React.useState('');
//   const [expiryError, setExpiryError] = React.useState('');

//   const [dob, setDob] = React.useState('');
    
//   const navigate = useNavigate();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [rows, setRows] = React.useState([]);
//   const [open, setOpen] = React.useState(false);
//   const [editData, setEditData] = React.useState({});
  
//   // Menu state
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedRow, setSelectedRow] = React.useState(null);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://skywayapi.ntechagent.com/tt');
//         const result = await response.json();
//         if (result.status === 'ok') {
//           console.log(result.data); // Log the fetched data for debugging
//           const sortedData = result.data
//             .filter(item => item.createdAt)
//             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//           setRows(sortedData);
//         } else {
//           console.error('Error fetching data:', result.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this item?');
//     if (confirmDelete) {
//       try {
//         const response = await fetch(`https://skywayapi.ntechagent.com/tget-images/${id}`, {
//           method: 'DELETE',
//         });
//         const result = await response.json();
//         if (result.status === 'ok') {
//           setRows(rows.filter(row => row.id !== id));
//         } else {
//           console.error('Error deleting data:', result.message);
//         }
//       } catch (error) {
//         console.error('Delete error:', error);
//       }
//     }
//   };

//   const handleEdit = (row) => {
//     setEditData(row);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditData({
//       ...editData,
//       [name]: value,
//     });
//   };


//   ///////////////////////////////////

//   const handlePaste = async (e) => {
//     e.preventDefault(); // Prevent the default paste behavior

//     try {
//       // Use the Clipboard API to read the clipboard data
//       const pastedData = await navigator.clipboard.readText();
//       console.log("Raw pasted data:", pastedData);

//       // Split the pasted data into lines
//       const lines = pastedData.split('\n').map(line => line.trim());
//       console.log("Processed lines:", lines);

//       // Create a temporary object to hold extracted values
//       const newPersonalInfo = { ...personalInfo };

//       // Map the fields based on the pasted data
//       lines.forEach(line => {
//         personalInfo.surname = lines[2];


//               if(line.includes("Location")) {
//                   if(lines[lines.indexOf("Location") - 2]){
//                     editData.sponsorName = lines[lines.indexOf("Location") - 2]
//                   }  else if (lines[0] != "Location"){
//                     editData.sponsorName = lines[0]
//                   }
                  
//                   else {
                      
//                   }
                  
//                 }
  
  
//                 if(line.includes("Location")) {
//                   if(lines[lines.indexOf("Location") + 2]){
//                     editData.sponsorAddress = lines[lines.indexOf("Location") + 2]
//                   }  
                  
//                 }
  
  
  
//             if(line.includes("Surname")) {
//               editData.surname = lines[lines.indexOf("Surname") + 1]
//             }
//             if (line.includes('Given Names')) {
//               const nextLine = lines[lines.indexOf("Given Names") + 1];
//               const firstName = nextLine.split(' ')[0]; // Get the first part
//               editData.name = firstName; // Assign the first name
//           }
  
//             if (line.includes('Given Names')) {
//               const nextLine = lines[lines.indexOf("Given Names") + 1];
//               const middleNameParts = nextLine.split(' '); // Split the line by space
//               editData.middleName = middleNameParts[1]; // Get the second part
//           }
//             if (line.includes('Marital Status')) {
//               // newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
//               editData.martialStatus = lines[lines.indexOf("Marital Status") + 1]
//             }
//             if (line.includes('Religion')) {
//               editData.religion = lines[lines.indexOf("Religion") + 1]     
//              }
//             if (line.includes('Job')) {
//               editData.postappliedfor = lines[lines.indexOf("Job") + 1]  
//             }
//             if (line.includes('Qualifications')) {
//               editData.educationattainment = lines[lines.indexOf("Qualifications") + 1]  
//             }
//             if (line.includes('Mobile Number')) {
//               editData.ownphonenumber = lines[lines.indexOf("Mobile Number") + 1]  
//             }
//             // if (line.includes('Passport Number')) {
//             //   editData.passportno = lines[lines.indexOf("Passport Number") + 1]  
//             // }
  
//             if (line.includes('Passport Number')) {
//               editData.passportnum = lines[lines.indexOf("Passport Number") + 1]  
//             }
  
  
//           //   if (line.includes("Skills")) {
              
//           //     expcheck.exp1= false
//           //     expcheck.exp2= false
//           //     expcheck.exp3= false
//           //     expcheck.exp4= false
//           //     expcheck.exp5= false
//           //     newPersonalInfo.passportNo = lines[lines.indexOf("Passport Number") + 1]  
  
//           //     if(lines[lines.indexOf("Skills") + 1].includes("workerBabysitting")){
//           //        expcheck.exp1 = true
//           //     }
//           //      if(lines[lines.indexOf("Skills") + 1].includes("cleaningWashing")){
//           //         expcheck.exp2 = true
//           //     }
//           //   }
             
            
//             if (line.includes('Passport Issue Place')) {
//               editData.passportissueplace = lines[lines.indexOf("Passport Issue Place") + 1]
//             } 

//             if (line.includes('Passport Expiry Date')) {
//               editData.expireddate = lines[lines.indexOf("Passport Expiry Date") + 1]
//             } 
  
//             if (line.includes('Visa Number')) {
//               if(lines[lines.indexOf("Visa Number") + 1] === ""){
//                 editData.visaNo = lines[lines.indexOf("Visa Number") + 2]
//               } else {
//                 editData.visaNo = lines[lines.indexOf("Visa Number") + 1]
//               }
//               // newPersonalInfo.visaNo = lines[lines.lastIindexOf("Visa Number") + 1]
//             } 
  
//             if (line.includes('Passport Issue Date')) {
//               setDateOfIssue(lines[lines.indexOf("Passport Issue Date") + 1]) 
//               editData.dateofissue = lines[lines.indexOf("Passport Issue Date") + 1]
//             }
            
//             if (line.includes("Gender")) {
//               editData.sex = lines[lines.indexOf("Gender") + 1] 
//             }
//             if (line.includes("ID Number")) {
//               editData.idno = lines[lines.indexOf("ID Number") + 1] 
//             }

//             if (line.includes("ID Number")) {
//               editData.sponsorId = lines[lines.indexOf("ID Number") + 1] 
//             }

//             if (line.includes("Date of Birth")) {
//              setDob(lines[lines.indexOf("Date of Birth") + 1])
//              editData.dateofbirth = lines[lines.indexOf("Date of Birth") + 1]
             
//             }
//       });

//       // Update the state with the new values
//       setPersonalInfo(newPersonalInfo);
//     } catch (err) {
//       console.error('Failed to read clipboard contents: ', err);
//     }
//   };



//   ///////////////////////////////////

//   const handleSubmit = async () => {

//     if (editData.applicationNo && !editData.applicationNo.startsWith('E')) {
//       editData.applicationNo = 'E' + editData.applicationNo; // Prepend 'E' if it doesn't start with 'E'
//     }


//     try {
//       const response = await fetch(`https://skywayapi.ntechagent.com/tget-images/${editData.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editData),
//       });
//       const result = await response.json();
//       if (result.status === 'ok') {
//         setRows(rows.map(row => (row.id === editData.id ? result.data : row)));
//         handleClose();
//       } else {
//         console.error('Error updating data:', result.message);
//       }
//     } catch (error) {
//       console.error('Update error:', error);
//     }
//   };

//   const handleRowClick = (id) => {
//     navigate(`/list/${id}`);
//   };

//   const handleMenuClick = (event, row) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedRow(row);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMenuOptionClick = (option, event) => {
//     event.stopPropagation(); // Prevents navigation when the menu option is clicked
//     handleMenuClose();
//     if (option === 'copy-link') {
//       // Construct the detail page URL
//       const link = `${window.location.origin}/list/${selectedRow._id}`;
      
//       // Copy the link to the clipboard
//       navigator.clipboard.writeText(link)
//         .then(() => {
//           console.log('Link copied to clipboard:', link);
//           alert('Link copied to clipboard!'); // Optional: give feedback to the user
//         })
//         .catch(err => {
//           console.error('Failed to copy link:', err);
//         });
//     } else if (option === 'detail') {
//       navigate(`/list/${selectedRow._id}`);
//     } else if (option === 'send') {
//       // Implement send functionality here
//       console.log('Send option for:', selectedRow);
//     }
//   };
  

//   return (
//     <>
    
            
            
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//     <Header /> 
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//   {rows
//     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//     .map((row) => (
//       <TableRow hover role="checkbox" tabIndex={-1} key={row._id} onClick={() => handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt)}>
//         {columns.map((column) => {
//           const value = row[column.id];
//           return (
//             <TableCell key={column.id} align={column.align}>
//               {column.id === 'actions' ? (
//                 <>
//                   <IconButton onClick={(event) => { event.stopPropagation(); handleEdit(row); }}>
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton color="error" onClick={(event) => { event.stopPropagation(); handleDelete(row.id); }}>
//                     <DeleteIcon />
//                   </IconButton>
//                   <IconButton onClick={(event) => { event.stopPropagation(); handleMenuClick(event, row); }}>
//                     <MoreVertIcon />
//                   </IconButton>
//                   <Menu
//   anchorEl={anchorEl}
//   open={Boolean(anchorEl)}
//   onClose={handleMenuClose}
// >
//   <MenuItem onClick={(event) => handleMenuOptionClick('copy-link', event)}>Copy Link</MenuItem>
//   <MenuItem onClick={(event) => handleMenuOptionClick('detail', event)}>Detail</MenuItem>
//   <MenuItem onClick={(event) => handleMenuOptionClick('send', event)}>Send</MenuItem>
// </Menu>
//                 </>
//               ) : (
//                 value
//               )}
//             </TableCell>
//           );
//         })}
//       </TableRow>
//     ))}
// </TableBody>

//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//       {/* Edit Modal */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Edit Entry</DialogTitle>
//         <DialogContent sx={{ maxHeight: '400px', overflowY: 'auto' }}>
//         <div style={{ padding: '20px' }}>
//       <button onClick={handlePaste}>Paste Data from Mosand</button>
      
//     </div>
//           <TextField
//             autoFocus
//             margin="dense"
//             name="name"
//             label="Name"
//             fullWidth
//             variant="outlined"
//             value={editData.name || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             name="middleName"
//             label="Middle Name"
//             fullWidth
//             variant="outlined"
//             value={editData.middleName || ''}
//             onChange={handleInputChange}
//           />
          
         
//           <TextField
//             margin="dense"
//             name="surname"
//             label="Surname"
//             fullWidth
//             variant="outlined"
//             value={editData.surname || ''}
//             onChange={handleInputChange}
//           />

//           <TextField
//             margin="dense"
//             name="applicationNo"
//             label="ApplicantId Number"
//             fullWidth
//             variant="outlined"
//             value={editData.applicationNo || ''}
//             onChange={handleInputChange}
//           />

//           <TextField
//             margin="dense"
//             name="sex"
//             label="sex"
//             fullWidth
//             variant="outlined"
//             value={editData.sex || ''}
//             onChange={handleInputChange}
//           />

//            <TextField
//             margin="dense"
//             name="placeofbirth"
//             label="Place of Birth"
//             fullWidth
//             variant="outlined"
//             value={editData.placeofbirth || ''}
//             onChange={handleInputChange}
//           />

//           <TextField
//             margin="dense"
//             name="passportnum"
//             label="Passport Number"
//             fullWidth
//             variant="outlined"
//             value={editData.passportnum || ''}
//             onChange={handleInputChange}
//           />

//            <TextField
//             margin="dense"
//             name="passportIssuePlace"
//             label="Passport Place of Issue"
//             fullWidth
//             variant="outlined"
//             value={editData.passportIssuePlace || ''}
//             onChange={handleInputChange}
//           />
          
//           {/* <TextField
//             margin="dense"
//             name="nationality"
//             label="Nationality"
//             fullWidth
//             variant="outlined"
//             value={editData.nationality || ''}
//             onChange={handleInputChange}
//           /> */}
//            <TextField
//             margin="dense"
//             name="martialstatus"
//             label="Martial Status"
//             fullWidth
//             variant="outlined"
//             value={editData.martialstatus || ''}
//             onChange={handleInputChange}
//           />
//            <TextField
//             margin="dense"
//             name="numberofchildren"
//             label="Number of Children"
//             fullWidth
//             variant="outlined"
//             value={editData.numberofchildren || ''}
//             onChange={handleInputChange}
//           />
//            <TextField
//             margin="dense"
//             name="religion"
//             label="Religion"
//             fullWidth
//             variant="outlined"
//             value={editData.religion || ''}
//             onChange={handleInputChange}
//           />
//            <TextField
//             margin="dense"
//             name="weight"
//             label="weight"
//             fullWidth
//             variant="outlined"
//             value={editData.weight || ''}
//             onChange={handleInputChange}
//           />
//            <TextField
//             margin="dense"
//             name="height"
//             label="Height"
//             fullWidth
//             variant="outlined"
//             value={editData.height || ''}
//             onChange={handleInputChange}
//           />
//            <TextField
//             margin="dense"
//             name="educationattainment"
//             label="Education Attainment"
//             fullWidth
//             variant="outlined"
//             value={editData.educationattainment || ''}
//             onChange={handleInputChange}
//           />
//            <TextField
//             margin="dense"
//             name="postappliedfor"
//             label="Position Applied For"
//             fullWidth
//             variant="outlined"
//             value={editData.postappliedfor || ''}
//             onChange={handleInputChange}
//           />
//            {/* <TextField
//             margin="dense"
//             name="contractperiod"
//             label="Contract Period"
//             fullWidth
//             variant="outlined"
//             value={editData.contractperiod || ''}
//             onChange={handleInputChange}
//           /> */}
//            <TextField
//             margin="dense"
//             name="arabicdegree"
//             label="Arabic Degree"
//             fullWidth
//             variant="outlined"
//             value={editData.arabicdegree || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="englishdegree"
//             label="English Degree"
//             fullWidth
//             variant="outlined"
//             value={editData.englishdegree || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="ownphonenum"
//             label="Own Phone Number"
//             fullWidth
//             variant="outlined"
//             value={editData.ownphonenum || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="contactphonenum"
//             label="Contact Phone Number"
//             fullWidth
//             variant="outlined"
//             value={editData.contactphonenum || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="dateofbirth"
//             label="Date of Birth"
//             fullWidth
//             variant="outlined"
//             value={editData.dateofbirth || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="age"
//             label="Age"
//             fullWidth
//             variant="outlined"
//             value={editData.age || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="dateofissue"
//             label="Date of Issue"
//             fullWidth
//             variant="outlined"
//             value={editData.dateofissue || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="expireddate"
//             label="Expired Date"
//             fullWidth
//             variant="outlined"
//             value={editData.expireddate || ''}
//             onChange={handleInputChange}
//           />
//           {/* <TextField
//             margin="dense"
//             name="country"
//             label="Country"
//             fullWidth 
//             variant="outlined"
//             value={editData.country || ''}
//             onChange={handleInputChange}
//           /> */}
//           {/* <TextField
//             margin="dense"
//             name="position"
//             label="Position"
//             fullWidth
//             variant="outlined"
//             value={editData.position || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="period"
//             label="Period"
//             fullWidth
//             variant="outlined"
//             value={editData.period || ''}
//             onChange={handleInputChange}
//           /> */}
//           <TextField
//             margin="dense"
//             name="monthlysalarySaudi"
//             label="Monthly Salary Saudi"
//             fullWidth
//             variant="outlined"
//             value={editData.monthlysalarySaudi || ''}
//             onChange={handleInputChange}
//           />

// <TextField
//             margin="dense"
//             name="monthlysalaryJordan"
//             label="Monthly Salary Jordan"
//             fullWidth
//             variant="outlined"
//             value={editData.monthlysalaryJordan || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="monthlysalarySaudi"
//             label="Monthly Salary Saudi"
//             fullWidth
//             variant="outlined"
//             value={editData.monthlysalarySaudi || ''}
//             onChange={handleInputChange}
//           />


//           {/* Sponsor Information */}

//           <TextField
//             margin="dense"
//             name="visaNo"
//             label="Visa Number"
//             fullWidth
//             variant="outlined"
//             value={editData.visaNo || ''}
//             onChange={handleInputChange}
//           />

//           <TextField
//             margin="dense"
//             name="sponsorId"
//             label="Sponsor Id"
//             fullWidth
//             variant="outlined"
//             value={editData.sponsorId || ''}
//             onChange={handleInputChange}
//           />

//           <TextField
//             margin="dense"
//             name="sponsorAddress"
//             label="Sponsor Address"
//             fullWidth
//             variant="outlined"
//             value={editData.sponsorAddress || ''}
//             onChange={handleInputChange}
//           />

//          <TextField
//             margin="dense"
//             name="nationalId"
//             label="National Id"
//             fullWidth
//             variant="outlined"
//             value={editData.nationalId || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="email"
//             label="Email"
//             fullWidth
//             variant="outlined"
//             value={editData.email || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="sponsorName"
//             label="Sponsor Name"
//             fullWidth
//             variant="outlined"
//             value={editData.sponsorName || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="sponsorPhone"
//             label="Sponsor Phone"
//             fullWidth
//             variant="outlined"
//             value={editData.sponsorPhone || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="sponsorArabic"
//             label="Sponsor Arabic"
//             fullWidth
//             variant="outlined"
//             value={editData.sponsorArabic || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="visaType"
//             label="Visa Type"
//             fullWidth
//             variant="outlined"
//             value={editData.visaType || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="fileNo"
//             label="File Number"
//             fullWidth
//             variant="outlined"
//             value={editData.fileNo || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="wakala"
//             label="Wakala"
//             fullWidth
//             variant="outlined"
//             value={editData.wakala || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="signedUp"
//             label="Signed Up"
//             fullWidth
//             variant="outlined"
//             value={editData.signedUp || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="biometricId"
//             label="Biometric Id"
//             fullWidth
//             variant="outlined"
//             value={editData.biometricId || ''}
//             onChange={handleInputChange}
//           />
          
//           <TextField
//             margin="dense"
//             name="contract"
//             label="Contract"
//             fullWidth
//             variant="outlined"
//             value={editData.contract || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="stickerVisa"
//             label="Sticker Visa"
//             fullWidth
//             variant="outlined"
//             value={editData.stickerVisa || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="currentNationality"
//             label="Current Nationality"
//             fullWidth
//             variant="outlined"
//             value={editData.currentNationality || ''}
//             onChange={handleInputChange}
//           />
//           <TextField
//             margin="dense"
//             name="laborId"
//             label="Labor Id"
//             fullWidth
//             variant="outlined"
//             value={editData.laborId || ''}
//             onChange={handleInputChange}
//           />
          
         
       
        
//           {/* Add more fields as necessary */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>


//     </Paper>
//     </>
//   );
// }



/////////////////////////////////////////////////////////////










import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'; 
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Header from "../screens/header"


//  insert checkbox and embassy_list pdf
import Checkbox from '@mui/material/Checkbox';
import html2pdf from 'html2pdf.js';
import embassylistpdftopimage from "../../src/image_placeholder/embassylistpdftopimage.png"
import Barcode from 'react-barcode';
import { useRef } from 'react';

// insert checkbox and embassy_list pdf end

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'surname', label: 'Surname', minWidth: 100 },
  { id: 'currentNationality', label: 'Nationality', minWidth: 170 },
  { id: 'postappliedfor', label: 'Position', minWidth: 170 },
  
  // { id: 'country', label: 'Country', minWidth: 170 },
  { id: 'createdAt', label: 'Created At', minWidth: 170 },
  
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

export default function StickyHeadTable() {

  const initialPersonalInfo = { name: '', middleName: "", email: '', phone: '', about: '', surname: "", placeOfBirth: "", passportNo: "",passportIssuePlace: "", nationality: "ETHIOPIA", maritalStatus: "", numberOfChildren: "", religion: "", weight: "", height: "", educationAttainment: "", postAppliedFor: "", contractPeriod: "2", arabicDegree: "", englishDegree: "", ownPhoneNumber: "", contactPhoneNumber: "", monthlysalarySaudi: "", monthlysalaryJordan: "", idno: "", sex: "", visaNo: "", passportType: "", placeOfIssue: "", emptyfield: false, dateOfBirth: "", age:"", country: "", position: "", period: ""}
      const initialSponsorInfo = {visaNo: "", sponsorId: "", sponsorAdress: "", nationalId: "", email: "", sponsorName: "", sponsorPhone: "", agent: "", sponsorArabic: '', visaType: "", fileNo: "", wakala: "", signedUp: "", biometricId: "", contract: "", stickerVisa: "", currentNationality: "", laborId: "", sponsorInformationEmptyfield: false}
    const [personalInfo, setPersonalInfo] = React.useState(initialPersonalInfo);
    const [sponsorInformation, setSponsorInfo] = React.useState(initialSponsorInfo);


    const [dateOfIssue, setDateOfIssue] = React.useState('');
  const [dateOfExpiry, setDateOfExpiry] = React.useState('');
  const [expiryError, setExpiryError] = React.useState('');

  const [dob, setDob] = React.useState('');
    
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [editData, setEditData] = React.useState({});
  
  // Menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);


  // inser checkbox and embassy_list cv

  const [selected, setSelected] = React.useState([]); // State for selected rows
  const [isAnyChecked, setIsAnyChecked] = React.useState(false);

  const selectedRows = rows.filter(row => selected.includes(row.id));
  

  const handleSelectAllClick = (event) => {


    if (event.target.checked) {
        const newSelecteds = rows.map((row) => row.id);
        setSelected(newSelecteds);
        setIsAnyChecked(true); // Set to true if any checkbox is checked
        return;
      }
      setSelected([]);
      setIsAnyChecked(false); // 


    // if (event.target.checked) {
    //   const newSelecteds = rows.map((row) => row.id);
    //   setSelected(newSelecteds);
    //   return;
    // }
    // setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
  
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
  
    setSelected(newSelected);
    setIsAnyChecked(newSelected.length > 0); // Update visibility based on selected count
  };


  const pdfRef = useRef();


  
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


  const downloadCV = () => {
      const element = pdfRef.current;
    
      // Configuration for html2pdf
      const isMobile = window.innerWidth <= 768; // Adjust based on your breakpoints
      const config = {
        filename: 'Embassy_list.pdf',
        margin: [1, 0.2, 0, 0.2],
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: isMobile ? 1 : 2, logging: true, dpi: 300, letterRendering: true },
        jsPDF: { unit: 'mm', format: isMobile ? 'A4' : 'letter', orientation: 'Portrait' }
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
            const centerXPosition = pdf.internal.pageSize.getWidth() / 2 + 10; // Center position
    
            // Add phone number on the left
            pdf.text(`${phoneNumber}`, leftXPosition, pageYPosition);
    
            // Add email in the center
            pdf.text(` ${email}`, centerXPosition, pageYPosition, { align: 'center' });
    
            // Add page number and total pages to the footer on the right
            pdf.text(`Page ${i} of ${totalPages}`, rightXPosition, pageYPosition);
            // pdf.text(`${email}`, rightXPosition, pageYPosition);
          }
        })
        .save();
    };
    

  // insert checkbox end

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://skywayapi.ntechagent.com/tt');
        const result = await response.json();
        if (result.status === 'ok') {
          console.log(result.data); // Log the fetched data for debugging
          const sortedData = result.data
            .filter(item => item.createdAt)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setRows(sortedData);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      try {
        const response = await fetch(`https://skywayapi.ntechagent.com/tget-images/${id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.status === 'ok') {
          setRows(rows.filter(row => row.id !== id));
        } else {
          console.error('Error deleting data:', result.message);
        }
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  const handleEdit = (row) => {
    setEditData(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };


  ///////////////////////////////////

  const handlePaste = async (e) => {
    e.preventDefault(); // Prevent the default paste behavior

    try {
      // Use the Clipboard API to read the clipboard data
      const pastedData = await navigator.clipboard.readText();
      console.log("Raw pasted data:", pastedData);

      // Split the pasted data into lines
      const lines = pastedData.split('\n').map(line => line.trim());
      console.log("Processed lines:", lines);

      // Create a temporary object to hold extracted values
      const newPersonalInfo = { ...personalInfo };

      // Map the fields based on the pasted data
      lines.forEach(line => {
        personalInfo.surname = lines[2];


              if(line.includes("Location")) {
                  if(lines[lines.indexOf("Location") - 2]){
                    editData.sponsorName = lines[lines.indexOf("Location") - 2]
                  }  else if (lines[0] != "Location"){
                    editData.sponsorName = lines[0]
                  }
                  
                  else {
                      
                  }
                  
                }
  
  
                if(line.includes("Location")) {
                  if(lines[lines.indexOf("Location") + 2]){
                    editData.sponsorAddress = lines[lines.indexOf("Location") + 2]
                  }  
                  
                }
  
  
  
            if(line.includes("Surname")) {
              editData.surname = lines[lines.indexOf("Surname") + 1]
            }
            if (line.includes('Given Names')) {
              const nextLine = lines[lines.indexOf("Given Names") + 1];
              const firstName = nextLine.split(' ')[0]; // Get the first part
              editData.name = firstName; // Assign the first name
          }
  
            if (line.includes('Given Names')) {
              const nextLine = lines[lines.indexOf("Given Names") + 1];
              const middleNameParts = nextLine.split(' '); // Split the line by space
              editData.middleName = middleNameParts[1]; // Get the second part
          }
            if (line.includes('Marital Status')) {
              // newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
              editData.martialStatus = lines[lines.indexOf("Marital Status") + 1]
            }
            if (line.includes('Religion')) {
              editData.religion = lines[lines.indexOf("Religion") + 1]     
             }
            if (line.includes('Job')) {
              editData.postappliedfor = lines[lines.indexOf("Job") + 1]  
            }
            if (line.includes('Qualifications')) {
              editData.educationattainment = lines[lines.indexOf("Qualifications") + 1]  
            }
            if (line.includes('Mobile Number')) {
              editData.ownphonenumber = lines[lines.indexOf("Mobile Number") + 1]  
            }
            // if (line.includes('Passport Number')) {
            //   editData.passportno = lines[lines.indexOf("Passport Number") + 1]  
            // }
  
            if (line.includes('Passport Number')) {
              editData.passportnum = lines[lines.indexOf("Passport Number") + 1]  
            }
  
  
          //   if (line.includes("Skills")) {
              
          //     expcheck.exp1= false
          //     expcheck.exp2= false
          //     expcheck.exp3= false
          //     expcheck.exp4= false
          //     expcheck.exp5= false
          //     newPersonalInfo.passportNo = lines[lines.indexOf("Passport Number") + 1]  
  
          //     if(lines[lines.indexOf("Skills") + 1].includes("workerBabysitting")){
          //        expcheck.exp1 = true
          //     }
          //      if(lines[lines.indexOf("Skills") + 1].includes("cleaningWashing")){
          //         expcheck.exp2 = true
          //     }
          //   }
             
            
            if (line.includes('Passport Issue Place')) {
              editData.passportissueplace = lines[lines.indexOf("Passport Issue Place") + 1]
            } 

            if (line.includes('Passport Expiry Date')) {
              editData.expireddate = lines[lines.indexOf("Passport Expiry Date") + 1]
            } 
  
            if (line.includes('Visa Number')) {
              if(lines[lines.indexOf("Visa Number") + 1] === ""){
                editData.visaNo = lines[lines.indexOf("Visa Number") + 2]
              } else {
                editData.visaNo = lines[lines.indexOf("Visa Number") + 1]
              }
              // newPersonalInfo.visaNo = lines[lines.lastIindexOf("Visa Number") + 1]
            } 
  
            if (line.includes('Passport Issue Date')) {
              setDateOfIssue(lines[lines.indexOf("Passport Issue Date") + 1]) 
              editData.dateofissue = lines[lines.indexOf("Passport Issue Date") + 1]
            }
            
            if (line.includes("Gender")) {
              editData.sex = lines[lines.indexOf("Gender") + 1] 
            }
            if (line.includes("ID Number")) {
              editData.idno = lines[lines.indexOf("ID Number") + 1] 
            }

            if (line.includes("ID Number")) {
              editData.sponsorId = lines[lines.indexOf("ID Number") + 1] 
            }

            if (line.includes("Date of Birth")) {
             setDob(lines[lines.indexOf("Date of Birth") + 1])
             editData.dateofbirth = lines[lines.indexOf("Date of Birth") + 1]
             
            }
      });

      // Update the state with the new values
      setPersonalInfo(newPersonalInfo);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };



  ///////////////////////////////////

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
        setRows(rows.map(row => (row.id === editData.id ? result.data : row)));
        handleClose();
      } else {
        console.error('Error updating data:', result.message);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleRowClick = (id) => {
    navigate(`/list/${id}`);
  };

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOptionClick = (option, event, row) => {
    event.stopPropagation(); // Prevents navigation when the menu option is clicked
    handleMenuClose();
    if (option === 'copy-link') {
      // Construct the detail page URL
      const link = `${window.location.origin}/list/${selectedRow.name}-${selectedRow.middleName}-${selectedRow.surname}_${selectedRow.createdAt}`;
      
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
      navigate(`/list/${selectedRow.name}-${selectedRow.middleName}-${selectedRow.surname}_${selectedRow.createdAt}`);
    } else if (option === 'send') {
      // Implement send functionality here
      console.log('Send option for:', selectedRow);
    }
  };
  

  return (
    <>
    
            
            
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <Header /> 
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

               <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  indeterminate={selected.length > 0 && selected.length < rows.length}
                                  checked={rows.length > 0 && selected.length === rows.length}
                                  onChange={handleSelectAllClick}
                                />
                              </TableCell>

                              
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {rows
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      const isSelected = selected.indexOf(row.id) !== -1;
      return (
        <TableRow
          hover
          role="checkbox"
          tabIndex={-1}
          key={row.id}
          onClick={(event) => { 
            // event.stopPropagation(); // Prevent row click from toggling checkbox
            handleRowClick(row.name + "-" + row.middleName + "-" + row.surname + "_" + row.createdAt);
          }}
          selected={isSelected}
        >
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={isSelected}
              onChange={(event) => {
                event.stopPropagation(); // Prevent checkbox click from triggering row click
                handleClick(row.id);
              }}

              onClick={(event) => { event.stopPropagation(); /* Edit functionality */ }}
            />
          </TableCell>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.id === 'actions' ? (
                  <>
                    <IconButton onClick={(event) => { event.stopPropagation(); handleEdit(row); /* Edit functionality */ }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={(event) => { event.stopPropagation(); handleDelete(row.id) /* Delete functionality */ }}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={(event) => { event.stopPropagation(); handleMenuClick(event, row); }}>
                      <MoreVertIcon />
                      </IconButton>
                   <Menu
   anchorEl={anchorEl}
  open={Boolean(anchorEl)}
   onClose={handleMenuClose}
>
   <MenuItem onClick={(event) => handleMenuOptionClick('copy-link', event, row)}>Copy Link</MenuItem>
  <MenuItem onClick={(event) => handleMenuOptionClick('detail', event)}>Detail</MenuItem>
   <MenuItem onClick={(event) => handleMenuOptionClick('send', event)}>Send</MenuItem>
 </Menu>
                  </>
                ) : (
                  value
                )}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })}
</TableBody>


        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />


{isAnyChecked && (
  <button onClick={downloadCV} style={{ marginTop: '20px', marginLeft: "30px", marginBottom: "20px" }}>
    Download summary
  </button>
)}
      {/* Edit Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Entry</DialogTitle>
        <DialogContent sx={{ maxHeight: '400px', overflowY: 'auto' }}>
        <div style={{ padding: '20px' }}>
      <button onClick={handlePaste}>Paste Data from Mosand</button>
      
    </div>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            variant="outlined"
            value={editData.name || ''}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="middleName"
            label="Middle Name"
            fullWidth
            variant="outlined"
            value={editData.middleName || ''}
            onChange={handleInputChange}
          />
          
         
          <TextField
            margin="dense"
            name="surname"
            label="Surname"
            fullWidth
            variant="outlined"
            value={editData.surname || ''}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            name="applicationNo"
            label="ApplicantId Number"
            fullWidth
            variant="outlined"
            value={editData.applicationNo || ''}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            name="sex"
            label="sex"
            fullWidth
            variant="outlined"
            value={editData.sex || ''}
            onChange={handleInputChange}
          />

           <TextField
            margin="dense"
            name="placeofbirth"
            label="Place of Birth"
            fullWidth
            variant="outlined"
            value={editData.placeofbirth || ''}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            name="passportnum"
            label="Passport Number"
            fullWidth
            variant="outlined"
            value={editData.passportnum || ''}
            onChange={handleInputChange}
          />

           <TextField
            margin="dense"
            name="passportIssuePlace"
            label="Passport Place of Issue"
            fullWidth
            variant="outlined"
            value={editData.passportIssuePlace || ''}
            onChange={handleInputChange}
          />
          
          {/* <TextField
            margin="dense"
            name="nationality"
            label="Nationality"
            fullWidth
            variant="outlined"
            value={editData.nationality || ''}
            onChange={handleInputChange}
          /> */}
           <TextField
            margin="dense"
            name="martialstatus"
            label="Martial Status"
            fullWidth
            variant="outlined"
            value={editData.martialstatus || ''}
            onChange={handleInputChange}
          />
           <TextField
            margin="dense"
            name="numberofchildren"
            label="Number of Children"
            fullWidth
            variant="outlined"
            value={editData.numberofchildren || ''}
            onChange={handleInputChange}
          />
           <TextField
            margin="dense"
            name="religion"
            label="Religion"
            fullWidth
            variant="outlined"
            value={editData.religion || ''}
            onChange={handleInputChange}
          />
           <TextField
            margin="dense"
            name="weight"
            label="weight"
            fullWidth
            variant="outlined"
            value={editData.weight || ''}
            onChange={handleInputChange}
          />
           <TextField
            margin="dense"
            name="height"
            label="Height"
            fullWidth
            variant="outlined"
            value={editData.height || ''}
            onChange={handleInputChange}
          />
           <TextField
            margin="dense"
            name="educationattainment"
            label="Education Attainment"
            fullWidth
            variant="outlined"
            value={editData.educationattainment || ''}
            onChange={handleInputChange}
          />
           <TextField
            margin="dense"
            name="postappliedfor"
            label="Position Applied For"
            fullWidth
            variant="outlined"
            value={editData.postappliedfor || ''}
            onChange={handleInputChange}
          />
           {/* <TextField
            margin="dense"
            name="contractperiod"
            label="Contract Period"
            fullWidth
            variant="outlined"
            value={editData.contractperiod || ''}
            onChange={handleInputChange}
          /> */}
           <TextField
            margin="dense"
            name="arabicdegree"
            label="Arabic Degree"
            fullWidth
            variant="outlined"
            value={editData.arabicdegree || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="englishdegree"
            label="English Degree"
            fullWidth
            variant="outlined"
            value={editData.englishdegree || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="ownphonenum"
            label="Own Phone Number"
            fullWidth
            variant="outlined"
            value={editData.ownphonenum || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="contactphonenum"
            label="Contact Phone Number"
            fullWidth
            variant="outlined"
            value={editData.contactphonenum || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="dateofbirth"
            label="Date of Birth"
            fullWidth
            variant="outlined"
            value={editData.dateofbirth || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="age"
            label="Age"
            fullWidth
            variant="outlined"
            value={editData.age || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="dateofissue"
            label="Date of Issue"
            fullWidth
            variant="outlined"
            value={editData.dateofissue || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="expireddate"
            label="Expired Date"
            fullWidth
            variant="outlined"
            value={editData.expireddate || ''}
            onChange={handleInputChange}
          />
          {/* <TextField
            margin="dense"
            name="country"
            label="Country"
            fullWidth 
            variant="outlined"
            value={editData.country || ''}
            onChange={handleInputChange}
          /> */}
          {/* <TextField
            margin="dense"
            name="position"
            label="Position"
            fullWidth
            variant="outlined"
            value={editData.position || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="period"
            label="Period"
            fullWidth
            variant="outlined"
            value={editData.period || ''}
            onChange={handleInputChange}
          /> */}
          <TextField
            margin="dense"
            name="monthlysalarySaudi"
            label="Monthly Salary Saudi"
            fullWidth
            variant="outlined"
            value={editData.monthlysalarySaudi || ''}
            onChange={handleInputChange}
          />

<TextField
            margin="dense"
            name="monthlysalaryJordan"
            label="Monthly Salary Jordan"
            fullWidth
            variant="outlined"
            value={editData.monthlysalaryJordan || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="monthlysalarySaudi"
            label="Monthly Salary Saudi"
            fullWidth
            variant="outlined"
            value={editData.monthlysalarySaudi || ''}
            onChange={handleInputChange}
          />


          {/* Sponsor Information */}

          <TextField
            margin="dense"
            name="visaNo"
            label="Visa Number"
            fullWidth
            variant="outlined"
            value={editData.visaNo || ''}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            name="sponsorId"
            label="Sponsor Id"
            fullWidth
            variant="outlined"
            value={editData.sponsorId || ''}
            onChange={handleInputChange}
          />

          <TextField
            margin="dense"
            name="sponsorAddress"
            label="Sponsor Address"
            fullWidth
            variant="outlined"
            value={editData.sponsorAddress || ''}
            onChange={handleInputChange}
          />

         <TextField
            margin="dense"
            name="nationalId"
            label="National Id"
            fullWidth
            variant="outlined"
            value={editData.nationalId || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            value={editData.email || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="sponsorName"
            label="Sponsor Name"
            fullWidth
            variant="outlined"
            value={editData.sponsorName || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="sponsorPhone"
            label="Sponsor Phone"
            fullWidth
            variant="outlined"
            value={editData.sponsorPhone || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="sponsorArabic"
            label="Sponsor Arabic"
            fullWidth
            variant="outlined"
            value={editData.sponsorArabic || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="visaType"
            label="Visa Type"
            fullWidth
            variant="outlined"
            value={editData.visaType || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="fileNo"
            label="File Number"
            fullWidth
            variant="outlined"
            value={editData.fileNo || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="wakala"
            label="Wakala"
            fullWidth
            variant="outlined"
            value={editData.wakala || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="signedUp"
            label="Signed Up"
            fullWidth
            variant="outlined"
            value={editData.signedUp || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="biometricId"
            label="Biometric Id"
            fullWidth
            variant="outlined"
            value={editData.biometricId || ''}
            onChange={handleInputChange}
          />
          
          <TextField
            margin="dense"
            name="contract"
            label="Contract"
            fullWidth
            variant="outlined"
            value={editData.contract || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="stickerVisa"
            label="Sticker Visa"
            fullWidth
            variant="outlined"
            value={editData.stickerVisa || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="currentNationality"
            label="Current Nationality"
            fullWidth
            variant="outlined"
            value={editData.currentNationality || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="laborId"
            label="Labor Id"
            fullWidth
            variant="outlined"
            value={editData.laborId || ''}
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


    </Paper>


    


<div style={{display: "none"}}>
<div id="embassy_list" ref={pdfRef}>
  <div style={{ background: "", marginTop: "20px", display: "flex", justifyContent: "center" }}>
    <img
      src={embassylistpdftopimage}
      alt="header"
      style={{ maxWidth: '98%',  }} // Ensures the image is contained
    />
  </div>

  <div style={{ background: "", display: "flex", justifyContent: "center" }}>
    {/* <table style={{ 
      maxWidth: '97%', 
      minWidth: '97%', 
      background: '', 
      borderCollapse: 'collapse',  // Ensures borders are collapsed
      marginTop: "10px"
    }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>SNo</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Applicant Name</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Passport #</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Sponsor ID</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Visa No.</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Application No</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', fontSize: "12px" }}>Bar Code</th>
        </tr>
      </thead>
      <tbody>
        {selectedRows.map((row, index) => (
          <tr key={row.id}>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{index + 1}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.name}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.passportnum}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.sponsorId}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.visaNo}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{row.applicationNo}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>hhhhhhhhhhhh</td>
          </tr>
        ))}
      </tbody>
    </table> */}




    <table style={{ maxWidth: '97%', 
      minWidth: '97%',  borderCollapse: 'collapse', marginTop: "20px" }}>
    <thead>
        <tr>
            <th style={{ border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>SNo</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}> </span>
                </div>
            </th>
            <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>Applicant Name</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}>الاسم الأوسط</span>
                </div>
            </th>
            <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>Passport #</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}>اسم العائلة</span>
                </div>
            </th>
            <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>Sponsor ID</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}>اللقب</span>
                </div>
            </th>
            <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>Visa No.</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}>رمز السيرة الذاتية</span>
                </div>
            </th>

            <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>Application No</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}>رمز السيرة الذاتية</span>
                </div>
            </th>

            <th style={{ backgroundColor: '', border: '1px solid black', padding: '4px', color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <span style={{ fontSize: '10px', color: 'black' }}>Bar Code</span>
                    <span style={{ fontSize: '10px', color: 'black', display: "none" }}>رمز السيرة الذاتية</span>
                </div>
            </th>
        </tr>
    </thead>
    <tbody>
        {/* <tr>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV{}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV{}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>CV{}</td>
        </tr> */}

        {selectedRows.map((row, index) => ( 
            
            <tr >

{/* <td style={{ border: '1px solid black', padding: '8px', fontSize: "12" }}>{index + 1}</td> */}
            {/* <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.name}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.passportnum}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.sponsorId}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.visaNo}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>{row.applicationNo}</td>
            <td style={{ border: '1px solid black', padding: '8px', fontSize: "12px" }}>hhhhhhhhhhhh</td> */}


            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{index + 1}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.name} {row.middleName} {row.surname}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.passportnum}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.sponsorId}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.visaNo}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>{row.applicationNo}</td>
            <td style={{ border: '1px solid black', padding: '4px', textAlign: 'center', fontSize: '10px' }}>
    <Barcode
        displayValue={false}
        value={row.applicationNo && row.applicationNo.length === 10 ? row.applicationNo : "E333777777"}
        height={23}
        width={1.7}
        marginBottom={1}
    />
</td>

            </tr>
            
            ))}
       
    </tbody>
</table>



  </div>
</div>
</div>
    </>
  );
}