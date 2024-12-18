import React, { Component } from "react";
import Inputs from "./Inputs";

class NameArea extends Component {
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
                    `}
                </style>
                {/* <h3>Personal Information</h3> */}
                <div className="grid-container">
                <h3 style={{marginBottom: 20}}>Personal Information</h3>
                    <div className="grid-3-col">
                        <div className="input-container">
                            
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>First Name</span>*</span>
                            <Inputs className="input-spacing" placeholder='First Name' TextVal={this.props.info.name} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-name-input'} />
                            { this.props.info.name === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                            
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Middle Name</span>*</span>
                            <Inputs className="input-spacing" placeholder='Middle Name' TextVal={this.props.info.middleName} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-middleName-input'} />
                            { this.props.info.middleName === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>

                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Family Name</span>*</span>
                            <Inputs className="input-spacing" placeholder='Family Name' TextVal={this.props.info.familyName} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-familyName-input'} />
                            { this.props.info.familyName === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Surname</span>*</span>
                            <Inputs className="input-spacing" placeholder='surname' TextVal={this.props.info.surname} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-surname-input'} />
                            { this.props.info.surname === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                            
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Application No</span>*</span>
                            <Inputs className="input-spacing" placeholder='Application No' TextVal={this.props.info.applicationNo} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-applicationNo-input'} />
                            { this.props.info.applicationNo === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Place Of Birth</span>*</span>
                            <Inputs className="input-spacing" placeholder='place Of Birth' TextVal={this.props.info.placeOfBirth} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-placeOfBirth-input'} />
                            { this.props.info.placeOfBirth === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>

                      
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Passport Number</span>*</span>
                            <Inputs className="input-spacing" placeholder='passportNo' TextVal={this.props.info.passportNo} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-passportNo-input'} />
                            { this.props.info.passportNo === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Date Of Birth</span>*</span>
                            <Inputs type="date" className="input-spacing" placeholder='Date Of Birth' TextVal={this.props.info.dateOfBirth} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-dateOfBirth-input'} />
                            { this.props.info.dateOfBirth === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>


                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Age</span>*</span>
                            <Inputs type="number" className="input-spacing" placeholder='Age' TextVal={this.props.info.age} callback={this.props.callback} onFocus={onInputFocus} onBlur={onInputBlur} idVal={'personalInfo-age-input'} />
                            { this.props.info.age === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>
                        
                        {/* <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Nationality</span>*</span>
                            <Inputs className="input-spacing" placeholder='nationality' TextVal={this.props.info.nationality} callback={this.props.callback} idVal={'personalInfo-nationality-input'} />
                            
                        </div> */}
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                            {/* <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-maritalStatus-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Marital Status</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.maritalStatus}
        onChange={this.props.callback}
        id={`personalInfo-maritalStatus-input`}
        className="project-form-control"
        style={{ color: this.props.info.maritalStatus ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.maritalStatus}</option>
        <option value="SINGLE">SINGLE</option>
        <option value="MARRIED">MARRIED</option>
        <option value="DIVORCED">DIVORCED</option>
    </select>
    { this.props.info.maritalStatus === "Marital Status" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Number Of Children</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} type="number" placeholder='number Of Children' TextVal={this.props.info.numberOfChildren} callback={this.props.callback} idVal={'personalInfo-numberOfChildren-input'} />
                            { this.props.info.numberOfChildren === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div>
                        
                      
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                        <span className="not-required">Weight</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} type="number" placeholder='weight' TextVal={this.props.info.weight} callback={this.props.callback} idVal={'personalInfo-weight-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                        <span className="not-required">Height</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} type="number" placeholder='height' TextVal={this.props.info.height} callback={this.props.callback} idVal={'personalInfo-height-input'} />
                            {/* No asterisk for height */}
                        </div>
                        
                        {/* <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Education Attainment</span>*</span>
                            <Inputs className="input-spacing" placeholder='education Attainment' TextVal={this.props.info.educationAttainment} callback={this.props.callback} idVal={'personalInfo-educationAttainment-input'} />
                            { this.props.info.educationAttainment === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div> */}

<div className="input-container">
                        {/* <span className="required">*</span> */}
                            {/* <Inputs className="input-spacing" placeholder='marital Status' TextVal={this.props.info.maritalStatus} callback={this.props.callback} idVal={'personalInfo-maritalStatus-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-educationAttainment-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Education Attainment</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.educationAttainment}
        onChange={this.props.callback}
        id={`personalInfo-educationAttainment-input`}
        className="project-form-control"
        style={{ color: this.props.info.educationAttainment ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}></option>
        <option value="PRIMARY_SCHOOL">Primary School</option>
        <option value="Secondary_SCHOOL">Secondary School</option>
        <option value="High_SCHOOL">High School</option>
        <option value="HIGH_SCHOOL">High School</option>
        <option value="BACHELORS">Bachelor's Degree</option>
        <option value="MASTERS">Master's Degree</option>
        <option value="DOCTORATE">Doctorate</option>
    </select>
    { this.props.info.educationAttainment === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                            
                        </div>

                        {/* <div className="input-container">
                        <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Gender</span>*</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='sex' TextVal={this.props.info.sex} callback={this.props.callback} idVal={'personalInfo-sex-input'} />
                            { this.props.info.sex === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
                        </div> */}
 <div className="input-container">
                        <div className="project-form-group">
    <label htmlFor={`personalInfo-sex-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Gender</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.sex}
        onChange={this.props.callback}
        id={`personalInfo-sex-input`}
        className="project-form-control"
        style={{ color: this.props.info.sex ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>Gender</option>
        <option value="none">None</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
       

    </select>
    { this.props.info.sex === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>

</div>

                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                        <span className="not-required">Id Number</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='id Number' TextVal={this.props.info.idno} callback={this.props.callback} idVal={'personalInfo-idno-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        <span className="not-required">Position Applied For</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Position Applied For' TextVal={this.props.info.postAppliedFor} callback={this.props.callback} idVal={'personalInfo-postAppliedFor-input'} />
                           
                        </div>
                        
                        {/* <div className="input-container">
                        <span className="not-required">Contract Period</span>
                            <Inputs className="input-spacing" type="number" placeholder='contract Period' TextVal={this.props.info.contractPeriod} callback={this.props.callback} idVal={'personalInfo-contractPeriod-input'} />
                            
                        </div> */}

                        
                        
                        <div className="input-container">
                            {/* <Inputs className="input-spacing" placeholder='arabic Degree' TextVal={this.props.info.arabicDegree} callback={this.props.callback} idVal={'personalInfo-arabicDegree-input'} /> */}
                            
                            {/* No asterisk for arabic Degree */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-arabicDegree-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Arabic Degree</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.arabicDegree}
        onChange={this.props.callback}
        id={`personalInfo-arabicDegree-input`}
        className="project-form-control"
        style={{ color: this.props.info.arabicDegree ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>Arabic Degree</option>
        <option value="none">None</option>
        <option value="Poor">Poor</option>
        <option value="Good">Good</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="fluent">Fluent</option>
        <option value="native">Native</option>

    </select>
    { this.props.info.arabicDegree === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                        </div>
                        
                        <div className="input-container">
                            {/* <Inputs className="input-spacing" placeholder='english Degree' TextVal={this.props.info.englishDegree} callback={this.props.callback} idVal={'personalInfo-englishDegree-input'} /> */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-englishDegree-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>English Degree</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.englishDegree}
        onChange={this.props.callback}
        id={`personalInfo-englishDegree-input`}
        className="project-form-control"
        style={{ color: this.props.info.englishDegree ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>English Degree</option>
        <option value="none">None</option>
        <option value="Poor">Poor</option>
        <option value="Good">Good</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="fluent">Fluent</option>
        <option value="native">Native</option>
    </select>
    { this.props.info.englishDegree === "" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                           
                        </div>

                        <div className="input-container">
                            {/* <Inputs className="input-spacing" placeholder='religion' TextVal={this.props.info.religion} callback={this.props.callback} idVal={'personalInfo-religion-input'} /> */}
                            {/* No asterisk for religion */}

                            <div className="project-form-group">
    <label htmlFor={`personalInfo-religion-input`}>
    <span className="required"><span style={{color: "black", fontWeight: "normal"}}>Religion</span>*</span>
    </label>
    <select
    onFocus={onInputFocus} onBlur={onInputBlur}
        value={this.props.info.religion}
        onChange={this.props.callback}
        id={`personalInfo-religion-input`}
        className="project-form-control"
        style={{ color: this.props.info.religion ? 'black' : '#AFAFAF' }} // Change color based on value
    >
        <option value="" style={{ color: '#AFAFAF' }}>{this.props.info.religion}</option>
        <option value="islam">Islam</option>
        <option value="christianity">Christianity</option>
    </select>
    { this.props.info.religion === "Religion" && this.props.info.emptyfield === true ? <div style={{color: "red"}}>this field is required</div> : ""}
</div>
                        </div>
                        
                        <div className="input-container">
                        <span className="not-required">Own Phone Number</span>
                            <Inputs type="number" onFocus={onInputFocus} onBlur={onInputBlur} className="input-spacing" placeholder='own Phone Number' TextVal={this.props.info.ownPhoneNumber} callback={this.props.callback} idVal={'personalInfo-ownPhoneNumber-input'} />
                            
                        </div>
                        
                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                        <span className="not-required">Contact Phone Number</span>
                            <Inputs type="number" onFocus={onInputFocus} onBlur={onInputBlur} className="input-spacing" placeholder='contact Phone Number' TextVal={this.props.info.contactPhoneNumber} callback={this.props.callback} idVal={'personalInfo-contactPhoneNumber-input'} />
                            
                        </div>


                      

                        <div className="input-container">
                        <span className="not-required">Passport Issue Place</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Passport Issue Place' TextVal={this.props.info.passportIssuePlace} callback={this.props.callback} idVal={'personalInfo-passportIssuePlace-input'} />
                            
                        </div>


                        {/* <div className="input-container"> */}
                        {/* <span className="required">*</span> */}
                        {/* <span className="not-required">Visa Number</span>
                            <Inputs className="input-spacing" placeholder='Visa Number' TextVal={this.props.info.visaNo} callback={this.props.callback} idVal={'personalInfo-visaNo-input'} />
                            
                        </div> */}

                        <div className="input-container">
                        {/* <span className="required">*</span> */}
                        <span className="not-required">Passport Type</span>
                            <Inputs className="input-spacing" onFocus={onInputFocus} onBlur={onInputBlur} placeholder='Passport Type' TextVal={this.props.info.passportType} callback={this.props.callback} idVal={'personalInfo-passportType-input'} />
                            
                        </div>


                    </div>
                </div>
                
            </div>
        );
    }
}

export default NameArea;