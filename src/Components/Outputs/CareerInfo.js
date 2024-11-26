import React, { Component } from "react";

class CareerInfo extends Component {

    render() {
        return (
            <div className="m-2 mr-3">
                <h2 className="section-label">Career</h2>
                {this.props.data.career.map((car,index)=> {
                                let dateRange;
                                if (car.to && car.from) {
                                    dateRange = `${car.from} - ${car.to}`
                                } else if (car.from && !car.to) {
                                    dateRange = `${car.from} - present`
                                }
                                return(
                                    <div key={index} className="mb-3 career">
                                        <div className="careerName mb-2">
                                            <div>
                                                <span className="p-text"><h4>{car.title}</h4></span>
                                                <div className="p-text">{car.company}</div>
                                            </div>
                                            <span className="align-right p-text">{dateRange}</span>
                                        </div>
                                        <div>
                                            <p className="p-text">{car.overview}</p>
                                        </div>
                                    </div>
                                    
                                )
                        })}
            </div>
        )
    }
}

export default CareerInfo;