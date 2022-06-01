import React from 'react';
import './App.css';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes() {
    const [checked, setChecked] = React.useState([true, false]);

    const checkboxArray = [
        {
            id: 1,
            checked: true,
            label: 'Opt in for Important information'
        },
        {
            id: 2,
            checked: true,
            label: 'Opt in for Updates'
        },
        {
            id: 3,
            checked: true,
            label: 'Email'
        },
        {
            id: 4,
            checked: true,
            label: 'SMS'
        }
    ]

    return (
      <div>
          <h2>Genate would like to provide you important information regarding your genetic test and pre-natal nutrition as well as updates regarding the status of your test results?</h2>

        { checkboxArray.map((checkOptions, index) => (
            <Checkbox
            
            key = {index}
            >
            {checkOptions.label}
            </Checkbox>
        )) }

      </div>
    );
  }

