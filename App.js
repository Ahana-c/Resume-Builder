import React, {Component} from "react"

import Education from "./Education"
import Skills from "./Skills"
import projects from "./projects"
import job from "./job"
import Training from "./Training"

class App extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            phone:"",
            city:"",
            state:"",
            website:"",
        }
    }
handleChange(event){
    const{name,value}=event.target
    this.setState({
        [name]:value
    })
}
render(){
        return(
            <form>
            <h1>Personal Info</h1>
            <input type="text" placeholder="Name" onChange={this.handleChange}/><br/><br/>
            <input type="text" placeholder="Email" onChange={this.handleChange}/><br/><br/>
            <input type="text" placeholder="Phone" onChange={this.handleChange}/><br/><br/>
            <input type="text" placeholder="City" onChange={this.handleChange}/><br/><br/>
            <input type="text" placeholder="State" onChange={this.handleChange}/><br/><br/>
            <input type="text" placeholder="Website" onChange={this.handleChange}/><br/><br/>
            <h1>Education</h1>
            <button onClick={Education()}>Add Education</button>
            <h1>Skills</h1>
            <button onClick={Education()}>Add Skills</button>
            <h1>Projects</h1>
            <button onClick={Education()}>Add Projects</button>
            <h1>Jobs/Internships</h1>
            <button onClick={Education()}>Add Job/Internship</button>
            <h1>Trainings/Courses</h1>
            <button onClick={Education()}>Add Training/Course</button>
            </form>
        )
    }
}
export default App
