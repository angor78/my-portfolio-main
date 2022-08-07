import React from 'react';
import s from './Works.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";


export const Works = () => {
  return (
    <div className={s.worksBlock}>
      <div className={styleContainer.container}>
        <div className={s.worksContainer}>
          <h2>My works</h2>
          <ul className={s.cards}>
            <Work title={'Todolist'}/>
            <Work title={'Samuray-way'}/>
          </ul>
        </div>
      </div>
    </div>

  )
}