import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

//create a function component to display 7 seperate buttons representing the colors of the rainbow
export default function RainbowButton() {

  //create an array/list of objects/data types to display the different buttons and their corresponding colors and labels. Since we have the same strings for both the key : value, we can combine them to create 1 string of objects
  const btnColorArray = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ]

  //return statement that returns what is going to be displayed on the page every time you use the RainbowButton component
  return (
    <div className="RainbowButton">
      {/* loop through btnColorArray to create the MUI Button Component for each item in the array and using the item to label/handle the onclick event => */}
      { btnColorArray.map((button) => (
        //MUI Button Component
        <Button
        // inline CSS to render the color of the button as well as the label text within the button
        style = {{backgroundColor: button.label, color: 'white'}}
        //displays the button label on then button 
        key = {button.label}
        //click event to display in the console the name/label of each button once it's clicked
        onClick = {() => console.log('This button is: ', button.label)}
        >
        {/* adds the label text to the button */}
        {button.label}
        </Button>
      ))}
    </div>
  );
};
