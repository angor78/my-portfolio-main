import React from 'react';
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import s from './Content.module.css'
import {Works} from "../works/Works";
import {Contacts} from "../contacts/Contacts";

export const Content = () => {

  return(
    <div className={s.content}>
      <Main/>
      <Skills/>
      <Works/>
      <Contacts/>
    </div>
  )
}