
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon, 
    TwitterIcon,
    LinkedinIcon,
} from 'react-share';

import html2pdf from 'html2pdf.js';

import jsPDF from 'jspdf';

import {Container, TextField, Typography, Box, Grid, Checkbox, FormControlLabel, Button,  } from '@mui/material';

    import {
        Dialog,
        DialogTitle,
        DialogContent,
        DialogActions,
      } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import NameArea from "../Components/Inputs/NameAreaInputs";
import SponsorInformation from "../Components/Inputs/sponsorinformation";
import PersonalInfo from "../Components/Outputs/PersonalInfo";
import EducationInputs from "../Components/Inputs/EducationInputs";
import EducationInfo from "../Components/Outputs/educationInfo";
import CareerInputs from "../Components/Inputs/CareerInputs";
import CareerInfo from "../Components/Outputs/CareerInfo";
import ProjectInputs from "../Components/Inputs/ProjectInputs";
import ProjectInfo from "../Components/Outputs/ProjectInfo";
import SkillsInput from "../Components/Inputs/SkillsInput";
import SkillInfo from "../Components/Outputs/SkillInfo";
import ReferenceInput from "../Components/Inputs/ReferenceInput";
import ReferenceInfo from "../Components/Outputs/ReferenceInfo";
import DocumentStyle from "../Components/DocumentStyle";
import axios from "axios";
import goldagent from "../images/goldagent.jpeg" 
import hudud from "../image_placeholder/hudud.jpeg"
import skywayimg from "../image_placeholder/skywayimg.jpeg"
import barakaimg from "../image_placeholder/barakaimg.jpeg"
import wasitimg from "../image_placeholder/wasitimg.jpeg"
import myImage from '../images/two.png'; 
import bodyimg from "../images/images.jpeg"
import imagePlaceholder from "../image_placeholder/download.png"
import ouragentlogo from "../images/ouragentlogo.jpeg"
import Header from "../screens/header"
import VidoUploaded from "../image_placeholder/videoUploaded.jpg"
import './homestyle.css'; 
// import { FormControl, useFormControlContext } from '@mui/base/FormControl';
// import { Input, inputClasses } from '@mui/base/Input';
// import { styled } from '@mui/system';
// import clsx from 'clsx';

// import {
    
    
//   } from '@mui/material';


import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';


