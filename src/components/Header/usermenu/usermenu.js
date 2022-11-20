import React  from 'react';
import "./usermenu.css";
import { Language } from './language';
import { Bell } from './bell';
import { Nicklogo } from './nicklogo';

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
  