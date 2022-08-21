import React from 'react';
import s from './Footer.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";

export const Footer = () => {

  return (
    <div className={s.footer}>
      <a href="/"><FontAwesomeIcon className={s.icons} icon={faGithub}/> GitHub</a>
      <a href="/"><FontAwesomeIcon className={s.icons} icon={faTelegram}/> Telegram</a>
      <a href="/"><FontAwesomeIcon className={s.icons} icon={faLinkedin}/> Linkedin</a>
    </div>
  )
}