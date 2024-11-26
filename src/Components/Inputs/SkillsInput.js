import React, { Component } from "react";
import Inputs from "./Inputs";

class SkillsInput extends Component {
    state = {
        years: '',
        country: '',
        position: ''
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { callback, info, onInputFocus, onInputBlur } = this.props;
        return (
            <div className="inputSection">
                <h3>Skills</h3>
                <div className="grid-container">
                    <div className="grid-3-col">
                        {this.props.info.skills.map((skill, index) => {
                            return (
                                <div key={index}>
                                    <Inputs 
                                        onFocus={onInputFocus} onBlur={onInputBlur}
                                        placeholder='Project Name' 
                                        TextVal={skill} 
                                        callback={this.props.callback} 
                                        idVal={`skillInfo-skills-${index}-input`} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                {/* New Fields */}
                <div className="new-fields">
                    <div>
                        <label htmlFor="years">Years:</label>
                        <input 
                        onFocus={onInputFocus} onBlur={onInputBlur}
                            type="number" 
                            name="years" 
                            value={this.state.years} 
                            onChange={this.handleInputChange} 
                            placeholder="Enter years" 
                        />
                    </div>
                    <div>
                        <label htmlFor="country">Country:</label>
                        <select 
                        onFocus={onInputFocus} onBlur={onInputBlur}
                            name="country" 
                            value={this.state.country} 
                            onChange={this.handleInputChange}
                        >
                            <option value="">Select Country</option>
                            <option value="KSA">KSA</option>
                            <option value="UAE">UAE</option>
                            <option value="Jordan">Jordan</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="position">Position:</label>
                        <select 
                        onFocus={onInputFocus} onBlur={onInputBlur}
                            name="position" 
                            value={this.state.position} 
                            onChange={this.handleInputChange}
                        >
                            <option value="">Select Position</option>
                            <option value="HOUSEHOLD">HOUSEHOLD</option>
                            <option value="COOK">COOK</option>
                        </select>
                    </div>
                </div>

                <button 
                    type="button" 
                    onClick={this.props.newField} 
                    id='skillInfo-skills-btn' 
                    className="mt-1"
                >
                    Add skill
                </button>
            </div>
        );
    }
}

export default SkillsInput;