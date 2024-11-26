// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [image, setImage] = useState(null);
//   const [allImage, setAllImage] = useState(null);

//   useEffect(() => {
//     getImage();
//   }, []);

//   const submitImage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", image);

//     const result = await axios.post(
//       "http://localhost:4000/upload-image",
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//   };

//   const onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     setImage(e.target.files[0]);
//   };

//   const getImage = async () => {
//     const result = await axios.get("http://localhost:4000/get-image");
//     console.log(result);
//     setAllImage(result.data.data);
//   };

//   return (
//     <div>
//       <form onSubmit={submitImage}>
//         <input type="file" accept="image/*" onChange={onInputChange}></input>
//         <button type="submit">Submit</button>
//       </form>

//       <form onSubmit={submitImage}>
//         <input type="file" accept="image/*" onChange={onInputChange}></input>
//         <button type="submit">Submit</button>
//       </form>
//       {allImage == null
//         ? ""
//         : allImage.map((data) => {
//             return (
//               <img
//                 alt=""
//                 src={require(`../images/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             );
//           })}
//     </div>
//   );
// }
// export default App;



/////////////////////////////


// import React, { Component } from "react";
// import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null,
//       allImage: null,
//     };
//   }

//   async componentDidMount() {
//     await this.getImage();
//   } 

//   submitImage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", this.state.image);

//     await axios.post("http://localhost:4000/upload-image", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     await this.getImage(); // Refresh the images after upload
//   };

//   onInputChange = (e) => {
//     console.log(e.target.files[0]);
//     this.setState({ image: e.target.files[0] });
//   };

//   getImage = async () => {
//     try {
//       const result = await axios.get("http://localhost:4000/get-image");
//       console.log(result);
//     await  this.setState({ allImage: result.data.data });
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   render() {
//     const { allImage } = this.state;

//     return (
//       <div>
//         <form onSubmit={this.submitImage}>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={this.onInputChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         {/* { allImage == null
//           ? ""
//           : allImage.map((data, index) => (
//               <img
//                 key={index}
//                 alt=""
//                 src={require(`../images/${data.image}`)}
//                 height={100}
//                 width={100}
//               />
//             ))} */}

// {this.state.allImage && this.state.allImage.length > 0 ? (
//   <div>
//     <img
//       className="personal-image"
//       alt=""
//       src={require(`../images/${this.state.allImage[this.state.allImage.length - 1].image}`)} // Get the last image
      
//     />
//     {/* Optionally display the ID or other details of the last image */}
//     {/* <div>{this.state.allImage[this.state.allImage.length - 1]._id}</div> */}
//   </div>
// ) : (
//   <div>No images uploaded yet.</div> // Message if no images are uploaded
// )}
//       </div>
//     );
//   }
// }

// export default App;


/////////////////////////////////////////////

import { useEffect, useState } from "react";
import axios from "axios";
import PersonalInfo from "../Components/Outputs/PersonalInfo";
import NameArea from "../Components/Inputs/NameAreaInputs";


function App() {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', about: '', websiteCount: [''] });
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const [fileName, setFileName] = useState("No file chosen yet"); // State for filename

  useEffect(() => {
    getImage();
  }, []);

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

    // switch (targetStateArea) {
    //     case 'personalInfo':
    //         setPersonalInfo(currState);
    //         break;
    //     case 'educationInfo':
    //         setEducationInfo(currState);
    //         break;
    //     case 'careerInfo':
    //         setCareerInfo(currState);
    //         break;
    //     case 'projectInfo':
    //         setProjectInfo(currState);
    //         break;
    //     case 'skillInfo':
    //         setSkillInfo(currState);
    //         break;
    //     case 'referenceInfo':
    //         setReferenceInfo(currState);
    //         break;
    //     default:
    //         break;
    // }
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

  // switch (targetStateArea) {
  //     case 'educationInfo':
  //         setEducationInfo(currState);
  //         break;
  //     case 'careerInfo':
  //         setCareerInfo(currState);
  //         break;
  //     case 'projectInfo':
  //         setProjectInfo(currState);
  //         break;
  //     case 'skillInfo':
  //         setSkillInfo(currState);
  //         break;
  //     case 'referenceInfo':
  //         setReferenceInfo(currState);
  //         break;
  //     default:
  //         break;
  // }
};

// const onInputChange = (e) => {
//   const selectedFile = e.target.files[0];
//   console.log(selectedFile);
//   setImage(selectedFile);
//   setFileName(selectedFile ? selectedFile.name : "No file chosen yet"); // Update filename
// };

  return (
    <div>
      <NameArea callback={updateText} info={personalInfo} newField={addRecord}/>  
      <form onSubmit={submitImage}>
        <input
          type="file"
          accept="image/*"
          onChange={onInputChange}
          style={{ display: "none" }} // Hide the default file input
        />
        <label>
          <span>{fileName}</span> {/* Display file name here */}
          <button type="button" onClick={() => document.querySelector('input[type="file"]').click()}>
            Choose File
          </button>
        </label>
        <button type="submit">Submit</button>
      </form>
      {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <img
                alt=""
                src={require(`../images/${data.image}`)}
                height={100}
                width={100}
                key={data.image} // Add key for list rendering
              />
            );
          })}
    </div>
  );
}

export default App;


//////////////////////////////////////////

// import React, { Component } from "react";
// import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       image: null,
//       allImage: null,
//       fileName: "No file chosen yet  ff", // State for filename
//     };
//   }

//   componentDidMount() {
//     this.getImage();
//   }

//   getImage = async () => {
//     const result = await axios.get("http://localhost:4000/get-image");
//     console.log(result);
//     this.setState({ allImage: result.data.data });
//   };

//   submitImage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", this.state.image);

//     await axios.post("http://localhost:4000/upload-image", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     // Reset file name and image after submission
//     this.setState({ fileName: "No file chosen yet eed", image: null });
//   };

//   onInputChange = (e) => {
//     const selectedFile = e.target.files[0];
//     console.log(selectedFile);
//     this.setState({
//       image: selectedFile,
//       fileName: selectedFile ? selectedFile.name : "No file chosen yet ed", // Update filename
//     });
//   };

//   render() {
//     const { allImage, fileName } = this.state;

//     return (
//       <div>
//         <form onSubmit={this.submitImage}>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={this.onInputChange}
//             style={{ display: "none" }} // Hide the default file input
//             ref={(input) => (this.fileInput = input)} // Reference to the file input
//           />
//           <label>
//             <span>{fileName}</span> {/* Display file name here */}
//             <button
//               type="button"
//               onClick={() => this.fileInput.click()}
//             >
//               Choose File
//             </button>
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//         {allImage &&
//           allImage.map((data) => {
//             return (
//               <img
//                 alt=""
//                 src={require(`../images/${data.image}`)}
//                 height={100}
//                 width={100}
//                 key={data.image} // Add key for list rendering
//               />
//             );
//           })}
//       </div>
//     );
//   }
// }

// export default App;