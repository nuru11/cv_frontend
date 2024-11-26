import React, { Component } from "react";

class ProjectInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2 className="section-label">Projects</h2>
                {this.props.data.project.map((proj,index)=> {
                                return(
                                    <div key={index} className="projects mb-3">
                                        <div className="projectName mb-2">
                                            <span className="p-text"><h4>{proj.name}</h4></span>
                                            <a href={`https://${proj.link}`} target="blank" className="align-right p-text">{proj.link}</a>
                                        </div>
                                        <div>
                                            <p className="p-text">{proj.overview}</p>
                                        </div>
                                    </div>
                                    
                                )
                        })}
            </div>
        )
    }
}

export default ProjectInfo;