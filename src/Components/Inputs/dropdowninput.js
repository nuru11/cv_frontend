import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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
    const { type, callback, TextVal, idVal } = this.props;

    return (
      <>
        <style>
          {`
            .input-margin {
              margin-top: 15px; /* Adjust the value as needed */
            }
          `}
        </style>
        {type === "Dropdown" ? (
          <FormControl variant="outlined" fullWidth className="input-margin">
            <InputLabel id={`${idVal}-label`}>Select Religion</InputLabel>
            <Select
              labelId={`${idVal}-label`}
              onChange={callback}
              value={TextVal}
              id={idVal}
              onBlur={this.validField}
              label="Select Religion"
            >
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Christian">Christian</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <TextField
            className="input-margin"
            autoComplete="off" 
            onChange={callback}
            value={TextVal}
            placeholder={this.state.placeholder}
            type={this.state.type}
            onBlur={this.validField}
            id={idVal}
            multiline={type === "TextArea"}
            rows={type === "TextArea" ? 4 : 1}
            variant="outlined"
            fullWidth
            error={TextVal && !this.validField}
          />
        )}
      </>
    );
  }
}

export default Inputs;