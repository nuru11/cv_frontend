import React, { Component } from "react";
import Inputs from "./Inputs"; // Assuming Inputs is still being used for the overview field

class ProjectInputs extends Component {
    render() {
        const { callback, info, onInputFocus, onInputBlur } = this.props;

        // Dropdown options for ratings

        return (
            <div className="project-inputs-section">
                <h3 style={{ marginBottom: 20 }}>Experience</h3>
                {this.props.info.project.map((proj, index) => {
                    return (
                        <div key={index} className="project-grid-container">
                            <div className="project-grid-2-col">
                                {/* Country Dropdown */}
                                <div className="project-form-group">
                                    <label htmlFor={`projectInfo-project-${index}-name-select`}>Country</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={proj.country}
                                        onChange={(e) => this.props.callback(e, index, 'country')}
                                        id={`projectInfo-project-${index}-name-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Country</option>
                                        <option value="KSA">KSA</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="UAE">UAE</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Libya">Libya</option>
                                    </select>
                                </div>

                                {/* Position Dropdown */}
                                <div className="project-form-group">
                                    <label htmlFor={`projectInfo-project-${index}-link-select`}>Position</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={proj.position}
                                        onChange={(e) => this.props.callback(e, index, 'position')}
                                        id={`projectInfo-project-${index}-link-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Position</option>
                                        <option value="HOUSEMAID">HOUSEMAID</option>
                                        <option value="COOK">COOK</option>
                                    </select>
                                </div>

                                {/* Year Input */}
                                <div className="project-form-group">
                                    <label htmlFor={`projectInfo-project-${index}-overview-input`}>Year</label>
                                    <input
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        type="number"
                                        value={proj.overview}
                                        onChange={(e) => this.props.callback(e, index, 'overview')}
                                        id={`projectInfo-project-${index}-overview-input`}
                                        className="project-form-control"
                                        placeholder="Enter Year"
                                    />
                                </div>

                                {/* Date Inputs Container */}
                                <div className="date-inputs-container">
                                    <div className="project-form-group">
                                        <label htmlFor={`projectInfo-project-${index}-from-date`}>From</label>
                                        <input
                                            onFocus={onInputFocus} onBlur={onInputBlur}
                                            type="date"
                                            value={proj.from}
                                            onChange={(e) => this.props.callback(e, index, 'from')}
                                            id={`projectInfo-project-${index}-from-date`}
                                            className="project-form-control"
                                        />
                                    </div>

                                    <div className="project-form-group">
                                        <label htmlFor={`projectInfo-project-${index}-to-date`}>To</label>
                                        <input
                                            onFocus={onInputFocus} onBlur={onInputBlur}
                                            type="date"
                                            value={proj.to}
                                            onChange={(e) => this.props.callback(e, index, 'to')}
                                            id={`projectInfo-project-${index}-to-date`}
                                            className="project-form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* New fields for ratings */}
                <h3 style={{ marginTop: 40, marginBottom: 20 }}>Care Ratings</h3>
                <div className="project-grid-container">
                   

                                    <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-cleaning-select`}>cleaning</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.cleaning}
                                        onChange={(e) => this.props.callback(e, 0, 'cleaning')}
                                        id={`projectInfo-project-${0}-cleaning-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-laundary-select`}>laundary</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.laundary}
                                        onChange={(e) => this.props.callback(e, 0, 'laundary')}
                                        id={`projectInfo-project-${0}-laundary-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-ironingclothes-select`}>Ironing Clothes</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.ironingclothes}
                                        onChange={(e) => this.props.callback(e, 0, 'ironingclothes')}
                                        id={`projectInfo-project-${0}-ironingclothes-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-cleaning-select`}>babycare</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.babycare}
                                        onChange={(e) => this.props.callback(e, 0, 'babycare')}
                                        id={`projectInfo-project-${0}-babycare-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-childerncare-select`}>Childern Care</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.childerncare}
                                        onChange={(e) => this.props.callback(e, 0, 'childerncare')}
                                        id={`projectInfo-project-${0}-childerncare-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-careoftheelderly-select`}>Care of the elderly</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.careoftheelderly}
                                        onChange={(e) => this.props.callback(e, 0, 'careoftheelderly')}
                                        id={`projectInfo-project-${0}-careoftheelderly-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                               
                </div>



                <h3 style={{ marginTop: 40, marginBottom: 20 }}>Skills</h3>
                <div className="project-grid-container">
                   

                                    <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-cooking-select`}>Cooking</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.cooking}
                                        onChange={(e) => this.props.callback(e, 0, 'cooking')}
                                        id={`projectInfo-project-${0}-cooking-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-arabicCooking-select`}>Arabic Cooking</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.arabicCooking}
                                        onChange={(e) => this.props.callback(e, 0, 'arabicCooking')}
                                        id={`projectInfo-project-${0}-arabicCooking-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-sewingClothes-select`}>Sewing Clothes</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.sewingClothes}
                                        onChange={(e) => this.props.callback(e, 0, 'sewingClothes')}
                                        id={`projectInfo-project-${0}-sewingClothes-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-homeNursing-select`}>Home Nursing</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.homeNursing}
                                        onChange={(e) => this.props.callback(e, 0, 'homeNursing')}
                                        id={`projectInfo-project-${0}-homeNursing-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-childrens-select`}>Childern</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.childrens}
                                        onChange={(e) => this.props.callback(e, 0, 'childrens')}
                                        id={`projectInfo-project-${0}-childrens-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-drivingCars-select`}>Driving Cars</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.drivingCars}
                                        onChange={(e) => this.props.callback(e, 0, 'drivingCars')}
                                        id={`projectInfo-project-${0}-drivingCars-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>


                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-manicuring-select`}>Manicuring</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.manicuring}
                                        onChange={(e) => this.props.callback(e, 0, 'manicuring')}
                                        id={`projectInfo-project-${0}-manicuring-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>


                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-arabic-select`}>Arabic</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.arabic}
                                        onChange={(e) => this.props.callback(e, 0, 'arabic')}
                                        id={`projectInfo-project-${0}-arabic-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>


                                <div className="project-form-group" style={{marginRight: "10px"}}>
                                    <label htmlFor={`projectInfo-project-${0}-english-select`}>English</label>
                                    <select
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={this.props.info.project.english}
                                        onChange={(e) => this.props.callback(e, 0, 'english')}
                                        id={`projectInfo-project-${0}-english-select`}
                                        className="project-form-control"
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="Excellent">Excellent</option>
                                        <option value="Very Good">Very Good</option>
                                        <option value="Good">Good</option>
                                       
                                    </select>
                                </div>

                               
                </div>
                

                {/* Add Project Button */}
                <button 
                    type="button" 
                    onClick={this.props.newField} 
                    id='projectInfo-project-btn'
                    className="project-btn project-btn-primary"
                >
                    Add Experience
                </button>

                {/* Inline CSS Styles */}
                <style jsx>{`
                    .project-inputs-section {
                        margin: 20px;
                        font-family: Arial, sans-serif;
                    }

                    .project-grid-container {
                        display: flex;
                        margin-bottom: 20px; /* Space between project entries */
                        margin-right: 20px; /* Space to the right */
                        flex-wrap: wrap; /* Allow wrapping for new fields */
                    }

                    .project-grid-2-col {
                        flex: 2;
                        margin-right: 10px;
                    }

                    .project-grid-1-col {
                        flex: 1;
                        min-width: 200px; /* Minimum width for new fields */
                    }

                    .project-form-group {
                        margin-bottom: 15px; /* Space between form groups */
                    }

                    .project-form-control {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        font-size: 14px;
                        padding-right: 12px; /* Additional right padding */
                    }

                    .project-btn {
                        padding: 10px 15px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        background-color: #007bff; /* Primary color */
                        color: white;
                        font-size: 16px;
                    }

                    .project-btn-primary:hover {
                        background-color: #0056b3; /* Darker shade on hover */
                    }
                `}</style>
            </div>
        );
    }
}

export default ProjectInputs;