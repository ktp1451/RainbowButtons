import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

//creating a function to display 7 seperate buttons representing the colors of the rainbow
export default function RainbowButtons() {
  
  const btnArray = [ 
    //creating an array/list of objects/data types to display the different buttons and their coresponding colors and labels.

    //an object is composed of key value pairs
    //const exampleObject = {
	  //left side of the colon is the key : right side the value;
    //}
    { color: 'red', label: 'red' },
    { color: 'orange', label: 'orange' },
    { color: 'yellow', label: 'yellow' },
    { color: 'green', label: 'green' },
    { color: 'blue', label: 'blue' },
    { color: 'indigo', label: 'indigo' },
    { color: 'violet', label: 'violet' }
  ] 

  //
  return (
    <div className="RainbowButtons">

        { btnArray.map((button) => (
          //MUI Button component
          <Button 
            //inline CSS to render the color of the button as well as the label text within the button
            style={{backgroundColor: button.label, color: "white"}}
            //displays the button label on the button 
            key={button.label} 
            //click event to display in the console the name/label of each button once it's clicked
            onClick={() => console.log('this button is: ', button.label)}
          >
            {/* adds the label text to the button */}
            {button.label}
          </Button>
        ))} 
    </div>
  );
}
