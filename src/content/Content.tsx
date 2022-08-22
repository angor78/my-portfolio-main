import React from 'react';
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import s from './Content.module.css'
import {Works} from "../works/Works";
import {Contacts} from "../contacts/Contacts";
import {Footer} from "../footer/Footer";
import {Route, Routes} from "react-router-dom";

export const Content = () => {

  return(

    <div className={s.content}>
    <Routes>
      <Route path={'/main'} element={<Main/>}/>
      <Route path={'/skills'} element={<Skills/>}/>
      <Route path={'/works'} element={<Works/>}/>
      <Route path={'/contacts'} element={<Contacts/>}/>
    </Routes>
      <Footer/>
    </div>
  )
}