const Home = () => {


    const [passportData, setPassportData] = useState({
        name: '',
        surname: '',
        nationality: '',
        age: '',
        passportNumber: '',
        placeOfBirth: '',
        birthDate: ''
      });


    const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', about: '', surname: "", placeOfBirth: "", passportNo: "",passportIssuePlace: "", nationality: "ETHIOPIA", maritalStatus: "Marital Status", numberOfChildren: "", religion: "Religion", weight: "", height: "", educationAttainment: "", postAppliedFor: "", contractPeriod: "2", arabicDegree: "", englishDegree: "", ownPhoneNumber: "", contactPhoneNumber: "", monthlysalarySaudi: "", monthlysalaryJordan: "", idno: "", sex: "", visaNo: "", passportType: "Normal"});
    const [sponsorInformation, setSponsorInfo] = useState({visaNo: "", sponsorId: "", sponsorAdress: "", nationalId: "", email: "", sponsorName: "", sponsorPhone: "", agent: "", sponsorArabic: '', visaType: "", fileNo: "", wakala: "", signedUp: "", biometricId: "", contract: "", stickerVisa: "", currentNationality: "", laborId: ""});
    const [educationInfo, setEducationInfo] = useState({ institute: [{ school: '', from: '', to: '', grade: '', areaStudy: '', overview: '' }] });
    const [careerInfo, setCareerInfo] = useState({ career: [{ title: '', company: '', from: '', to: '', overview: '' }] });
    const [projectInfo, setProjectInfo] = useState({ project: [{ name: '', link: '', overview: '' }] });
    const [skillInfo, setSkillInfo] = useState({ skills: [''] });
    const [referenceInfo, setReferenceInfo] = useState({ reference: [{ name: '', email: '', phone: '' }] });
    const [cvitem, setCvitem] = useState([]);
    const [image, setImage] = useState(null);
    const [allImage, setAllImage] = useState(null);
    const [passportimage, setPassportimage] = useState(null)
    const [passportallimage, setPassportallimage] = useState(null)
    const [applicantpassportimage, setApplicantPassportimage] = useState(null)
    const [applicantpassportallimage, setApplicantPassportallimage] = useState(null)
    const [fileName, setFileName] = useState("No file chosen fyet");
    const [pfileName, setPFileName] = useState("No file chosen fyet");
    const [applicantPassportfileName, setApplicantPassportFileName] = useState("No file chosen fyet");
    const fileInputRef = useRef(null);
    const pfileInputRef = useRef(null);
    const applicantFileInputRef = useRef(null)
    const [errorMessage, setErrorMessage] = useState('');


    const [validationErrors, setValidationErrors] = useState({});

    const [video, setVideo] = useState(null)
    const [videoPreview, setvideoPreview] = useState(null);
    const videofileInputRef = useRef(null);

    const [imageforpersonalimage, setImageforpersonalimage] = useState(null);
    const [imageforfullbodyimage, setImageforfullbodyimage] = useState(null);
    const [imageforpassportimage, setImageforpassportimage] = useState(null)
    


  const [applicantpersonalimagePreview, setApplicantpersonalimagePreview] = useState(null);
  const [applicantfullbodyimagePreview, setApplicantfullbodyimageimagePreview] = useState(null);
  const [applicantpassportimagePreview, setApplicantpassportimagePreview] = useState(null);


  const applicantpersonalimagefileInputRef = useRef(null);
  const applicantfullbodyimagefileInputRef = useRef(null);
  const applicantpassportimagefileInputRef = useRef(null);


  const [showModal, setShowModal] = useState(false);
  const [showsubmitModal, setShowsubmitModal] = useState(false);


    const [salaries, setSalaries] = useState({
      saudi: '',
      jordan: ''
  });

  // Effect to set default values if projectInfo is not empty
  useEffect(() => {
      if (projectInfo.project.length > 0 && projectInfo.project[0].name) {
          setSalaries({
              saudi: 'SAR 1200',
              jordan: '$275'
          });
      } else {
        setSalaries({
            saudi: 'SAR 1000',
            jordan: '$250'
        });
      }
  }, [projectInfo]);

  // Handle changes in the input fields
  const handleChange = (event) => {
      const { name, value } = event.target;
      setSalaries({
          ...salaries,
          [name]: value
      });
  };

    const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const [styles, setStyles] = useState({
    styleOne: false,
    styleTwo: false,
    styleThree: false,
    styleFour: false,
    // styleFive: false,
    all: false,
  });


  const [expcheck, setExpCheck] = useState({
    exp1: true,
    exp2: true,
    exp3: true,
    exp4: false,
    exp5: true,
    all: false,
  });

  const handleExpChange = (event) => {
    const { name, checked } = event.target;

    // If "All" checkbox is checked, set all styles to true
    if (name === 'all') {
        setExpCheck({
        exp1: checked,
        exp2: checked,
        exp3: checked,
        exp4: checked,
        exp5: checked,
        all: checked,
      });
    } else {
      // If any style is unchecked, uncheck "All"
      if (checked) {
        setExpCheck((prev) => ({ ...prev, [name]: checked }));
      } else {
        setExpCheck((prev) => ({ ...prev, [name]: checked, all: false }));
      }
    }
  };

  const [dateOfIssue, setDateOfIssue] = useState('');
  const [dateOfExpiry, setDateOfExpiry] = useState('');
  const [expiryError, setExpiryError] = useState('');


//   useEffect(() => {
//     // Automatically set Date of Expiry to 5 years after Date of Issue

//     if(dateOfExpiry.length < 2) {
//     if (dateOfIssue) {
//         const issueDate = new Date(dateOfIssue);
//         const expiryDate = new Date(issueDate.setFullYear(issueDate.getFullYear() + 5));
//         setDateOfExpiry(expiryDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD

//         // Check if expiry date has passed
//         if (expiryDate < new Date()) {
//             setExpiryError('The expiry date has passed.');
//         } else {
//             setExpiryError(''); // Clear error if valid
//         }
//     } else {
//         setDateOfExpiry('');
//         setExpiryError(''); // Clear error if no issue date is entered
//     }
// } 
// }, [dateOfIssue]);


useEffect(() => {
    // Automatically set Date of Expiry to 5 years and 1 day after Date of Issue

    if (dateOfIssue) {
        const issueDate = new Date(dateOfIssue);
        const expiryDate = new Date(issueDate.setFullYear(issueDate.getFullYear() + 5));
        expiryDate.setDate(expiryDate.getDate() - 1); // Reduce by 1 day

        setDateOfExpiry(expiryDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD

        // Check if expiry date has passed
        if (expiryDate < new Date()) {
            setExpiryError('The expiry date has passed.');
        } else {
            setExpiryError(''); // Clear error if valid
        }
    } else {
        setDateOfExpiry('');
        setExpiryError(''); // Clear error if no issue date is entered
    }
}, [dateOfIssue]);


useEffect(() => {
    // Automatically set Date of Issue to 5 years and 1 day after Date of Expiry
      if(dateOfIssue.length < 2){
    if (dateOfExpiry) {
        const expiryDate = new Date(dateOfExpiry);
        const issueDate = new Date(expiryDate);
        issueDate.setFullYear(issueDate.getFullYear() - 5); // Increase by 5 years
        issueDate.setDate(issueDate.getDate() + 1); // Increase by 1 day

        setDateOfIssue(issueDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD
    } else {
        setDateOfIssue(''); // Clear Date of Issue if no expiry date is entered
    }
}
}, [dateOfExpiry]);
//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age -= 1;
//     }
//     return age;
//   };

const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  };

//   useEffect(() => {
//     if (dob) {
//       const calculatedAge = calculateAge(dob);
//       setAge(calculatedAge);
//     } else {
//       setAge('');
//     }
//   }, [dob]);


useEffect(() => {
    if (dob) {
      const calculatedAge = calculateAge(dob);
      setAge(calculatedAge);

      // Set error message if age is less than 19
      if (calculatedAge < 18) {
        setStyles(styles.styleThree = false)
        setErrorMessage('Applicant age should be more than 18');
      } else if (calculatedAge < 21) {
        setStyles(styles.styleOne = false)
        setStyles(styles.styleTwo = false)
        setStyles(styles.styleFour = false)
  
      } else {
        setErrorMessage(''); // Clear error message if age is valid
      }
    } else {
      setAge('');
      setErrorMessage(''); // Clear error message if no DOB is entered
    }

  
  }, [dob]);

    useEffect(() => {
        passgetImage();
        getImage();
        fetchData();
        applicantgetImage();
      }, []);



      const handleStyleChange = (event) => {
        const { name, checked } = event.target;
    
        // If "All" checkbox is checked, set all styles to true
        if (name === 'all') {
          setStyles({
            styleOne: checked,
            styleTwo: checked,
            styleThree: checked,
            styleFour: checked,
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

      /*   small image uploder   */
       

      const submitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("image", image);
    
        const result = await axios.post(
          "http://localhost:4000/upload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        // Reset file name after submission
        // await getImage();
        setFileName("No file chosen yetzzzzzzzzz");
        setImage(null);
      };
    
      const onInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        setImage(selectedFile);
        setFileName(selectedFile ? selectedFile.name : "No file chosen yet"); // Update filename
      };
    
      const getImage = async () => {
        const result = await axios.get("http://localhost:4000/get-image");
        console.log(result);
        setAllImage(result.data.data);
      };

    

    const passsubmitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("pimage", passportimage);
    
        const result = await axios.post(
          "http://localhost:4000/passupload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        // Reset file name after submission
        setPFileName("No file chosen after");
        setPassportimage(null);
      };
    
      const passonInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        setPassportimage(selectedFile);
        setPFileName(selectedFile ? selectedFile.name : "No file chosen yettt"); // Update filename
      };
    
      const passgetImage = async () => {
        const result = await axios.get("http://localhost:4000/passget-image");
        console.log(result);
        setPassportallimage(result.data.data);
      };

      // delete passport image 

     const passdeleteImages = async () => {
        try {
          const response = await axios.delete("http://localhost:4000/passdelete-images");
          if (response.data.status === "ok") {
          
            setPassportallimage(null);
            alert(response.data.message); // Show success message
          }
        } catch (error) {
          console.error("Error deleting images:", error);
          alert("Failed to delete images. Please try again.");
        }
      };


      /////////////////////////////// on paste functionality 


      const handlePaste = (e) => {
        e.preventDefault(); // Prevent the default paste behavior
        const pastedData = e.clipboardData.getData('text/plain');
    
        // Split the pasted data into lines
        const lines = pastedData.split('\n').map(line => line.trim());
    
        console.log("lkdffffffff", pastedData)
        console.log("lllllllllllllll", lines)
    
        // personalInfo.surname = lines[lines.indexOf("Surname") + 1]
        personalInfo.maritalStatus = lines[lines.indexOf("Marital Status") + 1]
    
        // setDob(lines[lines.indexOf("Date of Birth") + 1])
        
        // Create a temporary object to hold extracted values
        const newPersonalInfo = { ...personalInfo };
   
    
        // Map the fields based on the pasted data
        lines.forEach(line => {
          
            personalInfo.surname = lines[2];
          if(line.includes("Surname")) {
            newPersonalInfo.surname = lines[lines.indexOf("Surname") + 1]
          }
          if (line.includes('Given Names')) {
            newPersonalInfo.name = lines[lines.indexOf("Given Names") + 1]
          
          }
          if (line.includes('Marital Status')) {
            // newPersonalInfo.maritalStatus = line.split('Marital Status')[1].trim();
            newPersonalInfo.maritalStatus = lines[lines.indexOf("Marital Status") + 1]
          }
          if (line.includes('Religion')) {
            newPersonalInfo.religion = lines[lines.indexOf("Religion") + 1]     
           }
          if (line.includes('Job')) {
            newPersonalInfo.postAppliedFor = lines[lines.indexOf("Job") + 1]  
          }
          if (line.includes('Qualifications')) {
            newPersonalInfo.educationAttainment = lines[lines.indexOf("Qualifications") + 1]  
          }
          if (line.includes('Mobile Number')) {
            newPersonalInfo.ownPhoneNumber = lines[lines.indexOf("Mobile Number") + 1]  
          }
          if (line.includes('Passport Number')) {
            newPersonalInfo.passportNo = lines[lines.indexOf("Passport Number") + 1]  
          }

          if (line.includes('Passport Number')) {
            newPersonalInfo.passportNo = lines[lines.indexOf("Passport Number") + 1]  
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
            newPersonalInfo.passportIssuePlace = lines[lines.indexOf("Passport Issue Place") + 1]
          } 

          if (line.includes('Visa Number')) {
            if(lines[lines.indexOf("Visa Number") + 1] === ""){
                newPersonalInfo.visaNo = lines[lines.indexOf("Visa Number") + 2]
            } else {
                newPersonalInfo.visaNo = lines[lines.indexOf("Visa Number") + 1]
            }
            // newPersonalInfo.visaNo = lines[lines.lastIindexOf("Visa Number") + 1]
          } 

          if (line.includes('Passport Issue Date')) {
            setDateOfIssue(lines[lines.indexOf("Passport Issue Date") + 1]) 
          }
          if (line.includes('Passport Issue Date')) {
            setDateOfIssue(lines[lines.indexOf("Passport Issue Date") + 1]) 
          }
          if (line.includes("Gender")) {
            newPersonalInfo.sex = lines[lines.indexOf("Gender") + 1] 
          }
          if (line.includes("ID Number")) {
            newPersonalInfo.idno = lines[lines.indexOf("ID Number") + 1] 
          }
          if (line.includes("Date of Birth")) {
           setDob(lines[lines.indexOf("Date of Birth") + 1])
          }
        });
    
        // Update the state with the new values
        setPersonalInfo(newPersonalInfo);
      };



      ////////////////////////////// on paste ll


     
      /////////////////////////////  applicant data
     

      const applicantssubmitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        // formData.append("applicantimage", applicantpassportimage);
        
        // Assuming you have a state variable for the name input
        // const name = document.getElementById("nameInput").value; // or use a state variable if applicable
        // formData.append("name", personalInfo.name + "kkkkk"); 
        // formData.append("surname", personalInfo.name + "sdfdf");    

formData.append("applicantimage", applicantpassportimage); // Assuming imageName is defined elsewhere
formData.append("name", personalInfo.name + " kkkkk");
formData.append("surname", personalInfo.surname + " sdfdf");
formData.append("placeofbirth", personalInfo.placeOfBirth + " additionalInfo");
formData.append("passportnum", personalInfo.passportNo + " moreInfo");
formData.append("nationality", personalInfo.nationality + " extraData");
formData.append("martialstatus", personalInfo.maritalStatus + " update");
formData.append("numberofchildren", personalInfo.numberOfChildren + " childrenInfo");
formData.append("religion", personalInfo.religion + " religiousInfo");
formData.append("weight", personalInfo.weight + " kg");
formData.append("height", personalInfo.height + " cm");
formData.append("educationattainment", personalInfo.educationAttainment + " degree");
formData.append("postappliedfor", personalInfo.postAppliedFor + " positionDetails");
formData.append("contractperiod", personalInfo.contractPeriod + " duration");
formData.append("arabicdegree", personalInfo.arabicDegree + " level");
formData.append("englishdegree", personalInfo.englishDegree + " level");
formData.append("ownphonenum", personalInfo.ownPhoneNumber + " own");
formData.append("contactphonenum", personalInfo.contactPhoneNumber + " contact");
formData.append("dateofbirth", personalInfo.dateofbirth + " dobInfo");
formData.append("age", personalInfo.age + " years");
formData.append("dateofissue", personalInfo.dateofissue + " issueDate");
formData.append("expireddate", personalInfo.expireddate + " expiryInfo");
formData.append("country", personalInfo.country + " countryDetails");
formData.append("position", personalInfo.position + " jobTitle");
formData.append("period", personalInfo.period + " timeFrame");
formData.append("babysitting", expcheck.exp1 ? "yes" : "no");
formData.append("cleaning", expcheck.exp2 ? "yes" : "no");
formData.append("washing", expcheck.exp3 ? "yes" : "no");
formData.append("cooking", expcheck.exp4 ? "yes" : "no");
formData.append("eldercare", expcheck.exp5 ? "yes" : "no");
formData.append("monthlysalarySaudi", personalInfo.monthlysalarySaudi + " SAR");
formData.append("monthlysalaryJordan", personalInfo.monthlysalaryJordan + " JOD");
formData.append("experience", JSON.stringify(projectInfo.project))
        const result = await axios.post(
            "http://localhost:4000/applicantupload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        
        // Reset file name and name input after submission
        // setPFileName("No file chosen after");
        setApplicantPassportimage(null);
        document.getElementById("nameInput").value = ""; // Reset the name input field
    };

    const applicantonInputChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        setApplicantPassportimage(selectedFile);
        setApplicantPassportFileName(selectedFile ? selectedFile.name : "No file chosen yettt"); // Update filename
      };
    
      const applicantgetImage = async () => {
        const result = await axios.get("http://localhost:4000/applicantget-image");
        console.log(result);
        setApplicantPassportallimage(result.data.data);
      };


    //////////////////////////////// applicant data ll


    ///////////////////////////////// Applicant Test data 


  


      const confirmSubmission = async () => {
        const { name, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;
    
        // Check if required fields are filled (passportNo is not required)
        if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
          toast.error("Please fill all the required fields.", {
            position: "top-center"
          });
          return;
        }
    
        // Proceed with form submission logic here
        // ...
        toast.success("Form submitted successfully!");
        setShowModal(false); // Close the modal after submission
      };
    
      const cancelSubmission = () => {
        setShowModal(false); // Close the modal without submitting
      };


      const cancelSubmissionforsave = () => {
        setShowsubmitModal(false); // Close the modal without submitting
      };


    const validateFields = () => {
        const errors = {};
        for (const key in personalInfo) {
          if (!personalInfo[key]) {
            errors[key] = 'This field is required';
          }
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0; // return true if no errors
      };


    const submitImageforapplicant = async (e) => {
        e.preventDefault();
        const { name, phone, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

        if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
            toast.error("Please fill all the required fields.", {
              position: "top-center"
            });

            setShowsubmitModal(true);
            
            return;

            
          }

          
    
        const formData = new FormData();
        // formData.append("applicantimage", applicantpassportimage);
        
        // Assuming you have a state variable for the name input
        // const name = document.getElementById("nameInput").value; // or use a state variable if applicable
        // formData.append("name", personalInfo.name + "kkkkk"); 
        // formData.append("surname", personalInfo.name + "sdfdf");    
        if (video) formData.append("video", video);
        if (imageforpersonalimage) formData.append("personalimage", imageforpersonalimage);
        if (imageforfullbodyimage) formData.append("fullbodyimage", imageforfullbodyimage);
        if (imageforpassportimage) formData.append("passportimage", imageforpassportimage);
formData.append("name", personalInfo.name);
formData.append("surname", personalInfo.surname );
formData.append("placeofbirth", personalInfo.placeOfBirth);
formData.append("passportnum", personalInfo.passportNo);
formData.append("nationality", personalInfo.nationality);
formData.append("martialstatus", personalInfo.maritalStatus);
formData.append("numberofchildren", personalInfo.numberOfChildren);
formData.append("religion", personalInfo.religion);
formData.append("weight", personalInfo.weight);
formData.append("height", personalInfo.height );
formData.append("educationattainment", personalInfo.educationAttainment);
formData.append("postappliedfor", personalInfo.postAppliedFor);
formData.append("contractperiod", personalInfo.contractPeriod);
formData.append("arabicdegree", personalInfo.arabicDegree);
formData.append("englishdegree", personalInfo.englishDegree);
formData.append("ownphonenum", personalInfo.ownPhoneNumber);
formData.append("contactphonenum", personalInfo.contactPhoneNumber );
formData.append("dateofbirth", personalInfo.dateofbirth );
formData.append("age", personalInfo.age);
formData.append("dateofissue", personalInfo.dateofissue);
formData.append("expireddate", personalInfo.expireddate);
formData.append("country", personalInfo.country);
formData.append("position", personalInfo.position);
formData.append("period", personalInfo.period + " timeFrame");
formData.append("babysitting", expcheck.exp1 ? "true" : "false");
formData.append("cleaning", expcheck.exp2 ? "true" : "false");
formData.append("washing", expcheck.exp3 ? "true" : "false"); 
formData.append("cooking", expcheck.exp4 ? "true" : "false");
formData.append("eldercare", expcheck.exp5 ? "true" : "false");
formData.append("monthlysalarySaudi", salaries.saudi);
formData.append("monthlysalaryJordan", salaries.jordan);
formData.append("experience", JSON.stringify(projectInfo.project))
        const result = await axios.post(
            "http://localhost:4000/tupload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        
        // Reset file name and name input after submission
        // setPFileName("No file chosen after");
        setImageforpersonalimage(null);
        setImageforfullbodyimage(null);
        toast.success("Form submitted successfully!");
        document.getElementById("nameInput").value = ""; // Reset the name input field
    };



    const submitanyway = async (e) => {
        e.preventDefault();
        const { name, phone, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

      

          
    
        const formData = new FormData();
        // formData.append("applicantimage", applicantpassportimage);
        
        // Assuming you have a state variable for the name input
        // const name = document.getElementById("nameInput").value; // or use a state variable if applicable
        // formData.append("name", personalInfo.name + "kkkkk"); 
        // formData.append("surname", personalInfo.name + "sdfdf");    
        if (video) formData.append("video", video);
        if (imageforpersonalimage) formData.append("personalimage", imageforpersonalimage);
        if (imageforfullbodyimage) formData.append("fullbodyimage", imageforfullbodyimage);
        if (imageforpassportimage) formData.append("passportimage", imageforpassportimage);
formData.append("name", personalInfo.name);
formData.append("surname", personalInfo.surname);
formData.append("placeofbirth", personalInfo.placeOfBirth);
formData.append("passportnum", personalInfo.passportNo);
formData.append("nationality", personalInfo.nationality);
formData.append("martialstatus", personalInfo.maritalStatus );
formData.append("numberofchildren", personalInfo.numberOfChildren);
formData.append("religion", personalInfo.religion );
formData.append("weight", personalInfo.weight + " kg");
formData.append("height", personalInfo.height + " cm");
formData.append("educationattainment", personalInfo.educationAttainment);
formData.append("postappliedfor", personalInfo.postAppliedFor );
formData.append("contractperiod", personalInfo.contractPeriod);
formData.append("arabicdegree", personalInfo.arabicDegree );
formData.append("englishdegree", personalInfo.englishDegree );
formData.append("ownphonenum", personalInfo.ownPhoneNumber);
formData.append("contactphonenum", personalInfo.contactPhoneNumber);
formData.append("dateofbirth", personalInfo.dateofbirth);
formData.append("age", personalInfo.age );
formData.append("dateofissue", personalInfo.dateofissue);
formData.append("expireddate", personalInfo.expireddate );
formData.append("country", personalInfo.country );
formData.append("position", personalInfo.position);
formData.append("period", personalInfo.period);
formData.append("babysitting", expcheck.exp1 ? "true" : "false");
formData.append("cleaning", expcheck.exp2 ? "true" : "false");
formData.append("washing", expcheck.exp3 ? "true" : "false"); 
formData.append("cooking", expcheck.exp4 ? "true" : "false");
formData.append("eldercare", expcheck.exp5 ? "true" : "false");
formData.append("monthlysalarySaudi", salaries.saudi );
formData.append("monthlysalaryJordan", salaries.jordan );
formData.append("experience", JSON.stringify(projectInfo.project))
        const result = await axios.post(
            "http://localhost:4000/tupload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        
        // Reset file name and name input after submission
        // setPFileName("No file chosen after");
        setImageforpersonalimage(null);
        setImageforfullbodyimage(null);
        toast.success("Form submitted successfully!");
        setShowsubmitModal(false);
        document.getElementById("nameInput").value = ""; // Reset the name input field
    };



    const onInputChangeforpersonalimage = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        setImageforpersonalimage(e.target.files[0]);
        if (file) {
            setApplicantpersonalimagePreview(URL.createObjectURL(file));
          }
      };
    
      const onInputChangeforfullbodyimage = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        setImageforfullbodyimage(e.target.files[0]);
        if (file) {
            setApplicantfullbodyimageimagePreview(URL.createObjectURL(file))
        }
      };

    //   const onInputChangeforpassportimage = (e) => {
    //     const file = e.target.files[0];
    //     console.log(e.target.files[0]);
    //     setImageforpassportimage(e.target.files[0]);
    //     if (file) {
    //         setApplicantpassportimagePreview(URL.createObjectURL(file))
    //     }
    //   };

    const onInputChangeforpassportimage = (e) => {
        const file = e.target.files[0];
        setImageforpassportimage(e.target.files[0]);
        if (file) {
            setApplicantpassportimagePreview(URL.createObjectURL(file));
            recognizeMRZ(file); // Call recognizeMRZ here to process the uploaded image
            
    
          }
    };


    const onInputChangeforVideo = (e) => {
        const file = e.target.files[0];
        setVideo(e.target.files[0]);
        if (file) {
            setvideoPreview(URL.createObjectURL(file));
          
          }
    };
    const recognizeMRZ = (file) => {
        Tesseract.recognize(
            file,
            'eng',
            {
                logger: (m) => console.log(m), // Log progress
            }
        ).then(({ data: { text } }) => {
            console.log("Extracted Text: ", text);
            const extractedData = extractPassportData(text);
            setPassportData(extractedData);
        });
      };

      const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        recognizeMRZ(file);
      }, []);
    
    //   const recognizeMRZ = (file) => {
    //     Tesseract.recognize(
    //       file,
    //       'eng',
    //       {
    //         logger: (m) => console.log(m), // Log progress
    //       }
    //     ).then(({ data: { text } }) => {
    //       console.log("Extracted Text: ", text);
    //       const extractedData = extractPassportData(text);
    //       setPassportData(extractedData);
    //     });
    //   };
    
      const extractPassportData = (text) => {
        
    
    
    
       
    
    
    
        const lines = text.split('\n');
        const mrzLines = lines.filter(line => line.match(/^[A-Z0-9<]+$/));
    
        if (mrzLines.length < 2) return { name: '', surname: '', nationality: '', age: '', passportNumber: '', placeOfBirth: '', birthDate: '' };
    
        const line1 = mrzLines[0]; // e.g., P<UTOEJANE<<<JOHN<<<<<<<<<<<<<<<<<<<<<<<<<
        const line2 = mrzLines[1]; // e.g., 1234567890UTO7408129M1204159<<<<<<<<<<<<<<<<<
    
        // Extracting name
        const names = line1.substring(5, 44).replace(/</g, ' ').trim().split('<<');
        const surname = names[0] ? names[0].trim() : ''; // Add check for surname
        const name = names[1] ? names[1].trim() : ''; // Add check for given name
    
        const nationality = line2.substring(10, 13) || '';
        const passportNumber = line2.substring(0, 9) || '';
    
        // Extracting birth date and gender
        const birthDate = line2.substring(13, 19) || ''; // Birthdate in YYMMDD format
        const gender = line2.charAt(20) || '';

    
        // Calculate age
        const year = birthDate ? parseInt(birthDate.substring(0, 2), 10) : 0;
        const month = birthDate ? parseInt(birthDate.substring(2, 4), 10) : 0;
        const day = birthDate ? parseInt(birthDate.substring(4, 6), 10) : 0;
        const age = new Date().getFullYear() - (year < 50 ? 2000 + year : 1900 + year); // Basic age calculation
    
        // Extracting place of birth
        const placeOfBirth = line1.substring(44, 69).replace(/</g, ' ').trim() || '';
    
        const dateOfExpiry = line2.substring(21, 27) || '';

        const formattedDateOfExpiry = dateOfExpiry ? `20${dateOfExpiry.substring(0, 2)}-${dateOfExpiry.substring(2, 4)}-${dateOfExpiry.substring(4, 6)}` : '';
        
    
        // Format birth date as YYYY-MM-DD for display
        const formattedBirthDate = birthDate ? `20${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)}` : '';
    
    
        const startIndex = 5; // Starting at character 5
        const firstEndIndex = line1.indexOf('<', startIndex); // Find the first '<' after the start index
    
        const extractedTexts = [];


        personalInfo.sex = gender === "F" ? "FEMALE" : "MALE"


        personalInfo.passportNo = passportNumber;

    const extractNationality = line1.substring(2, 5);

    personalInfo.nationality = extractNationality == "ETH" ? "ETHIOPIA" : "NON-ETHIOPIA";

   console.log(`20${birthDate.substring(0, 2)}${birthDate.substring(2, 4)}${birthDate.substring(4, 6)}`, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkddd")

   const yearPrefix = (parseInt(birthDate.substring(0, 2)) >= 24) ? '19' : '20';
const formattedDate = `${yearPrefix}${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)}`;
setDob(formattedDate);
     
//    setDob( `${birthDate.substring(0, 2)} >= 24 ? 19${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)} : 20${birthDate.substring(0, 2)}-${birthDate.substring(2, 4)}-${birthDate.substring(4, 6)}`)
    
//    setDateOfExpiry(formattedDateOfExpiry)
   setDateOfExpiry(`20${dateOfExpiry.substring(0, 2)}-${dateOfExpiry.substring(2, 4)}-${dateOfExpiry.substring(4, 6)}`)



        if (firstEndIndex !== -1) {
          // First extraction
          const firstResult = line1.substring(startIndex, firstEndIndex);
          extractedTexts.push(firstResult);
          
          // Skip two characters after the first result
          const secondStartIndex = firstEndIndex + 2;
          const secondEndIndex = line1.indexOf('<', secondStartIndex); // Find the next '<'
          
          personalInfo.surname = firstResult;
         
          if (secondEndIndex !== -1) {
            const secondResult = line1.substring(secondStartIndex, secondEndIndex);
            extractedTexts.push(secondResult);
            
            // Skip one character after the second result
            const thirdStartIndex = secondEndIndex + 1;
            const thirdEndIndex = line1.indexOf('<', thirdStartIndex); // Find the next '<'
             
            
            if (thirdEndIndex !== -1) {
              const thirdResult = line1.substring(thirdStartIndex, thirdEndIndex);
              extractedTexts.push(thirdResult);
              personalInfo.name = secondResult + " " + thirdResult;
            } else {
              extractedTexts.push(line1.substring(thirdStartIndex)); // If no '<' is found, return the rest of the string
            }
          }
        }
    
    
       
    
        return { name, surname, nationality, age, passportNumber, placeOfBirth, birthDate: formattedBirthDate };
      };
    
      const { getRootProps, getInputProps } = useDropzone({ onDrop });
    



    ///////////////////////////////// Applicant Test data ll


  
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/cv-builder-1'); // Your API endpoint
            const data = await response.json();
            console.log(data);
            setCvitem(data.itemtests); // Update state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const postDummyData = async () => {
        const dummyData = {
            name: "John Doeee",
            des: personalInfo.name ?? "nooooooooooooooo",
         
        };

        try {
            const response = await fetch('http://localhost:4000/cv-builder-1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dummyData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Data posted successfully:', result);
                fetchData(); // Fetch updated data after posting
            } else {
                console.error('Error posting data:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const deleteItemsByName = async () => {
        try {
            const response = await fetch(`http://localhost:4000/cv-builder-1?name=${encodeURIComponent(personalInfo.email)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Items with name "${personalInfo.email}" deleted successfully.`);
                fetchData();
            } else {
                console.error('Error deleting data:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    

   const downloadMultipleCVs = async () => {

    const { name, placeOfBirth, nationality, maritalStatus, religion } = personalInfo;

    if (!name || !placeOfBirth || !nationality || !maritalStatus || !religion) {
        toast.error("Please fill all the required fields.", {
          position: "top-center"
        });

        setShowModal(true);
        
        return;

        
      }


        const pdfElements = [
            
             {  elementId: styles.styleOne ? 'cvContent2' : "", filename: 'Golden agen.pdf' },
             { elementId: styles.styleTwo ? 'cvContent1' : "", filename: `${`${personalInfo.name} ${personalInfo.email} Bela Hodod` || 'Default_Name'}_CV_Style1.pdf` },
            { elementId: styles.styleThree ? 'cvContent3' : "", filename: 'Skyway.pdf' },
            { elementId: styles.styleFour ? 'cvContent4' : "", filename: 'Baraka.pdf' },
            // { elementId: styles.styleFive ? 'cvContent5' : "", filename: 'Al Wasit.pdf' },
            // Add more elements as needed
        ];
    
        const downloadPromises = pdfElements.map(({ elementId, filename }) => {
            const element = document.getElementById(elementId);
            const options = {
                margin: 0.5,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                // jsPDF: { unit: 'in', format: [8.5, 10.99],  /*format: 'letter',*/ orientation: 'portrait' }
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
    
            return html2pdf().from(element).set(options).save();
        });
    
        // Wait for all downloads to complete
        await Promise.all(downloadPromises);
    }




    const downloadcvanyway = async () => {
        setShowModal(false);
        const pdfElements = [
            
             {  elementId: styles.styleOne ? 'cvContent2' : "", filename: 'Golden agen.pdf' },
             { elementId: styles.styleTwo ? 'cvContent1' : "", filename: `${`${personalInfo.name} ${personalInfo.email} Bela Hodod` || 'Default_Name'}_CV_Style1.pdf` },
            { elementId: styles.styleThree ? 'cvContent3' : "", filename: 'Skyway.pdf' },
            { elementId: styles.styleFour ? 'cvContent4' : "", filename: 'Baraka.pdf' },
            // { elementId: styles.styleFive ? 'cvContent5' : "", filename: 'Al Wasit.pdf' },
            // Add more elements as needed
        ];
    
        const downloadPromises = pdfElements.map(({ elementId, filename }) => {
            const element = document.getElementById(elementId);
            const options = {
                margin: 0.5,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                // jsPDF: { unit: 'in', format: [8.5, 10.99],  /*format: 'letter',*/ orientation: 'portrait' }
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
    
            return html2pdf().from(element).set(options).save();
        });
    
        // Wait for all downloads to complete
        await Promise.all(downloadPromises);
        
    }


    

    const shareCV = () => {
        const doc = new jsPDF();
        const content = ` 
            Personal Info: ${JSON.stringify(personalInfo, null, 2)}
            Education Info: ${JSON.stringify(educationInfo, null, 2)}
            Career Info: ${JSON.stringify(careerInfo, null, 2)}
            Project Info: ${JSON.stringify(projectInfo, null, 2)}
            Skills Info: ${JSON.stringify(skillInfo, null, 2)}
            Reference Info: ${JSON.stringify(referenceInfo, null, 2)}
        `;
        doc.text(content, 10, 10);
        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const message = "Check out my CV!";
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}%0A${encodeURIComponent(pdfUrl)}`;
        window.open(whatsappUrl, '_blank');
    };

    const updateText = (e) => {
        let targetStateArea = e.target.id.split('-')[0];
        let targetStateField = e.target.id.split('-')[1];

        const currState = { ...eval(targetStateArea) }; // Use eval carefully
        if (Array.isArray(currState[targetStateField])) {
            let arrIndex = e.target.id.split('-')[2];
            currState[targetStateField][arrIndex][e.target.id.split('-')[3]] = e.target.value;
        } else {
            currState[targetStateField] = e.target.value;
        }

        switch (targetStateArea) {
            case 'sponsorInformation': 
               setSponsorInfo(currState);
                break;
            case 'personalInfo':
                setPersonalInfo(currState);
                break;
            case 'educationInfo':
                setEducationInfo(currState);
                break;
            case 'careerInfo':
                setCareerInfo(currState);
                break;
            case 'projectInfo':
                setProjectInfo(currState);
                break;
            case 'skillInfo':
                setSkillInfo(currState);
                break;
            case 'referenceInfo':
                setReferenceInfo(currState);
                break;
            default:
                break;
        }
    };

    const addRecord = (e) => {
        let targetStateArea = e.target.id.split('-')[0];
        let targetStateField = e.target.id.split('-')[1];
        const currState = { ...eval(targetStateArea) };

        let count = currState[targetStateField];
        let newRecord = typeof count[0] === 'object' ? { ...count[0] } : '';

        for (let item in newRecord) {
            newRecord[item] = '';
        }

        count.push(newRecord);
        currState[targetStateField] = count;

        switch (targetStateArea) {
            case 'sponsorInformation': 
               setSponsorInfo(currState);
                break;
            case 'personalInfo': 
                setPersonalInfo(currState);
                break;
            case 'educationInfo':
                setEducationInfo(currState);
                break;
            case 'careerInfo':
                setCareerInfo(currState);
                break;
            case 'projectInfo':
                setProjectInfo(currState);
                break;
            case 'skillInfo':
                setSkillInfo(currState);
                break;
            case 'referenceInfo':
                setReferenceInfo(currState);
                break;
            default:
                break;
        }
    };

    const shareUrl = "https://yourwebsite.com"; // Replace with your actual URL
    const title = "Check out my CV!";

    return (
        <div onPaste={handlePaste} className="" >
            
            <Header /> 
            
             
       <div className="cv-builder-container">
    <h2 className="text-center mt-2 title">N-Tech agent</h2>
    <Dialog open={showModal} onClose={cancelSubmission}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to Download?</p>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={cancelSubmission} 
            style={{ backgroundColor: '#f44336', color: 'white' }} // Red for "Back"
          >
            Back
          </Button>
          <Button 
            onClick={downloadcvanyway} 
            style={{ backgroundColor: '#4caf50', color: 'white' }} // Green for "Proceed anyway"
          >
            Proceed anyway
          </Button>
        </DialogActions>
      </Dialog>

     


      <Dialog open={showsubmitModal} onClose={cancelSubmission}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to submit the form?</p>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={cancelSubmission} 
            style={{ backgroundColor: '#f44336', color: 'white' }} // Red for "Back"
          >
            Back
          </Button>
          <Button 
            onClick={submitanyway} 
            style={{ backgroundColor: '#4caf50', color: 'white' }} // Green for "Proceed anyway"
          >
            Proceed anyway
          </Button>
        </DialogActions>
      </Dialog>

    

    {/* <div className="image-upload-section">
       
        <div className="image-upload">
            {allImage && allImage.length > 0 ? (
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            fileName !== "No file chosen yet"
                                ? imagePlaceholder
                                : require(`../images/${allImage[allImage.length - 1].image}`)
                        }
                        onClick={() => fileInputRef.current.click()}
                    />
                </div>
            ) : (
                <div className="no-image">No images uploaded yet.</div>
            )}

            <form onSubmit={submitImage} className="file-upload-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />
                <label>
                    <span>Personal Image <span style={{ color: 'red' }}>*</span></span>
                    <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

        <div className="image-upload">
          

{applicantpassportallimage && applicantpassportallimage.length > 0 ? (
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantPassportfileName !== "No file chosen yet"
                                ? imagePlaceholder
                                : require(`../applicantimage/${applicantpassportallimage[applicantpassportallimage.length - 1].image}`)
                        }
                        onClick={() => applicantFileInputRef.current.click()}
                    />
                </div>
            ) : (
                <div className="no-image">No images uploaded yet.</div>
            )}

            <form onSubmit={applicantssubmitImage} className="file-upload-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={applicantonInputChange}
                    style={{ display: "none" }}
                    ref={applicantFileInputRef}
                />
                <label>
                    <span>applicant Personal Image <span style={{ color: 'red' }}>*</span></span>
                <button type="button" onClick={() => applicantFileInputRef.current.click()}>Choose File</button>
                </label>
                <button type="submit">Submitkkjjjjj ${personalInfo.email}</button>
            </form>
        </div>

      
        <div className="image-upload">
            {passportallimage && passportallimage.length > 0 ? (
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Passport"
                        src={
                             require(`../passport_image/${passportallimage[passportallimage.length - 1].image}`)
                        }
                        onClick={() => pfileInputRef.current.click()}
                    />
                </div>
            ) : (
                <div className="no-image">No images uploaded yet.</div>
            )}

            <form onSubmit={passsubmitImage} className="file-upload-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={passonInputChange}
                    style={{ display: "none" }}
                    ref={pfileInputRef}
                />
                <label>
                    <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
                    <button type="button" onClick={() => pfileInputRef.current.click()}>Choose Passport Image</button>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div> */}



    <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantpersonalimagePreview !== null
                                ? applicantpersonalimagePreview
                                : imagePlaceholder
                        }
                        onClick={() => applicantpersonalimagefileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChangeforpersonalimage}
                    style={{ display: "none" }}
                    ref={applicantpersonalimagefileInputRef}
                />
                <label>
                    <span>Personal Image <span style={{ color: 'red' }}>*</span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>


        {/* full body image */}


        <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantfullbodyimagePreview !== null
                                ? applicantfullbodyimagePreview
                                : imagePlaceholder
                        }
                        onClick={() => applicantfullbodyimagefileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChangeforfullbodyimage}
                    style={{ display: "none" }}
                    ref={applicantfullbodyimagefileInputRef}
                />
                <label>
                    <span>Full Body Image <span style={{ color: 'red' }}>*</span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>



        {/* passport image */}



        <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            applicantpassportimagePreview !== null
                                ? applicantpassportimagePreview
                                : imagePlaceholder
                        }
                        onClick={() => applicantpassportimagefileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onInputChangeforpassportimage}
                    style={{ display: "none" }}
                    ref={applicantpassportimagefileInputRef}
                />
                <label>
                    <span>Passport Image <span style={{ color: 'red' }}>*</span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>


        <div className="image-upload">
           
                <div className="image-preview">
                    <img
                        className="input-personal-image"
                        alt="Personal"
                        src={
                            videoPreview !== null
                                ? VidoUploaded
                                : imagePlaceholder
                        }
                        onClick={() => videofileInputRef.current.click()}
                    />
                </div>
                <input
                    type="file"
                    accept="video/*"
                    onChange={onInputChangeforVideo}
                    style={{ display: "none" }}
                    ref={videofileInputRef}
                />
                <label>
                    <span>Applicant Video (optional)<span style={{ color: 'red' }}></span></span>
                    {/* <button type="button" onClick={() => fileInputRef.current.click()}>Choose File</button> */}
                </label>
               
            
        </div>


    {/* <form onSubmit={submitImageforapplicant}>
        <input type="file" accept="image/*" onChange={onInputChangeforpersonalimage} />
        {applicantpersonalimagePreview1 && <img src={applicantpersonalimagePreview1} alt="Preview 1" height={100} width={100} />}
        <input type="file" accept="image/*" onChange={onInputChangeforfullbodyimage} />
        <button type="submit">Submit</button>
      </form> */}

    {/* Input Sections */}

   
    
    <NameArea callback={updateText} validationErrors={validationErrors} info={personalInfo} newField={addRecord} />
    <SponsorInformation callback={updateText} validationErrors={validationErrors} info={sponsorInformation} newField={addRecord}   />
    <Container maxWidth="xs">
    <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Age"
              type="number"
              fullWidth
              value={age}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        
        {/* Error Message */}
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {errorMessage}
          </Typography>
        )}


<Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <TextField
                            label="Date of Issue"
                            type="date"
                            fullWidth
                            value={dateOfIssue}
                            onChange={(e) => setDateOfIssue(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label=""
                            type="date"
                            fullWidth
                            value={dateOfExpiry}
                            onChange={(e) => setDateOfExpiry(e.target.value)} 
                            // InputProps={{
                            //     readOnly: true,
                            // }}
                        />
                    </Grid>
                </Grid>

                {/* Expiry Error Message */}
                {expiryError && (
                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {expiryError}
                    </Typography>
                )}
        
    </Container>
   
    {/* <EducationInputs callback={updateText} info={educationInfo} newField={addRecord} /> */}
    {/* <CareerInputs callback={updateText} info={careerInfo} newField={addRecord} /> */}
    {/* {projectInfo.project[0]?.name && <div>ssss</div>}
{projectInfo.project.map(i => <div>{i.name}</div>)}
{projectInfo.project.map(i => <div>{i.link}</div>)}
{projectInfo.project.map(i => <div>{i.overview}</div>)} */}

    <ProjectInputs callback={updateText} info={projectInfo} newField={addRecord} />
    {/* <SkillsInput callback={updateText} info={skillInfo} newField={addRecord} /> */}
    {/* <ReferenceInput callback={updateText} info={referenceInfo} newField={addRecord} /> */}
    {/* <DocumentStyle /> */}
    <Box sx={{ boxShadow: 3, borderRadius: 2, mt: 4, p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Select EXPERIANCE
            </Typography>
            {/* <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.all}
                        onChange={handleExpChange}
                        name="all"
                    />
                }
                label="All"
            /> */}

           
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp1}
                        onChange={handleExpChange}
                        name="exp1"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="BABY SITTING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp2}
                        onChange={handleExpChange}
                        name="exp2"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="CLEANING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp3}
                        onChange={handleExpChange}
                        name="exp3"
                        // disabled={projectInfo.project[0].name === ""} // Disable if age is less than 18
                    />
                }
                label="WASHING"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp4}
                        onChange={handleExpChange}
                        name="exp4"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="COOKING"
            />
          
            <FormControlLabel
                control={
                    <Checkbox
                        checked={expcheck.exp5}
                        onChange={handleExpChange}
                        name="exp5"
                        // disabled={projectInfo.project[0].name === ""}
                    />
                }
                label="ELDER CARE"
            />
           
        </Box>

   
    <div style={{ margin: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Monthly Salary
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Saudi" 
                        variant="outlined" 
                        type="text" 
                        name="saudi" 
                        value={salaries.saudi} 
                        onChange={handleChange} 
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Jordan" 
                        variant="outlined" 
                        type="text" 
                        name="jordan" 
                        value={salaries.jordan} 
                        onChange={handleChange} 
                    />
                </Grid>
            </Grid>
           
        </div>
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
                        disabled={age < 21}
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
                        disabled={age < 21}
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
                        disabled={age < 18} // Disable if age is less than 18
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
                        disabled={age < 21}
                    />
                }
                label="Baraka"
            />
            {/* Uncomment if needed
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styles.styleFive}
                        onChange={handleStyleChange}
                        name="styleFive"
                    />
                }
                label="Al wasit"
            />
            */}
        </Box>

    <div className="action-buttons">
    
        <button type="button" id="postBtn" onClick={submitImageforapplicant}>Save</button>
        {/* <button type="button" id="postBtn" onClick={applicantssubmitImage}>applicantssubmitImage</button> */}
        <button type="button" id="shareBtn" onClick={shareCV}>Share CV on WhatsApp</button>
        <button type="button" onClick={downloadMultipleCVs}>Download Multiple CVs</button>
    </div>

    <div className="social-share">
        <h3>Share on Social Media:</h3>
        <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon margin={50} size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
            <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
    </div>
</div>

<ToastContainer position="top-center" />   



    
    {/* Hidden content for PDF generation */}
    <div style={{ display: 'none' }}>
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
src={applicantpersonalimagePreview !== null
    ? applicantpersonalimagePreview
    : imagePlaceholder} // Get the last image

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
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.surname}</div>
<div>اسم العائلة</div>
<div>PLACE Of Birth</div>
<div>{personalInfo.placeOfBirth}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div>{age}</div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div>{personalInfo.passportNo}</div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div>{dob}</div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div>{dateOfIssue}</div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div>{dateOfExpiry}</div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>{personalInfo.nationality}</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}>{personalInfo.maritalStatus}</div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}>{personalInfo.numberOfChildren}</div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div>{personalInfo.religion}</div>
<div>الديانة</div>
<div>WEIGHT</div>
<div>{personalInfo.weight}</div>
<div>الوزن</div>
<div>HEIGHT</div>

<div>{personalInfo.height}</div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>{personalInfo.educationAttainment}</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>{personalInfo.postAppliedFor}</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}> {salaries.saudi}</div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>{personalInfo.contractPeriod}</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}>{personalInfo.arabicDegree}</div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}>{personalInfo.englishDegree}</div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={applicantfullbodyimagePreview !== null
    ? applicantfullbodyimagePreview
    : imagePlaceholder} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>{personalInfo.ownPhoneNumber}</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}>{personalInfo.contactPhoneNumber}</div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>



                    <div className="experience-country-sec">
<div>EXPERIANCE COUNTRY</div>
<div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.name}, </span> )} </div>
<div>خبرة البلد</div>
</div>





<div className="experience-country-sec">
<div>WORKING YEARS</div>
<div>{projectInfo.project.map(i =>  <span style={{marginRight: "3px"}}>{i.overview}, </span> )}</div>
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
                        <div>{expcheck.exp1 ? "YES" : "NO"}</div>
                        <div>{expcheck.exp2 ? "YES" : "NO"}</div>
                        <div>{expcheck.exp3 ? "YES" : "NO"}</div>
                        <div>{expcheck.exp4 ? "YES" : "NO"}</div>
                        <div>{expcheck.exp5 ? "YES" : "NO"}</div>
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
src={applicantpassportimagePreview !== null
    ? applicantpassportimagePreview
    : imagePlaceholder} 

/>

</div>
</div>
            </div>
        </div>

        
        <div id="cvContent2" style={{ display: 'block',  }}> {/* Change display to block */}
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
                    {allImage && allImage.length > 0 ? (
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={require(`../images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>

</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}
                        <div className="wider-image-parent">
                            <img src={goldagent} alt="Wider" className="wider-image" />  
                        </div>



                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div></div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div></div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div></div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div></div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div></div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>ETHIOPIAN</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>
                    <div className="experience-country-sec">
                        <div>EXPERIANCE COUNTRY</div>
                        <div>-</div>
                        <div>خبرة البلد</div>
                    </div>

                    

                    <div className="experience-country-sec">
                        <div>WORKING YEARS</div>
                        <div>-</div>
                        <div>وعدد سنوات الخبرة</div>
                    </div>
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
                        <div>YES</div>
                        <div>YES</div>
                        <div>NO</div>
                        <div></div>
                        <div>YES</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="passport-image"
alt=""
src={require(`../passport_image/${passportallimage[passportallimage.length - 1].image}`)} 

/>

</div>
) : (
<div>No images uploaded yet.</div> 
)}
</div>
            </div>
        </div>


        <div id="cvContent3" style={{ display: 'block' }}> {/* Change display to block */}
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
                    {allImage && allImage.length > 0 ? (
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={require(`../images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>

</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}


                        <div className="wider-image-parent"><img src={skywayimg} alt="Wider" className="wider-image" />
                        </div>
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div></div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div></div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div></div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div></div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div></div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>ETHIOPIAN</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>
                    <div className="experience-country-sec">
                        <div>EXPERIANCE COUNTRY</div>
                        <div>-</div>
                        <div>خبرة البلد</div>
                    </div>

                    

                    <div className="experience-country-sec">
                        <div>WORKING YEARS</div>
                        <div>-</div>
                        <div>وعدد سنوات الخبرة</div>
                    </div>
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
                        <div>YES</div>
                        <div>YES</div>
                        <div>NO</div>
                        <div></div>
                        <div>YES</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="passport-image"
alt=""
src={require(`../passport_image/${passportallimage[passportallimage.length - 1].image}`)} 

/>

</div>
) : (
<div>No images uploaded yet.</div> 
)}
</div>
            </div>
        </div>



        <div id="cvContent4" style={{ display: 'block' }}> {/* Change display to block */}
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
                    {allImage && allImage.length > 0 ? (
<div className="personal-image-parent">
<img
className="personal-image"
alt=""
src={require(`../images/${allImage[allImage.length - 1].image}`)} // Get the last image

/>

</div>
) : (
<div>No images uploaded yet.</div> // Message if no images are uploaded
)}
<div className="wider-image-parent">
<img src={barakaimg} alt="Wider" className="wider-image" />
</div>
                        
                    </div>
                    <div className="title-parent">
                        <div style={{display: "flex", justifyContent: "space-around", border: "none"}}><div style={{ border: "none"}}>Personal Information</div>  <div style={{ border: "none"}}> ممعلومات شخصية </div></div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>CODE NO</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>J100</div>
                    </div>
                    <div className="table-main-parent">
                    <div class="table-parent">
<div>NAME</div>
<div>{personalInfo.name}</div>
<div>الاسم</div>
<div>SURNAME</div>
<div>{personalInfo.email}</div>
<div>اسم العائلة</div>
<div>PLACE</div>
<div>{personalInfo.name}</div>
<div>مكان الولادة</div>
<div>AGE</div>
<div></div>
<div>العمر</div>
<div>PASSPORT NO</div>
<div></div>
<div>رقم جواز السفر</div>
<div>DATE OF BIRTH</div>
<div></div>
<div>تاريخ الميلاد</div>
<div>DATE OF ISSUE</div>
<div></div>

<div>تاريخ الاصدار</div>
<div>DATE OF EXPIRY</div>
<div></div>
<div>تاريخ الانتهاء</div>
<div>NATIONALITY</div>
<div>ETHIOPIAN</div>
<div>الجنسية</div>
<div style={{height: 35}}>MARITAL STATUS</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الحالة الاجتماعية</div>
<div style={{height: 35}} >NUMBER OF CHILDREN</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>عدد الاطفال</div>
<div>RELIGION</div>
<div></div>
<div>الديانة</div>
<div>WEIGHT</div>
<div></div>
<div>الوزن</div>
<div>HEIGHT</div>

<div></div>
<div>الطول</div>
<div style={{height: 35}}>EDUCATIONAL ATTAINMENT</div>
<div style={{height: 35}}>PRIMARY SCHOOL</div>
<div style={{height: 35}}>المستوى الدراسي</div>
<div style={{height: 35}}>POST APPLIED FOR</div>
<div style={{height: 35}}>HOUSEMAID</div>
<div style={{height: 35}}>الوظيفة المتقدمة اليها</div>
<div style={{height: 35}}>MONTHLY SALARY</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>الراتب الشهري</div>
<div style={{height: 35}}>CONTRACT PERIOD</div>
<div style={{height: 35}}>2 YEARS</div>
<div style={{height: 35}}>مدة التعاقد</div>
<div style={{height: 35}}>ARABIC DEGREE</div>
<div style={{height: 35}}></div>
<div style={{height: 35}}>مستوى اللغة العربية</div>
<div style={{height: 39}}>ENGLISH DEGREE</div>
<div style={{height: 39}}></div>
<div style={{height: 39}}>مستوى اللغة الانجليزية</div>
</div>
                        <div className="second-side">
                            <div>
                                <img src={bodyimg} alt="Full Body" className="full-body-image" />
                            </div>
                            <div>
                                <img src={ouragentlogo} alt="Agent Logo" className="agent-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="second-section-parent">

                    <div className="phone-number-sec">
                        <div>OWN PHONE NUMBER</div>
                        <div style={{background: "white"}}>(25190) 33-9999</div>
                        <div>رقم الهاتف الشخصي</div>
                    </div>
                    <div className="cphone-number-sec">
                        <div>CONTACT PHONE NUMBER</div>
                        <div style={{background: "white"}}></div>
                        <div>رقم الهاتف الاقارب</div>
                    </div>
                    <div className="experience-country-sec">
                        <div>EXPERIANCE COUNTRY</div>
                        <div>-</div>
                        <div>خبرة البلد</div>
                    </div>

                    

                    <div className="experience-country-sec">
                        <div>WORKING YEARS</div>
                        <div>-</div>
                        <div>وعدد سنوات الخبرة</div>
                    </div>
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
                        <div>YES</div>
                        <div>YES</div>
                        <div>NO</div>
                        <div></div>
                        <div>YES</div>
                    </div>

                    </div>

                    

                </div>

                
                {/* Page 2 */}
                <div style={{display: "flex", justifyContent: "center", fontSize: 20, marginBottom: 30}}>Passport</div>

                <div className="passport-image-parent">
                {passportallimage && passportallimage.length > 0 ? (
<div>
<img
className="passport-image"
alt=""
src={require(`../passport_image/${passportallimage[passportallimage.length - 1].image}`)} 

/>

</div>
) : (
<div>No images uploaded yet.</div> 
)}
</div>
            </div>
        </div>


      
        
</div>

       
        
       
    </div>
    );
};

export default Home;