import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {

  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill title={'JS'}/>
          <Skill title={'React'}/>
          <Skill title={'CSS'}/>
        </div>
      </div>
    </div>
  )
}