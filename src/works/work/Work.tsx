import React from "react";
import s from './Work.module.css'


type WorkPropsType = {
  poster: string
  title: string
}
export const Work = (props: WorkPropsType) => {
  return (
    <div className={s.work}>
      <div className={s.poster}>
        <img src={props.poster} alt="poster" width={'100%'} height={'100%'}/>
        <div className={s.description}>
          <h3>{props.title}</h3>
          <p>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit Lorem ipsum dolor sit amet, co
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit Lorem ipsum dolor sit amet, co
            <button>Demo</button>
          <button>Git</button>
           </p>
        </div>
      </div>
    </div>
  )
}