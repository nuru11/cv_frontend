import React, { Component } from "react";
import { Typography, Checkbox, FormControlLabel, Grid, TextField, Paper } from "@mui/material";

class DocumentStyle extends Component {
    constructor() {
        super();
        this.updatePrimCol = this.updatePrimCol.bind(this);
        this.updateHeaderCol = this.updateHeaderCol.bind(this);
        this.updateTextCol = this.updateTextCol.bind(this);
        this.updateFontSize = this.updateFontSize.bind(this);
        this.updateFontStyle = this.updateFontStyle.bind(this);
    }

    updateFontStyle(e) {
        let r = document.querySelector(':root');
        let propToUpdate = '';
        let propVal;
        if (e.target.id.indexOf('P') >= 0) {
            propToUpdate += "--text-" + e.target.value;
        } else {
            propToUpdate += "--section-" + e.target.value;
        }

        switch (e.target.value) {
            case 'bold':
                propVal = 'Bold';
                break;
            case 'italic':
                propVal = 'Italic';
                break;
            case 'underline':
                propVal = 'underline';
                break;
            case 'strikethrough':
                propVal = 'line-through';
                break;
            case 'superscript':
                propVal = 'super';
                break;
            case 'subscript':
                propVal = 'sub';
                break;
            default:
                propVal = 'normal';
                break;
        }

        if (!e.target.checked) {
            propVal = 'normal';
        }
        console.log(propVal);
        r.style.setProperty(propToUpdate, propVal);
    }

    updateFontSize(e) {
        let r = document.querySelector(':root');
        let propToUpdate = e.target.id.indexOf('P') >= 0 ? '--text-size' : '--section-size';
        r.style.setProperty(propToUpdate, e.target.value + 'px');
    }

    updatePrimCol(e) {
        let r = document.querySelector(':root');
        r.style.setProperty('--primary-color', e.target.value);
    }
    
    updateHeaderCol(e) {
        let r = document.querySelector(':root');
        r.style.setProperty('--header-color', e.target.value);
    }
    
    updateTextCol(e) {
        let r = document.querySelector(':root');
        r.style.setProperty('--text-color', e.target.value);
    }

    render() {
        return (
            <Paper style={{ padding: '16px', margin: '16px', borderRadius: '8px' }}>
                <Typography variant="h5" gutterBottom>
                    CV Style
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Choose Font Styles:</Typography>
                        <Grid container spacing={2}>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="bold"
                                            id="PFSBold"
                                            onChange={this.updateFontStyle}
                                        />
                                    }
                                    label="Bold"
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="italic"
                                            id="PFSItalic"
                                            onChange={this.updateFontStyle}
                                        />
                                    }
                                    label="Italic"
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="underline"
                                            id="PFSUnderline"
                                            onChange={this.updateFontStyle}
                                        />
                                    }
                                    label="Underline"
                                />
                            </Grid>
                            {/* New Checkboxes Added */}
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="strikethrough"
                                            id="PFSStrikethrough"
                                            onChange={this.updateFontStyle}
                                        />
                                    }
                                    label="Strikethrough"
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="superscript"
                                            id="PFSSuperscript"
                                            onChange={this.updateFontStyle}
                                        />
                                    }
                                    label="Superscript"
                                />
                            </Grid>
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="subscript"
                                            id="PFSSubscript"
                                            onChange={this.updateFontStyle}
                                        />
                                    }
                                    label="Subscript"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Additional controls can be added here for colors and font sizes */}
                    {/* Uncomment the following sections to add color and font size inputs */}
                    {/* <Grid item xs={12}>
                        <TextField
                            label="Primary Color"
                            type="color"
                            onChange={this.updatePrimCol}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Header Color"
                            type="color"
                            onChange={this.updateHeaderCol}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Text Color"
                            type="color"
                            onChange={this.updateTextCol}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Font Size (px)"
                            type="number"
                            onChange={this.updateFontSize}
                            fullWidth
                        />
                    </Grid> */}
                </Grid>
            </Paper>
        );
    }
}

export default DocumentStyle;



////////////////////////////////  orginal 


// import {React, Component} from "react";

// class DocumentStyle extends Component {

//     constructor() {
//         super();
//         this.updatePrimCol = this.updatePrimCol.bind(this);
//         this.updateHeaderCol = this.updateHeaderCol.bind(this);
//         this.updateTextCol = this.updateTextCol.bind(this);
//         this.updateFontSize = this.updateFontSize.bind(this);
//         this.updateFontStyle = this.updateFontStyle.bind(this);
//     }

