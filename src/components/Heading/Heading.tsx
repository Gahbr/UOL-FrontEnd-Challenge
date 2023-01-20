import React from 'react'
import user from '../../assets/User.png'
export default function Heading() {
  return (
    <div className="mt-24 ">
      <div className="flex flex-row">
        <img src={user} alt="userIcon" className="w-9 h-9" />
        <div className="text-3xl pl-5 text-slate-700">Painel de Clientes</div>
      </div>
      <div className="border mt-7 "></div>
    </div>
  );
}
