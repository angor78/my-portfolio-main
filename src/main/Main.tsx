import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photo1 from "../assets/image/photo1.jpg";


export const Main = () => {

  return (

    <div className={styleContainer.container}>
      <div className={s.main}>
        <div className={s.text}>
          <span className={s.prof}>Frontend developer</span>
          <h1><span>Hi, I'm</span> Andrey Gorbachenko.</h1>
          <p> Greetings, I am a frontend developer with a research interest in
            JS development using REACT, Angulare, Vue frameworks. I have
            experience in staff management, quality control, technical
            support, implementation of experiential hardware and software.
            Also have experience in developing SPA applications.
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