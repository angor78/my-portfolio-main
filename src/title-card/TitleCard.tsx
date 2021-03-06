import React from 'react';
import s from './TitleCard.module.css'
import photo2 from '../assets/image/photo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const TitleCard = () => {

  return (
    <div className={s.titleCard}>
      <img className={s.photo}
           src={photo2}
           alt="photo"
           width={'180px'}
           height={'180px'}/>
      <span className={s.name}>Andrey Gorbachenko</span>
      <span className={s.prof}>Frontend developer</span>
      <div className={s.iconsBlock}>
        <FontAwesomeIcon className={s.icons} icon={faGithub}/>
        <FontAwesomeIcon className={s.icons} icon={faLinkedin}/>
        <FontAwesomeIcon className={s.icons} icon={faTelegram}/>
      </div>

    </div>
  )
}