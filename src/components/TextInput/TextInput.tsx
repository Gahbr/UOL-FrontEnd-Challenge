import React, { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder ?: string
}

export default function TextInput (props : TextInputProps){
    return (
         <input className="bg-transparent flex-1 text-gray-800 text-lg placeholder:text-gray-400 outline-none pl-4 pr-14 pt-3 pb-3 w-64 mb-5 border-2 rounded-md"{...props} />
    )
}
