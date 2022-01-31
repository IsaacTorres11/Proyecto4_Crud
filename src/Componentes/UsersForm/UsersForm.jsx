import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

//Estilos
import './UserForm.styles.css';



const UsersForm = ({getUser, userSelected, deselectUser}) => {
////////////////////// Estados ////////////////////////////////
const [first_name, setFirst_Name] = useState("")
const [last_name, setLast_Name] = useState ("")
const [email, setEmail] = useState ("")
const [password, setPassword] = useState("")
const [birthday, setBirthday] = useState("")
/////////////////////////////////////////////////////////////////

//////////////////////////// Effect ////////////////////////////
useEffect(()=>{
    if(userSelected){
        setFirst_Name(userSelected.first_name)
        setLast_Name(userSelected.last_name)
        setEmail(userSelected.email)
        setPassword(userSelected.password)
        setBirthday(userSelected.birthday)
    }   else{
        limpiar()
    }
},[userSelected])

///////////////////////////////////////////////////////////////


//////////////////////////// Funciones /////////////////////////
const enviar =(e)=>{
    e.preventDefault()
    const user = {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        birthday: birthday
    }
    if(userSelected){
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
            .then(()=> getUser() )
    }
    else{
        //////////////////// Agregar Objeto A La API POST //////////////////////
        // Agregamos los datos del objeto (user) movie con el metodo post a la api 
        axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(()=>getUser() )
        // con la funcion getUser traemos la informacion de los usuarios para que se renderizen
        // los cambios  
    } 
    limpiar()
}

// Funcion Para Limpiar
const limpiar =()=>{
    setFirst_Name("")
    setLast_Name("")
    setEmail("")
    setPassword("")
    setBirthday("")
}

///////////////////////////////////////////////////////////////

  return (
      <div>
          <form onSubmit={enviar} className='formulario'>
            <div className='contedor-formulario'>
                <label htmlFor="first_name"></label>
                <input 
                    className='control'
                    type='text'
                    placeholder='Insert First Name'
                    id='first_name'
                    onChange={e=>setFirst_Name(e.target.value)}
                    value={first_name}
                />
            </div>
            <div className='contedor-formulario'>
                <label htmlFor="last_name"></label>
                <input 
                    className='control'
                    type="text"
                    placeholder='Insert Last Name'
                    id='last_name'
                    onChange={e=>setLast_Name(e.target.value)}
                    value={last_name}
                />
            </div>
            <div className='contedor-formulario'>
                <label htmlFor="email"></label>
                <input 
                    className='control'
                    type='text'
                    placeholder='Insert Email'
                    id='email'
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className='contedor-formulario'>
                <label htmlFor="password"></label>
                <input 
                    className='control'
                    type='password'
                    placeholder='Insert Password'
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}

                />
            </div>
            <div className='contedor-formulario'>
                <label htmlFor="fecha"></label>
                <input 
                    className='control fecha'
                    type='date'
                    id='fecha'
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>
            <button className='Enviar'>Enviar</button>
            <button type='button' onClick={deselectUser} className='Cancelar'>Cancelar</button>
          </form>
      </div>
  )
};

export default UsersForm;
