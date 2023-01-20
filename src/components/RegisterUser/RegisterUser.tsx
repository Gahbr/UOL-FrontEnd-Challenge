import React from 'react'
import { Button } from '../Button/Button'
import TextInput from '../TextInput/TextInput'

export default function RegisterUser() {
  return (
    <div >
        <div className='text-xl text-slate-700 mt-7 mb-3'>Novo Usuário</div>
        <div className='text-lg text-gray-500 mb-14'> Informe os campos a seguir para criar um novo usuário:</div>
            <form action="" className='flex flex-col'>
                <TextInput name="name" id="name" placeholder='Nome'/>
                <TextInput name="email" id="email" placeholder='E-mail'/>
                <TextInput name="cpf" id="cpf" placeholder='CPF'/>
                <TextInput name="phone" id="phone" placeholder='Telefone'/>
                <TextInput id="user" type="text" placeholder="Digite seu login"/>

                <select name="status" id="status" className='pl-4 pr-14 pt-3 pb-3 w-64 mb-5 border rounded-md text-lg'>
                  <option value="Status"selected disabled>Status</option>
                  <option value="Ativo" key="">Ativo</option>
                  <option value="Inativo" key="">Inativo</option>
                  <option value="Desativado" key="">Desativado</option>
                  <option value="Aguardando Ativacao " key="">Aguardando Ativação</option>
                </select>

                <div className='flex mt-12 mb-48'>
                  <Button.Main name={"Criar"}/>
                  <Button.Alternative name={"Voltar"}/>
                </div>
            </form>
    </div>
  )
}
