import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Circle from './circle';
import Checkboxes from './checkboxes';

//create a function component to display 7 seperate buttons representing the colors of the rainbow
export default function RainbowButton() {

  //create an array/list of objects/data types to display the different buttons and their corresponding colors and labels. Since we have the same strings for both the key : value, we can combine them to create 1 string of objects
  const btnColorArray = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ]

  //return statement that returns what is going to be displayed on the page every time you use the RainbowButton component
  return (
    <div className="RainbowButton">
      <Circle></Circle>
      {/* I'm looping through the btnColorArray where buttonColor is the current item in the array.
        Through each iteration of the loop i'm creating a Button (the MUI Button component) and i'm using the parameter I'm passing in (buttonColor) to:
        change the background color, display the name as the key, I'm then passing it into the event handler where where it'll know which color to print in the console */}
      { btnColorArray.map((buttonColor) => (
        //MUI Button Component
        <Button
        // inline CSS to render the color of the button as well as the label text within the button
        style = {{backgroundColor: buttonColor, color: 'white'}}
        // not sure what this is doing ??
        key = {buttonColor}
        //click event to display in the console the name/label of each button once it's clicked
        onClick = {() => console.log('This button is: ', buttonColor)}
        >
        {/* adds the label text to the button */}
        {buttonColor}
        </Button>
      ))}
      <Checkboxes></Checkboxes>
    </div>
  );
}
