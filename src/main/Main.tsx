import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photo1 from "../assets/image/photo1.jpg";


export const Main = () => {

  return (
    <div className={s.main}>
      <div className={styleContainer.container}>
        <div className={s.text}>
          <span className={s.prof}>Frontend developer</span>
          <h1><span>Hi, I'm</span> Andrey Gorbachenko.</h1>
          <p> Praesent sed aliquam arcu,
            non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam.
            Praesent sed aliquam arcu,
            non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam.
            Praesent sed aliquam arcu,
            non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam.
          </p>
          <div className={s.buttonsWrap}>
            <button>Download CV</button>
            <button>Contact</button>
          </div>

        </div>
        <img src={photo1}
             alt={'main'}
             width={'400px'}
             height={'540px'}
             className={s.photo}/>
      </div>
    </div>
  )
}