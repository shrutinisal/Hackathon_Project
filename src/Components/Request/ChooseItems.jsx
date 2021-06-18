import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MultiSelect from 'react-multi-select-component';

export class ChooseItems extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
    const { values, selected, handleChange} = this.props;
    const options = [
        { label: "Paper", value: "paper" },
        { label: "Plastics", value: "plastics" },
        { label: "Metal", value: "metal" },
        { label: "E-Waste", value: "ewaste" },
        { label: "Other", value: "other" },
    ];
    // const [selected,setSelected] = useState([]);
    
    return (
        <React.Fragment>
            

            <MultiSelect
            options={options}
            value={selected}
            onChange={handleChange('Items')}
            labelledBy="Select"
            />
            <br/>
            <TextField
              placeholder="Enter Your Address Line2"
              label="Address2"
              onChange={handleChange('Address2')}
              defaultValue={values.Address2}
              margin="normal"
              fullWidth
            />
            <br/>
            
            <Button
              label="Back"
              primary={true}
              style = {styles.button}
              onClick={this.back}
            >Back</Button>
            <Button
              label="Continue"
              primary={true}
              style = {styles.button}
              onClick={this.continue}
            >Continue</Button>
        </React.Fragment>
    )
} 
}
 const styles = {
     button: {
         margin:15
     }
 }
export default ChooseItems;
