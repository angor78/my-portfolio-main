import React from 'react';
import s from './Skill.module.css'

export const Skill = (props: any) => {

  return (
    <div className={s.skill}>
      <div className={s.icon}></div>
      <h3>{props.title}</h3>
      <span className={s.description}>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit Lorem ipsum dolor sit amet, co
      </span>
    </div>
  )
}