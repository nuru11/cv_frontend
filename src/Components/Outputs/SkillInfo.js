import React, { Component } from "react";

class SkillInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2 className="section-label">Skills</h2>
                <ul className="skills">
                {this.props.data.skills.map((skill,index)=> {
                        if(skill === "") {
                            return (
                                <div key={index}></div>
                            )
                        } else {
                            return(
                                <li key={index} className="prim-col">
                                    <span className="p-text">
                                        {skill}
                                    </span>
                                </li>

                                
                            )
                        }
                                
                    })}
                </ul>
            </div>
        )
    }
}


export default SkillInfo;