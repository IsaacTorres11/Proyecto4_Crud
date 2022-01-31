
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

//Estilos
import './Inicio.styles.css';

//Componentes
import UserList from '../UserList/UserList';
import UsersForm from '../UsersForm/UsersForm';

const Inicio = () => {

    ///////////////////// Estados //////////////////////////////// 
    const [users, setUsers] = useState([])
    const [userSelected, setUserSelected] = useState(null)

    //////////////////////////////////////////////////////////////

    ////////////////////// Efect /////////////////////////////////
    useEffect(()=>{
        axios.get('https://users-crud1.herokuapp.com/users/')
            .then((res)=> setUsers(res.data))
    },[])
    ////////////////////////////////////////////////////////////


    /////////////////////////// Funciones //////////////////////////////
    //Traer Usuarios
    const getUser = () =>{
        axios.get('https://users-crud1.herokuapp.com/users/')
            .then((res)=> setUsers(res.data))
    }

    // Eliminar Usuarios
    const deleteUser =(id)=>{
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then( ()=>getUser() )
    }

    // Seleccionar Usuarios
    const selectUser = (user) => setUserSelected(user)
    console.log(userSelected);
    
    // Deseleccionar Usuarios
    const deselectUser =()=>setUserSelected(null)

    ///////////////////////////////////////////////////////////////////

  return (
      <div className='contenedor'>
          <h1>Lista De Usuarios</h1>
          <UsersForm  
            getUser = {getUser}
            userSelected = {userSelected}
            deselectUser = {deselectUser}
          />
          <UserList 
            users={users}
            deleteUser = {deleteUser}
            selectUser = {selectUser}
        />
          
      </div>
  )
};

export default Inicio;
