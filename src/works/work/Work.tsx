import React from "react";
import s from './Work.module.css'



export const Work = (props: any) => {
  return (
    <div className={s.work}>
      <div className={s.img}>
        <button>Present</button>
      </div>
      <h3>{props.title}</h3>
      <span className={s.description}>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit Lorem ipsum dolor sit amet, co
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit Lorem ipsum dolor sit amet, co

      </span>
    </div>
  )
}