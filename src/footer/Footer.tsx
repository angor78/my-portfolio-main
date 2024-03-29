import React from 'react';
import s from './Footer.module.scss'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <a href="https://github.com/angor78"><FontAwesomeIcon className={s.icons} icon={faGithub}/> Git</a>
      <a href="https://www.linkedin.com/in/andrey-gorbachenko-0ba924241/">
        <FontAwesomeIcon className={s.icons} icon={faLinkedin}/>
        Linkedin
      </a>
      <a href="https://t.me/Angor78"><FontAwesomeIcon className={s.icons} icon={faTelegram}/> Telegram</a>
    </div>
  )
}