import React, { Component } from "react";
import Inputs from "./Inputs"; // Assuming Inputs is still being used for the overview field

class ProjectInputs extends Component {
    render() {
        const { callback, info, onInputFocus, onInputBlur } = this.props;
        return (
            <div className="project-inputs-section">
                <h3 style={{marginBottom: 20}}>Experience</h3>
                {this.props.info.project.map((proj, index) => {
                    return (
                        <div key={index} className="project-grid-container">
                            <div className="project-grid-2-col">
                                {/* Project Name Dropdown */}
                                <div className="project-form-group">
                                    <label htmlFor={`projectInfo-project-${index}-name-select`}>Country</label>
                                    <select
                                    onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={proj.school}
                                        onChange={(e) => this.props.callback(e, index, 'school')}
                                        id={`projectInfo-project-${index}-name-select`}
                                        className="project-form-control"
                                    >
                                        <option value=""> Country</option>
                                        <option value="KSA">KSA</option>
                                        <option value="jordan">Jordan</option>
                                        <option value="UAE">UAE</option>
                                        <option value="lebanon">Lebanon</option>
                                        <option value="oman">Oman</option>
                                        <option value="qatar">Qatar</option>
                                        <option value="bahrain">Bahrain</option>
                                        <option value="kuwait">Kuwait</option>

                                        <option value="Sudan">Sudan</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Libiya">Libiya</option>
                                    </select>
                                </div>

                                {/* Type Dropdown */}
                                <div className="project-form-group">
                                    <label htmlFor={`projectInfo-project-${index}-link-select`}>Position</label>
                                    <select
                                    onFocus={onInputFocus} onBlur={onInputBlur}
                                        value={proj.from}
                                        onChange={(e) => this.props.callback(e, index, 'from')}
                                        id={`projectInfo-project-${index}-link-select`}
                                        className="project-form-control"
                                    >
                                        <option value=""> Position</option>
                                        <option value="HOUSEMAID">HOUSEMAID</option>
                                        <option value="COOK">COOK</option>
                                    </select>
                                </div>
                            </div>

                            <div className="project-grid-1-col">
                                {/* Overview Input for Years */}
                                <div className="project-form-group">
                                    <label htmlFor={`projectInfo-project-${index}-overview-input`}>Period (Years)</label>
                                    <input
                                    onFocus={onInputFocus} onBlur={onInputBlur}
                                        placeholder='(Years)'
                                        type="number"
                                        value={proj.overview}
                                        onChange={(e) => this.props.callback(e, index, 'overview')}
                                        id={`projectInfo-project-${index}-overview-input`}
                                        className="project-form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}

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
                        margin-bottom: 15px;
                    }

                    .project-grid-2-col {
                        flex: 2;
                        margin-right: 10px;
                    }

                    .project-grid-1-col {
                        flex: 1;
                    }

                    .project-form-group {
                        margin-bottom: 10px;
                    }

                    .project-form-control {
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        font-size: 14px;
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