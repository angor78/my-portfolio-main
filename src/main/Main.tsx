import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photo1 from "../assets/image/photo1.jpg";


export const Main = () => {

  return (

    <div className={styleContainer.container}>
      <div className={s.main}>
        <div className={s.text}>
          <span className={s.prof}>Front-end developer</span>
          <h1><span>Hi, I'm</span> Andrey Gorbachenko.</h1>
          <p> Greetings, I am a front-end
            developer. Have experience
            in developing SPA
            applications using REACT
            framework, React Native,
            Python .  Also have
            experience in staff
            management, quality
            control, technical support,
            implementation of
            experiential hardware and
            software.  I have a research
            interest in Angular and Vue
            frameworks.
          </p>
          <div className={s.buttonsWrap}>
            <button>Download CV</button>
            <button>Contact</button>
          </div>
        </div>
        <div>
          <img src={photo1}
               alt={'main'}
               width={'400px'}
               height={'540px'}
               className={s.photo}/>
        </div>
      </div>
    </div>
  )
}