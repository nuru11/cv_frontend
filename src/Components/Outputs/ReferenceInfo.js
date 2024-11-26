import React, { Component } from "react";

class ReferenceInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2 className="section-label">References</h2>
                <div className="grid-2-col grid-gap-r1">
                {this.props.data.reference.map((ref,index)=> {
                                return(
                                    <div key={index} >
                                        <div className="ref">
                                            <span className="p-text"><h4>{ref.name}</h4></span>
                                            <span className="p-text">{ref.email}</span>
                                            <span className="p-text">{ref.phone}</span>
                                        </div>
                                    </div>
                                    
                                )
                        })}
                </div>
            </div>
        )
    }
}

export default ReferenceInfo;