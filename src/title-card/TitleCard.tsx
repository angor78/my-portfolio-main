import React from 'react';
import s from './TitleCard.module.css'

export const TitleCard = () => {

  return (
    <div className={s.titleCard}>
      <div className={s.photo}></div>
      <h2>Agent Smith</h2>
      <span>Frontend developer</span>


    </div>
  )
}