import React, { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Logo.module.scss';
interface LogoProps {
  className?: string;
}

export const Logo = memo((props: LogoProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Logo, {}, [className])}>
      <img src="../img/logo.svg" alt="logo" />
      <h2>FromBoard Delivery</h2>
    </div>
  );
});
