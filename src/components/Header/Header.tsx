import logo from "../../assets/uol-logo.png";

export default function Header() {
  return (
    <div className='bg-zinc-800 flex justify-center items-center h-20 '>
       <img src={logo} alt="logo do uol" className='w-20 h-8 lg:h-14 lg:w-24' />
    </div>
        
  )
}
