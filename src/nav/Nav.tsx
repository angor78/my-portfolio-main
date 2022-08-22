import React from 'react';
import s from './Nav.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { NavLink} from "react-router-dom";



export const Nav = () => {

  return (
    <div className={s.nav}>
      <ul>
        <li >
          <NavLink style={({isActive}) => ({
            color: isActive ? "#007ced" : '',
          })} to={'/main'}>About me <FontAwesomeIcon   icon={faChevronRight}/></NavLink>
        </li>
        <li >
          <NavLink style={({isActive}) => ({
            color: isActive ? "#007ced" : '',
          })} to={'/skills'}>Skills <FontAwesomeIcon   icon={faChevronRight}/></NavLink>
        </li>
        <li >
          <NavLink style={({isActive}) => ({
            color: isActive ? "#007ced" : '',
          })} to={'/works'}>Works <FontAwesomeIcon   icon={faChevronRight}/></NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({
            color: isActive ? "#007ced" : '',
          })} to={'/contacts'}>Contacts <FontAwesomeIcon   icon={faChevronRight}/></NavLink>
        </li>
      </ul>

    </div>
  )
}