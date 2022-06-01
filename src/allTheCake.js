import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { capitalize } from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';

export default function allTheCake() {

    const cakeArray = [
        { type:'cheesecake', 
        color: 'lime green',
        flavor: { flavor1: 'key lime', flavor2: 'graham cracker' }
        },
        { type:'german chocolate', 
        color: 'brown',
        flavor: { flavor1: 'chocolate', flavor2: 'coconut'}
        },
        { type:'birthday', 
        color: 'white',
        flavor: { flavor1: 'vanilla', flavor2: 'sprinkles'}
        },
        { type: 'lemon chiffon', 
        color: 'yellow',
        flavor: { flavor1: 'lemon', flavor2: 'vanilla' }
        }
    ]

    // An array of indexes
    const cakeKeys = Object.keys(cakeArray);
    console.log('Array of cake keys', cakeKeys);

    const cakeValues = Object.values(cakeArray);
    console.log('Array of cake values', cakeValues);
    console.log('Flavor of cake 2: ', cakeValues[1]);
    // console.log('Flavor of cake 2: ', cakeValues.flavor.flavor2);
    

    return (
        <div>
            { cakeArray.map((cakes, index) => (
                <Button
                style = {{backgroundColor: cakes.color, textTransform: "capitalize"}}

                key = {index}

                onClick = {() => console.log('This cake is: ', cakes.flavor.flavor2)}
                >
                {cakes.type}
                </Button>
            ))}
            <br></br>
        </div>
    );

}
