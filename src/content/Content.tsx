import React from 'react';
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import s from './Content.module.css'
import {Works} from "../works/Works";
import {Contacts} from "../contacts/Contacts";
import {Footer} from "../footer/Footer";
import {Fade} from "react-awesome-reveal";

export const Content = () => {

  return(
    <div className={s.content}>
      <Fade direction={'left'}>
        <Main/>
      </Fade>
      <Fade direction={'left'}>
        <Skills/>
      </Fade>
      <Fade direction={'left'}>
        <Works/>
      </Fade>
      <Fade direction={'left'}>
        <Contacts/>
      </Fade>
      <Fade direction={'left'}>
        <Footer/>
      </Fade>
    </div>
  )
}