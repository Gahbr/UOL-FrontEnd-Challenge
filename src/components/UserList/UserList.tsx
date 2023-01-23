import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../model/User/User';
import { Button } from '../Button/Button'
import UserItem from '../UserItem/UserItem';


export default function UserList() {
  const [user, setUser] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
   
  }, []);
  
   const getUsers = async()=> {
    try {
      if(localStorage.getItem('users') == null){
        const response = await fetch("http://demo0387894.mockable.io/users");
        const json = await response.json();
        setUser(json)
      } else {
        const userStorage = JSON.parse(localStorage.getItem('users') as any) 
        setUser(userStorage )
      }
      
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
            <div className='flex-col flex-1 sm:flex-initial'>
                <div className='text-xl text-slate-700 mt-7 mb-3 flex lg:text-2xl sm:text-xl'>Listagem de Usuários</div>
                <div className='text-lg text-gray-500 mb-14 flex lg:text-2xl sm:text-xl'> Escolha um cliente para visualizar os detalhes</div>
            </div>
            <div className='flex flex-col justify-center align-middle pr-6 sm:pl-20'>
                <Button.Main className='w-28 h-9 text-base lg:w-34 lg:h-16 lg:text-xl sm:text-base sm:w-28 sm:h-9' name='Novo Cliente' onClick={()=> handleRoute("/signup")}/>
            </div>
        </div>

        {user.map((item)=>(
          <UserItem userItem={item} />
        ))}
        
       <div className='text-base pb-20 text-gray-500 lg:text-2xl sm:flex sm:justify-center'> Exibindo {user.length} clientes</div>
    </div>
  )
}
