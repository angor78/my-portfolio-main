import React from "react";
import s from './Work.module.scss'


type WorkPropsType = {
  title: string
}
export const Work = (props: WorkPropsType) => {
  return (<li className={s.cards__item}>
      <div className={s.card}>
        <div className={s.card__image}></div>
        <div className={s.card__content}>
          <div className={s.card__title}>{props.title}</div>
          <p className={s.card__text}>This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The
            second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
          <div className={s.buttonsWrap}>
            <button>Demo</button>
            <button>Git</button>
          </div>
        </div>
      </div>
    </li>

  )
}