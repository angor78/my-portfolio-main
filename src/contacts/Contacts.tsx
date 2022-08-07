import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => {

  return (
      <div className={styleContainer.container} >
        <h2 className={s.title}>Contacts</h2>
        <div className={s.contacts}>
          <form className={s.form}>
            <h2>MESSAGE FORM</h2>
            <p><input type={"text"} placeholder="Write your name here.."></input></p>
            <p><input type={'email'} placeholder="Let us know how to contact you back.."></input></p>
            <p><input type={'text'} placeholder="What would you like to tell me.."></input></p>
            <button>Send Message</button>
            <div>
              <span><FontAwesomeIcon className={s.icons} icon={faPhone}/></span>+79624745515
              <span><FontAwesomeIcon className={s.icons} icon={faEnvelope}/></span>angor78@gmail.com

            </div>
          </form>
        </div>
      </div>
  )
}