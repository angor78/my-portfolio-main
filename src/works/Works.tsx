import React from 'react';
import s from './Works.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";
import todosImg from './../assets/image/todos.png'
import samuraiImg from './../assets/image/samurai-way.png'
// import {Fade} from "react-awesome-reveal";


export const Works = () => {
  let todosDesc = 'Stack: React/Redux/Redux-Toolkit/Storybook/Axios \n' +
    'React-router-dom v6/ Jest(Unit-Tests) /Formik/Chakra UI .\n' +
    'Todolist app created with react hooks, routing and\n' +
    'redirects, chakra/material UI, REST api request/response flow, \n' +
    'unit-tests and etc'
  let samuraiDesc = 'Stack: React/Redux/TypeScript/Redux/Thunk/React-router-dom \n' +
    'v6/Redux-form/ Axios/ Jest.\n' +
    ' Social network app using react hooks, routing,working with\n' +
    'REST api, login/logout flow, pagination, form and validation/file \n' +
    'uploading using unit- tests for code workability check'
  let todosLinks = ['https://angor78.github.io/todo-list-main', 'https://github.com/angor78/todo-list-main']
  let samuraiLinks = ['https://angor78.github.io/samurai-way-main', 'https://github.com/angor78/samurai-way-main']
  return (
    <div id='works'>
      {/*<Fade direction={'left'}>*/}
        <div className={s.worksBlock}>
          <div className={styleContainer.container}>
            <div className={s.worksContainer}>
              <h2 className={s.title}>My works</h2>
              <ul className={s.cards}>
                <Work title={'Todolist'} poster={todosImg} desc={todosDesc} links={todosLinks}/>
                <Work title={'Samuray-way'} poster={samuraiImg} desc={samuraiDesc} links={samuraiLinks}/>
              </ul>
            </div>
          </div>
        </div>
      {/*</Fade>*/}
    </div>

  )
}