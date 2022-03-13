import React from 'react';
import { useDispatch } from 'react-redux';

import { changeShowFooter } from '../Main/Store/actions';

import CrossIcon from '../Assets/img/svg/close.svg';

import s from './Footer.module.scss';

export const Footer = () => {
  const dispatch = useDispatch();

  const handleHideFooter = () => {
    dispatch(changeShowFooter(false));
  };
  return (
    <div className={s.Footer}>
      <p>
        Made with 💜 by <a href="https://github.com/DoraDaExplora">LaExploradora.</a>
      </p>

      <img src={CrossIcon} alt="Close icon" onClick={handleHideFooter} />
    </div>
  );
};
