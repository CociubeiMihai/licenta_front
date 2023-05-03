import React, {useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { allUsers, removeUser } from '../../services/UsersService';
import Button from '@mui/material/Button';

function ManageUsers() {

    const[users, setUsers]= useState([]);
    const[idUser, setIdUser]=useState("");
    const [role, setRole] = React.useState('');


    useEffect(() => {
        allUsers().then((res) => {
            setUsers(res.data);
        })
    },[])

    const handleClick = (e) => {
      setIdUser(e.id)
      setRole(e.role.name)
    }

    const handleRemove = () => {
      removeUser(idUser)
      allUsers().then((res) => {
        setUsers(res.data);
    })
    
    }

    const handleChange = (event) => {
      console.log(event.target)
      setRole(event.target.value);
    };

    const handleRolChange = () => {
    }

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="left">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              hover={true}
              selected ={idUser===row.id}
              onClick={()=> handleClick(row)}
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.role.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" onClick={handleRemove} >Remove</Button>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"ADMIN"}>Admin</MenuItem>
          <MenuItem value={"SECRETARY"}>Secretary</MenuItem>
          <MenuItem value={"PATIENT"}>Patient</MenuItem>
          <MenuItem value={"DOCTOR"}>Doctor</MenuItem>
          <MenuItem value={"SURGEON"}>Surgeon</MenuItem>
          <MenuItem value={"ORTHODONTIST"}>Orthodontist</MenuItem>
          <MenuItem value={"ASSISTANT"}>Assistant</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleRolChange} >Change Role</Button>
    </div>
  )
}

export default ManageUsers