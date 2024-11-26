import React, {Component} from "react";
import Inputs from "./Inputs";

class CareerInputs extends Component {
    // constructor(props) {
    //     super(props); 
    // }

    render() {
        return (
            <div className="inputSection">
                <h3>Career</h3>
                {this.props.info.career.map((job,index)=> {
                       return (
                        <div key={index} className="grid-container">
                            <div className="grid-2-col">
                                <Inputs  placeholder='Job Title' TextVal={job.title} callback={this.props.callback} idVal={`careerInfo-career-${index}-title-input`} />
                                <Inputs  placeholder='Company' TextVal={job.grade} callback={this.props.callback} idVal={`careerInfo-career-${index}-company-input`}/>
                            </div>
                            <div className="grid-2-col">
                                <Inputs  placeholder='From:' TextVal={job.from} callback={this.props.callback} idVal={`careerInfo-career-${index}-from-input`}/>
                                <Inputs  placeholder='To:' TextVal={job.to} callback={this.props.callback} idVal={`careerInfo-career-${index}-to-input`}/>
                            </div>
                            <div className="grid-1-col">
                                <Inputs  placeholder='Overview (optional)' type="TextArea" TextVal={job.overview} callback={this.props.callback} idVal={`careerInfo-career-${index}-overview-input`}/>
                            </div>

                        </div>
                       ) 
                    })}
                    <button type="button" onClick={this.props.newField} id='careerInfo-career-btn'>Add Job</button>
            </div>
        )
    }
}

export default CareerInputs;