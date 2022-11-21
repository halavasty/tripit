import React  from 'react';
import "./usermenu.css";
import { Language } from './Language';
import { Bell } from './Bell';
import { Nicklogo } from './Nicklogo';

export const Usermenu = () => {
    return (
      <>
      <div className='center userMain userMainPosition'>
        <Language/>
        <Bell/>
        <Nicklogo/>
      </div>
      </>
    );
  };
  