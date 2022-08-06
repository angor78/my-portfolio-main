import React from 'react';
import s from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";
import img1  from './../assets/image/1.jpeg'
import img4  from './../assets/image/4.png'

export const Works = () => {
  return(
    <div className={s.worksBlock}>
      <div className={`${styleContainer.container} ${s.worksContainer}`}>
        <h2 className={s.title}>My works</h2>
        <div className={s.works}>

            <Work title={'Todolist'} poster={img1}/>
            <Work title={'Samurai way'} poster={img4}/>

            <Work title={'Todolist'} poster={img4}/>
            <Work title={'Samurai way'} poster={img1}/>

          </div>
      </div>
    </div>
  )
}