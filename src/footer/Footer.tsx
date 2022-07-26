import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {

  return(
    <div className={s.footer}>
      <a href="/">GitHub</a>
      <a href="/">Telegram</a>
      <a href="/">SamurayWay</a>
      <span>@Copyright 2022</span>
    </div>
  )
}