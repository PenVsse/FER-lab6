import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UsersData from '../ListOfUsesr';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';
import { IconButton, ListItem, ListItemText } from '@mui/material';

export default function BasicTable() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const [newUsername, setNewUsername] = useState('');

    return (
        <>
            {userList.map((users) => {
                return (
                    <>
                        <ListItem key={users.id} >
                            <ListItemText primary={users.name} secondary={users.username} />
                            <TextField
                                placeholder='Type new username...'
                                onChange={(e) => setNewUsername(e.target.value)}
                            />
                            <Button
                                onClick={() => {
                                    dispatch(updateUsername({ id: users.id, username: newUsername }));
                                }}>
                                Update
                            </Button>
                            <IconButton aria-label="delete" color="error"
                                onClick={() => {
                                    dispatch(deleteUser({ id: users.id }));
                                }}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    </>

                )
            }

            )}
        </>
        // <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //         <TableBody>
        //             {UsersData.map((UsersData) => (
        //                 <TableRow
        //                     key={UsersData.id}
        //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                 >
        //                     <TableCell component="th" scope="row">
        //                         {UsersData.name}
        //                     </TableCell>
        //                     <TableCell align="left">{UsersData.username}</TableCell>
        //                     <TableCell>  <TextField sx={{ width: '400px' }}></TextField></TableCell>
        //                     <TableCell sx={{ width: '50px' }}>
        //                         <Button variant="contained" >
        //                             Update
        //                         </Button>
        //                     </TableCell>
        //                     <TableCell sx={{ width: '50px' }}>
        //                         <Button>
        //                             <DeleteIcon fontSize='large' sx={{ color: 'red' }} />
        //                         </Button>
        //                     </TableCell>
        //                 </TableRow>

        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    );
}