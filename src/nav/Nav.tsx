import React from 'react';
import s from './Nav.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";


export const Nav = () => {

  return (
    <div className={s.nav}>
      <ul>
        <li >
          <a href="/" >About me</a>
          <FontAwesomeIcon className={s.active} icon={faChevronRight}/>
        </li>
        <li>
          <a href="/">Scills</a>
          <FontAwesomeIcon className={s.awesomeIcon} icon={faChevronRight}/>
        </li>
        <li>
          <a href="/">Works</a>
          <FontAwesomeIcon className={s.awesomeIcon} icon={faChevronRight}/>
        </li>
        <li>
          <a href="/">Contacts</a>
          <FontAwesomeIcon className={s.awesomeIcon} icon={faChevronRight}/>
        </li>
      </ul>
    </div>
  )
}