import React from 'react';
import s from './TitleCard.module.scss'
import photo2 from '../assets/image/photo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";


export const TitleCard = () => {

  return (
    <div className={s.titleCard}>
      <img className={s.photo}
           alt={'title'}
           src={photo2}
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