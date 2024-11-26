// import React, { Component } from "react";

// class Inputs extends Component {
//     constructor(props) {
//         super(props); 

//         this.state = {
//             value: props.TextVal,
//             placeholder: props.placeholder,
//             type: props.type
//         }
//         this.validField = this.validField.bind(this);
//     }

//     validField(e) {
//         let isValid = e.target.checkValidity();

//         if(!isValid) {
//             e.target.classList.add('Error')
//         } else {
//             e.target.classList.remove('Error')
//         }
//     }


//     render() {

//         if (this.props.type === "TextArea") {
//             return (
//                 <div>
//                     <textarea 
//                         autoComplete="nope" //Need to put an invalid value to reall turn off autoComplete
//                         onChange={this.props.callback} 
//                         value={this.props.TextVal} 
//                         placeholder={this.state.placeholder} 
//                         type={!this.props.type ? 'Text' : this.state.type}
//                         onBlur={this.validField}
//                         id={this.props.idVal}
//                         width='100'
//                         />
//                 </div>
//             )
//         }

//         else {
//             return (
//                 <div>
//                     <input 
//                         autoComplete="nope" //Need to put an invalid value to reall turn off autoComplete
//                         onChange={this.props.callback} 
//                         value={this.props.TextVal} 
//                         placeholder={this.state.placeholder} 
//                         type={!this.props.type ? 'Text' : this.state.type}
//                         onBlur={this.validField}
//                         id={this.props.idVal}
//                         />
//                 </div>
//             )
//         }
//     }
// }

// export default Inputs;


///////////////////////////


// import React, { Component } from "react";
// import TextField from '@mui/material/TextField';

// class Inputs extends Component {
//   constructor(props) {
//     super(props); 

//     this.state = {
//       value: props.TextVal,
//       placeholder: props.placeholder,
//       type: props.type
//     };
//     this.validField = this.validField.bind(this);
//   }

//   validField(e) {
//     const isValid = e.target.checkValidity();
//     if (!isValid) {
//       e.target.classList.add('Error');
//     } else {
//       e.target.classList.remove('Error');
//     }
//   }

//   render() {
//     const { type, callback, TextVal, idVal } = this.props;

//     // Use TextField for both input types
//     return (
//       <TextField
//         autoComplete="off" // Prevents browser autocomplete
//         onChange={callback}
//         value={TextVal}
//         placeholder={this.state.placeholder}
//         type={type === "TextArea" ? "text" : this.state.type}
//         onBlur={this.validField}
//         id={idVal}
//         multiline={type === "TextArea"}
//         rows={type === "TextArea" ? 4 : 1} // Set default rows for TextArea
//         variant="outlined"
//         fullWidth
//         error={TextVal && !this.validField} // Example error handling
//       />
//     );
//   }
// }

// export default Inputs;



//////////////////////////////

import React, { Component } from "react";
import TextField from '@mui/material/TextField';

class Inputs extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      value: props.TextVal,
      placeholder: props.placeholder,
      type: props.type
    };
    this.validField = this.validField.bind(this);
  }

  validField(e) {
    const isValid = e.target.checkValidity();
    if (!isValid) {
      e.target.classList.add('Error');
    } else {
      e.target.classList.remove('Error');
    }
  }

  render() {
    const { type, callback, TextVal, idVal, onFocus, onBlur } = this.props;

    return (
      <>
        <style>
          {`
            .input-margin {
              margin-top: 15px; /* Adjust the value as needed */
            }
          `}
        </style>
        <TextField
          className="input-margin"
          autoComplete="off" // Prevents browser autocomplete
          onChange={callback}
          value={TextVal}
          placeholder={this.state.placeholder}
          type={type === "TextArea" ? "text" : this.state.type}
          onBlur={(e) => { this.validField(e); if (onBlur) onBlur(); }} // Call onBlur prop
          onFocus={onFocus} // Call onFocus prop
          id={idVal}
          multiline={type === "TextArea"}
          rows={type === "TextArea" ? 4 : 1}
          variant="outlined"
          fullWidth
          error={TextVal && !this.validField} // Example error handling
        />
      </>
    );
  }
}

export default Inputs;