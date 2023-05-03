import "./EsitUsersStyle.css"
import React, {useEffect, useState} from 'react'
import Table from "../components/Table"
import Navbar from "../../components/navbar/Navbar"
import { allUsers, updateUser } from "../../services/UsersService";
import EditUsersModal from "../components/EditUsersModal";
import { removeUser } from "../../services/UsersService";

function EditUsers() {
    const[users, setUsers]= useState([]);
    const [open, setOpen] = React.useState(false);
    const[selectedUser, setSelectedUser]= useState([]);

    useEffect(() => {
        allUsers().then((res) => {
            setUsers(res.data);
        })
    },[])

    const handleClick = (e) =>{
        setSelectedUser(e)
        setOpen(true);
    }

    const handleSaveUser = () => {
        updateUser(selectedUser).then(() =>{
            allUsers().then((res) => {
                setUsers(res.data);
            })
            handleClose()
        })
    }

    const handleRemove = () => {
        removeUser(selectedUser.id).then(() =>{
            allUsers().then((res) => {
                setUsers(res.data);
            })
            handleClose()
        })
    }

    const handleClose = () => setOpen(false);

  return (
    <div >
        <Navbar />
        <Table 
        data = {users}
        onClick = {handleClick}
        />
        <EditUsersModal 
        open = {open}
        close = {handleClose}
        userData = {selectedUser}
        setData = {setSelectedUser}
        onSave = {handleSaveUser}
        onRemove = {handleRemove}
        />
    </div>
  )
}

export default EditUsers