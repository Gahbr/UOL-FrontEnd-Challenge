import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../model/User/User';
import { Button } from '../Button/Button'


export default function UserList() {
  const [user, setuser] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
   
  }, []);
  
   const getUsers = async()=> {
    try {
      const response = await fetch("http://demo0387894.mockable.io/users");
      const json = await response.json();
      setuser(json)
      console.log(user);
    } catch (error) {
       console.error(error)
    }
  
  }
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
        {user.map((item, index)=>(
          <div className='border flex justify-between pl-8 pr-9 pt-5 pb-5 mb-7'>
            <div className='flex-row '>
              <div className='text-lg  text-gray-500'><b>{item.name}</b></div>
              <div className='text-lg  text-gray-500'>{item.email}</div>
            </div>

            <div className='flex-row'>
              <div className='text-lg  text-gray-500'><b>{item.cpf}</b></div>
              <div className='text-lg  text-gray-500'>{item.phone}</div>
            </div>

          {item.status == 'ativo'&&
            <div className='flex-col self-center'>
              <span className='h-3 w-3 mr-1 rounded-full bg-green-500 inline-block'></span>
              <span className='text-lg  text-gray-500'>{item.status}</span>
            </div>
          }

          {item.status == 'inativo' &&
          <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-red-500 inline-block'></span>
            <span className='text-lg  text-gray-500'>{item.status}</span>
          </div>
          }

          {item.status == 'aguardando' &&
          <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-amber-500 inline-block'/>
            <span className='text-lg  text-gray-500'>Aguardando ativação</span>
          </div>
          }

          {item.status == 'desativado' &&
          <div className='flex-col self-center'>
            <span className='h-3 w-3 mr-1 rounded-full bg-gray-400 inline-block'/>
            <span className='text-lg  text-gray-500'>Desativado</span>
          </div>
          }

            <div className=' flex flex-row self-center'>
              <Button.Alternative name='Editar' onClick={()=> alert("yamete")}/>
            </div>
        </div> 
        ))}
        
        
       <div> Exibindo {user.length} clientes</div>
    </div>
  )
}
