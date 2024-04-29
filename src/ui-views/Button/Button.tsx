import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    text: string;
    onClick: ()=>void;
}

export const Button = ({ text, onClick }: ButtonPropsType) => <button className={s.button} type="button" onClick={onClick}>{text}</button>;
