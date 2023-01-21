import React from 'react'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import RegisterUser from '../../components/RegisterUser/RegisterUser'

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44">
        <Heading />
        <RegisterUser />
      </div>
    </div>
  )
}
