import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';
import UsersData from '../ListOfUsesr';


export default function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const [counter, setCounter] = useState(UsersData.length + 1);

    function generateUniqueId() {
        setCounter(counter + 1)
    }


    return (
        <>

            <Stack sx={{ alignItems: 'center', margin: '50px' }}>
                <TextField sx={{ width: '40%', margin: '5px' }}
                    helperText=""
                    id="demo-helper-text-aligne"
                    required={true}
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(event) => { setName(event.target.value); }}
                />

                <TextField sx={{ width: '40%', margin: '5px' }}
                    helperText=""
                    id="demo-helper-text-aligne"
                    required={true}
                    label="Username"
                    name="username"
                    value={username}
                    onChange={(event) => { setUsername(event.target.value); }}
                />
                <Button variant="contained" sx={{ width: '40%', margin: '5px' }} onClick={() => {
                    generateUniqueId();
                    dispatch(addUser({ id: counter, name: name, username: username }));
                }}
                >
                    Submit
                </Button>
            </Stack>




        </ >
    );
}