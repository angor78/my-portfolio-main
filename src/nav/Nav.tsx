import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {

  return (
    <div className={s.nav}>
      <a href="/">About me</a>
      <a href="/">Scills</a>
      <a href="/">Works</a>
      <a href="/">Contacts</a>
    </div>
  )
}