import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../model/User/User';
import { Button } from '../Button/Button';
import TextInput from '../TextInput/TextInput';

interface RegisterFormElements extends HTMLFormControlsCollection{
  name: HTMLInputElement;
  cpf: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  status: HTMLInputElement;
}

interface RegisterFormElement extends HTMLFormElement{
  readonly elements: RegisterFormElements
}

export default function RegisterUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User[]>([]);
  
  useEffect(() => {
    getUsers();
   
  }, [user]);
  
   const getUsers = async()=> {
    if(localStorage.getItem('users') == null){
      const response = await fetch("http://demo0387894.mockable.io/users");
      const json = await response.json();
      setUser(json)
      console.log(user);
    } else {
      const userStorage = JSON.parse(localStorage.getItem('users') as any) 
      setUser(userStorage )
    }
  
  }
  function handleRoute(route: string){
     navigate(route)
  }
  
  const  handleRegister = async (event: FormEvent<RegisterFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userForm = {
      name: form.elements.name.value,
      cpf: form.elements.cpf.value,
      phone: form.elements.name.value,
      status: form.elements.status.value,
      email: form.elements.email.value,
    }
    user.push(userForm);
    setUser(user);

    localStorage.setItem("users", JSON.stringify(user));
    navigate('/');
  }

  return (
    <div >
        <div className='text-xl text-slate-700 mt-7 mb-3'>Novo Usuário</div>
        <div className='text-lg text-gray-500 mb-14'> Informe os campos a seguir para criar um novo usuário:</div>
            <form onSubmit={handleRegister} className='flex flex-col'>
                <TextInput name="name" id="name" placeholder='Nome' required/>
                <TextInput name="email" id="email" placeholder='E-mail' required/>
                <TextInput name="cpf" id="cpf" placeholder='CPF' required/>
                <TextInput name="phone" id="phone" placeholder='Telefone' required/>
                <TextInput id="user" type="text" placeholder="Digite seu login" required/>

                <select name="status" id="status" className='pl-4 pr-14 pt-3 pb-3 w-64 mb-5 border rounded-md text-lg' required>
                  <option value="" selected disabled>Status</option>
                  <option value="ativo" >Ativo</option>
                  <option value="inativo" >Inativo</option>
                  <option value="desativado" >Desativado</option>
                  <option value="aguardando" >Aguardando Ativação</option>
                </select>

                <div className='flex mt-12 mb-48'>
                  <Button.Main name={"Criar"} type='submit'/>
                  <Button.Alternative name={"Voltar"} onClick={()=> handleRoute('/') }/>
                </div>
            </form>
    </div>
  )
}
