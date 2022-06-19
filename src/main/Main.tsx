import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {

  return (
    <div className={s.main}>
      <div className={styleContainer.container}>
        <div className={s.text}>
          <span>Frontend developer</span>
          <h1> Hi, I'm Agent Smith.</h1>
          <p> Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam.
            Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl.
            Cras ut dictum nisl. Donec tincidunt eget orci.</p>
          <div className={s.buttonsWrap}>
            <button>Dowonload CV</button>
            <button>Contact</button>
          </div>

        </div>
        <div className={s.photo}></div>

      </div>

    </div>
  )
}