import React from 'react';
import './App.css';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Checkboxes() {
    // const [checked, setChecked] = React.useState([true, false]);

    const checkboxArray = [
        {
            id: 1,
            checked: true,
            label: 'Check me I/m green',
            color: 'green'
        },
        {
            id: 2,
            checked: true,
            label: 'Check me I/m red',
            color: 'red'
        },
        {
            id: 3,
            checked: true,
            label: 'Check me I/m yellow',
            color: 'yellow'
        },
        {
        
            id: 4,
            checked: true,
            label: 'Check me I/m blue',
            color: 'blue'
        }
    ]

    console.log(checkboxArray)

    const checkValues = Object.values(checkboxArray);
    console.log('Array of checkbox values: ', checkValues);
    console.log('Color of checkbox 2: ', checkValues[2])
    // console.log('Color of checkbox: ', checkValues[2.flavor2]);
    return (
        
        
      <div>
          <br></br>
        { checkboxArray.map((checkOptions) => (
            
            <FormGroup>
            <FormControlLabel value="Click Me" control = {
            <Checkbox 
            style = {{backgroundColor: checkOptions.color}}
            onClick = {() => console.log('This checkbox is: ', checkOptions.color)}
            
            />} label='Click Me' />
            {/* <Checkbox
            style = {{backgroundColor: checkOptions.color}}

            label = {checkOptions.label}

            onClick = {() => console.log('This checkbox is: ', checkOptions.color)}
            >
            {checkOptions.label}
            </Checkbox> */}
            </FormGroup>
            )) 
        }

      </div>
    );
}

