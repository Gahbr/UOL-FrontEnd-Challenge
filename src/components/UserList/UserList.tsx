import React from 'react'
import { Button } from '../Button/Button'


export default function UserList() {
  return (
    <div>
        <div className='flex'>
            <div className='flex-col flex-1'>
                <div className='text-xl text-slate-700 mt-7 mb-3 flex'>Listagem de Usuários</div>
                <div className='text-lg text-gray-500 mb-14 flex'> Escolha um cliente para visualizar os detalhes</div>
            </div>
            <div className='flex flex-col justify-center align-middle'>
                <Button.Main className='w-28 h-6 text-base' name='Novo Cliente' onClick={()=>console.log("first")}/>
               
            </div>
        </div>

        <div className='border flex justify-between'>
            <div className='flex-row '>
              <div>John Doe</div>
              <div>John_Doe@test.com</div>
            </div>

            <div className='flex-row'>
              <div>123.456.789-00</div>
              <div>(11)9988-7766</div>
            </div>

            <div className='flex-row'>
              <div>123.456.789-00</div>
              <div>Ativo</div>
            </div>
            
            <div className='flex-row'>
              <Button.Alternative name='Editar'  onClick={()=> {alert("yamete")}}/>
            </div>
        </div> 
    </div>
  )
}
