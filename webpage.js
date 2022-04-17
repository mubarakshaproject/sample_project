import React, { Component } from "react";    
import './Webpage.css'    
    
class Webpage  extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            Name: '',        
            dob: '', 
            Class:'select', 
            division:'select',  
            gender: 'select',        
            pageErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handlepageValidation() {    
        const { Name, dob, class: division, gender } = this.state;    
        let  pageIsValid = true;    
    
        //Name     
        if (!Name) {    
            pageIsValid = false;    
            pageErrors["NameErr"] = "Name is required.";    
        }    
        
        //DOB    
        if (!dob) {    
            pageIsValid = false;    
            pageErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                pageIsValid = false;    
                pageErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //class
        if (class {}=== '' || class {}=== "select") {
            pageisvalid = false;
            pageErrors["classErr"] = "select class.";
        }

        //division
        if (division === '' || division === "select") {
            pageisvalid = false;
            pageErrors["divisionErr"] = "select division.";
        }

        //Gender    
        if (gender === '' || gender === "select") {    
            pageIsValid = false;    
            pageErrors["genderErr"] = "Select gender.";    
        }    
       
    
        this.setState({ pageErrors: pageErrors });    
        return pageIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handlepageValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { NameErr, dobErr, classErr, divisionErr,  genderErr, } = this.state.pageErrors;    
    
        return (    
            <><div className="pageDiv">
                <h3 style={{ textAlign: "center" }}>webpage </h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name"
                                value={this.state.Name}
                                onChange={this.handleChange}
                                placeholder="Your name.."
                                className={NameErr ? ' showError' : ''} />
                            {NameErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{NameErr}</div>}

                        </div>
                        <div>
                            <label htmlFor="text">Birth Date</label>
                            <input type="text" name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                                placeholder="DD/MM/YYYY.."
                                className={dobErr ? ' showError' : ''} />
                            {dobErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>}

                        </div>
                     </form></div>
                <label htmlFor="class">class</label>
                <select name="class" onchange={this.handlechange}
                    classname={classErr ? ' showerror' : ''}
                    value={this.state.Class}>
                    <option value="select">--select--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                {classErr &&
                    <div style={{ colour: "red", paddingBottom: 10 }}>{classErr}</div>}
            </div><div>
                    <label htmlfor="division">division</label>
                    <select name="division" onchange={this.handlechange}
                        className={divisionErr ? ' showerror' : ''}
                        value={this.state.division}>
                        <option value="select">--select--</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    {divisionErr &&
                        <div style={{ color: "red", paddingBottom: 10 }}>{divisionErr}</div>}

                </div><div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" onChange={this.handleChange}
                        className={genderErr ? ' showError' : ''}
                        value={this.state.gender}>
                        <option value="select">--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="female">Other</option>
                    </select>
                    {genderErr &&
                        <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>}

                </div><input type="submit" value="Submit" /></>    
        </page>    
                <div>    
            </div >    
        
    }    
}    
    
export default Webpage;