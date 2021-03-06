import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
  
  return(
    <div className={s.contactsBlock}>

      <div className={`${styleContainer.container} ${s.contactsContainer}`}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.contacts}>
          <input type="text" placeholder='input...'/>
          <input type="text" placeholder='input...'/>
          <textarea placeholder='textaria...'></textarea>
        </div>
        <button>Send</button>
      </div>
    </div>
  )
}