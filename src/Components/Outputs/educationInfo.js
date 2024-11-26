import React, { Component } from "react";

class EducationInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2 className="section-label">Education</h2>
                <div>
                        {this.props.data.institute.map((ed,index)=> {
                                let dateRange;
                                if (ed.to && ed.from) {
                                    dateRange = `${ed.from} - ${ed.to}`
                                } else if (ed.from && !ed.to) {
                                    dateRange = `${ed.from} - present`
                                }

                                let grade; 
                                if (ed.grade !== "") {
                                    grade = " - " + ed.grade;
                                }
                                return(
                                    <div key={index} className="ed mb-3">
                                        <div className="edName mb-2">
                                            <div>
                                                <span className="p-text"><h4>{ed.school}</h4></span>
                                                <span className="p-text">{ed.areaStudy}</span>  <span className="p-text">{grade}</span>
                                            </div>
                                            <span className="align-right p-text">{dateRange}</span>
                                        </div>
                                        <div>
                                            <p className="p-text">{ed.overview}</p>
                                        </div>
                                    </div>
                                    
                                )
                        })}
                </div>
            </div>
        )
    }
}

export default EducationInfo;