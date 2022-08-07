import React from 'react';
import s from './Nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";


export const Nav = () => {

  return (
    <div className={s.nav}>
      <ul>
        <li className={s.active}>
          <a  href="/" >About me <FontAwesomeIcon   icon={faChevronRight}/></a>
        </li>
        <li>
          <a href="/">Skills <FontAwesomeIcon className={s.awesomeIcon} icon={faChevronRight}/></a>

        </li>
        <li>
          <a href="/">Works<FontAwesomeIcon className={s.awesomeIcon} icon={faChevronRight}/></a>

        </li>
        <li>
          <a href="/">Contacts<FontAwesomeIcon className={s.awesomeIcon} icon={faChevronRight}/></a>

        </li>
      </ul>
    </div>
  )
}