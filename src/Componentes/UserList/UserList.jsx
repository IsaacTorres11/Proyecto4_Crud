import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
//Estilos
import './UserList.styles.css';

const UserList = ({users, deleteUser, selectUser}) => {
  return (
      <div className='Usuarios'>
          {
              users.map((user, indice)=>(
                  <div key={user.id} className='usuario'> 
                      <li>
                          <strong>Nombre: {user.first_name}</strong>
                          <p>Apellido: {user.last_name}</p>
                          <p>Correo: {user.email}</p>
                          <p>Nacimiento: {user.birthday}</p>
                          <i className='eliminar' onClick={()=> deleteUser(user.id)} class="fas fa-trash-alt"></i>
                          <i className='editar' onClick={()=> selectUser(user)} class="fas fa-pencil-alt"></i>
                      </li>
                  </div>
              ))
          }
      </div>
  )
};

export default UserList;
