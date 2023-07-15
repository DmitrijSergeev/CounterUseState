import React from 'react';
import {SuperButton} from "../SuperButton/SuperButton";
import s from './Counter.module.css'

export type CounterType = {
    upNumber: () => void
    downNumber: () => void
    num: number
    maxValue: number
}

export const Counter = (props: CounterType) => {

    const changeColor = `${props.num === 5 ? s.red : props.num}`
    const classes = [changeColor, s.zero].join(' ');

    return (
        <div className={s.box}>
            <h1>Counter</h1>
            <div className={s.container}>
                <div className={s.up}>
                    <SuperButton disabled={props.num === props.maxValue}
                                 but={props.upNumber} title={'PRESS'}/>
                </div>
                <div className={classes}>{props.num}</div>
                <div className={s.down}>
                    <SuperButton disabled={props.num === 0}
                                 but={props.downNumber} title={'RESET'}/>
                </div>
            </div>
        </div>
    );
};