import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { User } from '../../model/User/User';
import { Button } from '../Button/Button'

interface UserItemProps {
    userItem: User;
}

export default function UserItem({userItem} : UserItemProps) {
    const navigate = useNavigate();
  
    function handleEdit(route : string , selectedUser:  User){ 
        localStorage.setItem("editUser", JSON.stringify(selectedUser));
        navigate(route);
      }

  return (
    <div className="grid grid-cols-4 gap-80 border  pl-8 pr-9 pt-5 pb-5 mb-7 whitespace-nowrap" >
           <div className='flex-col '>
              <div className='text-lg  text-gray-500'><b>{userItem.name}</b></div>
              <div className='text-lg  text-gray-500'>{userItem.email}</div>
            </div>
            <div className=' inline-flex flex-col w-32'>
              <div className='text-lg  text-gray-500 flex-col'><b>{userItem.cpf}</b></div>
              <div className='text-lg  text-gray-500 flex-col'>{userItem.phone}</div>
            </div>
            {userItem.status == 'ativo'&&
            <div className='flex-col self-center'>
              <span className='h-3 w-3 mr-1 rounded-full bg-green-500 inline-block '></span>
              <span className='text-lg  text-gray-500'>Ativo</span>
            </div>
          }

          {userItem.status == 'inativo' &&
          <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-red-500 inline-block'></span>
            <span className='text-lg  text-gray-500'>Inativo</span>
          </div>
          }

          {userItem.status == 'aguardando' &&
          <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-amber-500 inline-block'/>
            <span className='text-lg  text-gray-500'>Aguardando ativação</span>
          </div>
          }

          {userItem.status == 'desativado' &&
          <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-gray-400 inline-block'/>
            <span className='text-lg  text-gray-500'>Desativado</span>
          </div>
          }

            <div className=' flex flex-row self-center'>
              <Button.Alternative name='Editar' onClick={()=> handleEdit('/edit', userItem)}/>
            </div>
        </div>
    

  )
}
