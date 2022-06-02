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
            label: "Check me I'm green",
            color: 'green'
        },
        {
            id: 2,
            checked: true,
            label: "Check me I'm red",
            color: 'red'
        },
        {
            id: 3,
            checked: true,
            label: "Check me I'm yellow",
            color: 'yellow'
        },
        {
        
            id: 4,
            checked: true,
            label: "Check me I'm blue",
            color: 'blue'
        }
    ]

    console.log(checkboxArray)

    // An array of values
    const checkValues = Object.values(checkboxArray);
    console.log('Array of checkbox values: ', checkValues);
    console.log('Color of checkbox 2: ', checkValues[2])
    // console.log('Color of checkbox: ', checkValues[2.flavor2]);
    return (
        
        
        <div>
          <br></br>
          {/* I'm looping through the checkboxArray where checkOptions is the current item in the array.
            Through each iteration of the loop i'm creating a Checkbox (the MUI Checkbox component) and i'm using the parameter I'm passing in (checkOptions) to:
            change the background color, I'm then passing it into the event handler where where it'll know which color to print in the console */}
            { checkboxArray.map((checkOptions) => (
                // Makes the MUI Checkboxes align vertically
                <FormGroup>
                {/* Allows for text to show up next to the checkboxes */}
                <FormControlLabel 
                // Trying to get the label next to the checkbox, and not under
                labelPlacement = 'end'
                // Not sure what value and control do
                value="Click Me" 
                control = {
                //MUI Checkbox component
                <Checkbox 
                // inline CSS to render the color of the button as well as the label text within the button
                style = {{ color: checkOptions.color }}
                //click event to display in the console the label of each checkbox once it's clicked in the console
                onClick = {() => console.log('This checkbox is: ', checkOptions.color)}
                />}  
                />
                {/* adds the label text to the checkboxes */}
                {checkOptions.label}
                
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

