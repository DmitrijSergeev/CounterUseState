import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonType = {
    but: ()=>void
    title: string
    disabled: boolean
}

export const SuperButton = (props: SuperButtonType) => {

    const onClickUpHandler = ()=> {
        props.but()
    }

    return (
        <div>
            <button disabled={props.disabled}
                    onClick={ onClickUpHandler }
                    className={s.but}>
                {props.title}
            </button>
        </div>
    );
};
