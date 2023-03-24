"use client"

import React, { useState } from "react";
import NavHeader from './nav/NavHeader';
import SideBar from "./nav/SideBar";
import { useTranslations } from "next-intl";


const JobieNav = () => {
   const t = useTranslations('Index');
   const [toggle, setToggle] = useState("");
   const onClick = (name: React.SetStateAction<string>) => setToggle(toggle === name ? "" : name);
   return (
      <>
         <NavHeader />
         <SideBar t={t}/>
      </>
   );
};

export default JobieNav;
