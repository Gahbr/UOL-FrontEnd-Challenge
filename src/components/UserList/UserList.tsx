import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'

export default function UserList() {
  const navigate = useNavigate();

  function handleRoute(route: string){
     navigate(route)
  }
  
  return (
    <div>
        <div className='flex'>
            <div className='flex-col flex-1'>
                <div className='text-xl text-slate-700 mt-7 mb-3 flex'>Listagem de Usuários</div>
                <div className='text-lg text-gray-500 mb-14 flex'> Escolha um cliente para visualizar os detalhes</div>
            </div>
            <div className='flex flex-col justify-center align-middle pr-5'>
                <Button.Main className='w-28 h-9 text-base' name='Novo Cliente' onClick={()=> handleRoute("/signup")}/>
               
            </div>
        </div>

        <div className='border flex justify-between pl-8 pr-9 pt-5 pb-5 mb-7'>
            <div className='flex-row '>
              <div className='text-lg  text-gray-500'><b>John Doe</b></div>
              <div className='text-lg  text-gray-500'>John_Doe@test.com</div>
            </div>

            <div className='flex-row'>
              <div className='text-lg  text-gray-500'><b>123.456.789-00</b></div>
              <div className='text-lg  text-gray-500'>(11)9988-7766</div>
            </div>

            <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-green-500 inline-block'></span>
            <span>Ativo</span>
          
            
            </div>
            <div className=' flex flex-row self-center'>
              <Button.Alternative name='Editar' onClick={()=> alert("yamete")}/>
            </div>
        </div> 
        
        <div className='border flex justify-between pl-8 pr-9 pt-5 pb-5'>
            <div className='flex-row '>
              <div className='text-lg  text-gray-500'><b>John Doe2</b></div>
              <div className='text-lg  text-gray-500'>John_Doe@test.com</div>
            </div>

            <div className='flex-row'>
              <div className='text-lg  text-gray-500'><b>123.456.789-00</b></div>
              <div className='text-lg  text-gray-500'>(11)9988-7766</div>
            </div>

            <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-red-500 inline-block'></span>
            <span>Inativo</span>
          
            
            </div>
            <div className=' flex flex-row self-center'>
              <Button.Alternative name='Editar' onClick={()=> alert("yamete")}/>
            </div>
        </div> 
    </div>
  )
}