//     updateFontStyle( e ){
//         let r = document.querySelector(':root');
//         let propToUpdate = '';
//         let propVal;
//         if(e.target.id.indexOf('P') >=0) {
//             propToUpdate+="--text-"+e.target.value;
//         } else {
//             propToUpdate+="--section-"+e.target.value;
//         }
        
//         switch (e.target.value){
//             case 'bold':
//                 propVal = 'Bold';
//                 break;
//             case 'italic':
//                 propVal = 'Italic';
//                 break;
//             case 'underline':
//                 propVal = 'underline';
//                 break;
//             default:
//                 propVal = 'normal';
//                 break;
//         }

//         if (!e.target.checked){
//             propVal = 'normal';
//         } 
//         console.log(propVal);
//         r.style.setProperty(propToUpdate,propVal);
//     }

//     updateFontSize( e ){
//         let r = document.querySelector(':root');
//         let propToUpdate = e.target.id.indexOf('P') >= 0 ? '--text-size' : '--section-size'; 
//         r.style.setProperty(propToUpdate, e.target.value + 'px');
//     }

//     updatePrimCol( e ) {
//         let r = document.querySelector(':root');
//         r.style.setProperty('--primary-color', e.target.value);
//     }
//     updateHeaderCol( e ) {
//         let r = document.querySelector(':root');
//         r.style.setProperty('--header-color', e.target.value);
//     }
//     updateTextCol( e ) {
//         let r = document.querySelector(':root');
//         r.style.setProperty('--text-color', e.target.value);
//     }

//     render() {
//         return (
//             <div className="inputSection">
//                 <h3>Document Style</h3>
//                 <div className="grid-2-col">
//                     <div className="d-input">
//                         <label htmlFor="PrimColor">Primary Color</label>
//                         <input type="color" onChange={this.updatePrimCol}/>
//                     </div>
//                     <div className="d-input">
//                         <label htmlFor="headerCol">Header Text Color</label>
//                         <input type="color" onChange={this.updateHeaderCol} value="#ffffff"/>
//                     </div>
//                     <div className="d-input">
//                         <label htmlFor="TextColor">Paragraph Color</label>
//                         <input type="color" onChange={this.updateTextCol}/>
//                     </div>
//                     <div className="d-input">
//                         <label htmlFor="PFontSize">Paragraph Font Size</label>
//                         <input type="number" id="PFontSize" onChange={this.updateFontSize} min="8"/>
//                     </div>
                    
//                     <div className="d-input">
//                         <label htmlFor="HFontSize">Section Font Size</label>
//                         <input type="number" id="HFontSize" onChange={this.updateFontSize}  min="15"/>
//                     </div>
//                 </div>
//                 <div className="grid-1-col">
//                         <div className="mb-1 mt-1">Paragraph Font Style:</div>
//                         <div className="grid-3-col">
//                                 <label htmlFor="PFSBold" className="d-flex">
//                                     Bold
//                                     <input value="bold" id="PFSBold" type="checkbox" className="w-auto ml-2" onChange={this.updateFontStyle}/>
//                                 </label>
//                                 <label htmlFor="PFSItalic" className="d-flex">
//                                     Italic
//                                     <input value="italic" id="PFSItalic" type="checkbox" className="w-auto ml-2" onChange={this.updateFontStyle}/>
//                                 </label>
//                                 <label htmlFor="PFSUnderline" className="d-flex">
//                                     Underline
//                                     <input value="underline" id="PFSUnderline" type="checkbox" className="w-auto ml-2" onChange={this.updateFontStyle}/>
//                                 </label>
//                         </div>
//                 </div>
//                 <div className="grid-1-col">
//                         <div className="mb-1 mt-1">Section Font Style:</div>
//                         <div className="grid-3-col">
//                                 <label htmlFor="SFSBold" className="d-flex" >
//                                     Bold
//                                     <input value="bold" id="SFSBold" type="checkbox" className="w-auto ml-2" onChange={this.updateFontStyle}/>
//                                 </label>
//                                 <label htmlFor="SFSItalic" className="d-flex">
//                                     Italic
//                                     <input value="italic" id="SFSItalic" type="checkbox" className="w-auto ml-2" onChange={this.updateFontStyle}/>
//                                 </label>
//                                 <label htmlFor="SFSUnderline" className="d-flex">
//                                     Underline
//                                     <input value="underline" id="SFSUnderline" type="checkbox" className="w-auto ml-2" onChange={this.updateFontStyle}/>
//                                 </label>
//                         </div>
//                 </div>
                
//             </div>
//         )
//     }
// }

// export default DocumentStyle;