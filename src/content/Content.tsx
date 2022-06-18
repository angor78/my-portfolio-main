import React from 'react';
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import s from './Content.module.css'

export const Content = () => {

  return(
    <div className={s.content}>
      <Main/>
      <Skills/>
    </div>
  )
}