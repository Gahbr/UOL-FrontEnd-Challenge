import React from "react";
import Header from "../../components/Header/Header";
import Heading from "../../components/Heading/Heading";
import UserList from "../../components/UserList/UserList";

export default function Home() {
    
  return (
    <div>
      <Header />
      <div className="pl-44 pr-44 xl:px-32 lg:px-20 md:px-3 ">
        <Heading />
        <UserList />
      </div>
    </div>
  );
}
