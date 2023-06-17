import React from "react";

class AppForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname:'',
            lastname:'',
            color:'',
            isgo:''

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {firstname, lastname, color, isgo, gender} = this.state
        const go = isgo ? 'on' : 'off';
        console.log(firstname, lastname, color, isgo, gender)
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        const value = (e.target.type === 'checkbox') 
                                            ? e.target.checked 
                                            : e.target.value;
        this.setState({[e.target.name]:value})
    }



    render() {
        return(
        <>
            <h1>My Form</h1>
            <form onSubmit={this.handleSubmit}>
                First Name: <input 
                            type="text" 
                            name="firstname"
                            onChange={this.handleChange}
                /> <br/>
                Last Name: <input 
                            type="text" 
                            name="lastname"
                            onChange={this.handleChange}
                /> <br/>
                <select name="color">   
                    <option value="1">Red</option>
                    <option value="2">Blue</option>
                    <option value="3">Green</option>
                </select>
                <br/>
                Is Going: <input type="checkbox" name="isgo"/>
                <br/>

                <div>
                    <input type="radio" value="Male" name="gender"/>Male
                    <input type="radio" value="Female" name="gender"/>Female
                    <input type="radio" value="Other" name="gender"/>Other
                </div>

                <input type="submit" value="Submit"/>
            </form>
        </>
        )
    }
}

export default AppForm;

// let a = 'email'

// let obj = {

//     [email]:'John'
// }