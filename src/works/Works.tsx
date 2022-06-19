import React from 'react';
import s from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";

export const Works = () => {
  return(
    <div className={s.worksBlock}>
      <div className={`${styleContainer.container} ${s.worksContainer}`}>
        <h2 className={s.title}>Works</h2>
        <div className={s.works}>
          <Work title={'Todolist'}/>
          <Work title={'Samurai way'}/>
        </div>
      </div>
    </div>
  )
}