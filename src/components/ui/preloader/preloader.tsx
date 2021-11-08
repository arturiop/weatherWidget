import { FC } from 'react';
import style from './preloader.module.css';

export const Preloader: FC = () => (
  <div className={style.ldsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
