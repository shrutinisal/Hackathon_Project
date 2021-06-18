import React,{Component} from 'react'
import ChooseItems from './ChooseItems';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
export class UserForm extends Component {

     state = {
        step:1,
        Name:'',
        MobileNumber:0,
        Address1:'',
        Address2:'',
        Pincode:0,
        Items:[]
    };   

    //Proceed to next step
     nextStep = () => {
    const { step } = this.state;
    this.setState({
        step:step+1
    });
    };

    //Go to previous step
     prevStep =() => {
        const { step } = this.state;
        this.setState({
            step:step-1
        });
    };

    //To Handle fields Change

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    // AddValues = input =>e =>{
    //     this.setState({[input]:(e.target.value)});
        

    // }

    render(){
    const {step} =this.state;
    const { Name , MobileNumber,Address,Pincode,Items} = this.state;
    const values = {Name , MobileNumber,Address,Pincode,Items}

    switch(step)
    {
        case 1:
            return(
                <FormUserDetails 

                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
            return(<FormPersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />);
        case 3:
            return(<ChooseItems 
                 nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}

            />);
        case 4:
            return(<h1>Final Details</h1>);
    }
    }
}

export default UserForm;
