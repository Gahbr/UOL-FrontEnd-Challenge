import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    className?: string;
    route?: string;
}

function AlternativeButton({name, ...props} : ButtonProps) {
    return <button {...props} className={clsx('border-2 border-orange-400 bg-white w-32 h-11 rounded-md text-orange-400 text-lg', props.className)}>{name}</button>
}

function MainButton({name, ...props} : ButtonProps) {
  return (
    <button {...props} className={clsx('border-1 bg-amber-600 w-32 h-11 rounded-md text-gray-50 text-lg  mr-4', props.className)}>{name}</button>
  )
}

export const Button = {
    Main: MainButton,
    Alternative: AlternativeButton
}
