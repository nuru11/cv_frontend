import React, { Component } from "react";
import Inputs from "./Inputs";


class SponsorInformation extends Component {
    render() {
        const { callback, info, onInputFocus, onInputBlur } = this.props;
        return (
            <div className="inputSection">
                <style>
                    {`
                        .input-spacing {

                        }
                        .required {
                            color: red;
                            margin-bottom: -15px;
                           
                            font-weight: bold; /* Make the asterisk bold */
                        } 

                        .not-required {
                        color: black;
                            margin-bottom: -15px;
                           
                            font-weight: normal; /* Make the asterisk bold */
                        }
                        .input-container {
                            display: flex;
                            flex-direction: column;
                             /* Center align inputs and asterisks */
                             margin-top: 20px
                        }

                        .grid-container {
                        margin-top: 50px;
                        
                        } 
                    `}
                </style>
                {/* <h3>Personal Information</h3> */}
                <div className="grid-container">
                <h3 style={{marginBottom: 20}}>Sponsor Information & Visa Information</h3>
                    <div className="grid-3-col">
                        <div className="input-container">
                        
                            
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Visa Number</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Visa Number' TextVal={this.props.info.visaNo} callback={this.props.callback} idVal={'sponsorInformation-visaNo-input'} />
                            { this.props.info.visaNo === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sponsor Id</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Sponsor Id' TextVal={this.props.info.sponsorId} callback={this.props.callback} idVal={'sponsorInformation-sponsorId-input'} />
                            { this.props.info.sponsorId === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sponsor Adress</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Sponsor Adress' TextVal={this.props.info.sponsorAdress} callback={this.props.callback} idVal={'sponsorInformation-sponsorAdress-input'} />
                            { this.props.info.sponsorAdress === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                            
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sponsor City</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Sponsor City' TextVal={this.props.info.sponsorCity} callback={this.props.callback} idVal={'sponsorInformation-sponsorCity-input'} />
                            { this.props.info.sponsorCity === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>National Id</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='National Id' TextVal={this.props.info.nationalId} callback={this.props.callback} idVal={'sponsorInformation-nationalId-input'} />
                            { this.props.info.nationalId === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Email</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Email' TextVal={this.props.info.email} callback={this.props.callback} idVal={'sponsorInformation-email-input'} />
                            { this.props.info.email === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sponsor Name</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Sponsor Name' TextVal={this.props.info.sponsorName} callback={this.props.callback} idVal={'sponsorInformation-sponsorName-input'} />
                            { this.props.info.sponsorName === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>

                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sponsor Phone</span>*</span>
                            <Inputs type="number" onFocus={onInputFocus} onBlur={onInputBlur} className="input-spacing" placeholder='Sponsor Phone' TextVal={this.props.info.sponsorPhone} callback={this.props.callback} idVal={'sponsorInformation-sponsorPhone-input'} />
                            { this.props.info.sponsorPhone === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            {/* <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`sponsorInformation-agent-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Agent</span></span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.agent}
        onChange={this.props.callback}
        id={`sponsorInformation-agent-input`}
        className="project-form-control"
        style={{ color: this.props.info.agent ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.agent}</option>
        <option value="goldenagent">Golden Agent</option>
        <option value="belahodod">Bela Hodod</option>
        <option value="assawsanah">Assawsanah</option>
        <option value="baraka">Baraka</option>
    </select>
</div>
                            
                        </div>




                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sponsor Arabic</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Sponsor Arabic' TextVal={this.props.info.sponsorArabic} callback={this.props.callback} idVal={'sponsorInformation-sponsorArabic-input'} />
                            { this.props.info.sponsorArabic === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>




                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            {/* <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`sponsorInformation-visaType-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Visa Type</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.visaType}
        onChange={this.props.callback}
        id={`sponsorInformation-visaType-input`}
        className="project-form-control"
        style={{ color: this.props.info.visaType ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.visaType}</option>
        {/* <option value="tourism">Tourism</option> */}
        <option value="transit">Transit</option>
        <option value="umrah">Umrah</option>
        <option value="work">Work</option>
        <option value="workingvisit">Working Visit</option>
        <option value="residence">Residence</option>
        <option value="hajj">Hajj</option>
        <option value="diplomacy">Diplomacy</option>
        <option value="other">other</option>
    </select>
    { this.props.info.visaType === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                            
                        </div>







                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>File Number</span>*</span>
                            <Inputs type="number" onFocus={onInputFocus} onBlur={onInputBlur} className="input-spacing" placeholder='File Number' TextVal={this.props.info.fileNo} callback={this.props.callback} idVal={'sponsorInformation-fileNo-input'} />
                            { this.props.info.fileNo === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Wakala</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='wakala' TextVal={this.props.info.wakala} callback={this.props.callback} idVal={'sponsorInformation-wakala-input'} />
                            { this.props.info.wakala === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>



                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>SignedUp</span>*</span>
                            <Inputs type="date" onFocus={onInputFocus} onBlur={onInputBlur} className="input-spacing" placeholder='signedUp' TextVal={this.props.info.signedUp} callback={this.props.callback} idVal={'sponsorInformation-signedUp-input'} />
                            { this.props.info.signedUp === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>



                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Biometric Id</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Biometric Id' TextVal={this.props.info.biometricId} callback={this.props.callback} idVal={'sponsorInformation-biometricId-input'} />
                            { this.props.info.biometricId === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>



                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>contract</span>*</span>
                            <Inputs type="number" onFocus={onInputFocus} onBlur={onInputBlur} className="input-spacing" placeholder='Contract' TextVal={this.props.info.contract} callback={this.props.callback} idVal={'sponsorInformation-contract-input'} />
                            { this.props.info.contract === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Sticker Visa</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Sticker Visa' TextVal={this.props.info.stickerVisa} callback={this.props.callback} idVal={'sponsorInformation-stickerVisa-input'} />
                            { this.props.info.stickerVisa === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            {/* <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`sponsorInformation-currentNationality-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Current Nationality</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.currentNationality}
        onChange={this.props.callback}
        id={`sponsorInformation-currentNationality-input`}
        className="project-form-control"
        style={{ color: this.props.info.currentNationality ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.currentNationality}</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Non-Ethiopia">Non-Ethiopia</option>
        
    </select>
    { this.props.info.currentNationality === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                            
                        </div>



                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Labor Id</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Labor Id' TextVal={this.props.info.laborId} callback={this.props.callback} idVal={'sponsorInformation-laborId-input'} />
                            { this.props.info.laborId === "" && this.props.info.sponsorInformationEmptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>



                        {/* <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              fullWidth
              value={this.props.info.signedUp}
              onChange={(e) => this.props.info.signedUp = e.target.value}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid> */}






                        
                     


                    </div>
                </div>
                
            </div>
        );
    }
}

export default SponsorInformation;