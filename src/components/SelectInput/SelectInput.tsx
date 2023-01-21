import React from 'react'

export default function SelectInput() {
  return (
    <select name="status" id="status" className='pl-4 pr-14 pt-3 pb-3 w-64 mb-5 border rounded-md text-lg' required>
        <option value="" selected disabled>Status</option>
        <option value="ativo" >Ativo</option>
        <option value="inativo" >Inativo</option>
        <option value="desativado" >Desativado</option>
        <option value="aguardando" >Aguardando Ativação</option>
  </select>
  )
}
